function is_prime(num)
{
    for (var i = 2; i < num; i++)
    {
        if (num % i ==0) return false;
    }
    return true;
}
console.log("isPrime(47) => " + is_prime(47));
console.log("isPrime(69) => " + is_prime(69));
console.log("isPrime(97) => " + is_prime(97));

//isPrime(47) => true
//isPrime(69) => false
//isPrime(97) => true
