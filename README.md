# 🎨 Color Palette Generator

A sleek, responsive web app that dynamically generates 5 random color palette boxes. Users can click on any color to copy its hex code to the clipboard. Built with HTML, CSS, and JavaScript—no frameworks or libraries needed!

## ✨ Features

- ✅ Generates **random color palettes**
- ✅ Click-to-copy **hex code** feature
- ✅ **Tooltip** feedback on hover and copy (`"Click to copy"` → `"Copied!"`)
- ✅ Fully **responsive design** using `clamp()`, `vw/vh`, and `flexbox`
- ✅ No media queries used — purely dynamic via CSS

## 🧰 Technologies Used

- **HTML5** – Semantic structure
- **CSS3** – Responsive styling with `clamp()`, `vh/vw`, `flexbox`, and custom tooltips
- **JavaScript (Vanilla)** – Logic for generating and copying colors

## 🚀 How It Works

1. Click the **"Generate Color"** button.
2. The app generates 5 random hex color boxes.
3. Each box:
   - Shows its hex code.
   - On click, copies the color to the clipboard.
   - Shows a tooltip confirmation ("Copied!").

## 📂 Project Structure

color-palette-generator/
├── index.html # Main HTML file
├── style.css # Styling and layout
├── script.js # Logic for generating colors and clipboard copy
└── README.md # Project overview (this file)

## 🛠️ Setup

Just clone or download this repo and open `index.html` in your browser:

## Tips
- To update how many colors are generated, change the loop limit in generatePalette() inside script.js.

- To enhance UX, you could add gradient backgrounds or smooth fade animations.

## License
This project is open source and free to use under the MIT License.

