/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    var arr=s.split("");
    //var res=[],s1='';
    arr.reverse();
    return arr.join("");
};


//打印素数
function su(n){
	var num=0;
	for(var i=2; i<=n; i++){
		j=2;
		while(i%j!=0){
			j++;
		}
		if(j==i){
			console.log(i);
			num++;
		}
	}
	console.log(num);
}
su(100)