const navbar = document.querySelector('.mobile-navbar')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active')
})
