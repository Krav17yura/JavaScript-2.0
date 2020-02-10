// Task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2
for (let i = 1; i <= 10; i++) {
    document.querySelector(".out-2").textContent += i + " ";
}


// Task 3
for (let i = 10; i >= 1; i--) {
    document.querySelector('.out-3').textContent += i + " ";
}


// Task 4
for (let i = 0; i <= 10; i += 2) {
    document.querySelector(".out-4").textContent += i + " ";
}


// Task 5
for (let i = 21; i >= 0; i -= 3) {
    document.querySelector('.out-5').textContent += i + " ";
}


// Task 6
let out6 = "";
for (let i = 0; i < 6; i++) {
    out6 += '*  *  *  *  *  *<br>';
}
document.querySelector('.out-6').innerHTML = out6;


// Task 7
document.querySelector(".btn7").addEventListener("click", () => {
    let out7 = "",
        input7 = document.querySelector(".input7").value;

    for (let i = input7; i >= 0; i--) {
        out7 += i + " ";
    }
    document.querySelector(".out-7").textContent = out7;


});


// Task 8
document.querySelector(".btn8").addEventListener("click", () => {
    let out8 = "",
        input8 = document.querySelector(".input8").value,
        secondInput8 = document.querySelector(".secondInput8").value;

    for (let i = input8; i <= secondInput8; i++) {
        out8 += i + " ";
    }
    document.querySelector(".out-8").textContent = out8;
});


// Task 9
document.querySelector(".btn9").addEventListener("click", () => {
    let out9 = " ",
        input9 = document.querySelector(".input9").value,
        secondInput9 = document.querySelector(".secondInput9").value;

    if (+input9 <= +secondInput9) {
        for (let i = input9; i <= secondInput9; i++) {
            out9 += i + " ";
        }
        document.querySelector(".out-9").textContent = out9;
    } else {
        alert('Второе число должно быть больше за первое');
    }
});


// Task 10
let out10 = "";
for (let i = 1901; i <= 1950; i++) {
    if (i % 2 == 0) {
        out10 += i + " ";
    } else {
        continue;
    }
}
document.querySelector(".out-10").textContent = out10;

// Task 11
let div11 = document.querySelectorAll(".one");
document.querySelector(".out-11").textContent = (div11.length);


// Task 12
document.querySelector(".btn12").addEventListener("click", () => {
    function f12() {

        for (let i = 0; i < div11.length; i++) {
            div11[i].style.background = "orange";
        }

    }
    f12();
});


// Task 13
document.querySelector('.btn13').addEventListener('click', () => {

    for (let i = 0; i < div11.length; i++) {

        console.log(div11[i].innerHTML);

    }

});


// Task 14
document.querySelector(".btn14").addEventListener("click", () => {
    let div14 = document.querySelectorAll('input[type="text"]');
    for (let i = 0; i < div14.length; i++) {
        div14[i].setAttribute('placeholder', "Введите данные");
    }
});


// Task 15
document.querySelector(".btn15").addEventListener("click", () => {
    let div15 = document.querySelectorAll('input[type="text"]');
    console.log(div15.length);
});


// Task 16
document.querySelector(".btn16").addEventListener("click", () => {
    let div16 = document.querySelectorAll('input[name="p1"]');
    for(let i = 0; i < div16.length; i++) {
        if (div16[i].checked){
            document.querySelector(".out-16").textContent = div16[i].value;
        }
    }
});


// Task 17
document.querySelector(".btn17").addEventListener("click", () => {
    let div17 = document.querySelectorAll('input[name="p1"]');
    div17[0].checked = true;
});


// Task 18
let div18 = document.querySelectorAll('input[name="p1"]');
for(let i = 0; i < div18.length; i++){
    div18[i].setAttribute('value', i);
}

// Task 19
document.querySelector(".btn19").addEventListener("click", () => {
 let div19 = document.querySelectorAll('input[name="p2"]');
 for (let i = 0; i < div19.length; i++){
     if(div19[i].checked){
         if(div19[i].value == "6"){
             document.querySelector(".out-19").textContent = "true";
         }else{
            document.querySelector(".out-19").textContent = "false";
         }
     }
 }

});


// Task 20
 
    let div20 = document.querySelectorAll('input[name="p3"]');
    for(let i = 0; i<div20.length; i++){
        div20[i].oninput = function(){
           console.log("был изменён инпут");
        };
    }
 