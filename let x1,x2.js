let x,x1,x2
let a=1
let b=2
let c=3
let discriminant = (b**2-4*a*c) ; 

if(a === 0)
{
    x = (-c)/b;
    console.log("the result is : " + x);
}
else
{
    if (discriminant > 0)
    {
        x1 = ((-b)+ Math.sqrt(discriminant))/(2*a);
        x2 = ((-b)- Math.sqrt(discriminant))/(2*a);
        console.log("the results are : " + (x1) + ", " + (x2));
    }
    else if(discriminant = 0)
    {
        x === (-b)/(2*a);
        console.log("the result is : " +x);
    }
    else if(discriminant < 0)
    {
        console.log("The equation doesn't have any real number as a solution")
    }
}

