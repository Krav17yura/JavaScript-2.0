 // Task 1

 const a = [
     [1, 2, 3],
     ['a', 'b', 'c'],
     [4, 5, 6],
     ['d', 'e', 'f'],
     [7, 8, 9],
 ];

 let out = "";

 for (let i = 0; i < a.length; i++) {
     for (let k = 0; k < a[i].length; k++) {
         out += a[i][k] + " ";
     }
     out += "<br>";
 }

 document.querySelector(".out-1").innerHTML = out;


 // Task 2
 document.querySelector(".out-2").innerHTML = a[0][2];


 // Task 3
 document.querySelector(".out-3").innerHTML = a[3][1];


 // Task 4
 let out4 = "";
 for (let i = 0; i < a[2].length; i++) {
     out4 += a[2][i] + " ";
 }
 document.querySelector(".out-4").innerHTML = out4;

 // Task 5
 let out5 = "";
 for (let i = 0; i < a.length; i++) {
     for (let k = 0; k < 1; k++) {
         out5 += a[i][k] + " ";
     }
     out5 += "<br>";
 }
 document.querySelector(".out-5").innerHTML = out5;



 // Task 6
 let out6 = "";
 for (let i = 1; i < a.length; i++) {
     if (i % 2 == 0) {
         out6 += a[i] + "<br>";
     }
 }
 document.querySelector(".out-6").innerHTML = out6;

 // Task 7
 let out7 = "";
 for (let i = 0; i < a.length; i++) {
     for (let k = 0; k < a[i].length; k++) {
         if (typeof (a[i][k]) == 'number') {
             out7 += a[i][k] + " ";
         }
     }
 }
 document.querySelector(".out-7").textContent = out7;



 // Task 8
 let out8 = '';
 for (let i = 0; i < a.length; i++) {

     out8 += a[i].length + "<br>";
 }
 document.querySelector(".out-8").innerHTML = out8;

 // Task 9
 let out9 = '';
 for(let i = a.length-1 ; i >= 0; i--){
     for(let k = a[i].length-1; k >= 0; k--){
         out9 += a[i][k] + " ";
     }
     
 }
 document.querySelector(".out-9").innerHTML = out9;


 // Task 10
 let out10 = '';
 for(let i = 0; i < a.length; i++){
     for(let k = a[i].length-1; k >= 0; k--){
         out10 += a[i][k] + " ";
     }
     out10 += "<br>";
 }
 document.querySelector(".out-10").innerHTML = out10;



 // Task 11
 const arr11 = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
];

let out11 = '';

for (let i = 0; i < arr11.length; i++) {
    for (let k = 0; k < arr11[i].length; k++) {
        out11 += arr11[i][k] + ' ';
    }
    out11 += '<br>';
}

document.querySelector(".out-11").innerHTML = out11;


 // Task 12
 const arr12 = [
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0],
]


function chessboardArr(out) {

    let chessboardContainer = document.createElement('div');

    chessboardContainer.classList.add('chessboard__container');
    out.append(chessboardContainer);

    for (let i = 0; i < arr12.length; i++) {

        let row = document.createElement('div');

        row.classList.add('row');
        chessboardContainer.append(row);

        for (let k = 0; k < arr12[i].length; k++) {

            let div = document.createElement('div');

            if (arr11[i][k] == 0) {
                div.classList.add('white');
                row.append(div);
            } else {
                div.classList.add('black');
                row.append(div);
            }

        }

    }

}

chessboardArr(document.querySelector('.out-12'));



let b = [[, 4], , , [, , 5]];

// task 14 --------------------

let c = [[, 4], , 5];

// task 15 --------------------

let d = [[, 4], , [, , , 5], , , , [4, 5]];

// task 16 --------------------

let e = [[, 4], , [, , , 5], , , , [[, 6]]];

// task 17 --------------------

let f = [[, [, , , 4]], , [, [, 5]], , , , [[, 6]]];

// task 18 --------------------

let g = [[, [, , , 4]], , [, [, , , 5]], 'a', , 'a', [[, 6]]];


// task 19 --------------------

let out19 = 0;

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        if (typeof a[i][k] == 'number')
            out19 += a[i][k];
    }
}

document.querySelector('.out-19').innerHTML = out19;

// task 20 --------------------

let a20_1 = [[0, 0, 0], ['', '', ''], ['', '', '']]; //занята первая линия
let a20_2 = [['', '', ''], [0, 0, 0], ['', '', '']]; //занята вторая линия
let a20_3 = [['', '', ''], ['', '', ''], [0, 0, 0]]; //занята третяя линия

let a20_4 = [[0, '', ''], [0, '', ''], [0, '', '']]; //занята первый столбик
let a20_5 = [['', 0, ''], ['', 0, ''], ['', 0, '']]; //занята второй столбик
let a20_6 = [['', '', 0], ['', '', 0], ['', '', 0]]; //занята третий столбик

let a20_7 = [['', '', 0], ['', 0, ''], [0, '', '']]; //занята первая диагональ
let a20_8 = [[0, '', ''], ['', 0, ''], ['', '', 0]]; //занята вторая диагональ