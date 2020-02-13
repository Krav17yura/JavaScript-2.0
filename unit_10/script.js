 // Task 1
 const arr1 = ["Yura", 20, true];

 console.log(arr1);


 // Task 2
 const arr2 = ["Yura", 20, true];

 document.querySelector(".out-2").innerHTML = arr2;


 // Task 3
 const arr3 = [2, 'hello', 17, 34, 'privet'];

 console.log(arr3.length);


 // Task 4
 const arr4 = [2, 'hello', 17, 34, 'privet'];

 console.log(arr4[0]);
 console.log(arr4[3]);
 console.log(arr4[8]);


 // Task 5
 const arr5 = [2, 'hello', 17, 34, 'privet'];
 let sum = arr5[0] + arr5[2] + arr5[3];

 console.log(sum);


 // Task 6
 const arr6 = ["Yura", "lion", 31, 07];

 document.querySelector(".out-6").innerHTML = arr6;


 // Task 7
 let arr7 = ['one', 1, 2, 'two'];
 arr7.push("hi");
 arr7.push('foo');
 arr7.push('bar');

 document.querySelector(".out-7").innerHTML = arr7;


 // Task 8
 let arr8 = ['one', 1, 2, 'two'];
 arr8[3] = 3.14;
 arr8[4] = 17;
 arr8[6] = 5;

 document.querySelector(".out-8").innerHTML = arr8;
 console.log(arr8);


 // Task 9
 const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 console.log(arr9[2]);
 console.log(arr9[6]);
 console.log(arr9);


 // Task 10
 const arr10 = [];
 arr10[0] = 1;
 arr10[4] = 5;
 arr10[9] = 10;
 console.log(arr10);
 document.querySelector(".out-10").innerHTML = arr10;
 console.log(arr10.length);


 // Task 11


 document.querySelector(".btn-11").addEventListener("click", () => {
     let c = [77, 88, 99, 66];
     let i = c[0];
     let k = c[2];

     c[0] = k;
     c[2] = i;
     return console.log(c);
 });


 // Task 12
 let arr12 = [77, 88, 99, 66];

 function func12(arr) {
     let a1 = arr[0];
     let a2 = arr[arr.length - 1];
     arr[0] = a2;
     arr[arr.length - 1] = a1;
     return console.log(arr);
 }
 func12(arr12);

 // Task 13
 let d = ['y', 4, 22, 'o'];
 let out = "";
 for (let i = 0; i < d.length; i++) {
     out += d[i] + " ";
 }
 document.querySelector(".out-13").innerHTML = out;


 // Task 14
 let e = [1, 2, 3, 'hello', 66];
 let out14 = "";
 for (let i = e.length - 1; i >= 0; i--) {
     out14 += e[i] + " ";
 }
 document.querySelector(".out-14").innerHTML = out14;

 // Task 15
 let d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
 let out15 = "";
 for (let i = 0; i < d15.length; i++) {
     if (d15[i] > 0) {
         out15 += d15[i] + " ";

     }
 }

 document.querySelector(".out-15").innerHTML = out15;


 // Task 16
 let d16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
 let a1 = [];
 let a2 = [];

 for (let i = 0; i < d16.length; i++) {
     if (d16[i] % 2 == 0) {
         a1.push(d16[i]);
     } else {
         a2.push(d16[i]);
     }
 }

 document.querySelector(".out-16").innerHTML = a1;
 document.querySelector(".out-166").innerHTML = a2;

 // Task 17
 let arr17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0, 0];
 let count = 0;
 for (let i = 0; i < arr17.length; i++) {
     if (arr17[i] == 0) {
         count++;
     }
 }
 console.log(count);


 // Task 18
 let arr18 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0, 1];
 let max = 0;
 for (let i = 0; i < arr18.length; i++) {
     if (arr18[i] > max) {
         max = arr18[i];
     }
 }
 console.log(max);


 // Task 19
 let f = [-3, 0, 45, 22, 123, -485, 98, 34];
 let max19 = 0;
 let index = 0;
 for (let i = 0; i < f.length; i++) {
     if (f[i] > max19) {
         max19 = f[i];
         index = i;
     }
 }

 console.log(index);

 // Task 20
 let arr20 = [-3, 0, 45, 22, 123, -485, 98, 34];
 let sum20 = 0;
 for (let i = 0; i < arr20.length; i++) {
     sum20 += arr20[i];
 }

 console.log(sum20);