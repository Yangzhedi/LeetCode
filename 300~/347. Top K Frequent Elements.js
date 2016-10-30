/**
Given a non-empty array of integers, return the k most frequent elements.

For example,
Given [1,1,1,2,2,3] and k = 2, return [1,2].

Note: 
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
Subscribe to see which companies asked this question
*/
/**
* @param {number[]} nums
* @param {number} k
* @return {number[]}
*/
var topKFrequent = function(nums, k) {
    var arr= [],result=[];
    for(var i = 0,len=nums.length;i<len;i++){
        if(typeof arr[nums[i]] == "undefined"){
            arr[nums[i]] = 1;
        }else{
            ++arr[nums[i]];
        }
    }
    var arr1 = arr.slice().sort(function(a,b){return b-a;}).slice(0,k); //改变原数组,需要slice()复制一份
    for(var j = 0,len1=arr1.length;j<len1;j++){
    	var num = arr1[j]
        var index = arr.indexOf(num);
        result.push(index);
    }
    return result;
};


//topKFrequent([1,1,1,2,2,3],2)