const path=require("path")

// Comment : It returns the current working directory path
console.log(__dirname);

// Comment : It returns the current workign file path
console.log(__filename);

// Comment : Return the directory name of a path. Similar to the Unix dirname command.
console.log(path.dirname("/home/rootadmin/ProjectPractice/NodeJS-Concpets/PathSystem/path_mod.js"));

// Comment : Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.
console.log(path.extname("/home/rootadmin/ProjectPractice/NodeJS-Concpets/PathSystem/path_mod.js"));

// Comment : Return the last portion of a path. Similar to the Unix basename command. Often used to extract the file name from a fully qualified path.
console.log(path.basename("/home/rootadmin/ProjectPractice/NodeJS-Concpets/PathSystem/path_mod.js"));

// Comment : Returns an object from a path string - the opposite of format().
console.log(path.parse("/home/rootadmin/ProjectPractice/NodeJS-Concpets/PathSystem/path_mod.js"));
// output : 
// {
//     root: '/',
//     dir: '/home/rootadmin/ProjectPractice/NodeJS-Concpets/PathSystem',
//     base: 'path_mod.js',
//     ext: '.js',
//     name: 'path_mod'
// }

// Comment : Returns a path string from an object - the opposite of parse()
let formatted=path.format({
    root:"/home",
    dir:"/usr/dir",
    base:"index.js"
})
console.log(formatted);

// Comment : Join all arguments together and normalize the resulting path.
console.log(path.join(__dirname+"/path_mod.js"));



