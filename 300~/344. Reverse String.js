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