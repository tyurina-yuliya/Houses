'use strict';
window.onload = function () {

    new WOW({
        animateClass: 'animate__animated',
    }).init();


    $('#burger').click(function () {
        $('#menu').addClass('open');
    })
    $('#menu a').click(function () {
        $('#menu').removeClass('open');
    })
    $('#menu .close').click(function () {
        $('#menu').removeClass('open');
    })



    $('.get-consult').click(function (e) {
        e.preventDefault();
        $('.consultation')[0].scrollIntoView({behavior: "smooth"});
    })


    $('.projects-house-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        zoom: {
            enabled: true,
        }
    });


    let projectsMoreText = $('.projects-more-text');
    let isProjectsCollapsed = false;
    let projectsOffsetTop = 0;
    $('.projects-house-hide').hide();
    $('.projects-more-button').click(function () {
        isProjectsCollapsed = !isProjectsCollapsed;
        if (isProjectsCollapsed) {
            projectsOffsetTop = $('#projects-house2').offset().top;
        } else {
            window.scrollTo({top: projectsOffsetTop});
        }
        $('.projects-house-hide').slideToggle();
        $('.projects-more-image').toggleClass('transform');
        projectsMoreText.text(projectsMoreText.text() === "Скрыть 3 проекта" ? "Посмотреть ещё 3 проекта" : "Скрыть 3 проекта");
    });


    $(document).click(function (e) {
        $('.technologies-block-all-for-small-size-fon').hide('technologies-block-all-for-small-size-fon-show');
        if (e.target.classList.contains('animation-point-circle')) {
            $(e.target).next().show('technologies-block-all-for-small-size-fon-show');
        }
    })


    $('.slider-container').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        prevArrow: $('.slider-prev-arrow'),
        nextArrow: $('.slider-next-arrow'),
        centerPadding: 0,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 820,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    let phone = $('.input-phone');
    phone.inputmask({"mask": "+380 " + "(99) 99 - 99 - 999"});


    const forms = document.querySelectorAll('.form-validation');
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity()) {
                    if ($(form).hasClass('form-validation')) {
                        $.ajax({
                            method: "POST",
                            url: "http://testologia.site/checkout",
                            data: {name: $(form).find('.input-name').val(), phone: $(form).find('.input-phone').val()}
                        })
                            .done(function (msg) {
                                if (msg.success) {
                                    $('#thanks-popup').show();
                                    $('#thanks-popup .close').click(function () {
                                        $('#thanks-popup').hide();
                                        $('#steps-popup').hide();
                                        $('#excursion-popup').hide();
                                    })
                                } else {
                                    alert('Возникла ошибка при оформлении заявки. Пожалуйста, позвоните нам')
                                    $('#steps-popup').hide();
                                    $('#excursion-popup').hide();
                                }
                                $(form).trigger('reset').removeClass('was-validated');
                            });
                    }
                }
                form.classList.add('was-validated');
            }, false)
        })


    $('#steps-popup-open').click(function () {
        $('#steps-popup').show();
    })
    $('#steps-popup .close').click(function () {
        $('#steps-popup').hide();
        $('.form-validation').trigger('reset').removeClass('was-validated');
    })

    $('#excursion-popup-open').click(function () {
        $('#excursion-popup').show();
    })
    $('#excursion-popup .close').click(function () {
        $('#excursion-popup').hide();
        $('.form-validation').trigger('reset').removeClass('was-validated');
    })


    let excursionButton = $('.excursion-info-button');
    let excursionPoints = $('.excursion-fon-points');

    excursionButton.on('mouseenter', function () {
        excursionPoints.addClass('excursion-fon-points-shine')
    })
    excursionButton.on('mouseleave', function () {
        excursionPoints.removeClass('excursion-fon-points-shine')
    })

}
