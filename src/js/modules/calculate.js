export function calculateFc(){
    const rows = document.querySelectorAll('table tbody tr')
    rows.forEach(elem =>{
        const minus = elem.querySelector('.counter--minus')
        const plus = elem.querySelector('.counter--plus')
        const hour = elem.querySelector('.counter--input')
        ; // Преобразование в число

        minus.addEventListener('click', function(){
            const currentValue = Number(hour.textContent)
            if(currentValue === 0){
                return
            }
            hour.textContent = currentValue - 1
            updateSum(elem)
        })
        plus.addEventListener('click', function(){
            const currentValue = Number(hour.textContent)
            hour.textContent =  currentValue + 1
            updateSum(elem)
        })
        
    })

   function updateSum(item){
        const hour = Number(item.querySelector('.counter--input').textContent)
        const norma = Number(item.querySelector('.norma').textContent)
        const total =  item.querySelector('.total span')
        total.textContent = hour * norma
        total.textContent = Number(total.textContent).toLocaleString('ru-RU')
   }

   const perform = document.querySelector('.block--choise--perform')
   perform.addEventListener('click', function(){
    const block =  perform.closest('.block--choise')
    const hours = Number(block.querySelector('.block--choise--text input').value)
    rows.forEach(elem=>{
        const hour = elem.querySelector('.norma')
        const currentValue = Number(hour.textContent)
        if(block.querySelector('input[value="plus"]').checked){
            hour.textContent = currentValue + hours
            updateSum(elem)
        }
        if(block.querySelector('input[value="minus"]').checked){
            hour.textContent = currentValue - hours
            updateSum(elem)
        }
    })
   })
}