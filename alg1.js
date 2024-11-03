function verify()
{
    let number2 = parseFloat(number.innerText);
    if(number2>0) {result2="Положительное";}
    if(number2<0) {result2="Отрицательное";}
    if(number2==0) {result2="Ноль";}
    document.getElementById("result").innerText = result2;
}


const number = document.getElementById("number");
const start = document.getElementById("start");
start.addEventListener("click",verify);
