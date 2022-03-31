function range(...nums){
    let result = []
    var nums_length = nums.length
    if (nums_length== 1){
        for(let i = 1; i<=nums[0]; i++){
            result.push(i)
        }
    }else if (nums_length == 2 && (nums[0] != nums[1])){
        if (nums[0] > nums[1]){
            for(let i = nums[0]; i >= nums[1]; i += -1){
                result.push(i)
            }
        }else{
            for(let i = nums[0]; i <= nums[1]; ++i){
                result.push(i)
            }
        }
    }else if (nums_length == 3 && (nums[0] != nums[1])){
        if (nums[0] > nums[1]){
            for(let i = nums[0]; i >= nums[1]; i += -nums[2]){
                result.push(i)
            }
        }else{
            for(let i = nums[0]; i <= nums[1]; i += nums[2]){
                result.push(i)
                
            }
        }
        
        }else{
        result = "Muitos números ou números incorretos!"
    }
    return result
}

function range_p(a,b,s = 1){
    var n1= b === undefined ? 1 : a
    var n2= b === undefined ? a : b
    var step = n1 <= n2 ? Math.abs(s) : -Math.abs(s)

    nums = []
    for (let i = n1; n1 <= n2 ? i<=n2 : i>=n2; i += s){
        nums.push(i)
    }
    return nums
}

console.log(range(2, 6, 2))
console.log(range_p(2,6,2))