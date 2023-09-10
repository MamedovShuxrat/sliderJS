let btnRight = document.querySelector('.arrow-right')
let btnLeft = document.querySelector('.arrow-left')
let img = document.querySelector('.projects-images')
let city = document.querySelector('.city')
let squareMeter = document.querySelector('.square-meter')
let repTime = document.querySelector('.repair-time')
let repCost = document.querySelector('.repair-cost')
let navLinks = document.querySelectorAll('.nav_link')
let dots = document.querySelectorAll('.dot')

const citiesDescr = [
    {
        sity: 'Rostov-on-Don LCD admiral',
        imgSrc: 'images/image1.jpg',
        area: '81 m2',
        repearTime: '3.5 months',
        repearCost: 'Upon request'
    },
    {
        sity: 'Sochi',
        imgSrc: 'images/image2.jpg',
        area: '105 m2',
        repearTime: '4 months',
        repearCost: 'Upon request'
    },
    {
        sity: 'Rostov-on-Don Patriotic',
        imgSrc: 'images/image3.jpg',
        area: '93 m2',
        repearTime: '3 months',
        repearCost: 'Upon request'
    }
]
let n = 0

function upDateSlide() {
    let currentSlide = citiesDescr[n]
    city.innerHTML = currentSlide.sity
    img.src = currentSlide.imgSrc
    squareMeter.innerHTML = currentSlide.area
    repTime.innerHTML = currentSlide.repearTime
    repCost.innerHTML = currentSlide.repearCost
    dots.forEach(function (dotItem) {
        dotItem.classList.remove('dot-active')
    })
    navLinks.forEach(function (item) {
        item.classList.remove('nav_link-active')
    })
    dots[n].classList.add('dot-active')
    navLinks[n].classList.add('nav_link-active')
}

btnRight.addEventListener('click', function () {
    n++
    if (n >= citiesDescr.length) {
        n = 0;
    }
    upDateSlide()
})

btnLeft.addEventListener('click', function () {
    n--
    if (n < 0) {
        n = citiesDescr.length - 1;
    }
    upDateSlide()

})


dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
        n = index
        upDateSlide()
    })
})

navLinks.forEach(function (link, index) {
    link.addEventListener('click', function () {
        n = index
        upDateSlide()
    })
})