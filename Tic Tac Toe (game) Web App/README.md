#  Tic-Tac-Toe Game

A simple and interactive **two-player Tic-Tac-Toe web application** built with HTML, CSS, and JavaScript. Players take turns placing X and O on a 3 × 3 board while the application automatically checks for winning combinations and draws.

The game also includes a scoreboard that records how many rounds each player has won. It runs entirely in the browser and does not require frameworks, packages, or external libraries.

---

##  Live Demo

**CHANGE THIS:** Add your GitHub Pages or live website link here.

---

##  Features

- Two-player gameplay on the same device
- Automatic turn switching between Player X and Player O
- Win detection for rows, columns, and diagonals
- Draw detection when all nine cells are filled
- Score tracking across multiple rounds
- Restart button for quickly starting a new round
- Different colors for X and O
- Status messages showing the current player and round result
- Protection against selecting an occupied cell
- Clean dark-themed interface
- Smooth button and cell hover effects
- No external dependencies

---

##  Game Controls

| Action | Control |
|---|---|
| Place X or O | Click an empty square |
| Start a new round | Click **Restart Game** |
| View the active player | Check the message above the board |
| View the score | Check the scoreboard below the title |

---

##  Technologies Used

- **HTML5** for the page structure, scoreboard, game board, and button
- **CSS3** for the grid layout, colors, hover effects, and visual design
- **JavaScript** for player turns, game rules, win detection, draw detection, and score tracking

---

##  Project Structure

```text
tic-tac-toe/
├── index.html      # Game structure and user interface
├── style.css       # Layout, colors, board design, and effects
├── script.js       # Game logic, score tracking, and controls
└── README.md       # Project documentation
```

---

##  Run the Project Locally

### Method 1: Open the file directly

1. Download the project files.
2. Make sure the files are named `index.html`, `style.css`, and `script.js`.
3. Keep all three files in the same folder.
4. Double-click `index.html` to open the game in your browser.

### Method 2: Use VS Code Live Server

1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

No installation or `npm install` command is required.

---

##  Clone the Repository

```bash
git clone "CHANGE THIS"
cd "CHANGE THIS"
```

Replace the first `"CHANGE THIS"` with your GitHub repository URL and the second with your repository folder name.

---

##  Publish with GitHub Pages

You can host this project for free using GitHub Pages:

1. Upload `index.html`, `style.css`, `script.js`, and `README.md` to your GitHub repository.
2. Open the repository on GitHub.
3. Go to **Settings**.
4. Select **Pages** from the left menu.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder.
7. Click **Save**.
8. Wait a few minutes for GitHub to publish the game.

Your website address will normally look like:

```text
https://thakurPayal070.github.io/CHANGE-THIS/
```

Replace `CHANGE-THIS` with the exact name of your GitHub repository.

---

## ⚙️ How It Works

The JavaScript stores the nine game cells in a `board` array. Every empty string represents an available square. When a player clicks an empty cell, the program adds the current player's symbol to both the array and the visible board.

After each move, the application compares the board with eight possible winning combinations:

- Three horizontal rows
- Three vertical columns
- Two diagonals

If one combination contains three matching symbols, the current player wins and their score increases. If every cell is occupied without a winning combination, the game announces a draw.

The **Restart Game** button clears the board and starts a new round with Player X while keeping the existing scores.

---

##  Winning Combinations

```javascript
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];
```

Each group contains the three board positions that must hold the same symbol for a player to win.

---

##  Customization

You can easily customize the game:

- Change the page background using `background-color` in `style.css`.
- Change the X color inside the `.cell.x` class.
- Change the O color inside the `.cell.o` class.
- Adjust the board size by changing the row and column values in `.board`.
- Change the game title and button text inside `index.html`.
- Add sounds or animations inside the JavaScript win and draw conditions.

Example color settings from `style.css`:

```css
.cell.x {
    color: #ff6b6b;
}

.cell.o {
    color: #4ecdc4;
}
```

---

##  Browser Compatibility

The game works in modern browsers, including:

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari

Its compact layout and viewport settings allow it to work on desktop and common mobile screen sizes.

---

##  Privacy

This game runs entirely inside the browser. It does not collect, store, or send personal information. Scores are kept only while the current page remains open and reset when the page is refreshed.

---

##  Future Improvements

- Add a single-player mode with computer AI
- Highlight the three winning cells
- Save scores using browser local storage
- Add sound effects for moves, wins, and draws
- Add a button to reset the scoreboard
- Allow players to enter custom names
- Add difficulty levels for the computer opponent

---

##  Contributing

Contributions are welcome:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit and push the branch.
5. Open a pull request.

---

##  License

**CHANGE THIS:** Add your chosen license. You can add an MIT `LICENSE` file if you want other people to reuse and modify the project.

---

##  Author

Created by **Thakur Payal**.

GitHub: [@thakurPayal070](https://github.com/thakurPayal070)

---

 If you like this project, consider giving the repository a star.

