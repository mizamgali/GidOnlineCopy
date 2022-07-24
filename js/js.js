let button = document.querySelector('button');//выдираем эл-мент кнопка

button.onclick = function() { //при нажатии на кнопку происходит функция
    //из документа выдрали грид айтемс, из грд айтемс выдрали а, из а выдрали h4
    //let gridItems_h4 = document.querySelector('.grid-items').querySelector('a').querySelector('h4'); //выдергивание чего угодно - querySelector();
    //gridItems_h4.textContent = '123';//
    //обращяешся к классам этого элемента(там либ добав либо удаляешь)
    //document.querySelector('.grid-items').classList.remove('grid-items');//
    let boxLeft = document.querySelector('.boxLeft');//создаем пер, выдераем класc
    boxLeft.classList.toggle('visible');//
};