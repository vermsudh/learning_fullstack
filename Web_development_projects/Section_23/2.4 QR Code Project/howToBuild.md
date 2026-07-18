We are going to use Node.js npm libraries and install the packages to create a QR generator. We are going to use the inquire file. Below is the link to it.

[www.npmjs.com/package/inquirer](https://www.npmjs.com/package/inquirer)

The second package would be QI image on NPM Bureau. Below is the link

 [www.npmjs.com/package/qr-image](https://www.npmjs.com/package/qr-image)

```javascript
/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
```

I found the code from the documentation on how to use these librabries.

1) Firstly, I imported the librabries and installed the NPM packages of inquirer and qr generator.
   THen I prompted the user to type the URL
2) I took the user input and saved it inside answers.URL and use that to generate the OR code using the qr-image package from the NPM.
3) At last, we used the fs module to use the write methods in order to save user input in a text file and mentioned the path of the file.
4) We called the function called getUserInput() at last.

```javascript
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

```
