let x=1200;
const y=1500;
if(100>50){
  var a=100;
  let b =200;
  const c=300;

  console.log(a);
  console.log(b);
  console.log(c);
}

console.log("-----out of block--------");
console.log(a);
//console.log(b);
console.log(c);

/*
Difference between var,let,const ?
 
=>value change
   ->var will allow to change value
   ->let will allow to change value
   ->const will not allow to change value


=>re-declaration
    ->var will allow to re-declare a variable with same name
    ->let& const  will not allow to re-declare a variable with same name

=>Scope
   ->var has global scope
   ->let and const has block level scope
 */