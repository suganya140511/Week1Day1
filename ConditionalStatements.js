console.log("if else and switch statements")
function launchBrowser(browserName)
{
    //let browserName="chrome"
    if(browserName=="chrome")
    {
        console.log("Chrome Browser");
        
    }
    else
    {
        console.log("Firefox Browser");

    }
}
function runTests(testType)
{
    

    switch(testType)
    {
     case "smoke":
     console.log("Build Stability Verfication Testing");
     break;
     case "sanity":
     console.log("Quick check to verify small part works after defect fix");
     break;
     case "regression":
        console.log("Ensure all parts works after defect fixes");
        break;
        default:
        console.log("Testing already done");
        
    }
    
}

launchBrowser("chrome")
runTests("functional")