window.addEventListener("DOMContentLoaded", () => {

    // Task 1
    //  Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
    let a = 7,
        b = 9;
    console.log(a + b);

    // Task 2
    // Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
    let c = 7,
        d = 9;
    document.querySelector(".t2").textContent = c / d;


    // Task 3
    // Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
    let e = 3,
        f = 5;
    document.querySelector(".t3").textContent = e + f;


    // Task 4
    //  Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
    let e1 = '3',
        f1 = 5;
    document.querySelector('.t4').textContent = e1 + f1;


    // Task 5
    // Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
    let e2 = 3,
        f2 = 0;
    document.querySelector('.t5').textContent = e2 / f2;


    // Task 6
    // Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
    let e3 = 3,
        f3 = 'hello';
    document.querySelector('.t6').textContent = e3 + f3;


    // Task 7
    // Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
    let e4 = 3,
        f4 = "hello";
    document.querySelector(".t7").textContent = e4 * f4;



    // Task 8 
    /* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что
    пользователь ввел в input.*/
    document.querySelector(".button8").addEventListener('click', () => {
        console.log(document.querySelector(".input8").value);
    });


    // Task 9
    /* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что
    пользователь ввел в input. Добавьте очистку input после нажатия кнопки. */
    document.querySelector('.btn9').addEventListener('click', () => {
        document.querySelector('.t9').textContent = document.querySelector('.input9').value;
        document.querySelector('.input9').value = "";
    });



    // Task 10
    /*Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое
    ввел пользователь умноженное на 10. */

    document.querySelector(".btn10").addEventListener('click', () => {
        document.querySelector('.t10').textContent = document.querySelector(".input10").value * 10;
        document.querySelector('.input10').value = "";

    });


    // Task 11
    /* Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое
        ввел пользователь и к нему добавленное число 10. */

    document.querySelector(".btn11").addEventListener('click', () => {
        document.querySelector('.t11').textContent = +document.querySelector("#input11").value + 10;
        document.querySelector("#input11").value = "";
    });



    // Task 12
    /*Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки
        выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', где имя - имя пользователя и
        фамилия - введенная фамилия. */

    document.querySelector(".t12").addEventListener("click", () => {
        console.log("Hello " + document.querySelector("#name12").value + " " + document.querySelector('#surname12').value);
        document.querySelector("#name12").value = '';
        document.querySelector("#surname12").value = '';
    });

    // Task 13
    /*Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция,
        которая выводит сумму данных двух чисел на страницу.*/
    document.querySelector(".btn13").addEventListener('click', () => {
        document.querySelector('.t13').textContent = +document.querySelector('.firstInput').value + (+document.querySelector(".SecondNumber").value);
    });



    // Task 14
    // Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'
    document.querySelector('#t14').value = "Hello";


    // Task 15
    /*Создайте input и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px
        solid red' . Изучите результат операции.*/

    let y = document.querySelector("#t15");
    y.style.border = '2px solid red';

    // Task 16.
    // Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел.

    let f16 = document.querySelector('#first-16');
    let s16 = document.querySelector('#second-16');

    f16.oninput = function () {
        let res16 = +f16.value + (+s16.value);
        document.querySelector('.p-16').innerText = res16;
    };

    s16.oninput = function () {
        let res16 = +f16.value + (+s16.value);
        document.querySelector('.p-16').innerText = res16;
    };



    // Task 17
    /*Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая
        запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t =
        parseInt(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди
        вводить 44, 44aaa, 44.3, a45 . Изучите вывод.*/



    document.querySelector('.btn17').addEventListener('click', () => {
        let t = document.querySelector("#input17").value;
        t = console.log(parseInt(t));

    });


    // Task 18
    /*Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая
        запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t =
        parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди
        вводить 44, 44aaa, 44.3, a45 . Изучите вывод.*/

    document.querySelector('.btn18').addEventListener('click', () => {
        let t = document.querySelector("#input18").value;
        t = console.log(parseFloat(t));

    });




    // Task 19
    /*Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу
            сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и
            parseInt на отрицательные числа!!!*/
    document.querySelector('.btn19').addEventListener('click', () => {
        document.querySelector('.t19').textContent = +document.querySelector('#first19').value + (+document.querySelector('#second19').value);
    });


    //Task 20
    /* Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию
            кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...'
            куда поставьте соответствующие данные из inputов.*/

            let  button = document.querySelector(".btn20");

                button.addEventListener('click', () => {
                    let name = document.querySelector('.name20').value,
                    surname = document.querySelector('.surname20').value,
                    age = document.querySelector('.age20').value,
                    work = document.querySelector('.work20').value,                 
                    div = document.querySelector('.t20');
                    
                  div.textContent = `Уважаемый ${name} ${surname} ваш возраст ${age}, по професии вы ${work}` ;
                });




});