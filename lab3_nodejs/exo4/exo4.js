const fs = require('fs');

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Please provide text as a parameter.');
} else {
  const textToWrite = args.join(' ');

  const filePath = 'f.txt';

  fs.writeFile(filePath, textToWrite, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('The file has been saved!');
    }
  });
}
