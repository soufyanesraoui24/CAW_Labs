const fs = require('fs');

// Check if a text parameter is provided
if (process.argv.length < 3) {
  console.error('Usage: node exo4.js "text-to-append"');
  process.exit(1);
}

// Get the text to append from the command-line arguments
const textToAppend = process.argv[2];

// Specify the file path (in this example, f.txt)
const filePath = 'f.txt';

// Append the text to the file asynchronously
fs.appendFile(filePath, textToAppend + '\n', 'utf8', (err) => {
  if (err) {
    console.error(`Error appending to file: ${err.message}`);
    process.exit(1);
  }

  console.log(`The file has been saved!`);
});
