// Every file in node js is a module in itself, and default scope of funcction or a variable is private in .js file. So we cannot directly call a function or variable ffrom another file.

function add(n1,n2){
    return n1+n2
}

module.exports=add