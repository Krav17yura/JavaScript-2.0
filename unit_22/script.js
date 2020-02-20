// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие onclick. При срабатывании события  выводите в out-1 количество срабатываний события. В комментариях опишите результат. */
let count1 = 0;

function t1() {
     document.querySelector(".out-1").textContent = count1++;

}
document.querySelector(".div-1").onclick = t1;

// Событие onclick отработает как на десктопе, так и на мобильных устройствах. Для пущей уверенности вызов функции t1 на элементе .div-1 можно повесить на событие ontouchstart.

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие ondblclick. При срабатывании события  выводите в out-2 количество срабатываний события. В комментариях опишите результат. */
let count2 = 1;

function t2() {
     document.querySelector(".out-2").textContent = count2++;
}
document.querySelector(".div-2").ondblclick = t2;


// Тоже самое, что и с onclick


// Task 3 ============================================
/*  Создайте блок div-3. Добавьте на него событие onmousemove. При срабатывании события выводите в out-3 количество срабатываний события. В комментариях опишите результат. */
let count3 = 1;

function t3(){
    document.querySelector(".out-3").textContent = count3++;
}
document.querySelector(".div-3").onmousemove = t3;

// На мобильных не работает. Вызов t3 необходимо повесить на ontouchmove.


// Task 4 ============================================
/*  Создайте блок div-4. Добавьте на него событие oncontextmenu. При срабатывании события выводите в out-4 количество срабатываний события. В комментариях опишите результат. */
let count4 = 1;

function t4(){
document.querySelector(".out-4").textContent = count4++;
}
document.querySelector(".div-4").oncontextmenu = t4;

// На мобильных отрабатывает при удержании нажатия.

// Task 5 ============================================
/*   Создайте блок div-5. Добавьте на него событие onmousedown. При срабатывании события выводите в out-5 количество срабатываний события. В комментариях опишите результат. */
let count5 = 1;

function t5(){
     document.querySelector(".out-5").textContent = count5++;
}
document.querySelector(".div-5").onmousedown = t5;

// Тоже самое, что и с onclick

// Task 6 ============================================
/*  Создайте блок div-6. Добавьте на него событие onmouseenter. При срабатывании события выводите в out-6 количество срабатываний события. В комментариях опишите результат. */
let count6 = 1;

function t6(){
  document.querySelector(".out-6").textContent = count6++;
}
document.querySelector(".div-6").onmouseenter = t6;


// На мобильных срабатывает если перед кликом внутри блока кликнуть вне блока.

// Task 7 ============================================
/*   Создайте блок div-7. Добавьте на него событие onmouseleave. При срабатывании события выводите в out-7 количество срабатываний события. В комментариях опишите результат.*/
let count7 = 1;

function t7(){
    document.querySelector(".out-7").textContent = count7++;
}
document.querySelector(".div-7").onmouseleave = t7;

// Внутри блока не срабатывает. Срабатывает как клик вне блока, если перед этим кликнуть в области блока.

// Task 8 ============================================
/*   Создайте блок div-8. Добавьте на него событие onmouseout. При срабатывании события выводите в out-8 количество срабатываний события. В комментариях опишите результат.*/
let count8 = 1;

function t8(){
    document.querySelector(".out-8").textContent = count8++;
}
document.querySelector(".div-8").onmouseout = t8;


// Результат как и при событии onmouseleave.

// Task 9 ============================================
/* Создайте блок div-9. Добавьте на него событие onmouseover. При срабатывании события выводите в out-9 количество срабатываний события. В комментариях опишите результат. */
let count9 = 1;

function t9(){
    document.querySelector(".out-9").textContent = count9++;
}
document.querySelector(".div-9").onmouseover = t9;

// На мобильных срабатывает если перед кликом внутри блока кликнуть вне блока. Как и при событии onmouseenter.

// Task 10 ============================================
/*  Создайте блок div-10. Добавьте на него событие onmouseup. При срабатывании события выводите в out-10 количество срабатываний события. В комментариях опишите результат.*/
let count10 = 1;

function t10(){
    document.querySelector(".out-10").textContent = count10++;
}
document.querySelector(".div-10").onmouseup = t10;



//На мобильных работает как onclick.