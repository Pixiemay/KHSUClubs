document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', reveal);

    function reveal() {
        const blocks = document.querySelectorAll('.club-main');

        blocks.forEach(block => {
            const blockTop = block.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (blockTop < windowHeight - 100) {
                block.style.opacity = '1';
                block.style.transform = 'translateY(0)';
            }
        });
    }

    // Запускаем функцию при загрузке страницы, чтобы проверить блоки, видимые при первой загрузке
    reveal();
});