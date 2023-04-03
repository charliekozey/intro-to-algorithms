function twoSum(nums, target){
    // i iterates through the starting number:
    for (let i = 0; i < nums.length - 1; i++) {
        // j iterates through the adding number:
        for (let j = i + 1; j < nums.length; j++) {
            // If you reach two numbers that add up to the target,
            // return their indices as an array.
            if (nums[i] + nums[j] === target) return [i, j]

            // Because the constraints state there is exactly one
            // solution, we don't have to worry about an "else"
            // condition.
        }
    }
}