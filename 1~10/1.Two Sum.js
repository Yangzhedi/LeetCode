/**
 * 给定一个数组和一个目标，
 * 数组中两个数相加如果等于目标值，返回两个数的下标组成的数组
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var result=[]
    for(var i=0;i<nums.length;i++){
    	for(var j=i+1;j<nums.length;j++){
    		if(nums[i]+nums[j]==target){
    			result=result.concat([i,j]);
    		}
    	}
    }
    return result;
};
twoSum([1,2,3,4,5],6);
//twoSum([2, 7, 11, 15],9);