export function animation() {
    const element = document.querySelectorAll('.facts__text');
    if (window.matchMedia('(max-width: 500px)').matches) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 1800) {
                element[0].classList.add("facts__animation")
            };
            if (window.scrollY > 1850) {
                element[1].classList.add('facts__animation')
            };
            if (window.scrollY > 1900) {
                element[2].classList.add('facts__animation')
            }
        }
        )
    } else {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 2500) {
                element[0].classList.add("facts__animation")
            } else {
                element[0].classList.remove("facts__animation")
            }
            if (window.scrollY > 2700) {
                element[1].classList.add('facts__animation')
            } else {
                element[1].classList.remove('facts__animation')
            }
            if (window.scrollY > 2900) {
                element[2].classList.add('facts__animation')
            } else {
                element[2].classList.remove('facts__animation')
            }
        })
    }
};