
const getYear = (start=null, end=null) =>{  //null will get replace with the parameter values, if nothing is there it will remain same as null.
    for(let i = start; i<=end; i++)
    {
        console.log(i);
    }
    console.log("\n\n");
}

getYear(2005, 2008);

getYear(2010, 2015);

getYear(2018, 2025);

getYear();