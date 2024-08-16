import Swiper, {
    Autoplay, Navigation, Pagination
} from "swiper";
Swiper.use([Pagination, Navigation, Autoplay])


export function swiperFn() {
    var swiper = new Swiper(".mySwiper", {
        modules: [Autoplay],
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        speed: 1000,
    });
    var seoSlider = new Swiper(".seo-slider", {
        spaceBetween: 20,
        slidesPerView: 1,
        modules: [Autoplay, Pagination],
        speed: 1000,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,   
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            },
        }
    });
    var seoSlider = new Swiper(".seo-slider--clients", {
        spaceBetween: 20,
        slidesPerView: 1,
        modules: [Autoplay, Pagination],
        speed: 1000,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            1024: {
                slidesPerView: 2,
                spaceBetween: 40,   
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            },
        }
    });
}

export function SwiperInit() {
    function enableSwiper() {
        if (window.matchMedia('(max-width: 768px)').matches) {
            if (document.querySelector('.skills__grid_1_swiper')) {
                document.querySelector('.skills__grid_1_swiper').classList.add('swiper-container')
                const grid1 = document.querySelector('.skills__grid_1')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.skills__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.estet-promotion__container__slider')) {
                document.querySelector('.estet-promotion__container__slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.estet-promotion__container__slider--wrapper')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.estet-promotion__container__slider--wrapper--item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.marestes-promotion__container__top-row__slider')) {
                document.querySelector('.marestes-promotion__container__top-row__slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.marestes-promotion__container__top-row__slider--wrapper')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.marestes-promotion__container__top-row__slider--wrapper--item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.sirius-promotion__container__slider')) {
                document.querySelector('.sirius-promotion__container__slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.sirius-promotion__container__slider__wrapper')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.crew__slider')) {
                document.querySelector('.crew__slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.crew__slider .row')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.block').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.seo-main-two .slider-one')) {
                const container = document.querySelector('.seo-main-two .slider-one')
                container.classList.add('swiper-container')
                const grid1 = container.querySelector('.row__block__content')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.row__block__content--item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.seo-main-two .slider-two')) {
                const container = document.querySelector('.seo-main-two .slider-two')
                container.classList.add('swiper-container')
                const grid1 = container.querySelector('.row__block__content')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.row__block__content--item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }


            if (document.querySelector('.term-slider')) {
                document.querySelector('.term-slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.term-slider .column')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.row').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.cost-slider')) {
                document.querySelector('.cost-slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.cost-slider .row')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.block').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.cost-slider')) {
                document.querySelector('.cost-slider').classList.add('swiper-container')
                const grid1 = document.querySelector('.cost-slider .row')
                grid1.classList.add('swiper-wrapper')
                grid1.querySelectorAll('.block').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.skills__grid_2_swiper')) {
                document.querySelector('.skills__grid_2_swiper').classList.add('swiper-container')
                const grid2 = document.querySelector('.skills__grid_2')
                grid2.classList.add('swiper-wrapper')
                grid2.querySelectorAll('.skills__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.skills__grid_3_swiper')) {
                document.querySelector('.skills__grid_3_swiper').classList.add('swiper-container')
                const grid3 = document.querySelector('.skills__grid_3')
                grid3.classList.add('swiper-wrapper')
                grid3.querySelectorAll('.skills__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.skills__grid_4_swiper')) {
                document.querySelector('.skills__grid_4_swiper').classList.add('swiper-container')
                const grid4 = document.querySelector('.skills__grid_4')
                grid4.classList.add('swiper-wrapper')
                grid4.querySelectorAll('.skills__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.skills__grid_5_swiper')) {
                document.querySelector('.skills__grid_5_swiper').classList.add('swiper-container')
                const grid5 = document.querySelector('.skills__grid_5')
                grid5.classList.add('swiper-wrapper')
                grid5.querySelectorAll('.skills__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.planets-container')) {
                document.querySelector('.planets-container').classList.add('swiper-container')
                document.querySelector('.planets__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.planets__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.points__swiper')) {
                document.querySelector('.points__swiper').classList.add('swiper')
                document.querySelector('.points__swiper').classList.add('swiper-container')
                document.querySelector('.points__wrapper').classList.add('swiper-wrapper')
                document.querySelectorAll('.points__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
         
            
        }
        if (window.matchMedia('(max-width: 1024px)').matches) {
            if (document.querySelector('.skills__swiper')) {
                document.querySelector('.skills__swiper').classList.add('swiper-container')
                document.querySelector('.skills__list').classList.add('swiper-wrapper')
                document.querySelectorAll('.skills__skill').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.team__swiper')) {
                document.querySelector('.team__swiper').classList.add('swiper-container')
                document.querySelector('.team__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.team__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.profit__swiper')) {
                document.querySelector('.profit__swiper').classList.add('swiper-container')
                document.querySelector('.profit__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.profit__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
            if (document.querySelector('.clients__swiper')) {
                document.querySelector('.clients__swiper').classList.add('swiper-container')
                document.querySelector('.clients__swiper').classList.add('swiper')
                document.querySelector('.clients__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.clients__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
        }
        if (window.matchMedia('(max-width: 1100px)').matches) {
            if (document.querySelector('.rate__swiper')) {
                document.querySelector('.rate__swiper').classList.add('swiper-container')
                document.querySelector('.rate__swiper').classList.add('swiper')
                document.querySelector('.rate__items').classList.add('swiper-wrapper')
                document.querySelectorAll('.rate__item').forEach((item) => {
                    item.classList.add('swiper-slide')
                })
            }
        }
    }
    enableSwiper()
    const contextGrid = new Swiper('.context-stages__swiper', {
        modules: [Pagination],
        slidesPerView: 5,
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            1280: {
                slidesPerView:5
            },
            1024: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            576: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            }
        }
    })
    if (document.querySelector('.marestes__slider')) { 
		new Swiper('.marestes__slider', { 
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			breakpoints: {
				300: {
					slidesPerView: 1.4,
					spaceBetween: 15,
					loop: true,
				},
			
				468: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
					// autoHeight:true
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},
		});
	}
	if (document.querySelector('.sirius__slider')) { 
		new Swiper('.sirius__slider', { 
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 800,

			breakpoints: {
				300: {
					slidesPerView: 1.4,
					spaceBetween: 15,
					loop: true,
				},
			
				468: {
					slidesPerView: 3,
					spaceBetween: 20,
					loop: true,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 20,
					loop: true,
					// autoHeight:true
				},
				1268: {
					slidesPerView: 5,
					spaceBetween: 20,
				},
			},
		});
	}
    const grid1Swiper = new Swiper('.skills__grid_1_swiper', {
        modules: [Pagination],
        slidesPerView: 2,
        loop: false,
        pagination: {
            el: '.swiper-pagination'
        },
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
        }
    })
    const mainSliderOne = new Swiper('.seo-main-two .slider-one', {
        slidesPerView: 1.3,
        spaceBetween: 24,
       
    })
    const mainSliderTwo = new Swiper('.seo-main-two .slider-two', {
        slidesPerView: 1.3,
        spaceBetween: 20,
    })
    const crewSlider = new Swiper('.crew__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
    })
    const seoPromotionSlider = new Swiper('.marestes-promotion__container__top-row__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
    })
    const estetSlider = new Swiper('.estet-promotion__container__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
    })
    const siriusSlider = new Swiper('.sirius-promotion__container__slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
    })
    const costSlider = new Swiper('.cost-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
    })
    const orderSlider = new Swiper('.order-slider', { 
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2.5,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
            },
        }
    })
    const messageSlider = new Swiper('.seo-messages__container__slider', { 
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 'auto',
            },
        }
    })

      
   

    const termSlider = new Swiper('.term-slider', {
        // modules: [Pagination],
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
    })
    const grid2Swiper = new Swiper('.skills__grid_2_swiper', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
        }
    })
    const grid3Swiper = new Swiper('.skills__grid_3_swiper', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
        }
    })
    const grid4Swiper = new Swiper('.skills__grid_4_swiper', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
        }
    })
    const grid5Swiper = new Swiper('.skills__grid_5_swiper', {
        slidesPerView: 2,
        loop: false,
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination'
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            500: {
                slidesPerView: 2,
            },
        }
    })
    const skillsSwiper = new Swiper('.skills__swiper', {
        slidesPerView: 3,
        loop: false,
        spaceBetween: 16,
        pagination: {
            el: '.skills__swiper .swiper-pagination'
        },
        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3
            }
        }
    })
    const clientsSwiper = new Swiper('.clients__swiper', {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".clients__swiper .swiper-pagination"
        }
    })
    const rateSwiper = new Swiper('.rate__swiper', {
        modules: [Pagination],
        slidesPerView: 2,
        spaceBetween: 30,
        loop: false,
        pagination: {
            el: ".rate__swiper .swiper-pagination"
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            650: {
                slidesPerView: 2
            }
        }
    })
    const profitSwiper = new Swiper('.profit__swiper', {
        modules: [Pagination],
        spaceBetween: 30,
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".swiper-pagination"
        }
    })
    const teamSwiper = new Swiper('.team__swiper', {
        modules: [Pagination],
        loop: false,
        pagination: {
            el: ".swiper-pagination"
        },
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            500: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            900: {
                slidesPerView: 4
            }
        }
    })
    const pointsSwiper = new Swiper('.points__swiper', {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
            el: ".points__swiper .swiper-pagination"
        }
    })
    const planetsSwiper = new Swiper(".planets-container", {
        modules: [Pagination],
        slidesPerView: 1,
        loop: false,
        pagination: {
          el: ".swiper-pagination"
      }
    })    
}
