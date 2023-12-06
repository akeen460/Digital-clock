const generateColorButton = document.getElementById('generateColor');
const colorDisplay = document.getElementById('colorDisplay');
const span = document.getElementById('span');

        // Add event listener to the button
generateColorButton.addEventListener('click', generateRandomColor);

        // Function to generate a random color
function generateRandomColor() {
    const randomColor = getRandomColor();
    colorDisplay.style.backgroundColor = randomColor;
    generateColor.style.backgroundColor = randomColor;
   
    
}

        // Function to get a random color in hex format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
       
    }
    document.getElementById('demo').innerHTML = `Pick Color Hex Code is  <b> ${color} </b>`;
    document.getElementById('span').innerHTML = `Pick Color Hex Code is ${color.toString()}`;
    return color;
}