function waitFor3Sec(resolve){ //resolve = main
    setTimeout(resolve, 3000)
}

function setTimeoutPromisified(){
    return new Promise(waitFor3Sec)
}

function main(){
    console.log("main is calles")
}

setTimeoutPromisified().then(main);

// function setTimeoutPromisified(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
//   }
  
//   function callback() {
//       console.log("3 seconds have passed");
//   }
  
//   setTimeoutPromisified(3000).then(callback)
  