 // Task 1
 let a1 = [5, 7, 9, 11, 13, 15];
 let out1 = document.querySelector(".out-1");

 function func1(arr, out) {
      let a1_res = "";
      for (let i = 0; i < arr.length; i++) {
           a1_res += arr[i] + " ";
      }
      out.innerHTML = a1_res;
      return a1_res;
 }

 document.querySelector(".b-1").addEventListener("click", () => {
      func1(a1, out1);
 });


 // Task 2
 let a2 = [5, 7, 9, 11, 13, 15];
 let out2 = document.querySelector(".out-2");

 function func2(arr, out) {
      let a2_res = "";
      for (let i = 0; i < arr.length; i++) {
           a2_res += `${i} - ${arr[i]}` + "<br>";
      }
      out.innerHTML = a2_res;
 }

 document.querySelector(".b-2").addEventListener("click", () => {
      func2(a2, out2);
 });



 // Task 3
 let div3 = document.getElementsByClassName("u-3");

 function func3(div) {
      for (let i = 0; i < div.length; i++) {
           div[i].textContent = 3;
      }
 }

 document.querySelector(".b-3").addEventListener("click", () => {
      func3(div3);
 });


 // Task 4
 function func4() {
      let div = document.querySelectorAll(".u-3");
      for (let i = 0; i < div.length; i++) {
           div[i].textContent = 4;
      }
 }

 document.querySelector(".b-4").addEventListener("click", () => {
      func4();
 });

 // Task 5
 function func5() {
      let divs = document.getElementsByClassName("u-3");
      let div = document.createElement("div");
      div.classList.add("u-3");
      divs.push(div);
 }
 document.querySelector(".b-5").onclick = func5;


 // Task 6
 function func6() {
      let divs = document.querySelectorAll(".u-3");
      let div = document.createElement("div");
      div.classList.add("u-3");
      divs.push(div);
 }
 document.querySelector(".b-6").onclick = func6;


 // Task 7
 let a7 = [
      [1, 2],
      [3, 4],
      [5, 6]
 ];
 let out7 = document.querySelector(".out-7");

 function func7(arr, out) {
      let a7_res = [];
      for (let i = 0; i < arr.length; i++) {
           for (let k = 0; k < arr[i].length; k++) {
                a7_res.push(arr[i][k]);
                out.textContent += arr[i][k] + " ";
           }
      }
      console.log(a7_res);
 }

 document.querySelector(".b-7").addEventListener("click", () => {
      func7(a7, out7);
 });




 // Task 8
 let a8 = [
      [1, 2, 3],
      [3, 4, 9],
      [5, 6]
 ];
 let out8 = document.querySelector(".out-8");

 function func8(arr, out) {
      let a8_res = "";
      for (let i = 0; i < arr.length; i++) {
           let max = 0;
           for (let k = 0; k < arr[i].length; k++) {
                if (k >= max) {
                     max = k;
                     console.log(k);
                }

           }
           a8_res += arr[i][max] + " ";
      }
      out.textContent = a8_res;
 }

 document.querySelector(".b-8").addEventListener("click", () => {
      func8(a8, out8);
 });


 // Tak 9 
 let a9 = [4, 6, 9, "hello"];
 let out9 = document.querySelector(".out-9");

 function func9(arr, out) {
      let a9_1 = {};
      for (let i = 0; i < arr.length; i++) {
           a9_1[arr[i]] = arr[i];
      }

      for (let key in a9_1) {
           out.innerHTML += `${key} : ${a9_1[key]}` + "<br>";
      }
 }

 document.querySelector(".b-9").addEventListener("click", () => {
      func9(a9, out9);
 });


 // Task 10
 let a10 = [5, 7, 9, 11, 13, 15];
 let out10 = document.querySelector(".out-10");

 function func10(arr, out) {
      let a10_res = "";

      for (let key in arr) {
           a10_res += arr[key] + " ";
      }
      out.innerHTML = a10_res;
 }

 document.querySelector(".b-10").addEventListener("click", () => {
      func10(a10, out10);
 });

 // Task 11
 let a11 = [5, 7, 9, 11, 13, 15];

 function func11(a11) {
      let a11_res = '';

      for (let key in a11) {
           a11_res += `${key}-${a11[key]},<br>`;
      }

      document.querySelector('.out-11').innerHTML = a11_res;

 }

 document.querySelector(".b-11").addEventListener("click", () => {
      func11(a11);
 });




 // Task 12
 function func12() {
      let divs = document.getElementsByClassName("u-12");

      for (let key in divs) {
           divs[key].textContent = 12;
      }

 }

 document.querySelector(".b-12").addEventListener("click", () => {
      func12();
 });



 // Task 13
 function func13() {
      let divs = document.querySelectorAll(".u-13");
      for (let key in divs) {
           divs[key].textContent = 13;
      }
 }

 document.querySelector(".b-13").addEventListener("click", () => {
      func13();
 });


 // task 14 --------------------
 let a14 = [
      [1, 2],
      [3, 4],
      [5, 6]
 ];
 let out14 = document.querySelector(".out-14");

 function func14(arr, out) {
      let a14_res = [];
      for (let key in arr) {
           for (let item in arr[key]) {
                a14_res.push(arr[key][item]);
                out.innerHTML += arr[key][item] + " ";
           }
      }
      console.log(a14_res);
 }

 document.querySelector(".b-14").addEventListener("click", () => {
      func14(a14, out14);
 });


 // task 15 --------------------
 let a15 = [
      [1, 2, 3],
      [3, 4, 9],
      [5, 6]
 ];
 let out15 = document.querySelector(".out-15");

 function func15(arr, out) {
      let a15_res = [];

      for (let key in arr) {
           let count = 0;
           for (let item in arr[key]) {
                if (item > count) {
                     count = item;
                }
           }
           a15_res.push(arr[key][count]);
           out.innerHTML += arr[key][count] + " ";
      }

 }

 document.querySelector(".b-15").addEventListener("click", () => {
      func15(a15, out15);
 });


 // task 16 --------------------
 let a16 = [4, 6, 9, "hello"];
 let out16 = document.querySelector(".out-16");

 function func16(arr, out) {
      let a16_res = {};
      for (let key in arr) {
           a16_res[arr[key]] = arr[key];
      }

      for (let key in a16_res) {
           out.innerHTML += `${key} : ${a16_res[key]}, <br>`;
      }

 }

 document.querySelector(".b-16").addEventListener("click", () => {
      func16(a16, out16);
 });


 // task 17 --------------------
 let a17 = [5, 7, 9, 11, 13, 15];
 let out17 = document.querySelector(".out-17");

 function func17(arr, out) {
      for (let key of arr) {
           out.textContent += key + " ";
      }

 }

 document.querySelector(".b-17").addEventListener("click", () => {
      func17(a17, out17);
 });



 // task 18 --------------------
 let a18 = [5, 7, 9, 11, 13, 15];
 let out18 = document.querySelector(".out-18");

 function func18(arr, out) {
      let a18_res = "";
      for (let key of arr) {
           a18_res += `${arr.indexOf(key)} : ${key}, <br>`;
      }
      out.innerHTML = a18_res;
 }

 document.querySelector(".b-18").addEventListener("click", () => {
      func18(a18, out18);
 });




 // task 19 --------------------
 function func19() {
      let divs = document.getElementsByClassName("u-19");
      for (let key of divs) {
           key.textContent = 19;
      }
 }

 document.querySelector(".b-19").addEventListener("click", () => {
      func19();
 });


 // Task 20;
 let a20 = [4, 6, 9, "hello"];
 let out20 = document.querySelector(".out-20");

 function func20(arr, out) {
      let a20_res = {};
      let display = "";

      for (let key of arr) {
           a20_res[key] = key;
      }

      for (let key in a20_res) {
           display += `${key} : ${a20_res[key]}, <br>`;
      }
      out.innerHTML = display;
 }

 document.querySelector(".b-20").addEventListener("click", () => {
      func20(a20, out20);
 });