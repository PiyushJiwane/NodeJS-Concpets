const fs=require("fs")

// Comment : Firstly it will check a file is exist or not. If exits, it will override the new data with the old data 
fs.writeFileSync("../Data/data.txt", "This is a 2nd line data.")