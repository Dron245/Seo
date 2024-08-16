import AOS from 'aos';
// import 'aos/dist/style.css'

export function AOSFunc(){
    AOS.init(
        {
            duration: 1200, // продолжительность анимации в миллисекундах
             once: true
        }
    );
}