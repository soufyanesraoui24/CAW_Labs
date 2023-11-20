// exo4.js
const fs = require('fs');

// Get the command line arguments
const args = process.argv.slice(2);

// Check if the text parameter is provided
if (args.length < 2) {
  console.error('Please provide both a file name and text as parameters.');
} else {
  // Extract the file name and text from the command line arguments
  const fileName = args[0];
  const textToWrite = args.slice(1).join(' ');

  // Specify the file path
  const filePath = `${fileName}.txt`;

  // Write to the file
  fs.writeFile(filePath, textToWrite, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('The file has been saved!');
    }
  });
}
