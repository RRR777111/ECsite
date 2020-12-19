'use strict';
{
    const imgs = document.querySelectorAll('.main__link');
    const picImg = document.getElementById('mv__img');
    const array = Array.from(imgs);

    array.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const attr = item.getAttribute('href');
            picImg.src = attr;
        });
    });
}