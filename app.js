// Find the button on the page
let button = document.querySelector("button");

// When you click the button, do something
button.addEventListener("click", function () {
  // Find the <h3> text and the color box
  let h3 = document.querySelector(".color-box h3");
  let box = document.querySelector(".color-box");

  // Generate a random color
  let newColor = getRandomColor();

  // Change the text in <h3> and the box background color
  h3.innerText = newColor;
  box.style.backgroundColor = newColor;
  h3.style.color = getContrastingColor(newColor); // Adjust text color for readability

  console.log("Color changed to:", newColor); // Debugging
});

//Function to create a random color
function getRandomColor() {
  // Generate random numbers between 0 and 255 for RGB
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  // Combine into an RGB color
  return `rgb(${red}, ${green}, ${blue})`;
}

// Function to calculate contrasting text color
function getContrastingColor(rgb) {
  // Extract RGB values
  let values = rgb.match(/\d+/g);
  let red = parseInt(values[0]);
  let green = parseInt(values[1]);
  let blue = parseInt(values[2]);

  // Calculate luminance (perceived brightness)
  let brightness = (red * 299 + green * 587 + blue * 114) / 1000;

  // Return black or white based on brightness
  return brightness > 128 ? "black" : "white";
}
