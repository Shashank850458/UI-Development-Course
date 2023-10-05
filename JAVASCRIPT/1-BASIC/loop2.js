

for(let i=1; i<=5; i++)
{
    console.log(i, " Outer Loop...");

    for(let j=1; j<=i;j++)
    {
        console.log("\t",j," inner Loop...");
    }
    console.log("\n");

}