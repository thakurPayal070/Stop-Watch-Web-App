(() => {
  "use strict";

  const canvas = document.getElementById("starfield");
  const context = canvas.getContext("2d", { alpha: false });

  const mainTime = document.getElementById("mainTime");
  const milliseconds = document.getElementById("milliseconds");
  const startPauseButton = document.getElementById("startPauseButton");
  const startPauseText = document.getElementById("startPauseText");
  const startPauseIcon = document.getElementById("startPauseIcon");
  const resetButton = document.getElementById("resetButton");
  const lapButton = document.getElementById("lapButton");
  const lapPanel = document.getElementById("lapPanel");
  const lapList = document.getElementById("lapList");
  const lapCount = document.getElementById("lapCount");
  const speedReadout = document.getElementById("speedReadout");
  const statusReadout = document.getElementById("statusReadout");

  const STAR_COUNT_DESKTOP = 900;
  const STAR_COUNT_MOBILE = 520;
  const MAX_DPR = 2;

  let width = 0;
  let height = 0;
  let centerX = 0;
  let centerY = 0;
  let deviceScale = 1;

  let stars = [];
  let running = false;
  let accumulatedTime = 0;
  let startedAt = 0;
  let animationFrameId = 0;
  let previousFrameTime = performance.now();

  let visualSpeed = 0;
  let targetSpeed = 0;
  let lapNumber = 0;

  class Star {
    constructor(randomDepth = true) {
      this.reset(randomDepth);
    }

    reset(randomDepth = false) {
      const spread = Math.max(width, height);
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.sqrt(Math.random()) * spread * 0.58;

      this.x = Math.cos(angle) * radius;
      this.y = Math.sin(angle) * radius;
      this.z = randomDepth ? Math.random() * spread + 1 : spread;
      this.previousZ = this.z;
      this.size = Math.random() * 1.25 + 0.35;
      this.brightness = Math.random() * 0.7 + 0.3;
      this.tint = Math.random();

      if (!randomDepth) {
        this.x += (Math.random() - 0.5) * 40;
        this.y += (Math.random() - 0.5) * 40;
      }
    }

    update(deltaSeconds) {
      this.previousZ = this.z;

      // visualSpeed is pixels of depth travelled per second.
      this.z -= visualSpeed * deltaSeconds;

      if (this.z < 1) {
        this.reset(false);
      }
    }

    draw() {
      const focalLength = Math.min(width, height) * 0.9;
      const currentScale = focalLength / this.z;
      const previousScale = focalLength / this.previousZ;

      const x = this.x * currentScale + centerX;
      const y = this.y * currentScale + centerY;
      const previousX = this.x * previousScale + centerX;
      const previousY = this.y * previousScale + centerY;

      if (
        x < -100 ||
        x > width + 100 ||
        y < -100 ||
        y > height + 100
      ) {
        this.reset(false);
        return;
      }

      const depth = Math.max(0, Math.min(1, 1 - this.z / Math.max(width, height)));
      const alpha = Math.min(1, 0.26 + depth * 0.8) * this.brightness;
      const radius = Math.max(0.45, this.size * currentScale * 0.74);
      const motion = Math.min(1, visualSpeed / 720);

      if (motion > 0.035) {
        context.beginPath();
        context.moveTo(previousX, previousY);
        context.lineTo(x, y);
        context.lineWidth = Math.max(0.55, radius * (0.5 + motion));
        context.strokeStyle = getStarColor(alpha * (0.35 + motion * 0.65), this.tint);
        context.stroke();
      } else {
        context.beginPath();
        context.arc(x, y, Math.min(radius, 2.2), 0, Math.PI * 2);
        context.fillStyle = getStarColor(alpha, this.tint);
        context.fill();
      }

      if (depth > 0.72 && radius > 1.2) {
        context.beginPath();
        context.arc(x, y, Math.min(radius * 2.4, 7), 0, Math.PI * 2);
        context.fillStyle = `rgba(145, 220, 255, ${alpha * 0.09})`;
        context.fill();
      }
    }
  }

  function getStarColor(alpha, tint) {
    if (tint < 0.12) {
      return `rgba(169, 208, 255, ${alpha})`;
    }

    if (tint > 0.91) {
      return `rgba(255, 236, 209, ${alpha})`;
    }

    return `rgba(244, 251, 255, ${alpha})`;
  }

  function resizeCanvas() {
    deviceScale = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    width = window.innerWidth;
    height = window.innerHeight;
    centerX = width * 0.5;
    centerY = height * 0.48;

    canvas.width = Math.round(width * deviceScale);
    canvas.height = Math.round(height * deviceScale);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
    createStars();
  }

  function createStars() {
    const starCount = width < 760 ? STAR_COUNT_MOBILE : STAR_COUNT_DESKTOP;
    stars = Array.from({ length: starCount }, () => new Star(true));
  }

  function drawSpace(deltaSeconds) {
    context.fillStyle = "#00030a";
    context.fillRect(0, 0, width, height);

    // Very subtle cockpit-window glow, not a planet or sun.
    const glow = context.createRadialGradient(
      centerX,
      centerY,
      0,
      centerX,
      centerY,
      Math.max(width, height) * 0.45
    );
    glow.addColorStop(0, "rgba(23, 69, 99, 0.10)");
    glow.addColorStop(0.35, "rgba(8, 28, 47, 0.045)");
    glow.addColorStop(1, "rgba(0, 3, 10, 0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    if (running) {
      // Smooth acceleration gives a launch sensation.
      visualSpeed += (targetSpeed - visualSpeed) * Math.min(1, deltaSeconds * 2.8);
    } else {
      // Pausing freezes space immediately, exactly like the stopwatch.
      visualSpeed = 0;
    }

    for (const star of stars) {
      star.update(deltaSeconds);
      star.draw();
    }

    const displayedSpeed = visualSpeed / 82;
    speedReadout.textContent =
      displayedSpeed < 0.01 ? "0.00 c" : `${displayedSpeed.toFixed(2)} c`;
  }

  function getElapsedTime(now = performance.now()) {
    return running ? accumulatedTime + (now - startedAt) : accumulatedTime;
  }

  function updateStopwatch(now) {
    const elapsed = Math.max(0, getElapsedTime(now));
    const totalMilliseconds = Math.floor(elapsed);

    const hours = Math.floor(totalMilliseconds / 3_600_000);
    const minutes = Math.floor((totalMilliseconds % 3_600_000) / 60_000);
    const seconds = Math.floor((totalMilliseconds % 60_000) / 1_000);
    const ms = totalMilliseconds % 1_000;

    mainTime.textContent = [hours, minutes, seconds]
      .map((value) => String(value).padStart(2, "0"))
      .join(":");

    milliseconds.textContent = `.${String(ms).padStart(3, "0")}`;
  }

  function frame(now) {
    const rawDelta = (now - previousFrameTime) / 1000;
    const deltaSeconds = Math.min(rawDelta, 0.05);
    previousFrameTime = now;

    drawSpace(deltaSeconds);
    updateStopwatch(now);

    animationFrameId = requestAnimationFrame(frame);
  }

  function setRunning(nextRunning) {
    if (nextRunning === running) {
      return;
    }

    const now = performance.now();

    if (nextRunning) {
      running = true;
      startedAt = now;
      targetSpeed = 1050;
      document.body.classList.add("running");

      startPauseText.textContent = "PAUSE";
      startPauseIcon.textContent = "Ⅱ";
      statusReadout.textContent = "IN FLIGHT";
      lapButton.disabled = false;
    } else {
      accumulatedTime += now - startedAt;
      running = false;
      targetSpeed = 0;
      visualSpeed = 0;
      document.body.classList.remove("running");

      startPauseText.textContent = accumulatedTime > 0 ? "RESUME" : "START";
      startPauseIcon.textContent = "▶";
      statusReadout.textContent = accumulatedTime > 0 ? "HOLDING" : "STANDBY";
      lapButton.disabled = accumulatedTime <= 0;
    }
  }

  function toggleRunning() {
    setRunning(!running);
  }

  function resetStopwatch() {
    running = false;
    accumulatedTime = 0;
    startedAt = 0;
    targetSpeed = 0;
    visualSpeed = 0;
    lapNumber = 0;

    document.body.classList.remove("running");
    startPauseText.textContent = "START";
    startPauseIcon.textContent = "▶";
    statusReadout.textContent = "STANDBY";
    speedReadout.textContent = "0.00 c";
    lapButton.disabled = true;

    lapList.innerHTML = "";
    lapCount.textContent = "00";
    lapPanel.classList.remove("has-laps");

    updateStopwatch(performance.now());
  }

  function addLap() {
    const elapsed = getElapsedTime();

    if (elapsed <= 0) {
      return;
    }

    lapNumber += 1;

    const item = document.createElement("li");
    const label = document.createElement("span");
    const value = document.createElement("span");

    label.textContent = `L${String(lapNumber).padStart(2, "0")}`;
    value.textContent = formatLapTime(elapsed);

    item.append(label, value);
    lapList.prepend(item);

    lapCount.textContent = String(lapNumber).padStart(2, "0");
    lapPanel.classList.add("has-laps");
  }

  function formatLapTime(time) {
    const total = Math.floor(time);
    const hours = Math.floor(total / 3_600_000);
    const minutes = Math.floor((total % 3_600_000) / 60_000);
    const seconds = Math.floor((total % 60_000) / 1_000);
    const ms = total % 1_000;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}.${String(ms).padStart(3, "0")}`;
  }

  startPauseButton.addEventListener("click", toggleRunning);
  resetButton.addEventListener("click", resetStopwatch);
  lapButton.addEventListener("click", addLap);
  window.addEventListener("resize", resizeCanvas);

  document.addEventListener("keydown", (event) => {
    const activeTag = document.activeElement?.tagName;

    if (activeTag === "INPUT" || activeTag === "TEXTAREA") {
      return;
    }

    if (event.code === "Space") {
      event.preventDefault();
      toggleRunning();
    } else if (event.key.toLowerCase() === "r") {
      resetStopwatch();
    } else if (event.key.toLowerCase() === "l") {
      addLap();
    }
  });

  document.addEventListener("visibilitychange", () => {
    // performance.now() keeps the stopwatch accurate when returning to the tab.
    previousFrameTime = performance.now();
  });

  resizeCanvas();
  updateStopwatch(performance.now());
  animationFrameId = requestAnimationFrame(frame);

  window.addEventListener("beforeunload", () => {
    cancelAnimationFrame(animationFrameId);
  });
})();
