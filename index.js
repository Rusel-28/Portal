const expand = document.querySelector('.noBlok');
const close = document.getElementById('close');

const nextBlok = close.addEventListener('click', () => {
  expand.className = 'noBlok';
});

function expandBlok(){
  expand.className = 'newBlok';
  nextBlok();
}

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');

  btn1.addEventListener('click', () => {
  expand.innerHTML = '2009-2021 Gamanet a.s.All rights reserved.';
  expandBlok(); 
  })

  btn2.addEventListener('click', () => {
    expand.innerHTML = 'Continue with Google';
    expandBlok();
  })

  btn3.addEventListener('click', () => {
    expand.innerHTML = 'Create decounte';
    expandBlok();
  })

  btn4.addEventListener('click', () => {
    expand.innerHTML = 'Forgot password?';
    expandBlok();
  })

  btn5.addEventListener('click', () => {
    expand.innerHTML = 'Login';
    expandBlok();
  })

    


  






// btn1.addEventListener('click', () => {
//   newText.className = 'newblok';
//   newText.innerHTML = '2009-2021 Gamanet a.s.All rights reserved.';  
//   next();
// })












/*(function () {
  // создаём модальное окно
  var modal = $modal();
  // при клике по кнопке #show-modal
  document.querySelector('#show-modal').addEventListener('click', function (e) {
    // отобразим модальное окно
    modal.show();
  });
})();  */