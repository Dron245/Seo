export function giftFunc() {
    const tarifGiftElement = document.querySelector('.tarif-gift');

    function toggleActiveClassOnScroll() {
        if (window.scrollY > 200) {
            tarifGiftElement.classList.add('active');
        } else {
            tarifGiftElement.classList.remove('active');
        }
    }
    window.addEventListener('scroll', toggleActiveClassOnScroll);
}