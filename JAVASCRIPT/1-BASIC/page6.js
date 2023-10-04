console.log("Nested if");

let input =501;

/*
  isNaN() -is not a number
  it return true for string
  it return false for number
*/

if(isNaN(input) )
  console.log(input, "is string data type...");
else{
    console.log(input, "is number data type...");
    if(input%2 ==0){
        console.log(input,"is even number");
    }else{
        console.log(input,"is odd number");
    }    
    
}
