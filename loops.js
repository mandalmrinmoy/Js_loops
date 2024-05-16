// for(let i=0;i<10;i++){
//     console.log(i);
// }
// let a=[1,2,3,4];
// for(let key in a){
//     console.log(key);
// }
// Print the numbers from 0 to 15
for(let i=0;i<=15;i++){
    console.log("The number is: "+i);
}
//Print the numbers from 12 to 24
for(let a=12;a<=24;a++){
    console.log("The number is: "+a);
}
//Print the ODD numbers from 7 to 31
for(let b=7;b<=31;b++){
    if(b%2 !==0){
        console.log("The odd number is: "+b);
    }
}
//Print the EVEN numbers from 10 to -20
for(let c=-20;c<=10;c++){
    if(c%2==0){
        console.log("The even number is: "+c);
    }
}
for(let c=10;c>=-20;c--){
    if(c%2==0){
        console.log("The even number is: "+c)
    }
}
/*Iterate through all numbers from 1 to 45. Print the following:
For multiples of 3 print “Fizz”
For multiples of 5 print “Buzz”
For multiples of 3 and 5 print “FizzBuzz”*/
for(let i=1;i<=45;i++){
    if(i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }else if(i%5==0){
        console.log("Buzz");
    }else if(i%3==0){
        console.log("Fizz");
    }else{
        console.log(i);
    }
}
/*
 Print all the elements of the following array
var thisIsAnArray = ["element1", "element2", "element3", "element4"];
*/
var thisIsAnArray = ["element1", "element2", "element3", "element4"];
for(var keys of thisIsAnArray){
    console.log(keys);
}
for(var i=0;i<=thisIsAnArray.length;i++){
    console.log(thisIsAnArray[i]);
}
/*
 Calculate the sum of all the numbers in the following array
var numbersArray = [1,13,22,123,49]
*/
var numbersArray = [1,13,22,123,49];
var sum=0;
for(var i=0;i<numbersArray.length;i++){
    sum=sum+numbersArray[i];
}
console.log("The sum of all the numbers are: "+sum);

//fectorial

