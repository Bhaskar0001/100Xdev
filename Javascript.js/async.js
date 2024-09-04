const fs = require("fs");
function print(err , data){

   if(err){
    console.log("file not find")
   }
   else{
    console.log(data)
   }
}

fs.readFile("a.txt", "utf-8", print );//callbacks and async
// fs.readFile("b.txt", "utf-8", print);

console.log("done");


// function run() {
// 	console.log("I will run after 1s");
// }

// setTimeout(run, 1000);
// console.log("I will run immedietely");