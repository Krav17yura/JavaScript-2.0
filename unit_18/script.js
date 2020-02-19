 // Task 1
 let a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
 let out1 = document.querySelector(".out-1");

 function func1(arr, out) {
      let a1_res = [];
      arr.forEach(item => {
           a1_res.push(item * 2);
      });
      out.textContent = a1_res;
 }
 document.querySelector(".b-1").addEventListener("click", () => {
      func1(a1, out1);
 });



 // Task 2
 let a2 = [2, 3, 4, 5, 10, 11, 12];
 let out2 = document.querySelector(".out-2");

 function func2(arr, out) {
      let a2_res = [];
      arr.forEach(item => a2_res.push(item / 2));

      out.textContent = a2_res;
 }

 document.querySelector(".b-2").addEventListener("click", () => {
      func2(a2, out2);
 });




 // Task 3
 let a3 = [2, 'hello', 3, 'hi', 4, 'Mazai'];
 let out3 = document.querySelector(".out-3");

 function func3(arr, out) {

      let a3_res = [];
      arr.forEach(item => {
           if (typeof (item) == "number") {
                a3_res.push(item);
           }
      });

      out.textContent = a3_res;

 }
 document.querySelector(".b-3").addEventListener("click", () => {
      func3(a3, out3);
 });




 // Task 4
 function func4() {
      let spans = document.querySelectorAll(".task-4");
      let a4_res = [];

      spans.forEach(item => {
           a4_res.push(item.getAttribute('data'));
      });
      document.querySelector(".out-4").textContent = a4_res;

 }
 document.querySelector(".b-4").onclick = func4;


 // Task 5
 function func5(){
      let a5_res = [];
      a5_res.push(this.getAttribute("data"));
      document.querySelector(".out-5").textContent = a5_res;
 }

 document.querySelectorAll(".task-5").forEach(item => item.onclick = func5);
 


 // Task 6 
 function func6(){
    let str6='helloworld';
    let a6_res = [];
    a6_res = str6.split("");
    console.log(a6_res);
    document.querySelector(".out-6").textContent = a6_res;
 }
 document.querySelector(".b-6").onclick = func6;


 // Task 7
 function func7(){
      let str7='hello world hi mazai';
      let a7_res = [];
      a7_res = str7.split(" ");
      document.querySelector(".out-7").textContent = a7_res;
      
 }
 document.querySelector(".b-7").onclick = func7;



 // Task 8
 function func8(){
      let a8 = [1,2,66,77,15];
      let a8_res = a8.join("-");
      document.querySelector(".out-8").textContent = a8_res;


 }
 document.querySelector(".b-8").onclick = func8;



 // Tak 9 
 function func9(){
      let a9 = [["hi", "mahai"], ["test", "best"]];
      let a9_res = "";
      a9.forEach(item => {
         item.forEach(key => {
             a9_res += key +"-";
         });
      });
           
      
      document.querySelector(".out-9").textContent = a9_res;

 }

 document.querySelector(".b-9").onclick = func9;



 // Task 10
 function func10 (){
      let a10 = {name: "ivan", age: 15, sex: 1, id: 45};
      let a10_res ="";
      for(let key in a10){
           a10_res += `${key}=${a10[key]} & `;
      }
      console.log(a10_res);
      document.querySelector(".out-10").innerHTML = a10_res;

 }

 document.querySelector(".b-10").onclick = func10;