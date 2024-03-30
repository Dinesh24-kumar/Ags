document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    window.addEventListener('scroll', () => {
        if (isElementInViewport(content)) {
            content.classList.add('animate');
        } else {
            content.classList.remove('animate');
        }
    });

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
});
