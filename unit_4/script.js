// Task 1
document.querySelector(".btn1").addEventListener('click', () => {
    alert("Task 1");
});


// Task 2
document.querySelector(".input2").addEventListener("click", () => {
    alert('Task 2');
});


// Task 3
document.querySelector(".t3").addEventListener("click", () => {
    alert("Task 3");
});


// Task 4
document.querySelector(".btn4").addEventListener("click", () => {
    console.log(document.querySelector(".input4").checked);
});


// Task 5
document.querySelector(".btn5").addEventListener("click", () => {
    let check = document.querySelector(".input5").checked;
    if (check) {
        console.log(document.querySelector(".input5").value);
    } else {
        console.log(check);
    }
});

// Task 6
document.querySelector(".btn6").addEventListener('click', () => {
    alert(document.querySelector(".input6").value);
});


// Task 7
document.querySelector('.btn7').addEventListener('click', () => {
    let pasword7 = document.querySelector(".input7").value;
    if (pasword7.length >= 6) {
        alert(pasword7);
    } else {
        alert("Пароль меньше 6 символов");
    }
});


// Task 8
document.querySelector(".btn8").addEventListener("click", () => {
    document.querySelector(".t8").innerHTML = '<input type="text" class="input88"><button class="btn88">gO</button>';

    document.querySelector(".btn88").addEventListener("click", () => {
        alert(document.querySelector('.input88').value);
    });
});


// Task 9
document.querySelector(".btn9").addEventListener("click", () => {
    let radio9 = document.querySelector(".input9").checked;

    if (radio9) {
        alert(document.querySelector(".input9").value);
    } else {
        alert(radio9);

    }
});


// Task 10
document.querySelector('.btn10').addEventListener("click", () => {
    let color10 = document.querySelector(".input10").value,
        div10 = document.querySelector("#t10");
    div10.style.background = color10;

});


// Task 11
document.querySelector(".btn11").addEventListener("click", () => {
 document.querySelector(".secondInput11").value = document.querySelector(".input11").value;

});


// Task 12
document.querySelector(".btn12").addEventListener("click", () => {
  document.querySelector(".t12").textContent = document.querySelector(".input12").value;
});


// Task 13
document.querySelector(".btn13").addEventListener("click", () => {
    document.querySelector('.SecondT13').textContent = document.querySelector(".input13").value;
});

document.querySelector(".input13").oninput = function(){
 document.querySelector(".t13").textContent = this.value;
};


// Task 14
document.querySelector(".btn14").onclick = () => {
  document.querySelector(".t14").textContent = document.querySelector(".textarea14").value;
};


// Task 15
document.querySelector(".btn15").onclick = () => {
 let input15 = document.querySelector(".input15").value;
 document.querySelector(".textarea15").value = input15;
 document.querySelector(".t15").textContent = input15;
};


// Task 16
document.querySelector(".btn16").onclick = () => {
    document.querySelector('.t16').textContent = document.querySelector("#select16").value;
    
};


// Task 17


// Task 18
document.querySelector("#select18").onchange = function () {
   document.querySelector(".t18").textContent = document.querySelector("#select18").value;
};


// Task 19
document.querySelector(".btn19").onclick = (event) => {
    event.preventDefault();
        console.log(document.querySelector('.input19').value);
        console.log(document.querySelector('.secondInput19').value);
};

// Task 20

document.querySelector(".btn20").onclick = (event) => {
    event.preventDefault();
        let form = document.querySelector(".form20");
        console.log(form.input20.value);
        console.log(form.secondInput20.value);
};