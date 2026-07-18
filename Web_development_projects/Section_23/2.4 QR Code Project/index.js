/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from 'fs';

async function getUserInput(){
        try {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: "URL",
        message: 'Enter your URL',
        validate: (input) => {
          return input.trim() !== '' ? true : 'This field cannot be empty';
        }
      },
    ]);
    console.log('\n--- URL Received ---');
    console.log(`User: ${answers.URL}`);

    const url =answers.URL;

    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.appendFile('user_input.txt', url + '\n', 'utf8', (err) => {
        if (err) {
        console.error('Failed to save file:', err.message);
        } else {
        console.log('User input successfully saved to user_input.txt!');
        }
   })
        
    
  } catch (error) {
    if (error.isTtyError) {
      console.error("Prompt couldn't be rendered in the current environment");
    } else {
      console.error("Something went wrong:", error);
    }
  }
  
}




await getUserInput();

