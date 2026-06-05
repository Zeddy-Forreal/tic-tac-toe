<div align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

# Tic Tac Toe

**A neon arcade-style Tic Tac Toe game built with HTML, CSS, Tailwind, and JavaScript.**  
No frameworks, no installs — just open and play.

[Features](#-features) · [Getting Started](#-getting-started) · [File Structure](#-file-structure) · [Customization](#-customization)

</div>

---

## ✨ Features

- ❌ **X vs O Gameplay** — Two-player turn-based game with randomized starting player
- 🏆 **Win Detection** — Detects all 8 winning combinations and highlights the winning cells
- 🤝 **Draw Detection** — Recognizes a full board with no winner and resets automatically
- 🔢 **Scoreboard** — Tracks each player's score across rounds persistently
- 💡 **Turn Indicator** — Color-coded bar pulses to show whose turn it is at all times
- ✨ **Piece Animations** — Each placed piece pops in with a springy scale animation
- 🔄 **Auto Reset** — Board resets automatically after a win or draw with a short delay
- 📱 **Responsive** — Works cleanly on desktop, tablet, and mobile

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Zeddy-Forreal/tic-tac-toe.git
cd tic-tac-toe
```

### 2. Open in browser

No build step, no installs. Just open `index.html` directly:

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### 3. Start playing

A starting player is chosen randomly. Click any empty cell to place your piece. First to align 3 wins the round — scores carry over until you hit **Reset Scores**.

---

## 📁 File Structure

```
tic-tac-toe/
├── index.html            App markup, styles, and logic in one file
└── style/
    └── FontAwesome_Icons/   X and O icon assets
```

---

## 🎨 Customization

All colors are CSS custom properties at the top of the `<style>` block. Switch up the whole look by editing just these:

```css
:root {
    --bg: #080b14;
    --panel: #0d1120;
    --border: #1a2240;
    --x-color: #00d4ff;
    --x-glow: rgba(0, 212, 255, 0.25);
    --x-dim: rgba(0, 212, 255, 0.08);
    --w-color: rgb(0, 198, 0);
    --w-dim: rgb(3, 44, 3);
    --o-color: #ff4d8d;
    --o-glow: rgba(255, 77, 141, 0.25);
    --o-dim: rgba(255, 77, 141, 0.08);
    --neutral: #2a3555;
    --txt: #c8d4f0;
    --txt-dim: #4a5880;
}
```

---

<div align="center">

Made with 🖤 by [Zeddy-Forreal](https://github.com/Zeddy-Forreal)

</div>
