const fs=require("fs")

// NodeJS includes an additional data type called Buffer (not avaible in browser's javascript)
// Buffer is mainly used to store binary data. This datatype is mainly use while reading from a file or receving packets over the network.

// Comment :  This function is used to read data from a file, but it returns the data in Buffer data
const buf_data=fs.readFileSync("../Data/data.txt")
console.log(buf_data);

// Comment : This funciton will convert Buffer data back to string format
string_data=buf_data.toString()
console.log(string_data);
