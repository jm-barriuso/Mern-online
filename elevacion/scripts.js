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

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
//AFTER HOISTING BY THE INTERPRETER
// var gernre;
// console.log(genre); undefine
// genre = "disco";
//function rewind() {
//        var genre;
//        genre = "rock";
//        console.log(genre); log rock
//        genre = "r&b";
//       console.log(genre); log r&b
//}
// rewind();
// console.log(genre); disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
//        var dojo;
//dojo = "san jose"; 
//console.log(dojo); log San Jose
//function learn() {
//        var dojo;
//        dojo = "seattle";
//        console.log(dojo); log seattle
//        dojo = "burbank";
//        console.log(dojo); log burbank
//    }
//learn();
//console.log(dojo); undefined

// 8 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
//function makeDojo(name, students){
//        const dojo = {};
//        dojo.name = name;
//        dojo.students = students;
//        if(dojo.students > 50){
//            dojo.hiring = true;
//        }
//        else if(dojo.students <= 0){
//            dojo = "closed for now";
//        }
//        return dojo;
//    }
//console.log(makeDojo("Chicago", 65)); log {Chicago, 65, true}
//function makeDojo(name, students){
//        const dojo = {};
//        dojo.name = name;
//        dojo.students = students;
//        if(dojo.students > 50){
//            dojo.hiring = true;
//        }
//        else if(dojo.students <= 0){
//            dojo = "closed for now";
//        }
//        return dojo;
//    }
// console.log(makeDojo("Berkeley", 0)); TypeError: Assignment to constant variable.
