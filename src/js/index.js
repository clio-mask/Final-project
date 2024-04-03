import '../scss/style.scss'

import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 450px)', '.brands__swiper', {
    loop: true,
    spaceBetween: -60,
    brandSlidesPerView: 1,
    pagination: {
      el: '.brands__swiper-pagination',
      clickable: true
    },
    modules: [Pagination]
  }),
    resizableSwiper('(max-width: 450px)', '.types__swiper', {
      loop: true,
      spaceBetween: -60,
      brandSlidesPerView: 1,
      pagination: {
        el: '.types__swiper-pagination',
        clickable: true
      },
      modules: [Pagination]
    })
})

let brandSlides = document.querySelectorAll('.brands__swiper-slide')
let typesSlides = document.querySelectorAll('.types__swiper-slide')
let readMore = document.querySelector('.main__text-item')

const tabletMediaQuery = window.matchMedia('(768px <= width < 1360px)')
const pcMediaQuery = window.matchMedia('(width >= 1360px)')

if (tabletMediaQuery.matches) {
  for (let i = 6; i < brandSlides.length; i++) {
    let brandSlide = brandSlides[i]
    brandSlide.classList.add('swiper-slide--hidden')
  }
  for (let i = 3; i < typesSlides.length; i++) {
    let typesSlide = typesSlides[i]
    typesSlide.classList.add('swiper-slide--hidden')
  }
}
if (pcMediaQuery.matches) {
  for (let i = 8; i < brandSlides.length; i++) {
    let brandSlide = brandSlides[i]
    brandSlide.classList.add('swiper-slide--hidden')
  }
  for (let i = 4; i < typesSlides.length; i++) {
    let typesSlide = typesSlides[i]
    typesSlide.classList.add('swiper-slide--hidden')
  }
}

let buttons = document.querySelectorAll('.show-more-button')
let readButton = buttons[0]
let brandButton = buttons[1]
let typesButton = buttons[2]

readButton.addEventListener('click', function () {
  const isOpen = readButton.classList.contains('show-more-button--open')

  if (!isOpen) {
    readMore.style.WebkitLineClamp = '100'
    readButton.textContent = 'Скрыть'
    readButton.classList.add('show-more-button--open')
  } else {
    readMore.style.WebkitLineClamp = '2'

    readButton.textContent = 'Читать далее'
    readButton.classList.remove('show-more-button--open')
  }
})

brandButton.addEventListener('click', function () {
  const isOpen = brandButton.classList.contains('show-more-button--open')

  if (!isOpen) {
    for (let i = 0; i < brandSlides.length; i++) {
      let brandSlide = brandSlides[i]
      brandSlide.classList.remove('swiper-slide--hidden')
    }

    brandButton.textContent = 'Скрыть'
    brandButton.classList.add('show-more-button--open')
  } else {
    if (tabletMediaQuery.matches) {
      for (let i = 6; i < brandSlides.length; i++) {
        let brandSlide = brandSlides[i]
        brandSlide.classList.add('swiper-slide--hidden')
      }
    }
    if (pcMediaQuery.matches) {
      for (let i = 8; i < brandSlides.length; i++) {
        let brandSlide = brandSlides[i]
        brandSlide.classList.add('swiper-slide--hidden')
      }
    }

    brandButton.textContent = 'Показать всё'
    brandButton.classList.remove('show-more-button--open')
  }
})

typesButton.addEventListener('click', function () {
  const isOpen = typesButton.classList.contains('show-more-button--open')

  if (!isOpen) {
    for (let i = 0; i < typesSlides.length; i++) {
      let typesSlide = typesSlides[i]
      typesSlide.classList.remove('swiper-slide--hidden')
    }

    typesButton.textContent = 'Скрыть'
    typesButton.classList.add('show-more-button--open')
  } else {
    if (tabletMediaQuery.matches) {
      for (let i = 3; i < typesSlides.length; i++) {
        let typesSlide = typesSlides[i]
        typesSlide.classList.add('swiper-slide--hidden')
      }
    }
    if (pcMediaQuery.matches) {
      for (let i = 4; i < typesSlides.length; i++) {
        let typesSlide = typesSlides[i]
        typesSlide.classList.add('swiper-slide--hidden')
      }
    }

    typesButton.textContent = 'Показать всё'
    typesButton.classList.remove('show-more-button--open')
  }
})

let menuButton = document.querySelector('.header__menu')
let menu = document.querySelector('.menu')
let closeButton = document.querySelector('.menu__button')
let modalShadow = document.querySelector('.page__modal-bg')

menuButton.addEventListener('click', function () {
  menu.classList.add('menu--open')
  modalShadow.style.display = 'block'
})

closeButton.addEventListener('click', () => {
  menu.classList.remove('menu--open')
  modalShadow.style.display = 'none'
})

modalShadow.addEventListener('click', () => {
  menu.classList.remove('menu--open')
  modalShadow.style.display = 'none'
})
