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


    // $(function(){
        $('#mv__img').on('click', function(){
            $('#wrapper').append('<div class="bg" id="bg">');
            $('#bg').hide();        
            $('#bg').append('<div class="photo" id="photo" alt="photo">');
            $('#photo').append('<img class="photo__img" id="photo__img">');
            $('#photo__img').attr('src', $(this).attr('src'));
            $('#bg').fadeIn();
            
            $('#bg').on('click', function(){
                $(this).fadeOut(function(){
                    $(this).remove();
                });
            });
            return false;
        });
    // });


}