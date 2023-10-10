document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidad de botón 'Me gusta'
    const likeButtons = document.querySelectorAll('.like-button');
    
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const countEl = button.nextElementSibling;
            let currentCount = parseInt(countEl.textContent);
            currentCount++;
            countEl.textContent = currentCount;
        });
    });

    // Funcionalidad de desplazamiento para las historias
    const stories = document.querySelector('.stories');
    let isDown = false;
    let startX;
    let scrollLeft;
    
    stories.addEventListener('mousedown', (e) => {
        isDown = true;
        stories.classList.add('active');
        startX = e.pageX - stories.offsetLeft;
        scrollLeft = stories.scrollLeft;
    });
    stories.addEventListener('mouseleave', () => {
        isDown = false;
        stories.classList.remove('active');
    });
    stories.addEventListener('mouseup', () => {
        isDown = false;
        stories.classList.remove('active');
    });
    stories.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - stories.offsetLeft;
        const walk = (x - startX) * 3;
        stories.scrollLeft = scrollLeft - walk;
    });
});
