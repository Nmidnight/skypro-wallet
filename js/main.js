/**
 * Функция инициализации логики форм.
 * Мы используем один файл для обеих страниц, чтобы не дублировать код.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Выбираем все инпуты и кнопку на текущей странице
    const inputs = document.querySelectorAll('input');
    const actionButton = document.querySelector('.btn-primary');

    /**
     * Обработчик события ввода (input).
     * Срабатывает при каждом нажатии клавиши внутри поля.
     */
    inputs.forEach(input => {
        input.addEventListener('input', () => {
            // 1. Реализация требования ТЗ: "текст становится черного цвета при вводе"
            // Мы добавляем класс 'filled', если поле не пустое.
            if (input.value.trim().length > 0) {
                input.classList.add('filled');
            } else {
                input.classList.remove('filled');
            }

            // 2. Логика активации кнопки.
            // Проверяем, что КАЖДОЕ поле на текущей странице заполнено.
            const allFilled = Array.from(inputs).every(i => i.value.trim().length > 0);
            
            // Если все заполнены — убираем атрибут 'disabled', иначе добавляем.
            actionButton.disabled = !allFilled;
        });
    });
});