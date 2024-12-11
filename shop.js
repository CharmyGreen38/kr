const content = [
    {
      "vendor_code": "1",
      "description": "Санкт-Петербургская математическая олимпиада начальной школы.",
      "price": 400,
      "img": "https://biblio.mccme.ru/sites/default/files/books/spb-olymp-25-4-obl_0.jpg"
    },
    {
      "vendor_code": "2",
      "description": "Весенний турнир Архимеда. Часть 2. 2009—2019",
      "price": 200,
      "img": "https://biblio.mccme.ru/sites/default/files/books/turarh-2-obl.jpg"
    },
    {
      "vendor_code": "3",
      "description": "Олимпиада школьников «Ломоносов» по математике (2020-2022)",
      "price": 300,
      "img": "https://biblio.mccme.ru/sites/default/files/books/lomonosov20-22-obl.jpg"
    },
    {
      "vendor_code": "4",
      "description": "Ленинградские математические олимпиады 1961-1991",
      "price": 666,
      "img": "https://biblio.mccme.ru/sites/default/files/books/lmo-obl.jpg"
    }
    ,
    {
      "vendor_code": "5",
      "description": "XIX––XX Турниры математических боёв им. А. П. Савина",
      "price": 345,
      "img": "https://biblio.mccme.ru/sites/default/files/books/gribalko-obl.jpg"
    },
    {
      "vendor_code": "6",
      "description": "Геометрия (4-е, исправленное)",
      "price": 500,
      "img": "https://biblio.mccme.ru/sites/default/files/books/975-5-4439-1440-4.jpg"
    }

  ];
  

function sort(){
    let price=document.getElementById("price")
    if(price.checked)
      {document.getElementById('node_for_insert').innerHTML = '';
       content.sort((a, b) => a.price - b.price);
       getResponce();}
}


  async function getResponce() {

    let node_for_insert = document.getElementById("node_for_insert")
    for (key in content) {
        node_for_insert.innerHTML += `
        <li style="width: 210px" class="d-flex flex-column border bg-body">
        <img style="width: 180px" class="align-self-center" src=${content[key].img}>
        <p class="card-text">${content[key].description}. Цена ${content[key].price} р.</p>
        <input type="hidden" name="vendor_code" value=${content[key].vendor_code}>
        <p class="card-text" >Заказать <input type="number" name="amount" value="0"></p>
        </li>
        `
    }
}
getResponce();
