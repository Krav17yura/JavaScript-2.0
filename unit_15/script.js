 // Task 1
 let a1 = new Set();
 let out1 = document.querySelector(".out-1");

 function func15(arr, out) {
      arr.add(1);
      out.innerHTML = arr;

 }

 document.querySelector(".b-1").addEventListener("click", () => {
      func15(a1, out1);
 });


 // Task 2
 let input2 = document.querySelector(".i-2");
 let a2 = new Set();

 function func2(input, arr) {
      if (input2.value.trim().length > 0) {
           arr.add(input.value);
           input.value = "";
           console.log(arr);
      } else {
           console.log("Введите значение");
      }

 }

 document.querySelector(".b-2").addEventListener("click", () => {
      func2(input2, a2);
 });


 // Task 3
 let input3 = document.querySelector(".i-3");

 function func3(input, arr) {
      if (input.value.trim().length > 0) {
           a2.delete(input.value);
           input.value = "";
           console.log(arr);
      }

 }

 document.querySelector(".b-3").addEventListener("click", () => {
      func3(input3, a2);
 });


 // Task 4
 let input4 = document.querySelector(".i-4");
 let out4 = document.querySelector(".out-4");

 function func4(input, arr, out) {
      if (input.value.trim().length > 0) {
           if (arr.has(input.value)) {
                console.log(true);
                out.innerHTML = true;
                return true;
           } else {
                console.log(true);
                out.innerHTML = false;
                return false;
           }
      } else {
           console.log("Введите значение");
      }
      input.value = "";
 }

 document.querySelector(".b-4").addEventListener("click", () => {
      func4(input4, a2, out4);
 });

 // Task 5
 let out5 = document.querySelector(".out-5");

 function func5(arr, out) {
      out.textContent = arr.size;
      return arr.size;
 }

 document.querySelector(".b-5").addEventListener("click", () => {
      func5(a2, out5);
 });

 // Task 6
 let a6 = [3, 4, 3, 2, 4, 56, 1, 23, 8];
 let out6 = document.querySelector(".out-6");

 function func6(arr, out) {
      arr = new Set(arr);
      let size = arr.size;
      out.textContent = size;
      return size;
 }

 document.querySelector(".b-6").addEventListener("click", () => {
      func6(a6, out6);
 });


 // Task 7
 let input7 = document.querySelector(".pass");
 let out7 = document.querySelector(".out-7");

 function func7(input, out) {
      input = input.value.split("");
      let result;
      if (input.length > 6) {
           let pass = new Set(input);
           if (input.length == pass.size) {
                out.textContent = "";
                result = true;
           } else {
                result = false;
                out.textContent = "Символы не должны повторятся";
           }

      } else {
           out.textContent = "Пароль должен иметь более 6 символов";
      }

      return console.log(result);
 }

 document.querySelector(".b-7").addEventListener("click", () => {
      func7(input7, out7);
 });



 // Task 8
 let a8 = new Set();
 a8.add(1);
 a8.add(2);
 a8.add(3);
 a8.add(4);
 a8.add(5);
 a8.add(6);
 a8.add(7);
 a8.add(8);
 a8.add(9);
 a8.add("10");
 a8.add("hello");
 let out8 = document.querySelector(".out-8");

 function func8(arr, out) {
      arr = Array.from(arr);
      let a8_res = [];
      for (let i = 0; i < arr.length; i++) {
           if (arr[i] % 2 == 0) {
                a8_res.push(arr[i]);
           }
      }
      console.log(a8_res);

      for (let i = 0; i < a8_res.length; i++) {
           out.textContent += a8_res[i] + " ";
      }

 }

 document.querySelector(".b-8").addEventListener("click", () => {
      func8(a8, out8);
 });



 // Tak 9 
 let a9 = new Set();
 a9.add(1);
 a9.add(2);
 a9.add(3);
 a9.add(4);
 a9.add(5);
 a9.add(6);
 a9.add(7);
 a9.add(8);
 a9.add(9);
 a9.add("10");
 a9.add("hello");

 function func9(arr) {
      arr = Array.from(arr);
      let a9_res = arr.reverse();
      for (let i = 0; i < a9_res.length; i++) {
           document.querySelector(".out-9").textContent += a9_res[i] + " ";
      }

 }

 document.querySelector(".b-9").addEventListener('click', () => {
      func9(a9);
 });

 // Task 10
 let arr10 = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9];
 let out10 = document.querySelector(".out-10");

 function func10(arr, out) {
      let a10_res = {};

      let arrSet = new Set(arr);
      for (let key of arrSet) {
           let count = 0;
           for (let i = 0; i < arr.length; i++) {
                if (key == arr[i]) {
                     count++;
                }
           }
           a10_res[key] = count;
      }
      for (let key in a10_res) {
           out.innerHTML += `${key} : ${a10_res[key]}` + "<br>";
      }

 }

 document.querySelector(".b-10").addEventListener("click", () => {
      func10(arr10, out10);
 });
 // Task 11
 let input11 = document.querySelector(".i-11");
 let out11 = document.querySelector(".out-11");
 let a11_res = [];

 function func11(input, out) {

      if (a11_res.indexOf(input.value) == -1) {
           a11_res.push(input.value);
           console.log(a11_res);
           out.textContent = "";

           for (let i = 0; i < a11_res.length; i++) {
                out.textContent += a11_res[i] + " ";
           }
           input.value = "";
      } else {
           out.textContent = "El должен быть уникальным";
      }

      input.value = "";

 }

 document.querySelector(".b-11").addEventListener("click", () => {
      func11(input11, out11);
 });



 // Task 12
 let arr12 = new Set();
 arr12.add(1);
 arr12.add(2);
 arr12.add(3);
 arr12.add(4);
 arr12.add(5);
 arr12.add("hello");

 let out12 = document.querySelector(".out-12");

 function func12(arr, out) {
      let a12_res = Array.from(arr);
      for (let i = 0; i < a12_res.length; i++) {
           out.textContent += a12_res[i] + " ";
      }

 }

 document.querySelector(".b-12").addEventListener("click", () => {
      func12(arr12, out12);
 });


 // Task 13
 let arr13 = new Set();
 arr13.add(1);
 arr13.add(2);
 arr13.add(3);
 arr13.add(4);
 arr13.add(5);
 arr13.add("hello");

 let out13 = document.querySelector(".out-13");

 function func13(arr, out) {
      for (let key of arr) {
           out.textContent += key + ", ";
      }

 }

 document.querySelector(".b-13").addEventListener("click", () => {
      func13(arr13, out13);
 });

 // task 14 --------------------
 let arr14 = new Set();
 arr14.add(1);
 arr14.add(2);
 arr14.add(3);
 arr14.add(4);
 arr14.add(5);
 arr14.add("hello");

 let out14 = document.querySelector(".out-14");
 let rozdel = "-";

 function func14(arr, out, rozdel) {
      for (let key of arr) {
           out.textContent += `${key}${rozdel}`;
      }
 }

 document.querySelector(".b-14").addEventListener("click", () => {
      func14(arr14, out14, rozdel);
 });


 // task 15 --------------------
 let arr15 = [
      [1, 0],
      [1, 0],
      [2, 0]
 ];

 let out15 = document.querySelector(".out-15");

 function func15(arr, out) {
      let a15_res = new Set();
      let out228 = "";

      for (let i = 0; i < arr.length; i++) {
           a15_res.add(arr[i]);
      }

      for (let key of a15_res) {
           for (let i = 0; i < key.length; i++) {
                out.innerHTML += `${key[i]}`;
           }
           out.innerHTML += "<br>";
      }

 }

 document.querySelector(".b-15").addEventListener("click", () => {
      func15(arr15, out15);
 });

 // task 16 --------------------
 let a16 = [{
           Ivan: 1
      },
      {
           Ivan: 1
      },
      {
           Ivan: 2
      },
      {
           Serg: 0
      }
 ];
 let out16 = document.querySelector(".out-16");

 function func16(arr, out) {
      let a16_res = new Set();

      for (let i = 0; i < arr.length; i++) {
           a16_res.add(arr[i]);
      }


      for (let key of a16_res) {
           for (let value in key) {
                out.innerHTML += `${value}: ${key[value]}`;
           }
           out.innerHTML += "<br>";
      }

 }

 document.querySelector(".b-16").addEventListener("click", () => {
      func16(a16, out16);
 });





 // task 17 --------------------
 let u17 = 'Primer';

 function func17(stroka) {
      let arr = new Set(stroka);
      console.log(arr);

 }

 document.querySelector(".b-17").addEventListener("click", () => {
      func17(u17);
 });




 // task 18 --------------------
 let a18 = [5, 7, 9, 11, 13, 15];
 let out18 = document.querySelector(".out-18");

 function func18(arr, out) {
      console.log(arr);
      let a18_res = "";

      for (let key of arr) {
           a18_res += `${arr.indexOf(key)}--${key},` + "<br>";
      }
      out.innerHTML = a18_res;
 }

 document.querySelector(".b-18").addEventListener("click", () => {
      func18(a18, out18);
 });



 // task 19 --------------------
 let arr19 = new Set();
 arr19.add(1);
 arr19.add(2);
 arr19.add(3);
 arr19.add(4);
 arr19.add(5);
 arr19.add(6);
 arr19.add(7);
 arr19.add(8);
 arr19.add(9);
 arr19.add(10);

 let out19 = document.querySelector(".out-19");

 function func19(arr, out) {
      arr = Array.from(arr);
      for (let i = 0; i < arr.length; i += 2) {
           out.textContent += arr[i] + " ";
      }

 }

 document.querySelector(".b-19").addEventListener("click", () => {
      func19(arr19, out19);
 });

 // Task 20;
 let arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

 function func20(arr) {
      let s20_res = new Set();
      let s21_res = new Set();

      for (let i = 0; i < arr.length; i++) {
           if (arr.indexOf(arr[i]) % 2 == 0) {
                s20_res.add(arr[i]);
           } else {
                s21_res.add(arr[i]);
           }
      }
      console.log(arr);
      console.log(s20_res);
      console.log(s21_res);

 }

 document.querySelector(".b-20").addEventListener("click", () => {
      func20(arr20);

 });

 // Task 21 
 let arr21 = [5, 7, 9, 11, 13, 15];
 let select21 = document.querySelector(".sign").value;
 let out21 = document.querySelector(".out-21");

 function func21(arr, select, out) {
      out.innerHTML = " ";
      for (let i = 0; i < arr.length; i++) {
           out.innerHTML += `${arr.indexOf(arr[i])}${select}${arr[i]}` + "<br>";
      }
 }

 document.querySelector(".b-21").addEventListener("click", () => {
      func21(arr21, select21, out21);
 });