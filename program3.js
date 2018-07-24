var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
var str = file.toString();
var splitfile = str.split('\n');
var count = splitfile.length - 1;
console.log(count);
