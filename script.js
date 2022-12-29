// let start = 10;
// let end = 110;

// function ifRange(start,end,number) {
//     if (number> start && number < end) {
//         return true
//     }else{
//         return false

//     }
// }
// console.log(ifRange(start,end,122));



// HOMEWORK
// JSTEST.

// 1
// let x = 10;
// let y = (x > 5) && (x < 15); 
// console.log(y);

// 2
// let x = 5; 
// x += 3; 
// console.log(x);

// 3
// let x = 10; 
// let y = x++;
// console.log(y);

// 4
// let x = 1;
// let y = x !== 2;
// console.log(y);

// 5
// let a = "red";
// let b = "blue";
// console.log(a,b);
// let temp = a;
// a = b;
// b  =temp ;
// console.log(a,b);


// JS OPERATORS

// 1
// function max(a,b){
//    return a>b ? a : b
// }
// let number = max(5, 3);
// console.log(number);

// 2
// function isLandscape(width, height) {
//     return width> height ? 'Landscape' : "Portrate" 
// }
// console.log(isLandscape(800, 700));

// 3
// function fizzBuzz(input) {
//     if (input % 3 == 0 && input % 5 ==0) {
//         return 'FizzBuzz'
//     } else if (input % 3 == 0) { 
//         return 'Fizz'
//     } else if (input % 5 == 0) {
//         return 'Buzz'
//     }else{
//         return input
//     }
// }
// const output = fizzBuzz(17);
// console.log(output);

// 4
// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 ==0) {
//             console.log(i, 'juft');
//         } else {
//             console.log(i, 'toq');
//         }
//     }
// }
// showNumbers(10);

// 5
// function sum(limit) {
//     let sum = 0;
//     for (let i = 1; i < limit; i++) {
//         if (i % 3 == 0) {
//              sum += i;
//         }

//     }
//     for (let i = 1; i <= limit; i++) {
//         if (i % 5 == 0) {
//              sum += i;
//         }

//     }
//     return sum;
// }
// console.log(sum(10));


// CONTROL FLOW
1
// function sort(a, b, c) {
//     if (a > b && a > c && b > c) {
//         console.log(a, b, c); 
//     } else if (a > b && a > c && c > b) {
//         console.log( a,c,b);
//     }else if (b> a && b > c && c > a) {
//         console.log( b,c,a);
//     }else if (b> a && b > c && a > c) {
//          console.log(b,a,c);
//     }else if (c> a && c > b && a > b) {
//          console.log(c,a,b);
//     }else if (c> a && c > b && b > a) {
//          console.log(c,b,a);
//     }

// }
// console.log(sort(-3, -9, 0));

// 2
// function getMaxOfFiveNumber(a, b, c, d, e) {
//     if (a > b && a > c && a > d && a > e) {
//         return a;
//     } else if (b > c && b > d && b > e) {
//         return b;
//     } else if (c > d && a > e) {
//         return c;
//     } else if (d > e) {
//         return d;
//     } else {
//         return e;
//     }
// }
// console.log(getMaxOfFiveNumber(1, 9, 13, -7, 0));

// 3
// getMark(50)
// function getMark(mark) {
//     if (!mark) {
//         return "Iltmos tegishli qiymat kiriting"
//     }
//     if (mark < 60) {
//         return 'F';
//     } else if (mark < 70) {
//         return 'D';
//     } else if (mark < 80) {
//         return 'C';
//     } else if (mark < 90) {
//         return 'B';
//     } else if (mark < 100) {
//         return 'A';
//     } else {
//         return "A+";
//     }
// }

// Ekub

// function EKUB(x, y) {
//     while (x) {
//         let temp = x
//         x = y % x
//         y = temp
//     }
//     return y === 1 ? "Ekubi yo'q" : y
// }
// let result = EKUB(20, 15);
// console.log(result, "EKUB");
// fetch("https://bookzone-v2.herokuapp.com/api/sign-up", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ email: "sanjar@gmail.com", password: "12" }),
// }).then(function (res) {
//     return res.json()
// }).then(function (data) {

//     console.log(data);
// }).catch(err=> {
// })

// let errList = [
//     { field: "password", msg: "length must be at least 6 characters long" }
// ]

// function then(callback) {
//     // malaiyotlar
//     let obj = { name: "sanjar" }
//     callback(obj)
// }

