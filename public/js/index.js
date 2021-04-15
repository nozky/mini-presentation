'use strict'

const btnOff = document.querySelector('.btn-off');
const btnOn = document.querySelector('.btn-on');

btnOff.addEventListener('click',()=>{
  fetch('/off')
    .then(res => res.text())
    .then( data => console.log(data))
    .catch( err => console.log( err))
})


btnOn.addEventListener('click',()=>{
  fetch('/on')
  .then(res => res.text())
  .then( data => console.log(data))
  .catch( err => console.log( err))
})