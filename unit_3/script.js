window.addEventListener("DOMContentLoaded", () => {

    // Task 1
    let a = 4;
    if (a == 4) {
        console.log("true");
    }


    // Task 2
    let b = 8,
        c = 10;
    if (b > c) {
        console.log(b);
    } else {
        console.log(c);
    }


    // Task 3
    let b1 = 10,
        c1 = 10;
    if (b1 > c1) {
        console.log(b1);
    } else if (b1 == c1) {
        console.log("равно");
    } else {
        console.log(c1);
    }


    // Task 4
    document.querySelector(".btn4").addEventListener('click', () => {
        let inputOne = +document.querySelector('.firstInput4').value,
            inputTwo = +document.querySelector(".secondInput4").value,
            t4 = document.querySelector(".t4");

        if (inputOne > inputTwo) {
            t4.textContent = inputOne;
        } else if (inputOne == inputTwo) {
            t4.textContent = "Равны";
        } else {
            t4.textContent = inputTwo;
        }
    });

    // Task 5
    document.querySelector(".btn5").addEventListener("click", () => {
        let year5 = document.querySelector(".input5").value;
        if (year5 < 2000) {
            document.querySelector(".t5").textContent = year5;
        } else {
            console.log(2020 - year5);
        }
    });


    // Task 6
    document.querySelector(".input6").addEventListener('input', () => {
        let input6 = document.querySelector(".input6").value;
        if (input6 > 0 && input6 <= 32) {
            document.querySelector(".t6").textContent = input6;
        } else {
            document.querySelector(".t6").textContent = "Квартира не существует";
        }
    });


    // Task 7
    document.querySelector(".btn7").addEventListener('click', () => {
        if (+document.querySelector(".input7").value >= 0) {
            document.querySelector('.t7').textContent = `Число ${document.querySelector(".input7").value} больше нуля`;
        } else {
            document.querySelector('.t7').textContent = `Число ${document.querySelector(".input7").value} меньше нуля`;
        }

    });



    // Task 8 
    document.querySelector(".btn8").addEventListener("click", () => {
        if (+document.querySelector(".input8").value % 2 == 0) {
            document.querySelector('.t8').textContent = `Число ${+document.querySelector(".input8").value} четное`;
        } else {
            document.querySelector('.t8').textContent = `Число ${+document.querySelector(".input8").value} не четное`;
        }
    });




    // Task 9
    document.querySelector(".btn9").addEventListener("click", () => {
        let numberOne = document.querySelector(".input9").value,
            numberTwo = document.querySelector(".inputStep").value,
            step = document.querySelector(".t9");
        console.log("kek");

        if (numberOne.langth != 0 && numberTwo.length != 0) {
            step.textContent = numberOne ** numberTwo;
        } else {
            step.textContent = `Error`;
        }
    });


    // Task 10
    document.querySelector(".btn10").addEventListener('click', () => {
        let inputTen = document.querySelector(".input10").value;

        if (inputTen == '' || inputTen == ' ') {
            alert('Error');
        } else {

            alert(`Hello ${inputTen}`);
        }
    });



    // Task 11
    document.querySelector(".btn11").addEventListener("click", () => {
        let a = document.querySelector(".input11").value;
        a = a.trim();

        if (a == '') {
            alert("Error");
            a = "";
        } else {
            alert(`Hello ${a}`);
            a = "";
        }

    });



    // Task 12
    document.querySelector(".input12").addEventListener('input', () => {
        let num = +document.querySelector(".input12").value;
        switch (num) {
            case 1:
                console.log("Один");
                break;
            case 2:
                console.log("Два");
                break;
            case 3:
                console.log("Три");
                break;
            default:
                console.log("Введите число от 1 до 3");
        }
    });



    // Task 13
    document.querySelector('.input13').addEventListener("input", function () {
        let div13 = document.querySelector(".t13");
        let num13 = this.value;
        if (num13 >= 1 && num13 <= 5) {
            div13.textContent = `Дом ${num13} на 1 улице`;
        } else if (num13 <= 10) {
            div13.textContent = `Дом ${num13} на 2 улице`;
        } else if (num13 <= 20) {
            div13.textContent = `Дом ${num13} на 3 улице`;
        } else {
            div13.textContent = "";
        }

    });




    // Task 14
    document.querySelector(".input14").addEventListener("input", function () {
        let div14 = document.querySelector(".t14"),
            num14 = this.value;
        if (num14 >= 0 && num14 <= 25) {
            div14.textContent = 'не обнаруживается';
        } else if (num14 <= 50) {
            div14.textContent = 'снижение числа лимфоцитов';
        } else if (num14 <= 100) {
            div14.textContent = 'вялость, рвота';
        } else if (num14 <= 150) {
            div14.textContent = 'смертность 5%';
        } else if (num14 <= 350) {
            div14.textContent = 'смертность 50% за 30 суток';
        } else if (num14 <= 600) {
            div14.textContent = '90% смертность за 2 недели';
        } else if (num14 >= 600 && num14 <= 1000) {
            div14.textContent = ' смертность 100%';
        }else{
            div14.textContent = "Error";
        }
    });



    // Task 15
    let x = 1,
        y = 0;
        console.log(x&&y);
        console.log(x||y);



    // Task 16
    document.querySelector('.btn16').addEventListener("click", () => {
          let num16 = document.querySelector(".input16").value,
              div16 = document.querySelector(".t16");

              if(num16 >= 0 && num16 <= 499){
                  div16.textContent = `Налог составляет 2525 тенге`;
              }else if(num16 <= 1199){
                div16.textContent = `Налог составляет 5050 тенге`;
              }else if(num16 <= 1599){
                div16.textContent = `Налог составляет 8275 тенге`;
              }else if(num16 <= 1899){
                div16.textContent = `Налог составляет 9675 тенге`;
               }else if(num16 <= 1999){
                div16.textContent = `Налог составляет 11075 тенге`;
               }else if(num16 >= 2000){
                div16.textContent = `Налог составляет 15000 тенге`;
              }else{
                  div16.textContent = `Вы ввели не коректное значение`;
              }
    });





    // Task 17
    document.querySelector(".btn17").addEventListener("click", () => {
      let num17 = document.querySelector(".inputUsd").value,
          valuta = document.querySelector(".input17").value,
          div17 = document.querySelector(".t17");

          if(num17 != "" && valuta != ""){
              if(valuta == "euro"){
                  div17.textContent = 'Result:' + num17 * 0.91; 
              }else if (valuta == "rub"){
                div17.textContent = 'Result:' + num17 * 64.14; 
              }else if(valuta == "uah"){
                div17.textContent = 'Result:' + num17 * 24.57; 
              }else{
                div17.textContent = "Result: Error";
              }

          }else{
              div17.textContent = "Error";
          }
    });





    // Task 18
    document.querySelector(".btn18").addEventListener("click", () => {
        let num18 = document.querySelector(".inputUsd18").value,
            valuta18 = document.querySelector(".input18").value,
            div18 = document.querySelector(".t18");

            if(num18 != "" && valuta18 != ""){
                switch(valuta18){
                    case "euro":
                        div18.textContent = 'Result:' + num18 * 0.91;
                        break;
                    case "rub":
                        div18.textContent = 'Result:' + num18 * 64.14;
                        break;
                    case "uah":
                        div18.textContent = 'Result:' + num18 *  24.57;
                        break;
                    default:
                        div18.textContent = "Result: Error";
                        break;

                }
                
  
            }else{
                div18.textContent = "Error";
            }

    });
  




    // Task 19
    document.querySelector(".btn19").addEventListener("click", () => {
         let firstNumber = document.querySelector(".number19Frist").value,
             SecondNumber = document.querySelector(".number19Second").value,
             operamd19 = document.querySelector(".operamd19").value,
             div19 = document.querySelector(".t19");
             operamd19 = operamd19.trim();
            

             if(firstNumber != "" && SecondNumber != '' && operamd19 != ""){
                 if(operamd19 == "+"){
                     div19.textContent =  +firstNumber + (+SecondNumber);
                 }else if(operamd19 == "-"){
                     div19.textContent =  +firstNumber - (+SecondNumber);
                 }else if(operamd19 == "*"){
                     div19.textContent = 'result: ' + firstNumber * SecondNumber;
                 }else if (operamd19 =="/"){
                     div19.textContent = 'result: ' + firstNumber / SecondNumber;
                 }else{
                     div19.textContent = 'result: Error';
                 }

             }else{
                 div19.textContent = "Errooooooooooooor";
             }
    });



    // Task 20
    document.querySelector(".btn20").addEventListener("click", () => {
        let firstNumber20 = document.querySelector(".number20Frist").value,
            SecondNumber20 = document.querySelector(".number20Second").value,
            operamd20 = document.querySelector(".operamd20").value,
            div20 = document.querySelector(".t20");
            operamd20 = operamd20.trim();

            if(firstNumber20 != "" && SecondNumber20 != '' && operamd20 != ""){
                 switch(operamd20){
                     case "+":
                        div20.textContent =  +firstNumber20 + (+SecondNumber20);
                        break;
                     case "-":
                        div20.textContent =  +firstNumber20 - (+SecondNumber20);    
                        break;
                    case '*':
                        div20.textContent = 'result: ' + firstNumber20 * SecondNumber20;
                        break;
                    case '/':
                        div20.textContent = 'result: ' + firstNumber20 / SecondNumber20;
                        break;
                    default:
                        div20.textContent = 'result: Error';
                        break;
                 }       

            }else{
                div20.textContent = "Errooooooooooooor";
            }

           

             
   });







});