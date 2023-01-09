function add(num1:number, num2:number, printResult:boolean, resultPhrase:string) {
    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     throw new Error('Incorrect Input !!');  
    // }
    // return num1+num2
    let result = num1+num2;
    if(printResult) {
        console.log(resultPhrase + result)
    }else{
        return result
    }
}

function combine(input1: number | string, input2: number|string) {
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1+input2;
    }else{
        result = input1.toString() + input2.toString();
    }

    return result;
}

const number1 = 10;
const number2 = 20;
// const result = add(number1,number2)
const printResult = true;
const resultPhrase = 'Result is : '

add(number1, number2, printResult, resultPhrase)
// console.log("add two numbers and result--->", result);
// console.log("your code goes here----")

const person = {
    name:"XYZ",
    age:30,
    hobbies:["sports","music"],
    role:[2,"Author"]
}

const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;

const person2 = {
    name:"XYZ",
    age:30,
    hobbies:["sports","music"],
    role: ADMIN
}

enum Role {ADMIN, READ_ONLY, AUTHOR}
const person3 = {
    name:"XYZ",
    age:30,
    hobbies:["sports","music"],
    role: Role.AUTHOR
}

let favouriteActivities:string[];
favouriteActivities =["sports"]

person.role.push("Admin");
console.log("ck person object result--->", person);

for(let hobby of person.hobbies) {
    console.log("chk hobby---->",hobby);
}

if(person2.role === ADMIN) {
    console.log(" having role ADMIN---")
}else{
    console.log("Noat a ADMIN-----")
}

if(person3.role === Role.AUTHOR) {
    console.log(" having role AUTHOR---")
}else{
    console.log("Noat a AUTHOR-----")
}

const combinedAges = combine(20,30);
console.log("chk combined ages---->", combinedAges);

const combinedNames = combine("Suresh", " Kumar");
console.log("chk combined names---->", combinedNames);