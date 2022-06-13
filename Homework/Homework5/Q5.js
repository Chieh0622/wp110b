function mean(arr)
{
    var ans = 0;
    for (var i = 0; i < arr.length; i++)
    {
        ans += arr[i];
    }
    return ans /= arr.length;
}
console.log("mean([1,2,3,4,5]) => " + mean([1,2,3,4,5]));

//mean([1,2,3,4,5]) => 3
