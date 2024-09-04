function sum(a,b){
    console.log(parseInt(a)+b)


}

sum("20",30)

// function numSum(n){
//    console.log( n(n+1)/2)
// }

// numSum(10)

function sum(n) {
	let ans = 0;
	for (let i = 1; i <= n; i++) {
		ans = ans + i
	}
	return ans;
}

const ans1 = sum(100);
console.log(ans1);
const ans2 = sum(1000);
console.log(ans2);
const ans3 = sum(10000);
console.log(ans3);


