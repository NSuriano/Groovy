const popupLogin = document.getElementById('popup-login');
const popupRegister = document.getElementById('popup-register');
const btnLogin = document.getElementById('btn-login');
const btnRegister = document.getElementById('btn-register');
const btnCloseDialog = document.querySelectorAll('.btn-close-dialog');
const btnContainers = document.querySelectorAll('.buttons-container')
var tamañoNavegador = window.innerWidth


btnLogin.addEventListener('click', () =>{
    popupLogin.showModal();
})
btnRegister.addEventListener('click',() => {Ñ
    popupRegister.showModal();
})
btnCloseDialog.forEach((btn) => btn.addEventListener('click', () =>{
    popupLogin.close();
    popupRegister.close();
}))