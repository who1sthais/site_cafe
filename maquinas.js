var img = document.getElementById('img')
var preco = document.getElementById('preco')

document.getElementById('piccolo').addEventListener('click', function() {
    preco.innerHTML = ''
    img.src = './img/Dulce_Gusto.jpg'
    preco.innerHTML = 'R$ 300,00'
    this.style.color = '#573218';
})

document.getElementById('c40').addEventListener('click', function() {
    preco.innerHTML = ''
    img.src = './img/Nespresso_Inissia.jpg'
    preco.innerHTML = 'R$ 250,00'
    this.style.color = '#573218';
})

document.getElementById('uc50').addEventListener('click', function() {
    preco.innerHTML = ''
    img.src = './img/Nespresso_C50.jpg';
    preco.innerHTML = 'R$ 250,00'
    this.style.color = '#573218';
})

document.getElementById('HD').addEventListener('click', function() {
    preco.innerHTML = ''
    img.src = './img/senseo.jpg'
    preco.innerHTML = 'R$ 250,00'
    this.style.color = '#573218';

})