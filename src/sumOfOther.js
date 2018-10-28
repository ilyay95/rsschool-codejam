
module.exports = function sumOfOther(arr){
    let sum=0;
    for(let a=0;a<arr.length;a++){
        sum+=arr[a];
    }
    for(let b=0;b<arr.length;b++){
        arr[b]=sum-arr[b];
    }
    return arr;
}