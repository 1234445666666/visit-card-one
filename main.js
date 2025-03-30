//модальные окна
const btn1 = document.getElementById('overlayMenu1');

btn1.addEventListener('click', () => {
    document.getElementById('dialog').showModal();
});

const btn2 = document.getElementById('overlayMenu2');   

btn2.addEventListener('click', () => {
    document.getElementById('dialog').showModal();
});

const btn3 = document.getElementById('overlayMenu3');   

btn3.addEventListener('click', () => {  
    document.getElementById('dialog').showModal();
});

const btn4 = document.getElementById('overlayMenu4');   

btn4.addEventListener('click', () => {
    document.getElementById('dialog').showModal();
});


//кнопка закрытия
const closeBtn = document.getElementById('close__One');
closeBtn.addEventListener('click', () => {
    document.getElementById('dialog').close();
});

const closeBtn2 = document.getElementById('close__Two');
closeBtn2.addEventListener('click', () => {
    document.getElementById('dialog').close();
});

const closeBtn3 = document.getElementById('close__Three');
closeBtn3.addEventListener('click', () => {
    document.getElementById('dialog').close();
});

const closeBtn4 = document.getElementById('close__Four');
closeBtn4.addEventListener('click', () => {
    document.getElementById('dialog').close();
});



//форма
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});
