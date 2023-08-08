const os=require("os")

// Comment : Returns the operating system CPU architecture for which the Node.js binary was compiled.
console.log(os.arch());

//Comment : Returns the amount of free system memory[RAM] in bytes as an integer.
console.log(os.freemem()/1024/1024/1024); //This code will return the amount of free system memory in Gigabytes as an integer.

// Comment : Returns the total amount of system memory[RAM] in bytes as an integer.
console.log(os.totalmem());
console.log(os.totalmem()/1024/1024/1024); //system memory in Gigabytes as an integer.

//Comment : Returns the host name[admin name] of the operating system as a string.
console.log(os.hostname());

// Comment : Returns a string identifying the operating system platform for which the Node.js binary was compiled
console.log(os.platform());

// Comment : Returns the operating system's default directory for temporary files as a string.
console.log(os.tmpdir());

// Comment : Returns the operating system name as returned by uname(3). For example, it returns 'Linux' on Linux, 'Darwin' on macOS, and 'Windows_NT' on Windows.
console.log(os.type());
