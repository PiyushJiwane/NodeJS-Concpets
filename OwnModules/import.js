const add=require("../OwnModules/export")

// console.log(add(5,10)); // Here add() is a function because we are exporting a function from export.js file
console.log(add); // Here add is a varible because we are exporting a variable from export.js file

// NOTE : whenever we export any variable or function, that we can import with in a file with any name.