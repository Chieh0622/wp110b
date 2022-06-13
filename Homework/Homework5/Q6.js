function factor(num)
{
    var arr = []
    for (var i = 2; i <= num; i++)
    {
        if (num % i == 0)
        {
            arr.push(i);
            num /= i;
            i = 2;
        }
    }
    return arr;
}
console.log(factor(36));

//[ 2, 2, 3 ]
