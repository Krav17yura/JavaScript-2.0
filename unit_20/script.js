// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/
function t1(event) {
     document.querySelector(".out-1").textContent = event.key;
     console.log(event);
     return event.key;
}
document.querySelector(".i-1").onkeypress = function (event) {
     t1(event);
};

// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
function t2(event, out) {
     out.textContent = event.keyCode;
     return event.cayCode;

}
document.querySelector(".i-2").onkeypress = function (event) {
     let out2 = document.querySelector(".out-2");
     t2(event, out2);
};

// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */
function t3(event, out) {
     if (event.keyCode >= 65 && event.keyCode <= 90) {
          out.textContent = true;

     } else if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode >= 96 && event.keyCode <= 105) {
          out.textContent = false;

     }
}
document.querySelector(".i-3").onkeydown = function (event) {
     let out3 = document.querySelector(".out-3");
     t3(event, out3);
};

// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */
function t4(event) {
     if (event.keyCode >= 65 && event.keyCode <= 90) {
          document.querySelector(".out-4").textContent += event.key.toLowerCase();
     }
}
document.querySelector(".i-4").onkeydown = t4;


// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */
function t5(event) {
     if (event.keyCode >= 65 && event.keyCode <= 90) {
          document.querySelector(".out-5").textContent += event.key.toUpperCase();
     }
}
document.querySelector(".i-5").onkeydown = t5;

// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */
function t6(elem, event) {
     if (event.keyCode >= 65 && event.keyCode <= 90) {
          elem.value += event.key.toLowerCase();
     }
}
document.querySelector(".i-6").onkeydown = function (event) {
     t6(this, event);
     return false;
};

// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */
 
function t7() {
     
     const a7 = ['A', 'q', 'w', 'E', 'r', 't', 'Y'];
     let random = Math.floor(Math.random() * Math.floor(a7.length));
        console.log(a7);
     document.querySelector('.out-7').textContent = a7[random];
 
 }
 document.querySelector('.i-7').onkeypress = t7;

// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */
function t8(event){
     let k = {
         i : 1,
         o : 0,
         l : 7
     };
     if(k[event.key]){
          document.querySelector(".out-8").textContent += k[event.key];
     }else{
          document.querySelector(".out-8").textContent += event.key;
     }

}
document.querySelector(".i-8").onkeydown = function (event) {
     t8(event);
};



// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t9, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let count = 0;
function t9(event){
      
     if(event.keyCode == 40){
          count++;
     }
     document.querySelector(".out-9").textContent = count;

}
document.querySelector(".i-9").onkeydown = t9;



// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */
function t10(event){
     let img = document.querySelector("img");
     let w = img.offsetWidth;
     let h = img.offsetHeight;

     if(event.keyCode == 37 || event.keyCode == 39){
          console.log(w);
          w++;
          img.style.width = w + "px";
     }else if(event.keyCode == 38 || event.keyCode == 40){
          h++;
          img.style.height = h + "px";
     }

}
document.querySelector(".i-10").onkeydown = t10;

// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */
let counter = 0;
let keys = document.querySelectorAll('[data-code]');

function t11_onkeydown(e) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].getAttribute('data-code') === e.code) {
            keys[i].classList.add('press');
            if (e.code === 'Tab' || e.code === 'AltLeft' || e.code === 'AltRight')
                return false;
            else if (e.code === 'CapsLock')
                counter++;
        }
    }
}

function t11_onkeyup(e) {
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].getAttribute('data-code') == e.code) {
            keys[i].classList.remove('press');
            if (e.code === 'CapsLock') {
                if (counter % 2 != 0)
                    keys[i].classList.add('press');
            }
        }
    }
}

document.querySelector('.i-11').onkeydown = t11_onkeydown;
document.querySelector('.i-11').onkeyup = t11_onkeyup;