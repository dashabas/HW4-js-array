console.log('-------------#5');
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);



console.log('-------------#6');
let str = 'my-short-string';
let arr = str.split('-');
console.log(arr);



console.log('-------------#7');
let arr2 = ['JavaScript', 2015];
let str2 = arr2.join(' ');
console.log(str2);



console.log('-------------#8');
let users = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
let filteredUsers = users.filter((user) => user.age < 20);

// let filteredUsers = users.filter(function (user) {
//     return user.age < 20;
// });

console.log(filteredUsers);



console.log('-------------#9');
let users2 = [
    {id: 1, name: "Vic", age: 21},
    {id: 2, name: "Petya", age: 30},
    {id: 3, name: "Jon", age: 5}
];
let names = users2.map(user2 => user2.name);
console.log(names);



console.log('#10');
let arr3 = [5, 3, 8, 1];
function filterRangeInPlace(arr3, a, b) {
    for (let i = 0; i < arr3.length; i++) {
        let val = arr3[i];
        if (val < a || val > b) {
            arr3.splice(i, 1);
            i--;
        }
    }
}
filterRangeInPlace(arr3, 1, 4);
console.log(arr3);



console.log('-------------#11');
function splitString(stringToSplit, separator) {
    return stringToSplit.split(separator);
}
console.log(splitString('Hello, Peaceful World', ', '));



console.log('-------------#12');
let arr4 = [5, 3, 8, 1];
function slArray(arr4, startIndex, endIndex) {
    return arr4.slice(startIndex, endIndex);
}
let range = slArray(arr4, 1, 4);
console.log(range);
console.log(arr4);


console.log('-------------#13');
function sum(...args) {
    let sumResult = 0;
    for (let arg of args) {
        sumResult += arg;
    }
    return sumResult;
}
console.log(sum(1, 3, 5));



// function sum(...arg) {
//     let sumResult = 0;
//     for (let i = 0; i < arg.length; i++) {
//         sumResult += arg[i];
//     }
//     return sumResult;
// }
// console.log(sum(1, 3, 5));






