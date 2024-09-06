function run() {
	console.log("I will run after 5s");
}

setTimeout(run, 5000);
console.log("I will run immedietely");
let c=1;
for(i=0;i<10000;i++){
    c=c+1;
}
console.log("entensive task cpu task first")