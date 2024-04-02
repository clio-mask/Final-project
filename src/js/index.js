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
    slidesPerView: 1,
    pagination: {
      el: '.brands__swiper-pagination',
      clickable: true
    },
    modules: [Pagination]
  }),
    resizableSwiper('(max-width: 450px)', '.types__swiper', {
      loop: true,
      spaceBetween: -60,
      slidesPerView: 1,
      pagination: {
        el: '.types__swiper-pagination',
        clickable: true
      },
      modules: [Pagination]
    })
})

let slides = document.querySelectorAll('.brands__swiper-slide')

const tabletMediaQuery = window.matchMedia('(768px <= width < 1360px)')
const pcMediaQuery = window.matchMedia('(width >= 1360px)')

if (tabletMediaQuery.matches) {
  for (let i = 6; i < slides.length; i++) {
    let slide = slides[i]
    slide.classList.add('brands__swiper-slide--hidden')
  }
}
if (pcMediaQuery.matches) {
  for (let i = 8; i < slides.length; i++) {
    let slide = slides[i]
    slide.classList.add('brands__swiper-slide--hidden')
  }
}

let button = document.querySelector('.brands__show-more-button')
button.addEventListener('click', function () {
  const isOpen = button.classList.contains('brands__show-more-button--open')

  if (!isOpen) {
    for (let i = 0; i < slides.length; i++) {
      let slide = slides[i]
      slide.classList.remove('brands__swiper-slide--hidden')
    }

    button.textContent = 'Скрыть'
    button.classList.add('brands__show-more-button--open')
  } else {
    if (tabletMediaQuery.matches) {
      for (let i = 6; i < slides.length; i++) {
        let slide = slides[i]
        slide.classList.add('brands__swiper-slide--hidden')
      }
    }
    if (pcMediaQuery.matches) {
      for (let i = 8; i < slides.length; i++) {
        let slide = slides[i]
        slide.classList.add('brands__swiper-slide--hidden')
      }
    }

    button.textContent = 'Показать всё'
    button.classList.remove('brands__show-more-button--open')
  }
})
