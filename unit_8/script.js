 // Task 1
 // Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
 // 0 1 2. .100(после 100 тоже есть пробел)
 // задание сделать с помощью while

 function func1() {
     let i = 0,
         out1 = "";
     while (i < 101) {
         out1 += i + " ";
         i++;
     }
     return out1;
 }

 // Task 2
 // Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
 // Пример: пользователь ввел 5 и 7
 // 5 6 7
 // считаем что второе число всегда больше первого. Решаем с помощью while

 function func2(one, two) {

     let out2 = "";
     while (one <= two) {
         out2 += one + " ";
         one++;
     }
     return out2;
 }


 // Task 3
 // Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
 // Пример: пользователь ввел 5 и 7
 // 7 6 5
 // Решаем с помощью while

 function func3(one, two) {
     let out3 = "";
     while (two >= one) {
         out3 += two + " ";
         two--;
     }
     return out3;
 }

 // Task 4
 // Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
 // Пример: пользователь ввел 1 5 2
 // 5 3 1
 // Решаем с помощью while
 function func4(one, two, shag) {
     let out4 = "";
     while (two >= one) {
         if (two % shag == 0) {
             out4 += two + " ";
         }
         two--;
     }
     return out4;
 }


 // Task5
 // С помощью цикла
 // while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.

 function func5() {
     let i = 0;
     let summ = 0;

     while (i <= 20) {
         summ += i;
         i++;
     }
     return summ;
 }


 // Task 6
 // C помощью цикла
 // while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, 
 //то возвращает сумму чисел от первого до второго включительно. Если нет - то false.Считаем, что пользователь может ввести только числа.
 function func6(one, two) {
     let summ = 0;
     if (two > one) {
         while (one <= two) {
             summ += one;
             one++;
         }
         return summ;
     } else {
         return false;
     }

 }


 // Task 7
 // C помощью цикла
 // while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, 
 // то возвращает произведение чисел от первого до второго включительно.Если нет - то false.Считаем, что 
 // пользователь может ввести только числа.
 function func7(one, two) {

     if (two > one) {
         let summ = 1;
         while (one <= two) {
             summ = summ * one;
             one++;
         }
         return summ;
     } else {
         return false;
     }
 }

 // Task 8
 // У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. 
 // Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.
 function func8() {
     let i = 333;
     let day = 0;
     while (i <= 1000000) {
         i = i * 2;
         day++;
     }
     return day;
 }



 // Task 9
 // Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго 
 // введенного параграфа, где все четные числа заменены на символ нуля(0).
 function func9(one, two) {
     let out9 = "";
     while (one <= two) {
         if (one % 2 == 0) {
             out9 += 0 + " ";
         } else {
             out9 += one + " ";
         }
         one++;
     }
     return out9;
 }


 // Task 10
 // Cоздайте функцию func_10, которая вернет строку(решаем через
 //         while):
 //     **
 //     *
 //     **
 //     *
 //     **
 //     *

 function func10() {
     let i = 1;
     let out10 = '';
     while (i <= 6) {
         if (i % 2 !== 0) {
             let k = 1;
             while (k < 2) {
                 out10 += "**\n";
                 k++;
             }
         } else {
             out10 += "*\n";
         }

         i++;

     }
     return out10;
 }



 // Task 11
 // Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
 // while.
 function func11() {
     let i = 10;
     let k = 1;
     let out11 = " ";
     while (i >= 1) {
         out11 += `${i} `;
         out11 += `${k} `;
         i--;
         k++;

     }
     return out11;
 }



 // Task 12
 // Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
 // target = "_blank" >do while</a>. Напишите код:
 // let a = 0;
 // do
 //     console.log('do while work');
 // while (a < 0);

 // let b = 0;
 // while (b < 0) {
 //     console.log('while work');
 // }

 // изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.
 function func12() {
     let a = 0;
     do {
         console.log('do while work');
     } while (a < 0);

     let b = 0;
     while (b < 0) {
         console.log('while work');
     }
 }

 // Task 13
 // Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.
 function func13() {
     let i = 100;
     let out13 = "";
     do {
         out13 += i + " ";
         i--;
     } while (i >= 0);

     return out13;
 }


 // Task 14
 // Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня 
 // .Напишите функцию func_14 которая вернет день, когда Стаханова побьют все, кто с ним работает, этот день наступит тогда, 
 // когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов дает угля на 
 // 30% больше предыдущего.
 function func14() {
     let i = 5;
     let k = 1;
     do {
         k++;
         i = i * 1.3;

     } while (i <= 132);
     return k;
 }



 // Task 15
 // Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию 
 // func_15, которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).
 // Обратите внимание, что вам нужно найти суммарных объем сваренного зелья, а не дневной объем.Используем do while.
 function func15() {
     let sum = 1.1;
     let dayValue = sum;
     let k = 1;
     do {
         k++;
         dayValue = dayValue + 0.3;
         sum += dayValue;
     } while (k <= 568);
     return k;
 }

 // Task 16
 // На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов 
 // p.task-16 и если число четное - верните значение, если нет - верните false.Код напишите в функции func_16.
 function func16() {
     let i = 0;
     let out16 = "";
     let t16 = document.querySelectorAll(".task-16");
     do {
         out16 = i;
         i++;

     } while (i <= t16.length);
     if (out16 % 2 == 0) {
         return out16;
     } else {
         return false;
     }
 }


 // Task 17
 // На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, 
 // во второй 2 и т.д.Решение оформите в виде функции func_17.
 function func17() {

     let t17 = document.querySelectorAll('p.task-16');
     let i = 0;
     do {
         t17[i].innerHTML = i + 1;
         i++;

     } while (i < t17.length);

 }


 // Task 18
 // На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное количеству 
 // параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.
 function func18() {
     let t18 = document.querySelectorAll(".task-18");
     let i = 0;
     do {
         if (i == 0) {
             t18[0].textContent = t18.length;
         } else {
             t18[i].textContent = t18.length - i;
         }
         i++;
     } while (i < t18.length);
 }


 // Task 19
 // Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.
 function func19() {
     let i = 1;
     let out19 = "";

     do {
         if (i % 2 == 0) {
             out19 += "*";
         } else {
             out19 += i;
         }
         i++;
     } while (i < 20);
     return out19;
 }


 // Task 20
 // Напишите функцию func_20, которая возвращает строку вида:
 //     1 * * *
 //     * 1 * *
 //     * * 1 *
 //     * * * 1
 function func20() {
     let i = 0;
     let out20 = "";

     do {
         let k = 0;
         do {
             if (i == k) {
                 out20 += 1 + " ";
             } else {
                 out20 += "* ";
             }
             k++;
         } while (k < 4);
         i++;
         out20  += "\n";
     } while (i < 4);

     return console.log(out20);
 }

 func20();