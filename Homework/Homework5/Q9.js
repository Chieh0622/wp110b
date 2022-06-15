function f(num)
{
    if (num == 0) return 0;
    else if (num == 1) return 1;
    else return f(num - 1) + f(num - 2);
}
console.log(f(9));

//34
