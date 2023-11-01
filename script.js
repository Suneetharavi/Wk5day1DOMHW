const mainEl = document.querySelector('main')

 const colr = 'var(--main-bg)'
mainEl.style.backgroundColor = colr

//mainEl.style.backgroundColor = 'var(--main-bg)';

// Create content of mainE1
const title = document.createElement("h1");
title.textContent = "SEI Rocks!";
mainEl.appendChild(title)

mainEl.classList.add('flex-ctr')

const topMenuEl = document.querySelector('#top-menu')

topMenuEl.style.height = '100%'

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

    menuLinks.forEach((menu) => {
    const anc = document.createElement("a");
    anc.setAttribute('href', menu.href)
    var linkText = document.createTextNode(menu.text.toUpperCase());
    anc.appendChild(linkText)
    topMenuEl.appendChild(anc)
  })