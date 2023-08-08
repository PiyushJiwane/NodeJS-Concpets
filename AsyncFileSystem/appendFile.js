const fs=require("fs")

// Comment : Asynchronously append data to a file, creating the file if it does not yet exist. data can be a string or a Buffer.
fs.appendFile("../Data/async_data.txt","2nd line data",()=>{
    console.log("append done");
})