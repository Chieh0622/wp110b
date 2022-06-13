function is_prime(num)
{
    for (var i = 2; i < num; i++)
    {
        if (num % i ==0) return false;
    }
    return true;
}
console.log(is_prime(47));
console.log(is_prime(69));
console.log(is_prime(97));

//true
//slase
//true
