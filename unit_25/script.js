// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

function t() {

    let xhttp = new XMLHttpRequest();
    let res = 0;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resFunc(this.responseText);
        }
    };
    xhttp.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=1", true);
    xhttp.send();

    function resFunc(data) {
        document.querySelector('.out-1').innerHTML = data;
    }
}

document.querySelector('.b-1').onclick = t1;

function t1() {
    let xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-1").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Yura", true);
    xhttp.send();
}

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */
function t2() {
    let xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-2").innerHTML = this.responseText;
        }
    };
    xhttp2.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=2&name=Yura", true);
    xhttp2.send();
}
document.querySelector(".b-2").onclick = t2;


// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */
function t3() {
    let xhttp3 = new XMLHttpRequest();
    xhttp3.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-3").textContent = this.responseText;
        }
    };
    xhttp3.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=3&num1=1&num2=10", true);
    xhttp3.send();
}
document.querySelector(".b-3").onclick = t3;

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */
function t4() {
    let xhttp4 = new XMLHttpRequest();
    xhttp4.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-4").textContent = this.responseText;
        }
    };
    xhttp4.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=4&num1=11&num2=10", true);
    xhttp4.send();
}
document.querySelector(".b-4").onclick = t4;


// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */
function t5() {
    let xhttp5 = new XMLHttpRequest();
    xhttp5.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-5").textContent = this.responseText;
        }
    };
    xhttp5.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5", true);
    xhttp5.send();
}
document.querySelector(".b-5").onclick = t5;


// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */
function t6() {
    let xhttp6 = new XMLHttpRequest();
    xhttp6.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-6").textContent = this.responseText;
        }
    };
    xhttp6.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=6&num1=11&num2=9", true);
    xhttp6.send();
}
document.querySelector(".b-6").onclick = t6;

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */
function t7() {
    let xhttp7 = new XMLHttpRequest();
    xhttp7.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-7").textContent = this.responseText;
        }
    };
    xhttp7.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=5", true);
    xhttp7.send();
}
document.querySelector(".b-7").onclick = t7;


// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/
function t8() {
    let xhttp8 = new XMLHttpRequest();
    xhttp8.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-8").textContent = this.responseText;
        }
    };
    xhttp8.open('GET', "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=8&year=2000", true);
    xhttp8.send();
}
document.querySelector(".b-8").onclick = t8;


// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */
function t9() {
    let xhttp9 = new XMLHttpRequest();
    xhttp9.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector(".out-9").textContent = this.responseText;
        }
    };
    xhttp9.open("GET", "server.php?auth=zhrgB3DxC8LoG7Gcilzg&action=9&m=1&d=0&y=0", true);
    xhttp9.send();
}
document.querySelector(".b-9").onclick = t9;


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
 */
function t10() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            resFunc(this.responseText);
        }
    };
    xhttp.open("POST", "server.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send('auth=zhrgB3DxC8LoG7Gcilzg&action=1');

    function resFunc(data) {
        document.querySelector('.out-10').innerHTML = data;
    }

}
document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */



// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/



// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/



// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/



// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */



// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */



// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */



// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, 
сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */