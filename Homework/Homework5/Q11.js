class Ratio
{
    constructor (num1, num2)
    {
        this.a = num1;
        this.b = num2;
    }

    tostring ()
    {
        return this.a + '/' + this.b;
    }
}
var r1 = new Ratio(1, 5);
console.log(r1.tostring());

// 1/5
