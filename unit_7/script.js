//Task 1
document.querySelector(".btn1").addEventListener("click", showName());

function showName() {
    console.log("Yura");
}



//Task 2
function displayName(name) {
    console.log(name);
}
displayName("Sergey");


//Task 3


document.querySelector(".btn3").addEventListener("click", () => {
    multiplay(10);
});

function multiplay(number) {
    console.log(number * 10);
}

//Task 4
document.querySelector('.btn4').addEventListener("click", function () {
    colorRed(this);
});

function colorRed(button) {
    button.style.background = "red";
}


//Task 5
document.querySelector(".input5").addEventListener("change", function () {
    console.log(showName2(this.value));
});

function showName2(name) {
    return name;
}


//Task 6

function showNumber(one, two) {
    if (one < two) {
        console.log(two);
    } else if (one == two) {
        console.log(one);
    } else {
        console.log(one);
    }
}
showNumber(12, 12);



//Task 7
function year(year) {
    return 2020 - year;
}
console.log(year(1996));



//Task 8
function random(min, max) {
    return Math.random() * (max - min);
}
console.log(random(1, 10));


//Task 9
function random(min = 1, max = 10) {
    return Math.random() * (max - min);
}
console.log(random());



//Task 10
function random10(min = 1, max = 10) {
    return Math.random() * (max - min);
}

function rgb() {
    let r = random10(0, 256).toFixed(0);
    let g = random10(0, 256).toFixed(0);
    let b = random10(0, 256).toFixed(0);
    return `rgb(${r}, ${g}, ${b})`;

}
document.querySelector(".btn10").addEventListener("click", function () {
    this.style.background = rgb();
});


//Task 11
function f11() {
    return 5;
}

function getFive(one, two) {
    return console.log(one * two);
}
getFive(f11(), 10);

//Task 12
function toNum(input) {
    return console.log(parseInt(input.value));
}
document.querySelector(".input12").addEventListener("change", function () {
    toNum(this);
});


//Task 13
function emptyInput(input) {
    let res = input.trim();
    if (res == "") {
        console.log(false);
    } else {
        console.log(res);
    }
}

document.querySelector(".input13").addEventListener("change", function () {
    emptyInput(this.value);
});


//Task 14
function f14(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
console.log(f14(4));



//Task 15
document.querySelector(".div15").addEventListener("mousemove", () => {
    console.log("move");
});


//Task 16
document.querySelector(".div16").addEventListener("mouseenter", () => {
    console.log("enter");
});

//Task 17
document.querySelector(".div17").addEventListener("mouseleave", () => {
    console.log("leave");
});


//Task 18
document.querySelector(".div18").addEventListener("click", function () {
    this.style.background = "red";
});

//Task 19
document.querySelector(".div19").addEventListener("click", () => {
    this.style.background = "red";
});

//Task 20
let divs = document.querySelectorAll(".go");
for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
        this.style.background = 'red';
    });
}