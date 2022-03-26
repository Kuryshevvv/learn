const ahilButton = document.querySelector('.button_start');

ahilButton.addEventListener('click', function e (){
    ahilButton.classList.remove('button_start');

    ahilButton.classList.add('button_end');
 });









 
//  function lightButton(ahilButton) {
//     if (ahilButton) { // убрать существующую подсветку, если есть
//         ahilButton.classList.remove('.button_start');
//     }
//     ahilButton.classList.add('.button_end'); 
//   }