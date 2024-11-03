const change = document.getElementById("change")

function change_(){
    if(document.getElementsByTagName('div')[3].innerText=='Лебедева'){
        document.getElementsByTagName('div')[3].innerText='Lebedeva';
        document.getElementsByTagName('div')[4].innerText='Ekaterina';
        document.getElementsByTagName('div')[5].innerText='Nikolaeevna';}
    else
    {
        document.getElementsByTagName('div')[3].innerText='Лебедева';
        document.getElementsByTagName('div')[4].innerText='Екатерина';
        document.getElementsByTagName('div')[5].innerText='Николаевна';}
}
change.addEventListener("click",change_)
