 // Task 1
 let a1 = {
     3: 'hello',
     'one': 'hi'
 };
 let out1 = "";

 for (let key in a1) {
     out1 += `${key} : ${a1[key]}` + "<br>";
 }
 document.querySelector(".out-1").innerHTML = out1;

 // Task 2
 let a2 = {
     3: 'hello',
     'one': 'hi',
     'testt': 'vodoley',
     'ivan': 'ivanov'
 };

 let out2 = "";

 for (let key in a2) {
     if (a2[key].length > 4) {
         out2 += `${key} : ${a2[key]}` + "<br>";
     }
 }
 document.querySelector(".out-2").innerHTML = out2;

 // Task 3
 let a3 = {
     3: 'hello',
     'one': 'hi',
     'testt': 'vodoley',
     'ivan': 'ivanov'
 };
 let out3 = "";

 for (let key in a3) {
     if (key.length > 4) {
         out3 += `${key} : ${a3[key]}` + "<br>";
     }
 }
 document.querySelector(".out-3").innerHTML = out3;


 // Task 4
 let a4 = {
     3: 'hello',
     'one': 4,
     'testt': 'vodoley',
     'ivan': 6
 };
 let out4 = "";
 for (let key in a4) {
     if (typeof (a4[key]) == "number") {
         out4 += `${key} : ${a4[key]}` + "<br>";
     }
 }
 document.querySelector(".out-4").innerHTML = out4;


 // Task 5
 let a5 = {
     a: 7,
     z: 4,
     45: 12,
     f: 6
 };
 let sum5 = 0;

 for (let key in a5) {
     if (typeof (a5[key]) == "number") {
         sum5 += a5[key];
     }
 }
 document.querySelector(".out-5").textContent = sum5;

 // Task 6

 let a6 = {
     name: "Yura",
     age: 19,
     sex: "man",
     height: 1.8
 };
 let out6 = "";

 for (let key in a6) {
     out6 += `${key} : ${a6[key]}` + "<br>";
 }

 document.querySelector(".out-6").innerHTML = out6;


 // Task 7
 let a7 = {

 };
 let out7 = document.querySelector(".out-7");
 let inputKey = document.querySelector(".u7-key__input");
 let inputValue = document.querySelector(".u7-value__input");

 function func7(a7, out, inputKey, inputValue) {
     if (inputKey.value.trim().length > 0 && inputValue.value.trim().length > 0) {
         a7[inputKey.value] = inputValue.value;
     }
     inputKey.value = "";
     inputValue.value = "";
     let outKey = "";
     for (let key in a7) {
         outKey += `${key} : ${a7[key]}` + "<br>";
     }
     out.innerHTML = outKey;

     return a7;
 }

 document.querySelector(".btn-7").addEventListener("click", () => {
     func7(a7, out7, inputKey, inputValue);
 });


 // Task 8
 let out8 = document.querySelector(".out-8");
 let input8 = document.querySelector(".u8-key__input");

 function func8(arr, out, input) {
     let outkey = "";
     if (input.value.trim().length > 0) {
         for (let key in arr) {
             if (input.value == key) {
                 delete arr[key];
             } else {
                 outkey += `${key} : ${arr[key]}` + "<br>";
             }
         }
         out.innerHTML = outkey;
     } else {
         out.innerHTML = "Введите значение";
     }
 }

 document.querySelector(".btn-8").addEventListener("click", () => {
     func8(a7, out8, input8);
 });

 // Tak 9 
 let out9 = document.querySelector(".out-9");
 let input9 = document.querySelector(".u9-delete-value__input");

 function func9(arr, out, input) {
     if (input.value.trim().length > 0) {
         let outArr = "";
         for (let key in arr) {
             if (input.value.trim() == arr[key]) {
                 delete arr[key];
             } else {
                 outArr += `${key} : ${arr[key]}` + "<br>";
             }
         }
         out.innerHTML += outArr;
     } else {
         out.textContent = "Введите значение";
     }

 }

 document.querySelector(".btn-9").addEventListener("click", () => {
     func9(a7, out9, input9);
 });




 // Task 10
 let out10 = document.querySelector(".out-10");
 let input10 = document.querySelector(".u10-has-key__input");

 function func10(arr, out, input) {
     if (input.value.trim().length > 0) {
         let outKey = '';
         for (let key in arr) {
             if (input.value.trim() == key) {
                 outKey = "true";
                 break;
             } else {
                 outKey = "false";
             }
         }
         out.innerHTML = outKey;

     } else {
         out.textContent = "Введите индекс";
     }
 }

 document.querySelector(".btn-10").addEventListener("click", () => {
     func10(a7, out10, input10);
 });

 // Task 11
 const a11 = {
     "red": ['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', 'Лесная'],
     "blue": ['Героев Днепра', 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', 'Площадь Независимости', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки'],
     "green": ['Сырец', 'Дорогожичи', 'Лукьяновская', 'Золотые ворота', 'Дворец спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],
 };
 let out11 = document.querySelector(".out-11");

 function func11(arr, out) {
     let outArr = "";
     for (let key in arr) {
         outArr += `${key} :   ${arr[key]}` + "<br>";
     }
     out.innerHTML = outArr;
 }

 func11(a11, out11);


 // Task 12
 let select12 = document.querySelector(".u12-branch");
 let out12 = document.querySelector(".out-12");

 function func12(select, out, arr) {
     let outArr = "";
     for (let key in arr) {
         if (key == select.value) {
             for (let i = arr[key].length - 1; i >= 0; i--) {
                 /*  outArr += `${key} : ${arr[key]}`; */
                 outArr += arr[key][i] + ", ";

             }
             out.innerHTML = outArr;
         }

     }
 }

 document.querySelector(".btn-12").addEventListener("click", () => {
     func12(select12, out12, a11);
 });



 // Task 13
 let out13 = document.querySelector(".out-13");

 function func13(select, out, arr) {
     let outArr = "";
     for (let key in arr) {
         if (key == select.value) {
             for (let i = arr[key].length - 1; i >= 0; i--) {
                 outArr += arr[key][i] + ", ";
             }

         }
         out.innerHTML = outArr;
     }

 }

 document.querySelector(".u13-reverse").addEventListener("click", () => {
     func13(select12, out13, a11);
 });



 // task 14 --------------------
 let out14 = document.querySelector(".out-14");
 let select14 = document.querySelector(".u14-find-station");

 function func13(select, out, arr) {
     for (let key in arr) {
         for (let i = 0; i < arr[key].length; i++) {
             if (select.value == arr[key][i]) {
                 out.textContent = key;
                 break;
             }
         }
     }
 }

 document.querySelector(".btn-14").addEventListener("click", () => {
     func13(select14, out14, a11);
 });



 // task 15 --------------------
 function findKey(arr, input) {
     for (let key in arr) {
         for (let i = 0; i < arr[key].length; i++) {
             if (input.value == arr[key][i] != -1) {
                 return key;

             }
         }
     }
 }

 let firstStation = document.querySelector(".u15-first-station");
 let secondStation = document.querySelector(".u15-second-station");
 let out15 = document.querySelector(".out-15");

 function func15(first, second, arr, out) {
     let sum = 0;
     let a = findKey(arr, first);
     let b = findKey(arr, second);
     let stationOne = arr[a].indexOf(first.value);
     let stationTwo = arr[b].indexOf(second.value);

     console.log(stationOne, stationTwo);
     if (a == b) {
         if (stationOne > stationTwo) {
             sum = stationOne - stationTwo - 1;
         } else if (stationOne < stationTwo) {
             sum = stationTwo - stationOne - 1;
         } else {
             sum = 0;
         }
     }
     out.textContent = sum;
 }

 document.querySelector(".btn-15").addEventListener("click", () => {
     func15(firstStation, secondStation, a11, out15);
 });


 // task 16 --------------------
 document.querySelectorAll('.u16-radio').forEach(function (element) {

     let select = document.querySelector('.u16-select');

     element.oninput = function () {

         select.innerHTML = '';

         for (let i = 0; i < a11[this.value].length; i++) {

             addOption(select, a11[this.value][i]);

         }

     }

 });

 function addOption(select, value) {

     let option = document.createElement('option');

     option.innerText = value;
     option.value = value;
     select.append(option);

 }



 // task 17 --------------------

const a17 = {
    "red": [['Академгородок', 0], 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт', 'Вокзальная', 'Университет', ['Театральная', 1], ['Крещатик', 1], 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная', 'Дарница', 'Черниговская', ['Лесная', 0]],
    "blue": [['Героев Днепра', 0], 'Минская', 'Оболонь', 'Почайна', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая площадь', ['Площадь Независимости', 1], ['Площадь Льва Толстого', 1], 'Олимпийская', 'Дворец Украина', 'Лыбедская', 'Демиевская', 'Васильковская', 'Выставочный центр', 'Ипподром', ['Теремки', 0]],
    "green": [['Сырец', 0], 'Дорогожичи', 'Лукьяновская', ['Золотые ворота', 1], ['Дворец спорта', 1], 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Славутич', 'Осокорки', 'Позняки', 'Харьковская', 'Вырлица', 'Бориспольская', ['Красный хутор', 0]],
};

let out17 = '';

for (let branch in a17) {

    out17 += branch + ': [';

    for (let i = 0; i < a17[branch].length; i++) {

        if ([i] == a17[branch].length - 1) {

            if (a17[branch][i][1] == 0 || a17[branch][i][1] == 1) {

                out17 += `[${a17[branch][i][0]}, ${a17[branch][i][1]}]`;

            } else {

                out17 += `${a17[branch][i]} `;
            }
        }
        else {
            if (a17[branch][i][1] == 0 || a17[branch][i][1] == 1) {

                out17 += `[${a17[branch][i][0]}, ${a17[branch][i][1]}], `;

            } else {

                out17 += `${a17[branch][i]}, `;

            }
        }
    }

    out17 += '],<br>';

}

document.querySelector('.out-17').innerHTML = out17;

// task 18 --------------------

let out18 = '';

for (let branch in a17) {

    for (let i = 0; i < a17[branch].length; i++) {

        if (a17[branch][i][1] == 1)
            out18 += `${a17[branch][i][0]}, `;

    }

}

document.querySelector('.out-18').innerHTML = out18;

// task 19 --------------------

const a19 = {
    'Китай': {
        'столица': "Пекин",
        'население': '1349585838 чел.',
        'площадь': '9596961 кв.км',
    },
    'Грузия': {
        'столица': "Тбилиси",
        'население': '4555911 чел.',
        'площадь': '69700 кв.км',
    },
    'Япония': {
        'столица': "Токио",
        'население': '127253075 чел.',
        'площадь': '377915 кв.км',
    },
    'Турция': {
        'столица': "Анкара",
        'население': '79749461 чел.',
        'площадь': '783562 кв.км',
    },
    'Казахстан': {
        'столица': "Нур-Султан",
        'население': '17736896 чел.',
        'площадь': '2724900 кв.км',
    },
    'Армения': {
        'столица': "Ереван",
        'население': '2974184 чел.',
        'площадь': '29743 кв.км',
    },
    'Катар': {
        'столица': "Доха",
        'население': '2042444 чел.',
        'площадь': '11586 кв.км',
    },
    'Малайзия': {
        'столица': "Куала-Лумпур",
        'население': '29628392 чел.',
        'площадь': '329847 кв.км',
    },
    'Мьянма': {
        'столица': "Нейпьидо",
        'население': '55167330 чел.',
        'площадь': '676578 кв.км',
    },
    'Индия': {
        'столица': "Нью-Дели",
        'население': '1205073612 чел.',
        'площадь': '3287263 кв.км',
    },
}

let out19 = '';

for (let country in a19) {

    out19 += `${country}:<br>`;

    for (let data in a19[country]) {

        out19 += `&nbsp;&nbsp;&nbsp;&nbsp;${data} : ${a19[country][data]},<br>`;

    }

    out19 += '<br>';

}
document.querySelector('.out-19').innerHTML = out19;


// task 20 --------------------

let select20 = document.querySelector('.u20-countries');

for (let country in a19) {

    addOption(select20, country);

}

document.querySelector('.btn-20').onclick = function () {

    let country = select20.value;
    let out20 = '';

    for (let data in a19[country]) {

        out20 += `${data} : ${a19[country][data]}<br>`;

    }

    document.querySelector('.out-20').innerHTML = out20;

}