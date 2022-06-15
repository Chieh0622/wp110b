//(物件導向) 請擴充上一題，加入 reduce 函數 (約分)

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

    mul (x)
    {
        return this.a * x.b * this.b * x.a + "/" + this.b * x.b;
    }

    div (x)
    {
        return this.a * x.b / this.b * x.a + "/" + this.b * x.b;
    }

    reduce()
    {
        var min;
        if(this.a < this.b)
        {
            min = this.b;
        }
        else
        {
            min = this.a;
        }
        for(var i = 2; i <= min; i++)
        {
            if(this.a % i == 0 && this.b % i == 0)
            {
                this.a = this.a / i;
                this.b = this.b / i;
                min = min / i;
                i = 1;
            }
        }
    }
}
var r1 = new Ratio(4, 16);
var r2 = r1.reduce();
console.log(r1.tostring());

// 1/4
