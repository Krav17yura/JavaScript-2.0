// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */
function t1(event, out) {
     out.textContent = event.textContent;
     return event.textContent;
}
document.querySelector(".div-1").onclick = function () {
     let out1 = document.querySelector(".out-1");
     t1(this, out1);
};

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
function t2(event, out) {
     out.textContent = event.altKey;
     console.log(event);
     return event.altKey;
}
document.querySelector(".div-2").onclick = function (event) {
     let out2 = document.querySelector(".out-2");
     t2(event, out2);
};


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */
let a = 75;

function t3(event, elem, out) {
     a += 5;
     //   event.target.style.width = a + "px";
     elem.style.width = a + "px";
     console.log(event.target);
     console.log(elem);
     out.textContent = a;
}
document.querySelector(".div-3").onclick = function (event) {
     let out3 = document.querySelector(".out-3");
     t3(event, this, out3);
};

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */
function t4(elem, out) {
     out.textContent = elem.textContent;
}
document.querySelector(".div-4").ondblclick = function () {
     let out4 = document.querySelector(".out-4");
     t4(this, out4);
};

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */
function t5(elem) {
     elem.classList.toggle("active");
}
document.querySelector(".div-5").ondblclick = function () {
     t5(this);
};

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */
function t6(elem) {
     elem.classList.toggle("hide");
}
document.querySelector(".div-6").onclick = function () {
     let u6 = document.querySelector(".ul-6");
     t6(u6);
};

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
function t7(elem, event) {
     elem.classList.toggle("active");
     event.preventDefault();
}
document.querySelector(".div-7").oncontextmenu = function (event) {
     t7(this, event);
};

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */
function t8(elem, event) {
     if (elem.checked) {
          document.documentElement.oncontextmenu = () => false;
     } else {
          document.documentElement.oncontextmenu = () => true;
     }
}
document.querySelector(".ch-8").onchange = function (event) {
     t8(this, event);
};


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
function t9(elem, event) {
     elem.querySelector("img").src = "img/2.png";
     event.preventDefault();
}
document.querySelector('.div-9').oncontextmenu = function (event) {
     t9(this, event);
};
// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */
function t10(event, elem) {
     elem.querySelector("img").src = "img/2.png";
     event.preventDefault();
}
document.querySelector(".div-10").onmouseenter = function (event) {
     t10(event, this);
};


// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
function t11(elem) {
     elem.querySelector("img").src = "img/2.png";

     document.querySelector(".div-11").onmouseleave = function () {
          this.querySelector("img").src = "img/1.png";
     };
}
document.querySelector(".div-11").onmouseenter = function () {
     t11(this);
};


// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
function t12(elem) {
     elem.classList.add("active");
}
document.querySelector(".div-12").onmousedown = function () {
     t12(this);
};



// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
function t13(elem) {
     elem.classList.add("active");

     document.querySelector(".div-13").onmouseup = function () {
          this.classList.remove("active");
     };
}
document.querySelector(".div-13").onmousedown = function () {
     t13(this);
};


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */
function t14(elem) {
     elem.classList.add("active");
}

document.querySelector(".b-14").onclick = () => {
     let elem14 = document.querySelector(".div-14");
     t14(elem14);
};

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */

function t15(elem) {
     elem.textContent++;

}
document.querySelector(".div-15").onmousemove = function () {

     t15(this);
};

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
function t16(elem) {
     let width = elem.offsetWidth;

     width++;
     elem.style.width = width + 'px';
}
document.querySelector(".div-16").onmousemove = function () {

     t16(this);
};

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */
let div16 = document.querySelector('.div-16');

function t17On(){
      div16.onmousemove = function (){
         t16(this);
      };
}
document.querySelector(".b-17_on").onclick = () => t17On; 


function t17Off(){
     div16.onmousemove = function (){
         this.style.width = this.offsetWidth + "px";
     };

}
document.querySelector(".b-17_off").onclick = () => t17Off;
 

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
function t18(elem) {
     elem.textContent = elem.offsetWidth + 'px';
 }
 document.querySelector('.div-18').onmouseenter = function () {
     t18(this);
 };


// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
function t19(elem) {
     elem.textContent = elem.classList;
 }
 document.querySelector('.div-19').onmouseout = function () {
     t19(this);
 };

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */
function t20(elem, out){
     elem.value ++;
     out.textContent = elem.value++;

}
document.querySelector("progress").onmousemove = function (){
   let out20 = document.querySelector(".out-20");
   t20(this, out20);
};