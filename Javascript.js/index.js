function waitFor3Sec(resolve){
    setTimeout(resolve, 3000)
}

function main(){
    console.log("main is calles")
}
waitFor3Sec(main)