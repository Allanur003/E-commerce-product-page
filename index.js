let openCont = document.getElementById("openMenu")
let closeCont = document.getElementById("closeMenu")
let openMenuImg = document.getElementById("openMenuImg")
let closeMenuImg = document.getElementById("closeMenuImg")
let openCard= document.querySelector('.cardImg')
let closeCard = document.querySelector('.checkOut')
let card=document.querySelector('#card')

// For phone menu open/close
openCont.addEventListener('click', () => {
    document.getElementById("menu").style.display = "flex"
});

closeCont.addEventListener('click', () => {
    document.getElementById("menu").style.display = "none"
});

// For LightBox open/close

openMenuImg.addEventListener('click', () => {
    document.getElementById('x').style.display = 'flex'
});

closeMenuImg.addEventListener('click', () => {
    document.querySelector('#x').style.display = 'none'
});


// For carousel

let index = 1
sliderImage(index)
function plusImg(n) {
    sliderImage(index+=n)
}

function sliderImage(n) {
    let i;
    let slides = document.querySelectorAll('.mySlides')
    
    if (n > slides.length) { index = 1 }
    if (n < 1) { index = slides.length }
    
    for (i = 0; i < slides.length; i++){
        slides[i].style.display="none"
    }

    slides[index-1].style.display="flex"
}

// For card 
openCard.addEventListener('click', () => {
    card.style.display = 'flex'
    document.querySelector('.mainImg').style.display='none'
})

closeCard.addEventListener('click', () => {
    card.style.display = 'none'
    document.querySelector('.mainImg').style.display=' '
})


// For increment or decrement pcs of product
let decrement = document.querySelector('#decrement')
let increment = document.querySelector('#increment')
let num = document.querySelector('#numB')
let xc = document.querySelector('xc')

let calculate = document.querySelector('#calculate')

let numBer = 0;

increment.addEventListener('click', () => {
    if (numBer < 10) {
        numBer++;
        num.textContent = numBer;
    }
    xc.textContent=numBer
})

decrement.addEventListener('click', () => {
    if (numBer > 0) {
        numBer--;
        num.textContent=numBer
    }
})

calculate.addEventListener('click', () => {
    let result = document.querySelector('#result')
    let xc=document.querySelector('#xc')
    let price = 125.00;
    let sum = numBer * price;
    result.textContent = `${sum}.00$`;
    xc.textContent=numBer
})



