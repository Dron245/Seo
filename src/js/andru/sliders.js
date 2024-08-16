/*
Документация по работе в шаблоне:
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

//Подключаем слайдер Swiper с node_modules
//При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
//Пример: { Navigation, Autoplay }
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
/*
Основные модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

//Стили Swiper
//Базовые стили
import "../../scss/base/swiper.scss";
//Инициализация слайдеров
function initSliders() {
//Список слайдеров
//Проверяем, есть ли слайдер на странице
	if (document.querySelector('.marestes__slider')) { 
		new Swiper('.marestes__slider', { 
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
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
			
			// События
			on: {

			}
		});
	}
	if (document.querySelector('.sirius__slider')) { //Указываем класс нужного слайдера
//Создаем слайдер
		new Swiper('.sirius__slider', { 
			observer: true,
			observeParents: true,
			slidesPerView: 'auto',
			spaceBetween: 5,
			speed: 800,
			loop:true,
		});
	}
}
//Скролл на базе слайдера (по классу swiper scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	//Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});