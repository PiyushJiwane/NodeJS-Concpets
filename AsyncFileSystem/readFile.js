const fs=require("fs")

// Comment : Asynchronously reads the entire contents of a file.
fs.readFile('../Data/async_data.txt',({encoding:"utf8"}), (err, data) => {
    if (err) throw err;
    console.log(data);
});


