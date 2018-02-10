function highAndLow(str) {
    const sorted = str.split(' ');
    const nums = [];
    
    sorted.forEach((elem) => {
        nums.push(parseInt(elem));
    });

    nums.sort( (a, b) => {return a - b });

    return nums[nums.length-1] + ' ' + nums[0];
}


module.exports = {
    highAndLow: highAndLow
};