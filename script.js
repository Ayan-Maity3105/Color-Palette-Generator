const generateBtn = document.querySelector('.generate-btn');
const boxContainer = document.querySelector('.box-container');
const btn = document.querySelector('.generate-btn');

const tohex = (value) => {
    return value.toString(16).padStart(2 , "0"); // convert rgb into hex code 
    // pad ensures that the hex code contains 2 character
    // toString(16) converts a character into 16 bit hexadecimal 
}

const generatePalette = () => {
    boxContainer.innerHTML = "";
    let colors = [];
    for (let i = 0; i < 5; i++) {
        const backgroundColor = generateColors();
        colors.push(backgroundColor);  // Store each color
        const box = document.createElement("div");
        box.className = "box-color";
        box.style.backgroundColor = backgroundColor;
        const color = document.createElement("p");
        color.className = "show-color";
        color.innerHTML = backgroundColor;

        boxContainer.appendChild(box);
        box.appendChild(color);

        box.addEventListener("click" , () => {
            navigator.clipboard.writeText(backgroundColor);
            box.style.setProperty('--after-text', '"Copied!"');  // change the content of ::after element
        })

        // btn.style.background = `linear-gradient(to right, ${colors.join(', ')})`;

    }

}

const generateColors = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `#${tohex(r)}${tohex(g)}${tohex(b)}`;
}

generateBtn.addEventListener("click", generatePalette);