const fs=require("fs")
// Task 1. Create a folder, named it db

// Comment : Synchronously creates a directory. Returns undefined, or if recursive istrue, the first directory path created. This is the synchronous version of mkdir.
// fs.mkdirSync("db")

// Task 2 : Create a file in it, named it bio.txt and add data into it
fs.writeFileSync("./db/bio.txt","bio data")

// Task 3 : Add more data into the file at the end of the existing data.
fs.appendFileSync("./db/bio.txt","\n2nd line data")

// Task 4 : Read the data without getting the buffer data at first.
console.log(fs.readFileSync("./db/bio.txt","utf-8"));

// Task 5 : Rename the file name to mybio.txt
fs.renameSync("./db/bio.txt","./db/mybio.txt")

// Task 6 : now delete both the file and the folder
// Comment : This function is used to delete a file
fs.unlinkSync("./db/mybio.txt")

// Comment : This function is used to delete a folder
fs.rmdirSync("./db")