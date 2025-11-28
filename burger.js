let modal = document.getElementById('modal_nav');
let burgerBtn = document.getElementById('burger');

burgerBtn.addEventListener('click', function() {
    if (modal.classList.contains('active')) {
        modal.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            modal.classList.remove('active');
        }, 300);
    } else {
        modal.classList.add('active');
        // Небольшая задержка чтобы успел примениться display: flex
        setTimeout(() => {
            modal.style.transform = 'translateY(0)';
        }, 10);
    }
});

