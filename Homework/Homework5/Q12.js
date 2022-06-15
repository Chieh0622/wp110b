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

    add (x)
    {
        return this.a * x.b + this.b * x.a + "/" + this.b * x.b;
    }

    sub (x)
    {
        return this.a * x.b - this.b * x.a + "/" + this.b * x.b;
    }
}
var r1 = new Ratio(1, 5), r2 = new Ratio(3, 4); 
var r3 = r1.add(r2); 
console.log(r3.toString());

// 19/20
