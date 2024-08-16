export function modalSeoFunc(){
    const modalSeo = document.querySelector('.modal-content')
   
    // const tarifGiftElement = document.querySelector('.tarif-gift');
    const openSeoBtns = document.querySelectorAll('.open-modal-btn')
    

    openSeoBtns.forEach(elem =>{
        const dataBlock = elem.getAttribute('data-name-block')
        elem.addEventListener('click', function(){
            modalSeo.querySelector('input[type="hidden"]').value = dataBlock
            openModal()
        } )
    })

    // openSeo.addEventListener('click', openModal)
    // tarifGiftElement.addEventListener('click', openModal)
    function openModal(){
        modalSeo.classList.remove('fadeOut')
        modalSeo.classList.remove('none')
        modalSeo.classList.add('fadeIn')
        
    }
    document.addEventListener('click', function(event){
        if(event.target.classList.contains('modal-content')||event.target.classList.contains('close')){
            modalSeo.querySelector('form').reset()
            modalSeo.classList.add('fadeOut')
            modalSeo.classList.remove('fadeIn') 
            const inputs = modalSeo.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');
            inputs.forEach(input => {
                    input.classList.remove('notvalid');
            });

        }
    })
}