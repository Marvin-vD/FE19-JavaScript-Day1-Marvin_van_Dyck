//alert("Hello");
console.log("Hi my name is Martin");
console.log("Hi my name is Martin" + addText);
let team = ["Martin","Thomas","Peter","Mathias","Niki"];
console.log("The most valuable player of the match is " + team[2]);

let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars.sort());


//Intermediate Exercise 2
let fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
console.log(fruits);
fruits.pop(3);
console.log(fruits);


let animals = ["monkey", "horse", "dog"];
console.log(animals.sort());
animals.push("cat");
console.log(animals.sort());

//Intermediate Exercise 3
let fruits2 = "mango/cherries/kiwi/grapes/pear/peach/orange/lemon";
fruits2 = fruits2.replaceAll("/", "<br>");
document.write(fruits2 +"<hr>");
console.log(fruits2);

//Advanced Exercise 1
let a = 7;
let b = 14;
let c = Number("21");
let d = Number('36');
let e = 42;
let s1 = a+b+c+d+e;
console.log(s1);

let f = Number('1');
let g = 15;
let h = 8;
let i = Number("1");
let s2 = f*g*h*i;
console.log(s2);

document.write(s1/s2 +"<hr>");


//Advanced Exercise 2
let people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people != people.shift();
console.log(people);
Array.prototype.insert = function ( index, ...items ) {
    this.splice( index, 0, ...items );
};
people.insert(0,'Matt');
console.log(people);
people != people.pop();
console.log(people);
people.push("Marvin");
console.log(people);
people2 = people.slice(2,4);
console.log(people);
console.log(people2);
console.log(people.indexOf('Mary'));
console.log(people.indexOf('Foo'));
people = ["Greg", "Mary", "Devon", "James"];
console.log(people);
people.splice(2,1,"Elizabeth", "Anna");
console.log(people);

//Advanced Exercise 3
let multiArray = [ [1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 25, 7], [21, 4, 6, 17], [3, 5, 26, 3] ];
console.log(multiArray[1][1],multiArray[4][2], multiArray[5][3],multiArray[2][3],multiArray[2][1]);

//Challange
let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
text = text.replaceAll("$", " ");
console.log(text);


