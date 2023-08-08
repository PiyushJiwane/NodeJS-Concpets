const fs=require("fs")

// Comment : When file is a filename, asynchronously writes data to the file, replacing the data if it already exists. data can be a string or a buffer.
fs.writeFile("../Data/async_data.txt","1st line data",()=>{
    console.log("done");
})