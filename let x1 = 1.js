let x1 = 1
let x2 = 2
let y1 = 3
let y2 = 4
const a = x2-x1;
const b= y2-y1;
if (x1>=0 && x2>=0 && y1>=0 && y2>=0) 
{
    const length = Math.sqrt((a**2)+(b**2));
    console.log(length);
}
if (x1<0 || x2<0 || y1<0 || y2<0)
{ 
    console.log("This problem is for positive numbers.");
}