// then(function (data) {
//     console.log(data);
// })


// 1
// let protect_email ="abdulahatov03@gmail.com";
// console.log(protect_email.substring(0,5) + '...' + protect_email.substring(protect_email.indexOf("@"),protect_email.length));

// function protect_email(email) {
//     return email.substring(0, 5) + '...' + email.substring(email.indexOf("@"), email.length)
// }
// console.log(protect_email("robin_singh@example.com"));

// 2
// function string_parameterize(str) {
//        return str.split(' ').join('-').toLowerCase();
//     return str.replace(/\s/g,'-').toLowerCase();
// }
// console.log(string_parameterize("Robin Singh from USA."));

// 3
// function repeat(str, count) {
//         return  str.repeat(count)
// }
// console.log(repeat('Ha!',7));


// 1
// function protect_email(email) {
//     return email.substring(0,5) + '...' +  email.substring(email.indexOf('@'),email.length)
// }
// console.log(protect_email("javohirweb@example.com")

// 2
// function string_parameterize(str) {
//     return str.split(' ').join('-').toLowerCase()
// }
// console.log(string_parameterize("Robin Singh from USA."));

// 3
// function repeat(str,count=1) {
//     return str.repeat(count)
// }
// console.log(repeat('Ha!',2));

// 4
// let $ = 11200;
// function convertor(amount, currancy) {
//     if (currancy === 'USD') {
//         return ($ * amount).toFixed(2) + ' UZS'
//     }else{
//         return (amount / $).toFixed(2) + ' USD'
//     }

// }
// console.log(convertor(200, 'USD'),convertor(12000000, 'UZS'));


// if else 
// 1
// let temp = prompt('What\'s thw "official" name of Javascript');
//     if (temp === 'ECMAScript') {
//         alert('Right!')
//     } else {
//         alert('You don\'t know ? ECMAScript!');
//     }

// 2
// let temp = prompt('Enter the number');
// if (temp == 1) {
//     alert(`${temp} is greater than zero`)
// }else if(temp==-1){
//     alert(`${temp} is less than zero`)
// }else if(temp==0){
//     alert(`${temp} equals zero`)   
// }else{
//     alert('enter the appropriate number')
// }

// 3

// let result;

// if (a + b < 4) {
//     result = 'Below';
// } else {
//     result = 'Over';
// }

// a + b < 4 ? result = 'Below' : result = "Over";

// 4
// let message = 'hello';

// if (login == 'employee') {
//     message = 'hello'
// } else if (login == 'director') {
//     message = 'greetings'
// } else if (login = '') {
//     message = 'no login'
// } else {
//     message = ''
// }

// ternary operator
// login == 'Emplyee'
//     ? message = 'hello'
//     : login == 'Diroctor'
//         ? message = 'ggreetings'
//         : login == ''
//             ? message = 'no login'
//             : message = ''

// OBJECT EXAMPLES
//Examples
// 1
// let user ={name:'John', surName:'Smith'};
// user.name='Pete';
// delete user.name
// console.log(user);

// 2
//  let salaries={
//     John: 100,
//     Ann:160,
//     Pete:130
//  }

//  for (const key in salaries) {
//     let sum = 0;
//     sum+=salaries[key]

//  }

// let arrayIntegers = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
// console.log(arrayIntegers,arrayIntegers1);

// let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
// let arrayIntegers1 = arrayIntegersOriginal1.splice(0, 2);
// console.log(arrayIntegersOriginal1, arrayIntegers1);



//Object examples
// 1
// let obj={
//         id:1,
//         name:"WebBrain"
//     }
//     for (const key in obj) {
//        console.log(key);
//     }

// 2
// let obj = {
//     id: 1,
//     name: "WebBrain",
// };
// for (const key in obj) {
//     let value = obj[key];
//     if (Number(value)) {
//         console.log(key);
//     }
// }

// 3
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// }

// for (const key in obj) {
//     let value = obj[key];
//     if (value === true || value === false) {
//         console.log(key, obj[key]);
//     }
// }

// 4
// let obj = {
//     id: 1,
//     name: "WebBrain",
//     offline: true,
//     online: true,
//     individual: false
// }
// function Search(obj, str) {
//     for (const key in obj) {
//         if (obj[key] == str){
//             return `${key}: ${obj[key]}`
//         }
//     }
// }
// console.log(Search(obj, 'WebBrain'));
