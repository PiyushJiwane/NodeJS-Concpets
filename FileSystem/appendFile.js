const fs=require("fs")

// Comment : This function will append the data without overriding to the existing file, else it will create a new file
fs.appendFileSync("../Data/data1.txt","This is a third(3rd) line.")