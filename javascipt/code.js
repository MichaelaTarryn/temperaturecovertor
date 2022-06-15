//create varible to link by id in html

let celsuis =document.getElementById("temperature");
let fahrenheit=document.getElementById("to");


//creat functions oninput
function celltof(){
    let output = (parseFloat(celsuis.value)*9/5)*32;
    fahrenheit.value=parseFloat(output.toFixed(2));
}

function ftocell(){
    let output =(parseFloat(fahrenheit.value)-32)*5/9;
    celsuis.value=parseFloat(output.toFixed(2));
    console.log(output);
}

//clear the input value 
// let sum="";
function clearSum(){
    sum = "";
      document.getElementById("temperature").value = sum;
      document.getElementById("to").value=sum;
      }

//joel explanation of parsefloat
// }
// let numb1 = 10
// let fNumb1 = parseFloat(numb1);
// let strNumb1 = "10";
// console.log(typeof strNumb1);
// let numb1 = parseFloat(strNumb1);
// console.log(typeof numb1);