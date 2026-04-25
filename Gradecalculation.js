console.log("Grade calculation");
function gradecalculation(mark)
{
    switch(true)
    {
        case (mark >=90 && mark <=100) :
            return mark + " is a A grade ";
            break;
        case (mark >=70 && mark <90) :
             return mark + " is a B grade ";
            break;
        case (mark >=50 && mark <70) :
             return mark + " is a C grade ";
            break;
        case (mark >=35 && mark <50) :
             return mark + " is a D grade ";
            break;
        case (mark >=0 && mark <35) :
             return mark + " Fail needs improvement ";
            break;
        default : 
            return mark + " is Invalid mark ";
            break;
    }
}
console.log(gradecalculation(103));
