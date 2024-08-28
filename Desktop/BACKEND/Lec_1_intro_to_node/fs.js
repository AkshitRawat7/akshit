// file-> read,write,update,delete
// folder-> content check,rename,delete

const fs = require("fs");
const { version } = require("os");


// write in a file
/*
1.path of the file where we want to make changes
*/

// file name
let file = "file.txt";
let content = "content added through nodejs"


// synchronous version
// console.log("```:adding content to file");
// fs.writeFileSync(file,content);
// console.log("```:added content to file");


// async version
// fs.writeFile(file,content,function(err,data){
//     if(err)
//     {
//         console.log("something went wrong");
//     }
//     else
//     {
//         console.log("File is written comfortably");
//     }
// })


fs.appendFileSync(file,"abc");
const filecontent =fs.readFileSync(file,'utf8');


console.log(filecontent);