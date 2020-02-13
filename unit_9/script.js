 // Task 1
 function func1() {
     document.querySelector("p.u-1").addEventListener('click', function () {
         this.style.width = "200px";
         this.style.height = "100px";
     });
 }
 func1();

 // Task 2
 function func2() {
     document.querySelector(".u-2").classList.add("css-1");
 }
 func2();



 // Task 3

 let a = document.querySelectorAll(".u-3");

 for (let i = 0; i < a.length; i++) {
     a[i].addEventListener("click", function func3() {
         this.style.background = "red";
     });
 }



 // Task 4
 let div4 = document.querySelectorAll(".u-4");

 for (let i = 0; i < div4.length; i++) {
     div4[i].addEventListener("click", function func4() {
         this.classList.add("css-2");
     });
 }


 // Task 5

 let div5 = document.querySelectorAll(".u-5");

 for (let i = 0; i < div5.length; i++) {
     div5[i].addEventListener("click", function func5() {
         this.classList.remove("css-3");
     });
 }



 // Task 6
 document.querySelector(".u-6").addEventListener("click", function func6() {
     this.classList.toggle("active");
 });


 // Task 7
 function func7() {
     let div7 = document.querySelectorAll(".css-3");

     return div7.length;
 }


 // Task 8
 function func8() {
     let div8 = document.querySelectorAll("p.u-1");

     for (let i = 0; i < div8.length; i++) {
         div8[i].setAttribute('title', 'test-dada');
     }
 }


 // Task 9

 let div9 = document.querySelectorAll(".u-9");

 for (let i = 0; i < div9.length; i++) {
     div9[i].addEventListener('click', function func9() {
         return console.log(this.getAttribute('data'));
     });
 }



 // Task 10
 function func10() {
     let div10 = document.querySelectorAll(".u-10__button");
     let out10 = document.querySelector(".u-10__out");

     for (let i = 0; i < div10.length; i++) {
         div10[i].addEventListener("click", function () {
             out10.innerHTML = getData(this);
         });
     }
 }
 func10();

 function getData(el) {
     let dataCurrency = el.getAttribute("data-currency");
     let ratio;
     if (dataCurrency == "euro") {
         ratio = 0.9;
     } else if (dataCurrency == "usd") {
         ratio = 1;
     } else {
         ratio = 64.2;
     }
     return ratio;

 }


 // Task 11
 function func11() {
     let div11 = document.querySelectorAll(".u-11__button");
     let out11 = document.querySelector(".u-11__out");
     for (let i = 0; i < div11.length; i++) {
         div11[i].addEventListener("click", function () {
             out11.innerHTML = calculValut(this);
         });
     }
 }
 func11();

 function calculValut(el) {
     let input11 = document.querySelector(".u-11_out").value;
     let data = el.getAttribute('data-currency');
     let ratio;
     if (data == "euro") {
         ratio = 0.9 * input11;
     } else if (data == "usd") {
         ratio = 1 * input11;
     } else {
         ratio = 64.2 * input11;
     }
     return ratio;

 }


 // Task 12
 function func12() {
     let div12 = document.createElement("div");
     div12.classList.add('css-4');
     return div12;
 }



 // Task 13
 function func13() {
     let p13 = document.querySelector(".u-13");
     let span13 = document.createElement("span");
     span13.classList.add("span-13");
     span13.textContent = 13;
     p13.append(span13);
 }
 func13();



 // Task 14
 function func14() {
     let p14 = document.querySelector(".u-14");
     let span14 = document.createElement("span");
     span14.classList.add("span-14");
     span14.textContent = 14;
     p14.prepend(span14);
 }
 func14();




 // Task 15
 function func15() {
     let p15 = document.querySelector(".u-15");
     let span15 = document.createElement("span");
     span15.classList.add("span-15");
     span15.textContent = 15;
     p15.before(span15);
 }
 func15();


 // Task 16
 function func15() {
     let bunnton16 = document.createElement("button");
     bunnton16.textContent = "Push";
     bunnton16.addEventListener("click", () => {
         console.log(16);
     });

     document.querySelector(".u-16__out").prepend(bunnton16);
 }



 // Task 17
 function func17() {
     let div17 = document.querySelector(".u-17");
     let b = document.createElement("p");
     b.textContent = 17;

     div17.before(b);
     div17.remove();

 }


 // Task 18
 let div18 = document.querySelectorAll(".out-18");

 for (let i = 0; i < div18.length; i++) {
     div18[i].addEventListener("click", function func18() {
         this.remove();
         return this;
     });
 }


 // Task 19
 function func19(text) {
     let li19 = document.createElement("li");
     li19.textContent = text;
     document.querySelector(".u-19").append(li19);
 }
 func19("lol");



 // Task 20
 function func20() {
     let input20 = document.createElement("input");
     let li = document.createElement('li');
     let checkbox = document.createElement('input');
     let ul = document.querySelector('.u-20');
     ul.before(input20);


     checkbox.type = 'checkbox';
     checkbox.value = 'Важное';
     input20.type = "text";
     let text = input20.value;
     input20.addEventListener("change", function () {
         li.innerText = text;
         li.prepend(checkbox);
         ul.append(li);

         checkbox.oninput = () => {
             li.classList.toggle('css-5');
         }

     });


 }
 func20();
 