//it provide us promise that something is return in future
function logname(){
    console.log("bhaskar")
}
setTimeout(logname , 3000)
//we have two approach
//callback based
//promises based
 
function setTimeoutPromisified//return obj of promise classs
(ms) {
    let p = new Promise(resolve => setTimeout(resolve, ms));
    return p;  
}
  
  function callback() {
      console.log("7 seconds have passed");
  }
  
  setTimeoutPromisified(7000).then(callback)
  