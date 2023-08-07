const fs=require("fs")

// Comment : First it will create a file and write the data inside a file as data.txt file is not present
fs.writeFileSync("./Data/data.txt", "This is a first file")

// Comment : Firstly it will check a file is exist or not. If exits, it will override the new data with the old data 
fs.writeFileSync("./Data/data.txt", "This is a 2nd line data")

