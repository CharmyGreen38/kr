function verify() {
    let  number3 = parseFloat(number99.value);
    if(number3>0) {result3="Положительное";}
    if(number3<0) {result3="Отрицательное";}
    if(number3==0) {result3="Ноль";}
    document.getElementById("result1").value = result3;
}


const number99 = document.getElementById("number1");

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener("click", verify);
