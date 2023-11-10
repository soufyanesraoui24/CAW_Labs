const fs = require('fs');

// Check if enough command-line arguments are provided
if (process.argv.length < 4) {
  console.error('Usage: node exo4.js <file-name> "text-to-append"');
  process.exit(1);
}

// Get the file name and text to append from the command-line arguments
const fileName = process.argv[2];
const textToAppend = process.argv.slice(3).join(' ');

// Append the text to the file asynchronously
fs.appendFile(fileName, textToAppend + '\n', 'utf8', (err) => {
  if (err) {
    console.error(`Error appending to file: ${err.message}`);
    process.exit(1);
  }

  console.log(`The file ${fileName} has been saved!`);
});
