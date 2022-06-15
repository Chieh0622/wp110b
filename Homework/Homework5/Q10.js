function integral(f, n1, n2)
{
    var a = 0;
    for (var i = n1; i < n2; i += 0.001)
    {
        a += f(i) * 0.0001;
    }
    return a;
}
console.log(integral((x) => x*x, 0, 1));

//0.03328335000000005
