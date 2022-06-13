function fliter357(num1, num2)
{
    var arr = [];
    for (var i = num1; i <= num2; i++)
    {
        if (i % 3 != 0 && i % 5 != 0 && i % 7 != 0)
        {
            arr.push(i);
        }
    }
    return arr;
}
console.log(fliter357(5, 15));

//[ 8, 11, 13 ]
