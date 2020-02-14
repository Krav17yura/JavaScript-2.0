 // Task 1

 let out1 = document.querySelector(".out-1");
 let arr1 = [1, 2, 3, 4];

 function func1(arr, input) {
     arr.push(input);
     out1.textContent = arr;
     console.log(arr);
     return arr;
 }

 document.querySelector(".u-2_push").addEventListener("click", () => {

     func1(arr1, +document.querySelector(".u-1").value);
 });

 // Task 2
 document.querySelector(".u-2__pop").addEventListener("click", () => {
     func2(arr1);
 });

 function func2(arr) {
     arr.pop();
     out1.textContent = arr;
     console.log(arr);
     return arr;

 }

 // Task 3
 document.querySelector(".u-3__shift").addEventListener("click", () => {
     func3(arr1);
 });

 function func3(arr) {
     arr.shift();
     out1.textContent = arr;
     console.log(arr);
     return arr;
 }


 // Task 4
 document.querySelector(".u-4__unshift").addEventListener("click", () => {
     func4(arr1);
 });

 function func4(arr) {
     arr.unshift(1);
     out1.textContent = arr;
     console.log(arr);
     return arr;
 }

 // Task 5
 let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
 let indexInput5 = document.querySelector(".f-5");
 let numberIndex5 = document.querySelector(".s-5");

 document.querySelector(".u-5__splice").addEventListener("click", () => {
     if (indexInput5.value.trim().length > 0 && numberIndex5.value.trim().length > 0) {
         arr5.splice(indexInput5.value, numberIndex5.value);
         document.querySelector(".out-5").textContent = arr5;
         indexInput5.value = "";
         numberIndex5.value = "";
     } else {
         document.querySelector(".out-5").textContent = "Заполните поля";
         indexInput5.value = "";
         numberIndex5.value = "";
     }
 });


 // Task 6
 let arr6 = [1, 2, 3, 4, 5];
 let input6 = document.querySelector(".i-6");

 function funcPush(arr, input) {
     let index6 = arr.length;
     arr[index6] = +input.value;
     document.querySelector(".out-6").textContent = arr;
     console.log(arr);
     input.value = "";
 }

 document.querySelector(".btn-6").addEventListener("click", () => {
     funcPush(arr6, input6);
 });

 // Task 7
 let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

 function funcPop(arr) {

     arr.length = arr.length - 1;
     document.querySelector(".out-7").textContent = arr;
     console.log(arr);

 }

 document.querySelector(".btn-7").addEventListener("click", () => {
     funcPop(arr7);
 });


 // Task 8
 let arr8 = [1, 2, 3, 4, 5, 6, 7, 8];

 function funcShift(arr) {
     for (let i = 1; i < arr.length; i++) {
         arr[i - 1] = arr[i];
     }
     arr.length -= 1;
     document.querySelector(".out-8").textContent = arr;
     console.log(arr);

 }

 document.querySelector(".btn-8").addEventListener("click", () => {
     funcShift(arr8);
 });



 // Task 9

 let arr9 = [1, 2, 3, 4, 5, 6, 7, 8];
 let input9 = document.querySelector(".i-9");

 function funcUnShift(arr, input) {
     for (let i = arr.length; i > 0; i--) {
         arr[i] = arr[i - 1];
     }
     arr[0] = input.value;


     document.querySelector(".out-9").innerHTML = arr;
     console.log(arr);

 }

 document.querySelector(".btn-9").addEventListener("click", () => {
     funcUnShift(arr9, input9);
 });


 // Task 10
 let arr10 = [2, 4, 6, 8, 10, 'hello'];

 document.querySelector(".u-10__reverse").addEventListener("click", () => {
     document.querySelector(".out-10").textContent = arr10.reverse();
 });


 // Task 11
 let arr11 = [0, 2, 3, 7, 8, 5, 11];
 let u11 = document.querySelector(".u-11__input");

 function func11(arr, input) {
     document.querySelector(".out-11").textContent = arr.indexOf(+input.value);

 }

 document.querySelector(".u-11__button").addEventListener("click", () => {
     func11(arr11, u11);
 });



 // Task 12
 let arr12 = [0, 2, 3, 7, 8, 5, 11];
 let u12 = document.querySelector(".u-12__input");

 function func12(arr, input) {
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] == +input.value) {
             document.querySelector(".out-12").textContent = i;
             return i;
         } else {
             document.querySelector(".out-12").textContent = -1;
         }

     }

 }

 document.querySelector(".u-12__button").addEventListener("click", () => {
     func12(arr12, u12);
 });

 // Task 13
 let arr13 = [0, 2, 3, 7, 8, 5, 11];

 function func13(arr) {
     let newArr = [];
     let flag = 0;
     for (let i = arr.length - 1; i >= 0; i--) {
         newArr[flag] = arr[i];
         flag++;
     }
     document.querySelector(".out-13").textContent = newArr;

 }

 document.querySelector(".u-13__button").addEventListener("click", () => {
     func13(arr13);
 });
 // Task 14
 let input14 = document.querySelector(".u-14__input");
 let out14 = document.querySelector(".out-14");

 function func14(input, out) {
     let arr = [];
     for (let i = +input.value - 1; i >= 0; i--) {
         arr[i] = getRandomInt(100).toFixed(0);
     }
     out.textContent = arr;

 }

 function getRandomInt(max) {
     return Math.floor(Math.random() * Math.floor(max));
 }

 document.querySelector(".u-14__button").addEventListener("click", () => {
     func14(input14, out14);
 });
 // Task 15
 let arr15 = [0, 2, 3, 7, 8, 5, 11, 16, 18, 20, 21, 0, -2];
 let out15 = document.querySelector(".out-15");

 function func15(arr, out) {
     let newArr = [];
     let flag = 0;
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] != 0) {
             if (arr[i] % 2 == 0) {
                 newArr[flag] = arr[i];
                 flag++;
             }
         }
     }
     out.textContent = newArr;

 }
 document.querySelector(".u-15__button").addEventListener("click", () => {
     func15(arr15, out15);
 });


 // Task 16
 let arr16_1 = [3, 5, 7];
 let arr16_2 = [2, 4, 6];
 let out16 = document.querySelector(".out-16");

 function func16(arr, arr2, out) {
     out.textContent = arr.concat(arr2);
 }

 document.querySelector(".u-16__button").addEventListener("click", () => {
     func16(arr16_1, arr16_2, out16);
 });

 // Task 17
 let arr17_1 = [3, 5, 7];
 let arr17_2 = [2, 4, 6];
 let out17 = document.querySelector(".out-17");

 function func17(arr, arr2, out) {
     for (let i = 0; i < arr2.length; i++) {
         arr.push(arr2[i]);
     }
     out.textContent = arr;

 }

 document.querySelector(".u-17__button").addEventListener("click", () => {
     func17(arr17_1, arr17_2, out17);
 });
 // Task 18
 let input18 = document.querySelector(".u-18__input");
 let arr18 = [3, 5, 7, 11, 12, 13, 14];
 let out18 = document.querySelector(".out-18");

 function func18(input, arr, out) {
     out.textContent = arr.includes(+input.value);
 }

 document.querySelector(".u-18__button").addEventListener("click", () => {
     func18(input18, arr18, out18);
 });

 // Task 19
 let input19 = document.querySelector(".u-19__input");
 let arr19 = [3, 5, 7, 11, 12, 13, 14];
 let out19 = document.querySelector(".out-19");

 function func19(arr, input, out) {
     for (let i = 0; i < arr.length; i++) {
         if (arr[i] == +input.value) {
             out.textContent = true;
             break;
         } else {
             out.textContent = false;
         }
     }

 }

 document.querySelector(".u-19__button").addEventListener("click", () => {
     func19(arr19, input19, out19);
 });

 // Task 20
 let arr20 = [3, 5, 7, 11, 12, 13, 14];
 let out20 = document.querySelector(".out-20");

 function func20(arr, out) {
     out.textContent = arr.join("*");

 }

 document.querySelector(".btn-20").addEventListener("click", () => {
     func20(arr20, out20);
 });