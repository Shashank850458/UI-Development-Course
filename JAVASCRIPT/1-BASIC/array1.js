
let city = ['Pune', 'Delhi', 'Chennai', 'Kolkata', 'Bangalore', 'Patna']; //array
let item = new Array('Apple', 'Orange', 'Banana', 'Grapes', 'Papaya'); //same by defining the array

console.log("Total City : ", city.length);
console.log("Total item : ", item.length);

/* structure of array

arrayName[index] => element

city[0] => Pune
city[1] =>Delhi
city[2] => Chennai
city[3] => Kolkata
city[4] => Bangalore
city[5] => Patna

*/

console.log( city[2], city[5], city[0]);
//****************************************************************** */
console.log("\n Read Array Element for \n")
for (let i = 0; i< city.length; i++)
{
    console.log(i,"=>",city[i]);
}
//****************************************************************** */
console.log("\n Reverse order \n")
for( let i= city.length-1; i>=0; i--)
{
    console.log(i,"=>",city[i]);
}
//****************************************************************** */
console.log("\n While Loop\n")
let i = 0;
while(i<city.length)
{
    console.log(i,"=>",city[i]);
    i++;
}
//****************************************************************** */
console.log("\n Using forEach \n")
city.forEach(cityname=>{ console.log(cityname)});
//****************************************************************** */
console.log("\n Using function \n")
city.forEach(function(index1, name){
    console.log(name, index1);
})
//***************************************************** */
console.log("\n Using map() \n")  //it is same as forEach, in react we use map not the forEach
city.map(function(cityname, index){
    console.log(index, cityname);
})
//********************************************************* */


