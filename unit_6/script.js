//Task 1
let out1 = document.querySelector("#output1");
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 3; k++) {
        out1.innerHTML += "*";
    }
    out1.innerHTML += " ";
}


//Task 2
let out2 = document.querySelector("#output2");
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 5; k++) {
        out2.innerHTML += "*";
    }
    out2.innerHTML += "<br>";
}


//Task 3
let out3 = document.querySelector("#output3");
for (let i = 0; i < 3; i++) {
    for (let k = 0; k < 6; k++) {
        if (k % 2 == 0) {
            out3.innerHTML += 1;
        } else {
            out3.innerHTML += 0;
        }
    }
    out3.innerHTML += "<br>";
}


//Task 4
let out4 = document.querySelector("#output4");
for (let i = 0; i < 3; i++) {
    for (let k = 1; k <= 6; k++) {
        if (k % 3 == 0) {
            out4.innerHTML += "x";
        } else if (k % 2 == 0) {
            out4.innerHTML += 0;
        } else {
            out4.innerHTML += 1;
        }
    }
    out4.innerHTML += "<br>";
}


//Task 5
let out5 = document.querySelector("#output5");
for (let i = 0; i <= 3; i++) {
    for (let k = 0; k < i; k++) {
        out5.innerHTML += "*";
    }
    out5.innerHTML += "<br>";
}


//Task 6
let out6 = document.querySelector("#output6");
for (let i = 5; i > 0; i--) {
    for (let k = i; k > 0; k--) {
        out6.innerHTML += "*";
    }
    out6.innerHTML += "<br>";
}


//Task 7
let out7 = document.querySelector("#output7");
for (let i = 3; i > 0; i--) {
    for (let k = i; k > 0; k--) {
        out7.innerHTML += "&nbsp;";
    }
    for (let j = 0; j < 5; j++) {
        out7.innerHTML += "*";
    }
    out7.innerHTML += "<br>";
}


//Task 8
let out8 = document.querySelector("#output8");
for (let i = 0; i <= 3; i++) {
    for (let k = 0; k < i; k++) {
        out8.innerHTML += "*";
    }
    out8.innerHTML += "<br>";
}
for (let i = 2; i > 0; i--) {
    for (let k = i; k > 0; k--) {
        out8.innerHTML += "*";
    }
    out8.innerHTML += "<br>";
}


//Task 9
let out9 = document.querySelector("#output9");
for (let i = 0; i < 5; i++) {

    if (i == 0 || i == 4) {
        for (let k = 0; k < 6; k++) {
            out9.innerHTML += "*";
        }
    } else {
        for (let k = 0; k < 6; k++) {
            if (k == 0 || k == 5) {
                out9.innerHTML += "*";
            } else {
                out9.innerHTML += "&ensp;";
            }
        }
    }

    out9.innerHTML += "<br>";
}


//Task 10
document.querySelector(".btn10").addEventListener("click", () => {
    let out10 = document.querySelector("#output10");

    let input10 = document.querySelector(".input10").value;
    input10 = input10.trim();
    if (input10 != "" && input10.length < 2) {
        for (let i = 0; i < 5; i++) {
            if (i == 0 || i == 4) {
                for (let k = 0; k < 6; k++) {
                    out10.innerHTML += input10;
                }
            } else {
                for (let j = 0; j < 6; j++) {
                    if (j == 0 || j == 5) {
                        out10.innerHTML += input10;
                    } else {
                        out10.innerHTML += "&ensp;";
                    }
                }
            }
            out10.innerHTML += "<br>";
        }
    } else {
        console.log(false);
    }
});


//Task 11
let out11 = document.querySelector("#output11");
for (let i = 6; i < 8; i++) {
    for (let k = 1; k <= 10; k++) {
        out11.innerHTML += `${i}*${k} = ${i*k}<br>`;
    }
    out11.innerHTML += "<hr>";
}


//Task 12
let out12 = document.querySelector("#output12");
for (let i = 0; i <= 5; i++) {
    for (let k = 0; k <= i; k++) {
        out12.innerHTML += k + " ";
    }
    out12.innerHTML += "<br>";
}


//Task 13
let out13 = document.querySelector("#output13");
for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 10; k++) {
        if (k == 10) {
            out13.innerHTML += `${i+1}0 `;
        } else {
            out13.innerHTML += `${i}${k} `;
        }
    }
    out13.innerHTML += "<br>";
}


//Task 14
let out14 = document.querySelector("#output14");
for (let i = 5; i > 0; i--) {
    for (let k = i; k > 0; k--) {
        out14.innerHTML += k + " ";
    }
    out14.innerHTML += "<br>";
}


//Task 15
let out15 = document.querySelector("#output15");
for (let i = 1; i < 6; i++) {
    for (let k = 5; k > i; k--) {
        out15.innerHTML += "x ";
    }
    for (let j = i; j > 0; j--) {
        out15.innerHTML += j + " ";

    }
    out15.innerHTML += "<br>";
}


//Task 16
let out16 = document.querySelector("#output16");
for (let i = 0; i <= 5; i++) {
    for (let j = 0; j < i; j++) {
        out16.innerHTML += i + " ";
    }
    out16.innerHTML += "<br>";
}


//Task 17
let out17 = document.querySelector("#output17");
for (let i = 5; i >= 1; i--) {
    for (let j = i; j <= 5; j++) {
        out17.innerHTML += i + " ";
    }
    out17.innerHTML += "<br>";
}


//Task 18
let out18 = document.querySelector("#output18");
for (let i = 5; i >= 1; i--) {
    if (i % 2 == 0) {
        for (let j = i; j <= 5; j++) {
            out18.innerHTML += "x ";
        }
    } else {
        for (let j = i; j <= 5; j++) {
            out18.innerHTML += i + " ";
        }
    }
    out18.innerHTML += "<br>";
}

//Task 19
let out19 = document.querySelector("#output19");
for (let i = 0; i < 3; i++) {
    for (let j = i; j < 3; j++) {
        out19.innerHTML += "&ensp;";
    }
    for (let k = 0; k < 5 + i * 2; k++) {

        out19.innerHTML += '*';
    }
    out19.innerHTML += '<br>';
}


//Task 20
let out20 = document.querySelector("#output20");
for (let i = 0; i < 3; i++) {
    for (let j = i; j < 2; j++) {
        out20.innerHTML += "&ensp;";
    }
    for (let k = 0; k < 2 + i * 2; k++) {

        out20.innerHTML += '*';
    }
    out20.innerHTML += '<br>';
}
for(let i = 2; i >= 1; i--){
    for (let j = i; j < 3; j++) {
        out20.innerHTML += "&ensp;";
    }
    for (let k = 0; k < i * 2; k++) {

        out20.innerHTML += '*';
    }
    out20.innerHTML += '<br>';
}



//Task 228
let out228 = document.querySelector("#output228");
for (let i = 1; i <= 10; i++) {
    for (let k = 1; k <= 10; k++) {
        out228.innerHTML += `${i}*${k} = ${i*k} <br>`;
    }
    out228.innerHTML += "<hr>";
}