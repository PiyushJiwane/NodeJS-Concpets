const path=require("path")

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


