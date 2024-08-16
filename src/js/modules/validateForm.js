
export function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"]');
    
    inputs.forEach(input => {
        if (input.type === "email" && !input.value.includes('@')) {
            // Если это поле email и в значении нет символа "@"
            input.classList.add('notvalid');
            isValid = false;
        } else if (!input.value.trim()) {
            // Если поле пустое
            input.classList.add('notvalid');
            isValid = false;
        } else {
            // Если поле заполнено корректно
            input.classList.remove('notvalid');
        }
    });

    // Добавляем обработчик события на каждый input
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.type === "email" && !this.value.includes('@')) {
                this.classList.add('notvalid');
            } else if (!this.value.trim()) {
                this.classList.add('notvalid');
            } else {
                this.classList.remove('notvalid');
            }
        });
    });

    return isValid;
}


