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

// Comment : Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the/proc file system is unavailable.
console.log(os.cpus());

// Comment : Returns the string path of the current user's home directory.
console.log(os.homedir());

// Comment : Returns the system uptime in number of seconds.
console.log(os.uptime());
console.log(os.uptime()/60/60);


// Comment : Returns information about the currently effective user. On POSIX platforms, this is typically a subset of the password file. The returned object includes the username, uid, gid, shell, and homedir. On Windows, the uid andgid fields are -1, and shell is null.
console.log(os.userInfo());

// Comment : Returns a string identifying the kernel version.
console.log(os.version());