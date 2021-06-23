// DOM Document Object Model

// Procurar seletor e adicionar na constante
//Abre e fecha x r hamburguer
const nav = document.querySelector('#header nav') 
const toggle = document.querySelectorAll('nav .toggle')

// estrutura de repetição
for(const element of toggle){
  element.addEventListener('click', function() {
    nav.classList.toggle('show')
  })
}

//Esconde quando clica em um item do menu
const links = document.querySelectorAll('nav ul li a')
//estrutura de repetição
for(const link of links){
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Mudar o header quanda der scroll
const header = document.querySelector("#header")
const navHeigth = header.offsetHeight

window.addEventListener('scroll', function() {
  if(window.scrollY >= navHeigth) {
    //scroll é maior que a altura do header
    header.classList.add('scroll')
  } else{
    //menor que a altura do header
    header.classList.remove('scroll')
  }
})