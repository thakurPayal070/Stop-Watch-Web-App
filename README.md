#  Starflight Stopwatch

A futuristic stopwatch web application with a **spacecraft cockpit interface** and an animated starfield.

When the stopwatch starts, the stars accelerate toward the viewer, creating the feeling of travelling rapidly through space. When the stopwatch is paused, both the timer and the spacecraft movement stop immediately.

##  Live Demo

[Open Starflight Stopwatch](https://thakurpayal070.github.io/Stop-Watch-Web-App/)

##  GitHub Repository

[github.com/thakurPayal070/Stop-Watch-Web-App](https://github.com/thakurPayal070/Stop-Watch-Web-App)

---

##  Features

- Futuristic spacecraft cockpit design
- Animated 3D starfield
- High-speed space travel effect
- Start, pause, resume, and reset controls
- Lap-time recording
- Millisecond stopwatch display
- Simulated spacecraft speed indicator
- Mission status display
- Keyboard shortcuts
- Responsive design
- No external libraries or packages required

---

##  Controls

| Action | Button | Keyboard Shortcut |
|---|---|---|
| Start the stopwatch | **START** | `Space` |
| Pause or resume | **PAUSE / RESUME** | `Space` |
| Record a lap | **LAP** | `L` |
| Reset the stopwatch | **RESET** | `R` |

---

##  Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**
- **HTML Canvas API**
- **SVG**

---

##  Project Structure

The project files are stored directly inside the repository:

```text
Stop-Watch-Web-App/
├── index.html
├── style.css
├── script.js
└── README.md
```

| File | Purpose |
|---|---|
| `index.html` | Stopwatch interface and spacecraft cockpit structure |
| `style.css` | Design, animations, HUD styling, and responsive layout |
| `script.js` | Stopwatch logic, lap system, controls, and starfield animation |
| `README.md` | Project documentation |

---

##  Run the Project Locally

### Open the HTML File

1. Download the repository.
2. Open the project folder.
3. Double-click `index.html`.

### Use VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

No `npm install` command is required.

---

##  Clone the Repository

```bash
git clone https://github.com/thakurPayal070/Stop-Watch-Web-App.git
cd Stop-Watch-Web-App
```

Then open `index.html` or run it with Live Server.

---

## ⬆ Upload Project Changes

```bash
git add .
git commit -m "Update Starflight Stopwatch"
git push origin main
```

---


##  How It Works

The stopwatch uses JavaScript's `performance.now()` method to track elapsed time accurately.

The starfield is created using the HTML Canvas API. While the stopwatch runs, stars move toward the viewer and form light trails. Pausing the stopwatch saves the elapsed time and stops the star movement. Pressing **RESUME** continues from the same point.

---

##  Stopwatch Functions

### Start
Starts the stopwatch and accelerates the spacecraft through the starfield.

### Pause
Pauses the stopwatch and freezes the star movement.

### Resume
Continues the stopwatch and restarts the space-travel animation.

### Lap
Records the current stopwatch time without stopping the timer.

### Reset
Resets the stopwatch time, lap records, spacecraft speed, mission status, and star movement.

---

##  Customization

### Change the Number of Stars

In `script.js`:

```javascript
const STAR_COUNT_DESKTOP = 900;
const STAR_COUNT_MOBILE = 520;
```

### Change the Spacecraft Speed

In `script.js`:

```javascript
targetSpeed = 1050;
```

### Change the Interface Colors

In `style.css`:

```css
:root {
  --cyan: #65e8ff;
  --amber: #ffb35b;
  --red: #ff657d;
}
```

---

##  Responsive Design

The application works on desktop computers, laptops, tablets, and mobile phones.

---

##  Author

Created by **Payal Thakur**

- GitHub: [@thakurPayal070](https://github.com/thakurPayal070)
- Repository: [Stop-Watch-Web-App](https://github.com/thakurPayal070/Stop-Watch-Web-App)

---

##  License

This project is created for educational and personal use.

---

 Give this repository a star if you like the project!
