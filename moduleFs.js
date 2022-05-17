const path = require('path');
const fs = require('fs');

const curr = path.resolve();
const fPath = path.join(curr, "package.json");
const hiPath = path.join(curr, "sunny.txt");
const byPath = path.join(curr, "by.txt");

fs.readFile( fPath, "utf8", function(error, text){
    console.log(text);
});


// fs.promises.readFile( fPath, "utf8").then((text)=>{
//     console.log(text);
// });

fs.promises.writeFile( hiPath, "It\'s a sunny day!!!" );

fs.promises.writeFile( byPath, "byyyyyyyy!!!" );

// now delete the 'by.txt' file

// fs.promises.unlink(byPath);


// fs.promises.rename("sunny.txt", "good.txt");
