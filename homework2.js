// /////////////////////////////TASK1//////////////////////////////
// const minMaxFind = (a, b) => {
//   if (a == b) {
//     return 0;
//   } else if (a < b) {
//     return -1;
//   } else {
//     return 1;
//   }
// };
// //console.log(minMaxFind(5, 2));

// ////////////////////////////TASK2///////////////////////////////
// const factorialNumber = (f) => {
//   let res = 1;
//   for (let i = 2; i <= f; i += 1) {
//     res *= i;
//   }
//   return res;
// };
// //console.log(factorialNumber(5));

// ///////////////////////////TASK3///////////////////////////////
// const soedineniyeCifr = (number1, number2, number3) => {
//   return number1 * 100 + number2 * 10 + number3;
// };
// //console.log(soedineniyeCifr(9, 2, 5));

// //////////////////////////TASK4//////////////////////////////
// const resSquare = (length, width) => {
//   return length * length + width * width;
// };
// //console.log(resSquare(6, 2));

// //////////////////////////TASK5//////////////////////////////
// const checkNumber = (number) => {
//   let summa = 0;
//   for (let i = 1; i < number; i += 1) {
//     if (number % i == 0) {
//       summa += i;
//     }
//   }
//   return summa === number;
// };
// console.log(checkNumber(13));

///////////////////////////TASK6///////////////////////////////////
// const checkNumber = (number) => {
//   let summa = 0;
//   for (let i = 1; i < number; i += 1) {
//     if (number % i == 0) {
//       summa += i;
//     }
//   }
//   return summa === number;
// };

// const findNumberArray = (min, max) => {
//   for (let i = min; i <= max; i += 1) {
//     if (checkNumber(i)) {
//       console.log(i);
//     }
//   }
// };
// findNumberArray(1, 101);

/////////////////////////////TASK8//////////////////////////////
// const timeSeconds = (casi, minuti, sekundi) => {
//   return casi * 3600 + minuti * 60 + sekundi;
// };
// let casi = 1;
// let minuti = 25;
// let sekundi = 40;
// let resultSeconds = timeSeconds(casi, minuti, sekundi);
// console.log(resultSeconds);

////////////////////////////TASK9///////////////////////////////
// const secondsTime = (second) => {
//   const casi = Math.floor(second / 3600);
//   second %= 3600;
//   const minuti = Math.floor(second / 60);
//   second %= 60;

//   return `${casi.toString().padStart(2, "0")}:${minuti
//     .toString()
//     .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
// };
// let seconds = 5300;
// let time = secondsTime(seconds);
// console.log(time);

///////////////////////////TASK10///////////////////////////////
// const timeSeconds = (casi, minuti, sekundi) => {
//   return casi * 3600 + minuti * 60 + sekundi;
// };

// const secondsTime = (second) => {
//   const casi = Math.floor(second / 3600);
//   second %= 3600;
//   const minuti = Math.floor(second / 60);
//   second %= 60;

//   return `${casi.toString().padStart(2, "0")}:${minuti
//     .toString()
//     .padStart(2, "0")}:${second.toString().padStart(2, "0")}`;
// };

// const raznicaMejduDatami = (cas1, minuta1, sekund1, cas2, minuta2, sekund2) => {
//   let data1ToSeconds = timeSeconds(cas1, minuta1, sekund1);
//   let data2ToSeconds = timeSeconds(cas2, minuta2, sekund2);

//   let raznicaVsekundax;
//   if (data1ToSeconds > data2ToSeconds) {
//     raznicaVsekundax = data1ToSeconds - data2ToSeconds;
//   } else {
//     raznicaVsekundax = data2ToSeconds - data1ToSeconds;
//   }

//   return secondsTime(raznicaVsekundax);
// };

// let cas1 = 3;
// let minuta1 = 40;
// let sekund1 = 15;

// let cas2 = 5;
// let minuta2 = 20;
// let sekund2 = 30;

// let result = raznicaMejduDatami(cas1, minuta1, sekund1, cas2, minuta2, sekund2);
// console.log(result);
