function add(num1, num2, printResult, resultPhrase) {
    // if(typeof num1 !== 'number' || typeof num2 !== 'number'){
    //     throw new Error('Incorrect Input !!');  
    // }
    // return num1+num2
    var result = num1 + num2;
    if (printResult) {
        console.log(resultPhrase + result);
    }
    else {
        return result;
    }
}
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var number1 = 10;
var number2 = 20;
// const result = add(number1,number2)
var printResult = true;
var resultPhrase = 'Result is : ';
add(number1, number2, printResult, resultPhrase);
// console.log("add two numbers and result--->", result);
// console.log("your code goes here----")
var person = {
    name: "XYZ",
    age: 30,
    hobbies: ["sports", "music"],
    role: [2, "Author"]
};
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person2 = {
    name: "XYZ",
    age: 30,
    hobbies: ["sports", "music"],
    role: ADMIN
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person3 = {
    name: "XYZ",
    age: 30,
    hobbies: ["sports", "music"],
    role: Role.AUTHOR
};
var favouriteActivities;
favouriteActivities = ["sports"];
person.role.push("Admin");
console.log("ck person object result--->", person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log("chk hobby---->", hobby);
}
if (person2.role === ADMIN) {
    console.log(" having role ADMIN---");
}
else {
    console.log("Noat a ADMIN-----");
}
if (person3.role === Role.AUTHOR) {
    console.log(" having role AUTHOR---");
}
else {
    console.log("Noat a AUTHOR-----");
}
var combinedAges = combine(20, 30);
console.log("chk combined ages---->", combinedAges);
var combinedNames = combine("Suresh", " Kumar");
console.log("chk combined names---->", combinedNames);
