const navbar = document.querySelector('.mobile-navbar')
const menuBtn = document.querySelector('.menu-btn')

menuBtn.addEventListener('click', () => {
  navbar.classList.toggle('active')
})
