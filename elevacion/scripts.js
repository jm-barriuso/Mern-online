// GIVEN
console.log(example);
var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//1
console.log(hello);                                   
var hello = 'world';  
//AFTER HOISTING BY THE INTERPRETER
//var hello;
//console.log(hello); // logs undefined
//hello = 'world'; 

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
//var needle = 'haystack';
//function test(){
//    var needle = 'magnet';
//    console.log(needle); // log 'magnet'
//}
//test(); //llama funcion y escribe log de funcion


//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
//var brendan = 'super cool';
//function print(){
//    brendan = 'only okay';
//    console.log(brendan); // log 'only okay' pero funcion nunca es llamado por ende no hay log
//}
//console.log(brendan); // log 'super cool'

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
//var food = 'chicken';
//console.log(food); log 'chicken'
// function eat(){
//    var food;
//    food = 'gone';
//    food = 'half-chicken';
//    console.log(food); // log half-chicken
//    food = 'gone';
//}
//eat(); log half-chicken

//5
/* mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food); */
//AFTER HOISTING BY THE INTERPRETER
//var mean = function() {
//    var food;
//    food = "chicken";
//    console.log(food); log chicken
//    food = "fish"; 
//    console.log(food); log fish
//}
//mean() // non a function
//console.log(food); //food no declare
//console.log(food); //food no declare



