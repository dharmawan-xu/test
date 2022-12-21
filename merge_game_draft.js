// Create an array to hold the images
const images = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];

// Create a 2D array to hold the tiles
const tiles = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]];

// Create a function to randomly select an image from the array
function getRandomImage() {
  return images[Math.floor(Math.random() * images.length)];
}

// Create a function to move the tiles
function moveTiles(direction) {
  let moved = false;

  if (direction === 'up') {
    // Iterate through the columns
    for (let j = 0; j < 4; j++) {
      // Iterate through the rows, starting from the top
      for (let i = 0; i < 4; i++) {
        // If the current tile is not empty, try to move it
        if (tiles[i][j] !== null) {
          let currentRow = i;
          while (currentRow > 0 && tiles[currentRow - 1][j] === null) {
            // Shift the tile up
            tiles[currentRow - 1][j] = tiles[currentRow][j];
            tiles[currentRow][j] = null;
            currentRow--;
            moved = true;
          }
        }
      }
    }
  } else if (direction === 'down') {
    // Iterate through the columns
    for (let j = 0; j < 4; j++) {
      // Iterate through the rows, starting from the bottom
      for (let i = 3; i >= 0; i--) {
        // If the current tile is not empty, try to move it
        if (tiles[i][j] !== null) {
          let currentRow = i;
          while (currentRow < 3 && tiles[currentRow + 1][j] === null) {
            // Shift the tile down
            tiles[currentRow + 1][j] = tiles[currentRow][j];
            tiles[currentRow][j] = null;
            currentRow++;
            moved = true;
          }
        }
      }
    }
  } else if (direction === 'left') {
    // Iterate through the rows
    for (let i = 0; i < 4; i++) {
      // Iterate through the columns, starting from the left
      for (let j = 0; j < 4; j++) {
        // If the current tile is not empty, try to move it
        if (tiles[i][j] !== null) {
          let currentColumn = j;
          while (currentColumn > 0 && tiles[i][currentColumn - 1] === null) {
            // Shift the tile left
            tiles[i][currentColumn - 1] = tiles[i][currentColumn];
            tiles[i][currentColumn] = null;
            currentColumn--;
            moved = true;
          }
        }
      }
    }
  } else if (direction === 'right') {
    // Iterate through the rows
