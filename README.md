#  Starflight Stopwatch

A futuristic stopwatch web application displayed inside a **spacecraft cockpit**. When the stopwatch starts, the stars accelerate toward the viewer, creating the feeling of travelling rapidly through space. Pausing the stopwatch immediately freezes the spacecraft movement.

This project was created using **HTML, CSS, and JavaScript**. It does not require frameworks, APIs, images, packages, or external libraries.

##  Project Links

- **GitHub Repository:** [thakurPayal070/my-first-internship](https://github.com/thakurPayal070/Stop-Watch-Web-App)
- **GitHub Profile:** [@thakurPayal070](https://github.com/thakurPayal070)


---

##  Features

- Spacecraft front-window cockpit interface
- Animated 3D starfield created with HTML Canvas
- High-speed space-travel effect while the stopwatch is running
- Stars stop immediately when the stopwatch is paused
- Start, pause, resume, reset, and lap controls
- Millisecond stopwatch display
- Mission status indicator
- Simulated spacecraft-speed display
- Keyboard shortcuts
- Responsive design for desktop, tablet, and mobile devices
- No external assets or dependencies

---

##  Controls

| Action | Button | Keyboard shortcut |
|---|---|---|
| Start or pause | **START / PAUSE** | `Space` |
| Record a lap | **LAP** | `L` |
| Reset the stopwatch | **RESET** | `R` |

---

##  Technologies Used

- **HTML5** — application structure and spacecraft cockpit SVG
- **CSS3** — responsive layout, HUD design, glass effects, and animations
- **JavaScript** — stopwatch logic, lap records, controls, and star movement
- **Canvas API** — animated starfield and space-travel effect
- **SVG** — scalable spacecraft window and cockpit dashboard

---

##  Project Structure

```text
Stop-Watch-Web-App/
├── index.html      # Application structure and spacecraft cockpit
├── style.css       # Layout, responsive design, HUD, and animations
├── script.js       # Stopwatch logic and animated starfield
└── README.md       # Project documentation
```

---

##  Run the Project Locally

### Method 1: Open the HTML file

1. Download or clone the repository.
2. Open the `Stop-Watch-Web-App` project folder.
3. Double-click `index.html`.
4. The application will open in your default browser.

### Method 2: Use VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

No `npm install` command is required.

---

##  Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/thakurPayal070/my-first-internship.git
cd my-first-internship
```

You can then open `index.html` directly or run the project using Live Server.

---

## ⬆ Upload Changes to GitHub

After editing the project, use the following commands:

```bash
git add .
git commit -m "Update Starflight Stopwatch"
git push origin main
```

---

##  Publish with GitHub Pages

This project can be hosted for free using GitHub Pages.

1. Open the [project repository](https://github.com/thakurPayal070/my-first-internship).
2. Select **Settings**.
3. Select **Pages** from the left-side menu.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch.
6. Select the `/root` folder.
7. Click **Save**.
8. Wait a few minutes for deployment to complete.

The website should then be available at:

```text
https://thakurPayal070.github.io/my-first-internship/
```

---

##  How the Application Works

The stopwatch uses `performance.now()` to measure elapsed time accurately.

While the timer is active, JavaScript continuously updates hundreds of canvas stars. Each star moves closer to the viewer by changing its depth value. As the stars approach the spacecraft window, they form longer light trails and create a high-speed spaceflight effect.

When the stopwatch is paused:

- The elapsed time is preserved.
- The starfield speed is set to zero.
- The spacecraft appears to stop instantly.
- Pressing **Resume** continues from the saved time.

---

## ⏱ Stopwatch Functions

### Start

Pressing **START** begins the stopwatch and accelerates the spacecraft through the starfield.

### Pause and Resume

Pressing **PAUSE** freezes the timer and space movement. Pressing **RESUME** continues both from the same point.

### Lap

The **LAP** button records the current stopwatch time without stopping it. New lap records appear in the lap panel.

### Reset

The **RESET** button:

- Stops the timer
- Returns the time to `00:00:00.000`
- Clears all lap records
- Resets the spacecraft speed
- Returns the application to standby mode

---

##  Customization

### Change the star count

Open `script.js` and edit:

```javascript
const STAR_COUNT_DESKTOP = 900;
const STAR_COUNT_MOBILE = 520;
```

Increasing these values creates more stars but may require more processing power.

### Change the travel speed

Find `targetSpeed` in `script.js`:

```javascript
targetSpeed = 1050;
```

A higher value makes the spacecraft appear to travel faster.

### Change the interface colors

Open `style.css` and edit:

```css
:root {
  --cyan: #65e8ff;
  --amber: #ffb35b;
  --red: #ff657d;
}
```

### Change the cockpit design

The spacecraft cockpit is created using SVG elements inside `index.html`. The frame, dashboard, instrument lights, and window supports can be customized there.

---

##  Responsive Design

The application automatically adjusts to different screen sizes.

- On desktop, the full cockpit HUD and lap panel are displayed.
- On tablets, the interface scales to fit the available space.
- On mobile devices, controls and timer text are rearranged for easier use.

---

##  Privacy

The application runs completely inside the user's browser. It does not collect personal information, store user information, use cookies, connect to a database, or send information to an external server.

---

##  Contributing

Contributions and improvements are welcome.

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit the changes.
5. Push the branch to GitHub.
6. Open a pull request.

---

##  License

This project is available for personal and educational use. An open-source license such as the MIT License can be added if the project will be publicly distributed or reused.

---

##  Author

Created by **Thakur Payal**.

- GitHub: [@thakurPayal070](https://github.com/thakurPayal070)
- Repository: [my-first-internship](https://github.com/thakurPayal070/my-first-internship)

---

 If you like this project, consider giving the repository a star.
