'use strict';

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const toggleModal = function() {
    modal.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
}

for (let i = 0; i < btnShowModal.length; i++) {
    btnShowModal[i].addEventListener('click', toggleModal)    
}

btnCloseModal.addEventListener('click', toggleModal)
overlay.addEventListener('click', toggleModal)

 document.addEventListener('keydown', function (e) {
   if (e.key ==='Escape') {
            toggleModal()       
   }
});


