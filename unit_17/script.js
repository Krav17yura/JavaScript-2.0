 // Task 1
 let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
 let out1 = document.querySelector(".out-1");

 function func1(arr, out) {
      let a1_res = arr.map((item) => {
           return item * 2;
      });

      for (let key of a1_res) {
           out.textContent += key + " ";
      }
 }

 document.querySelector(".b-1").addEventListener("click", () => {
      func1(a1, out1);

 });


 // Task 2
 let a2 = [2, 3, 4, 5, 10, 11, 12];
 let out2 = document.querySelector(".out-2");

 function func2(arr, out) {
      let a2_res = arr.map(item => {
           return Math.pow(item, 2);
      });

      for (let key of a2_res) {
           out.textContent += key + " ";
      }
 }

 document.querySelector(".b-2").addEventListener("click", () => {
      func2(a2, out2);
 });




 // Task 3
 let a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
 let out3 = document.querySelector(".out-3");

 function func3(arr, out) {
      let a3_res = arr.map(item => parseInt(item));

      for (let key of a3_res) {
           out.textContent += key + " ";
      }
      console.log(a3_res);
 }

 document.querySelector(".b-3").addEventListener("click", () => {
      func3(a3, out3);
 });


 // Task 4
 let a4 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
 let out4 = document.querySelector(".out-4");

 function func4(arr, out) {
      let a4_res = [];
      let kek = arr.map((item) => {
           if (typeof (item) == "number") {
                return a4_res.push(item);
           }
      });
      out.textContent = a4_res;
 }

 document.querySelector(".b-4").addEventListener("click", () => {
      func4(a4, out4);
 });

 // Task 5
 let b1 = [3, 14, 15, 92];
 let out5 = document.querySelector(".out-5");

 function func5(arr, out) {
      let b6_res = arr.filter(item => item % 2 == 0);
      out.textContent = b6_res;

 }
 document.querySelector(".b-5").addEventListener("click", () => {
      func5(b1, out5);
 });

 // Task 6 
 function func6() {
      let b6 = [3, 14, 15, 92, "6", "5", "hello", 32];

      let b6_res = b6.filter(item => typeof (item) == "number");

      document.querySelector(".out-6").textContent = b6_res;
 }

 document.querySelector(".b-6").onclick = func6;

 // Task 7
 function func7() {
      let b7 = ["php-7", "html", "css", 92, "6", "5", "hello", 32];

      let b7_res = b7.filter(item => typeof (item) == "string" && item.length > 3);

      document.querySelector(".out-7").textContent = b7_res;
 }
 document.querySelector(".b-7").onclick = func7;



 // Task 8
 function func8() {
      let b8 = [3, 14, 15, 92, "6", "5", "hello", 32];
      let b8_res = [];
      b8.filter((item, index) => {
           if (item % 2 == 0) {
                b8_res.push(index);
                return index;
           }
      });
      document.querySelector(".out-8").textContent = b8_res;
 }
 document.querySelector(".b-8").onclick = func8;



 // Tak 9 
 function func9() {
      let b9 = [3, "hello", 4, "world", 5, "hi"];
      let b9_num = [];
      let b9_string = [];

      b9.filter((item) => {
           if (typeof (item) === "number") {
                b9_num.push(item);
           } else {
                b9_string.push(item);
           }
      });
      console.log(b9_num);
      console.log(b9_string);
 }

 document.querySelector(".b-9").onclick = func9;



 // Task 10
 function func10() {
      let b10 = [
           [1, 2, 3],
           [3, 4, 6],
           [4, 5, 7],
           [8, 9, 3]
      ];

      let b10_res = b10.filter(item => item.indexOf(3) != -1);

      document.querySelector(".out-10").textContent = b10_res;

 }
 document.querySelector(".b-10").onclick = func10;