
const btn = document.getElementById('btn');

const navigation = document.querySelector('.navigation');
const line1 = document.querySelector('.line-1');
const line2 = document.querySelector('.line-2');

btn.addEventListener('click', () => {
   navigation.classList.toggle('active');
   line1.classList.toggle('active');
   line2.classList.toggle('active')
})