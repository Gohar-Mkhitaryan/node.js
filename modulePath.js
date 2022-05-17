const path = require('path');

const resPath = path.resolve();
console.log(resPath);

const filePath = path.join( resPath, "modulePath.js");
console.log(filePath);

console.log(path.parse(filePath));

console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));
