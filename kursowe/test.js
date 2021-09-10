let zmienna = "pierwsza część tekstu";
let zmienna2 = " a to druga.";
let zmienna3 = "a to trzecia część. ";
let zmienna4 =  `zobaczymy czy się da wcisnąć
enter ${zmienna3}`;
let zmienna5 = 2;
let num1 = 3;
let num2 = 9;
let num3 = "";
num1 += 122;
let sum1 = num1 * num2;
let typ = typeof sum1;
const imie = "janekf";
const nazwisko = "kowalf";
const arr = [2,6,9,4,9,44,27,365];
// delete arr[1];
arr.splice(2, 1);
for (let i = 0; i < arr.length; i++){
    sum1 = arr[i]; 
}
const objekt = {
    o1: zmienna,
    o2: zmienna2,
    "o3 i cos": zmienna3,
    o4: zmienna4,
    o5: zmienna5
};

if (num2 != 6) {
    zmienna = " num2 nie równa się sześć.";
} else {
    zmienna = " num2 jest równa sześć.";
}

if (imie === "janek" || nazwisko === "kowal") {
   zmienna = " albo janek albo kowal ";
}
if (imie === "janek" && nazwisko === "kowal") {
   zmienna = " i janek i kowal ";
}
if (!num3) {
    zmienna = "num3 nie został podany";
}

// skrót do if else
zmienna = num3 ? "num3 jest prawdziwe" : "nie ma num3";
zmienna2 = "cyfra ze zbioru - " + arr[1] + arr.length;
zmienna3 = add();

zmiana(num3, 7); // zmienia num3
display();
// FUNKCJE
function display() {
    document.getElementById("demo").innerHTML = "<div class = 'g'>num3</div> - " + num3 + objekt.o1 + "</br>" + "<div class = 'g'> sum1</div> - " + sum1 +  "</br>" + "<div class = 'g'> sum2</div> - " + sum2(num3, 10) + "</br>" + "<div class = 'g'> zmienna</div> - " + zmienna + "</br>" +"<div class = 'g'> zmienna2</div> - " + zmienna2 + "</br>" + "<div class = 'g'> zmienna3</div> - " + zmienna3 + add();
}
function sum2(p1, p2) {
    return p1 * p2;
  }
  function zmiana(but1, but2) {
    num3 = but1 + but2;
    }
function add () {
    return "hello";
}   

// loteria
let r1 = Math.random() * (10 - 5) + 5
let r2 = Math.round(Math.random() * (10 - 5) + 5)

function getrandom (min, max) {
   let res =  Math.round(Math.random() * (max - min) + min);
   return res;
}

function getrandomnumber() {
    const numbers = []; 
    let random;
       for (i = 0; i < 6; i++) {

        random = getrandom(1, 49);

        while(numbers.includes(random)) {
            random = getrandom(1, 49);
            // console.log(`powtórzyła sie liczba ${random}`);
        }
        numbers.push(random);
       }
       return numbers;
}
let numbers = getrandomnumber();
console.log(getrandom(33, 77), r2);
// console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.all);

// while(prompt("podaj hasło") !=num1)
// {alert('hasło nieprawidłowe');
// }
// alert('hasło prawidłowe');