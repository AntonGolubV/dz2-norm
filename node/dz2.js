/* 1. Арифметические операции:

a) Напишите код, который сложит два числа (например, 5 и 7) и выведет результат на консоль.
c) Напишите код, который поделит одно число на другое (например, 10 на 2) и выведет результат на консоль. */
let a = 5;
let b = 7;
let c = a + b;
console.log(`1a: ${c}`);

let d = 10;
let m = 2;
let k = d / m;
console.log(`2c: ${k}`);


/* 2. Ветвление: */
/*  a) Напишите код, который проверит, является ли число четным. 
Если число четное, выведите на консоль сообщение "Число четное", 
иначе выведите "Число нечетное".
 */
let l= 10;
if (l % 2 == 0) {
  console.log("Число чётное");
}
if (l % 2 != 0) {
  console.log("Число нечётное");
}

/* c) Напишите код, который проверит, является ли число положительным,
 отрицательным или нулем. Выведите на консоль соответствующее сообщение. */ 
 let n= 10;
if (n > 0) {
  console.log("ЧИСЛО ПОЛОЖИТЕЛЬНОЕ");
}
if (n == 0) {
  console.log("0");
}
if (n <= 0) {
  console.log("Число отрицательное");
} 


/* 3. Циклы:
 b) Напишите код, который выведет на консоль сумму всех чисел от 1 до 100  */
let sum = 0;
for(let i = 0; i<= 100; i++){
    sum+=i;
}
console.log(`3a: ${sum}`); 

/* c) Напишите код, который выведет на консоль таблицу умножения на 5 (от 1 до 10). */
console.log('3c:')
for(let i = 1; i <= 10; i++){
    let v = 5 * i;
    console.log(v);
}


/* 4. Массивы:
a) Создайте массив чисел [1, 2, 3, 4, 5]. Напишите код, который выведет на консоль сумму всех элементов массива. */
let arr = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let item of arr) {
  sum1 += item;
}
console.log(`4a: ${sum1}`);

/* b) Создайте массив строк ["яблоко", "банан", "груша", "апельсин"]. 
Напишите код, который выведет на консоль длину каждой строки в массиве. */
let arr1 =  ["яблоко", "банан", "груша", "апельсин"];
let len = 0;
for(let item of arr1){
    console.log(`4b: ${item.length}`);
}


/* 5. Объекты:
a) Создайте объект с информацией о человеке: имя, возраст, место жительства.
 Напишите код, который выведет на консоль всю информацию о человеке. */

let obj = {
  name: 'Alex',
  age: 15,
  place: "Minsk",
};
for (let key in obj) {
  console.log(`5a: ${obj[key]}`);
}


/* c) Создайте объект с информацией о книге: название, автор, год издания.
 Напишите код, который выведет на консоль информацию о книге в формате
  "Название книги - Автор (Год издания)". */
let obj1 = {
  name: "Гарри Поттер и философский камень",
  autor: "Джоан Роулинг",
  age: 1997,
};
console.log(`5c: ${obj1.name} - ${obj1.autor} ${(obj1.age)}`)


/* 6. Функции:
a) Напишите функцию, которая принимает два числа в качестве аргументов и возвращает их сумму. */
function asd(a, b) {
  console.log(`6a: ${a + b}`);
}
asd(1, 2);


const contentTypes = {
    ".ico": "image/x-icon",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".gif": "image/gif",
  
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
  };


  const http = require("http");
  const fs = require("fs");       //модуль для работы с  (ФС) файловой системой
  const path = require("path");   //модуль для работы с путями в ФС
  

  

  web = http.createServer(function (request, response) {
    
  
    switch (request.url) {
      case "/":
        response.writeHead(301, {
          Location: "/index.html",
          "Content-Type": "text/html; charset=utf-8",
        });
        response.end();
        break;

      default:
        const filePath = path.join("./public", request.url.substring(1));
        console.log(filePath);

        fs.access(filePath, fs.constants.R_OK, (err) => {
          if (err) {  
            response.writeHead(404, {
              "Content-Type": "text/html; charset=utf-8",
            });
  
            response.end("<h1>Not found</h1>");
          } else {    
            const extname = path.extname(filePath);  
            const contentType =
              contentTypes[extname] || "application/octet-stream";
            response.writeHead(200, {
              "Content-Type": contentType,
            });
            fs.createReadStream(filePath).pipe(response);
          }
        });
    }
  });
  
  web.listen(2008, "127.0.0.1", function () {
    console.log("start 127.0.0.1:2008");
  });