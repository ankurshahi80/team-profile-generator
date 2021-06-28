const fs = require('fs');

// writing file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html',fileContent, err => {
            // if there is an error, reject the Promise and send the error to the Promise's '.catch()' method
            if (err) {
                reject(err);
                // return out of the function here to make sure the promise does not accidently execute the resolve() function as well
                return;
            }

            // if everything went well, resolve the Promises and send the successful data to the `.then()` method
            resolve({
                ok: true,
                message: 'HTML File created! Check out Index.html in the "dist" folder to see the output!'
            });
        });
    });
};

module.exports = writeFile;