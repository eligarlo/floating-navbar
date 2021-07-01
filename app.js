const navbar = document.querySelector('.mobile-navbar')
const menuBtn = document.querySelector('.menu-btn')
const firstLink = document.querySelector('.mobile-navbar .wrapper a:nth-child(1)')
const thirdLink = document.querySelector('.mobile-navbar .wrapper a:nth-child(3)')

menuBtn.addEventListener('click', () => {
  console.log(navbar.className.includes('active'))
  if (!navbar.className.includes('active')) {
    firstLink.style.transitionDelay = '0.5s'
    thirdLink.style.transitionDelay = ''
  } else {
    firstLink.style.transitionDelay = ''
    thirdLink.style.transitionDelay = '0.5s'
  }
  navbar.classList.toggle('active')
})
