
var moveZeroes = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === 0) {
            // console.log("before");
            //  console.log(nums[i]);
            // console.log(nums);
            nums[nums.length]=nums[i];
            nums.splice(i,1); 
            // console.log("after")
            // console.log(nums);
            console.log(nums[i]);
        }
    }
    return nums;
};

console.log(moveZeroes([0,0,1]))