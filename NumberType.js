console.log("Identify the number type");
function NumberType(n)
{
    
    if (n==0)
    {
       return n + " is zero";
       
    }
    else if(n<0)
    {
        return n + " is negative";
        
    }
    else
    {
        return n +" is positive";
    }
}
console.log(NumberType(-2));