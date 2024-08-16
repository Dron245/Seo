export function rowAccardeonFn(){
   
    const accordion = document.querySelectorAll('.row-accardeon');
    accordion.forEach(item => {
        const head = item.querySelector('.row__head');
        const content = item.querySelector('.row__content');
        const plusImg = item.querySelector('.plus');
        const minusImg = item.querySelector('.minus');
        
        head.addEventListener('click', () => {
           
                content.classList.toggle('active');
                plusImg.classList.toggle('none');
                minusImg.classList.toggle('none');
            
        });
    });

}