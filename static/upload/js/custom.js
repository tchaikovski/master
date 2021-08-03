/* Ammina JS file original /bitrix/templates/avtoshkola/js/script.js */
;/*Появляющееся скрытое меню в шапке*/
$(document).ready(function () {
    $('.driving-branches').click(function (event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay-half').fadeIn(200,
            function () {
                $('.hidden-menu').addClass('visible');
                $('html, header').width($('html, header').width());
                // $('html').css('overflow', 'hidden');
                // var myHeight = $('.hidden-menu').find('.hidden-menu-left ul').height() + 80 + "px";
                // var myHeight = $('.hidden-menu').find('.hidden-menu-left').height() + 80 + "px";
                var myHeight = $('.hidden-menu').find('.hidden-menu-left ul').height() + 100 + "px";
                console.log(myHeight);
                $('.hidden-menu').css('max-height', myHeight);
            });
    });
    $('.close-btn, .overlay-half, .modal-slide-btn').click(function () {
        $('.hidden-menu').removeClass('visible');
        $('.overlay-half').fadeOut(200);
        $('html').removeAttr('style');
    });
});

/*продолжение появляющегося меню - переключение табов*/
$(document).ready(function () {
    $(".hidden-menu-left li").hover(function () {
        $(".hidden-menu-addition").removeClass('active');
        $(".hidden-menu-left li a").removeClass('active');
        $(this).find("a").addClass("active");
        var selected_tab = $(this).find("a").attr("href");
        $(selected_tab).stop().addClass("active");
        return false;
    });
});

/*оставить заявку*/
// $(document).ready(function() {
//     $('body').on('click','.submit-application',function () {
//         event.preventDefault();
//         var btn = $(this);
//         $('.overlay').fadeIn(200,
//             function() {
//                 $('.modal-submit').addClass('active');
//                 $('html, header').width($('html, header').width());
//                 $('html').css('overflow', 'hidden');
//             });
//     });


//     $('.close-btn, .overlay, .modal-slide-btn').click(function() {
//         $('.modal-submit').removeClass('active');
//         $('.overlay').fadeOut(200);
//         $('html').removeAttr('style');
//     });
// });

/*заказать звонок*/
// $(document).ready(function() {
//     $('.footer-request-call').click(function(event) {
//         event.preventDefault();
//         var btn = $(this);
//         $('.overlay').fadeIn(200,
//             function() {
//                 $('.modal-callback').addClass('active');
//                 $('html, header').width($('html, header').width());
//                 $('html').css('overflow', 'hidden');
//             });
//     });
//     $('.close-btn, .overlay, .modal-slide-btn').click(function() {
//         $('.modal-callback').removeClass('active');
//         $('.overlay').fadeOut(200);
//         $('html').removeAttr('style');
//     });
// });

// модальные окна
function modalShow(clickElement, modalClass) {
    $('.' + clickElement).click(function (event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function () {
                $('.' + modalClass).addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function () {
        $('.' + modalClass).removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });
};
modalShow('footer-request-call', 'modal-callback');          /* оставить заявку */
// modalShow('submit-application', 'modal-submit');             /* заказать звонок */
// modalShow('offer-modal-link', 'modal-submit');               /* горячее предложение */
modalShow('aside-link-block__link-modal', 'modal-callback'); /* ссылка внизу страницы на телефоне */

modalShow('branch-btn-other', 'modal-car');                  /* другие филиалы, авто */
modalShow('branch-btn-other-moto', 'modal-moto');            /* другие филиалы, мото */

// горячее предложение
$('.offer-close-btn').click(function (event) {
    $('.offer-slide').fadeOut();
});

// маска для телефона
$(document).ready(function () {
    // $(".phone-mask").mask("+ 7 ( 999 ) 999 99 - 99");
    $(".phone-mask").mask("+ 7 (999)  999-99-99");
});

/*слайдер на главной верхний*/
var swiper = new Swiper('.main-swiper', {
    effect: 'fade',
    speed: 2000,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.main-swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="mainPagination ' + className + '">' + (index + 1) + '</span>';
        },
    },
    // autoHeight: true,
});


/*Селект форма на главной*/
// $('.filter-handler').click(function() {
//     $(this).next('.filter-dd').slideToggle(200);
//     $(this).toggleClass('active');
// });
// $('.filter-dd a').click(function() {
//     let val = $(this).text();
//     // следующие два пункта добавил для выделение активного пункта
//     $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
//     $(this).addClass('active');
//
//     $(this).closest('.filter-item').find('.filter-handler').text(val);
//     val = $(this).data('id');
//     $(this).closest('.filter-item').find('input').val(val);
//     console.log($(this).closest('.filter-item').find('input').val());
// });
// $('body').on('click', function(e) {
//     if ($(e.target).closest('.filter-handler').length === 0) {
//         $('.filter-dd').slideUp(200);
//         $('.filter-handler').removeClass('active');
//         updatePrice2();
//     }
// });

// мобильные отзывы
$(document).ready(function () {
    var width = $(window).width();
    var toggleList = $(".reviews-tab-select");
    if (width <= 768) {
        // $('.reviews-tabs').slideUp();
        $('.reviews-tab-select').click(function (evt) {
            $(this).toggleClass('active');
            $('.reviews-tabs').slideToggle();
            var val = $(this).text();
            $('.revews-tab-link').click(function () {
                val = $(this).text();
                $('.reviews-tab-select').text(val);
                $('.reviews-tab-select').removeClass('active');
                $('.reviews-tabs').slideUp();
            })

            $('body').on('click', function (e) {
                if ($(e.target).closest('.reviews-tab-select').length === 0) {
                    $('.reviews-tab-select').removeClass('active');
                    $('.reviews-tabs').slideUp();
                }
            });
        });
    }
});

// $('.reviews-tab-select').click(function() {
//     $('.reviews-tab-select-form').toggleClass('active');
// });

$('.sub-list-toggle').click(function () {
    $('.mobile-header-nav-list.sub-list').slideToggle();
});

$('body').on('click', function (e) {
    if ($(e.target).closest('.reviews-tab-select').length === 0) {
        $('.reviews-tab-select-form').removeClass('active');
    }
});

/*Смещение иконки поиска при фокусировки*/
$(".address-col-small-search").delegate("*", "focus blur", function (event) {
    var elem = $(this);
    setTimeout(function () {
        $(".address-col-small-search").toggleClass("active", elem.is(":focus"));
    }, 0);
});


/*Слайдер на главной отзывы*/
var swiper2 = new Swiper('.feedback-swiper', {
    effect: 'fade',
    watchSlidesVisibility: true,
    navigation: {
        nextEl: '.feedback-button-next',
        prevEl: '.feedback-button-prev',
    },
});


/*вопрос-ответ появление ответа по клику*/
$(document).ready(function () {
    $(".questions-question").click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
    });
    $(".questions-question").click(function (e) {
        e.preventDefault();
        $(this).next().slideToggle();
    });
});


/*слайдер на странице документы и лицензии*/
var swiper = new Swiper('.docs-swiper', {
    // cssMode: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    navigation: {
        nextEl: '.docs-button-next',
        prevEl: '.docs-button-prev',
    },
    // mousewheel: true,
    // keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 25,
        }
    }
});


// вывод значения из range калькулятора
$(document).ready(function () {
    let inputRange = $('#amount1');
    let outputRange = $('#output');

    // вывод значения в поле вывода
    inputRange.mousemove(function () {
        // outputRange.val(inputRange.val());
        outputRange.text(inputRange.val());
    });

    // показ введённого числа на ползунке
    outputRange.change(function () {
        // inputRange.val(outputRange.val());
        inputRange.text(outputRange.val());
    });
})

// function updatePrice() {
//     var price = +$('#amount1').val() * 100 +
//         $('[name="format"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
//         $('[name="category"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
//         $('[name="transmission"]:checked').toArray().reduce((sum, n) => sum + +$(n).val(), 0);

// $( "#amount3" ).val("$" + price);

//     $("#value__result").html(price);
//     var oldPrice = +price * 1.7;
//     $("#value__result-old").html(oldPrice);
// }
// $('[name="format"]').change(updatePrice);
// $('[name="category"]').change(updatePrice);
// $('[name="transmission"]').change(updatePrice);
// $('#amount1').change(updatePrice);

// updatePrice();


/*калькулятор мобильная версии*/
function updatePrice2() {
    var price = +$('#amount2').val() * 100 +
        $('[name="formatMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="categoryMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0) +
        $('[name="transmissionMob"]').toArray().reduce((sum, n) => sum + +$(n).val(), 0);
    // console.log(price);
    var rangeValue = +$('#amount2').val();

    $("#calc-mobile-range-val").html(rangeValue + ' ак/час');
    var oldPrice = +price * 1.7;
    $("#value__result-old-mob").html(oldPrice);
    $("#value__result-mob").html(price);
}

// $('#amount2').change(updatePrice2);

// updatePrice2();

/*слайдер на странице детской мотошколы*/
var swiper = new Swiper('.moto-swiper', {
    slidesPerView: 1.2,
    spaceBetween: 30,
    scrollbar: {
        el: '.moto-swiper-scrollbar',
        // hide: true,
    },
    navigation: {
        nextEl: '.moto-button-next',
        prevEl: '.moto-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3.5,
            spaceBetween: 25,
        }
    }
});


/*запретить прокручивание страницы к input при клике на label for*/
$('label[for="form-vacancies-checkbox-hidden"]').on('click', function (e) {
    var target = window[this.htmlFor];
    target.checked = !target.checked;
    e.preventDefault();
});

/*переключение табов*/
$(document).ready(function () {
    $('.reviews-tabs a').click(function (e) {
        e.preventDefault();
        $('.reviews-tabs .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.reviews-tabs-blocks').not(tab).css({'display': 'none'});

        // удаляем у всех блоков класс active
        $('.reviews-tabs-blocks').not(tab).removeClass('active');

        // блоку с нужным id добавляем класс active
        $(tab).addClass('active');


        console.log(tab);
        $('.show-more').removeClass('active');

        //кнопке с нужным id добавляем класс active
        // $('#btn-'+ tab).addClass('active');
        $(tab + '-btn').addClass('active'); // новый вариант

        // console.log($('#btn-'+ tab)); - так возвращает пустой объект
        // console.log($(tab + '-btn')); - так возвращает кнопку

        $(tab).fadeIn(400);
    });

    // $('.reviews-tab-select').click(function () {
    //     var optionValue = $(this).val();
    //     console.log(optionValue);
    //     $('.reviews-tabs-blocks').not(optionValue).css({'display':'none'});
    //     $('.reviews-tabs-blocks').not(optionValue).removeClass('active');
    //     $(optionValue).addClass('active');
    //     $('.show-more').removeClass('active');
    //     $(optionValue + '-btn').addClass('active');
    //     $(optionValue).fadeIn(400);
    // });
});

/*слайдер на странице филиалы, верхний*/
var swiper = new Swiper('.branch-swiper', {
    // cssMode: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.branch-button-next',
        prevEl: '.branch-button-prev',
    },
    // mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 25,
        }
    }
});

/*слайдер на странице филиалы, нижний*/
var swiper = new Swiper('.info-swiper', {
    // cssMode: true,
    slidesPerView: 1.2,
    spaceBetween: 20,
    navigation: {
        nextEl: '.info-button-next',
        prevEl: '.info-button-prev',
    },
    // mousewheel: true,
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        }
    }
});

/*mobile hamburger*/
$('#hamburger').click(function () {
    $(this).toggleClass('active');
    $('.header-desktop').toggleClass('active');
    $('html').toggleClass('noscroll');
    // $('header').toggleClass('hidden');
});

/*появление меню связь*/
$(document).ready(function () {
    $('.mobile-call').click(function () {
        $('.mobile-call-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
        // $('header').addClass('hidden');
    });
    $('.call-close-btn').click(function () {
        $('.mobile-call-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
        // $('header').removeClass('hidden');
    })
});

/*открытие мобильного меню*/
$(document).ready(function () {
    $('#hamburger').click(function () {
        $(this).addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
        $('.mobile-menu-block').addClass('active');
    });
    $('.menu-close-btn').click(function () {
        $('.mobile-menu-block').removeClass('active');
        $('#hamburger').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
        // $('header').removeClass('hidden');
    })
});

/*открытие категории меню*/
$(document).ready(function () {
    $('.mobile-category').click(function () {
        $('.mobile-category-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.category-close-btn').click(function () {
        $('.mobile-category-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })
});

/*открытие адрес меню*/
$(document).ready(function () {
    $('.open-address-form').click(function () {
        $('.mobile-address-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('html').addClass('noscroll');
    });
    $('.address-close-btn').click(function () {
        $('.mobile-address-block').removeClass('active');
        $('.mobile-hidden-blocks').removeClass('active');
        $('html').removeClass('noscroll');
    })

    $('.mobile-driving-branches').click(function () {
        $(this).removeClass('active');
        $('.mobile-address-block').addClass('active');
        $('.mobile-hidden-blocks').addClass('active');
        $('.mobile-menu-block').removeClass('active');
    })
});

/*Слайдер наше авто для мобильной версии*/
var autoSwiper = new Swiper('.auto-swiper', {
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    slidesPerView: 1
});
var mql = window.matchMedia('all and (max-width: 768px)');
if (mql.matches) {

} else {
    // нет, размер окна более 1000px
    // autoSwiper.destroy(true, true);
}


/*Слайдер наша команда для мобильной версии*/
var teamSwiper = new Swiper('.team-swiper', {
    // slidesPerView: 1.2,
    // spaceBetween: 20,
    slidesPerView: 1
});
// if (mql.matches) {

// } else {
//     // нет, размер окна более 1000px
//     teamSwiper.destroy(true, true);
// }

// var autoSwiper = new Swiper('#cars-swiper', {
//     slidesPerView: 1,
//     // spaceBetween: 20,
// });
// if (mql.matches) {

// } else {
//     // нет, размер окна более 1000px
//     autoSwiper.destroy(true, true);
// }

// aside-bar
$(document).ready(function () {

    // !NB: El = Element

    let mainEl = $('.aside');

    // отмечаем элемент при попадании в поле зрения
    $(window).on('scroll', function () {

        mainEl.removeClass('hidden-top hidden-bottom');

        // mainEl = $('.aside-list');

        let scrollRelativeEl = $('section'); // сравниваем относительно этих элементов (section)
        let mainElHeight = mainEl.outerHeight();

        let relativeElCurrentPosition = $(this).scrollTop(); // текущая позиция относительного элемента (section)
        scrollRelativeEl.each(function () {
            let borderTop = $(this).offset().top - mainElHeight;
            let borderBottom = borderTop + $(this).outerHeight();

            if (relativeElCurrentPosition >= borderTop && relativeElCurrentPosition <= borderBottom) {
                mainEl.find('a').removeClass('active');
                mainEl.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });

    // плавный переход по якорям
    let asideАnchor = $('.aside-link').not('.aside-page-link');
    $(asideАnchor).on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 700);
    });

    // скрываем на футере
    // let target = $('footer');
    // let targetPos = target.offset().top;
    // let windowHeight = $(window).height();
    // let scrollToElem = targetPos - windowHeight;

    // $(window).scroll(function(){
    //   let winScrollTop = $(this).scrollTop();

    //   if((winScrollTop - scrollToElem) > 0 ) {
    //     mainEl.addClass('hidden-bottom');
    //   } else {
    //     mainEl.removeClass('hidden-bottom');
    //   }
    // });

    // скрываем на первом элементе после хедера
    // let firstEl = ($('main section:first'));        // первый элемент
    // let firstElHeight = firstEl.outerHeight(true);  // высота первого элемента

    // $(window).scroll(function () {
    //   if ($(window).scrollTop() < firstElHeight / 2) {
    //     mainEl.addClass('hidden-top');
    //   } else if ($(window).scrollTop() >= firstElHeight  / 2) {
    //     mainEl.removeClass('hidden-top');
    //   }
    // });
});

// появление нижнего блока меню
$(document).ready(function () {

    var headerTopBlock = $('.header-mobile-top'),
        headerMiddleBlock = $('.header-mobile-middle'),
        headerBottomBlock = $('.header-mobile-bottom'),
        scrollPrev = 0;

    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 100 && scrolled > scrollPrev) {
            headerTopBlock.addClass('out');
            headerMiddleBlock.addClass('out');
            headerBottomBlock.addClass('out');
        } else {
            headerTopBlock.removeClass('out');
            headerMiddleBlock.removeClass('out');
            headerBottomBlock.removeClass('out');
        }
        ;
        scrollPrev = scrolled;
    })
});

// label с файлом
//   let inputFile = $('.vacancies-file');
//   let labelFile = $('.more-content-btn');
//   let labelTextField = labelFile.find($('.input__file-button-text'));
//   let labelVal = labelFile.find($('.input__file-button-text')).text();

//   inputFile.on('change', function (evt) {
//     let countFiles = '';
//     if (this.files && this.files.length >= 1) {
//       countFiles = this.files.length;
//     }
//     if (countFiles) {
//       labelTextField.text('Выбрано файлов: ' + countFiles);
//     }
//     else {
//       labelTextField.text(labelVal);
//     }

//     countFiles ? labelTextField.text('Выбрано файлов: ' + countFiles) : labelTextField.text(labelVal);
// });;/* Ammina JS file original /bitrix/templates/avtoshkola/js/index.js */
;$(function () {
    $(document).ready(function () {

        $('.question-btn').click(function () {
            if ($('.agree').is(':checked')) {
                $('.form-warning').css('color', 'black');
                $('.form-vacancies-checkbox').removeClass('active');
            } else {
                $('.form-warning').css('color', 'red');
                $('.form-vacancies-checkbox').addClass('active');
            }

            // console.log ($('input[name="FILIAL"]').val());

            if ($('.form-required-input').val() == '') {
                $('.form-required').css('color', 'red');
            } else {
                $('.form-required').css('color', 'black');
            }
        });

        $('.form-warning').click(function () {
            if ($('.agree').is(':checked')) {
                $('.form-warning').css('color', 'black');
                $('.form-vacancies-checkbox').removeClass('active');
            } else {
                $('.form-warning').css('color', 'red');
                $('.form-vacancies-checkbox').addClass('active');
            }
        });
    });
});

$(document).ready(function () {

    $('.hidden-menu-main-link').click(function (e) {
        e.preventDefault();
    });

    $('body').on('click', '.submit-application', function () {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function () {
                $('.modal-submit').addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });


    $('body').on('click', '.delit-file', function () {
        $(this).closest('.download-doc').remove();
    });


    function reset() {
        $('.reset-form').find('input').val('');
        $('.reset-form').find('textarea').val('');
    };

    function resetForm() {
        $('.reset-form').find('input').each(function () {
            $('input').val('');
        });
        $('.reset-form').find('textarea').val('');
    };


    function showMassege() {
        $('.message').addClass('active');
        setTimeout(function () {
            $('.message').removeClass('active');
        }, 3000);
    }


    function showMassegeAfterComment() {
        $('.message-comment').addClass('active');
        setTimeout(function () {
            $('.message-comment').removeClass('active');
        }, 3000);
    }


    $('.submit-vopros').click(function (event) {
        event.preventDefault();
        var btn = $(this);
        $('.overlay').fadeIn(200,
            function () {
                $('.modal-vopros').addClass('active');
                $('html, header').width($('html, header').width());
                $('html').css('overflow', 'hidden');
            });
    });
    $('.close-btn, .overlay, .modal-slide-btn').click(function () {
        $('#zayavka-modal').removeClass('active');
        $('.modal-vopros').removeClass('active');
        $('.overlay').fadeOut(200);
        $('html').removeAttr('style');
    });


    $('.filter-handler').click(function () {
        $('.filter-dd').not(this).slideUp(200); // закрываем уже открытые меню
        // $(this).next('.filter-dd').slideDown(200);

        $('.filter-handler').not(this).removeClass('active'); // удаляем у других меню .active
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $(this).next('.filter-dd').slideDown(200);
        }
    });
    $('.filter-dd a').click(function () {
        let val = $(this).text(),
            velText = $.trim(val);

        $(this).closest('.filter-item').find('.filter-dd a').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.filter-item').find('.filter-handler').text(velText.substring(0, 19));
        $('.form-required').css('color', 'black');
        let value = $(this).text();
        $(this).closest('.filter-item').find('input').val(value);
    });
    $('body').on('click', function (e) {
        if ($(e.target).closest('.filter-handler').length === 0) {
            $('.filter-dd').slideUp(200);
            $('.filter-handler').removeClass('active');
        }
    });

    $('#calculatorMOB .filter-dd a').click(function () {
        var dataId = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(dataId);

    });


//course selection
    $('.price-form .filter-dd a').click(function () {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });

    $('#show-avtoshkola .filter-dd a').click(function () {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });

    $('#show-avtoshkola-mob .filter-dd a').click(function () {
        let value = $(this).data('id');
        $(this).closest('.filter-item').find('input').val(value);
    });


    $("#metro-value-mob").change(function () {
        var metro_id = $('#metro option[value="' + $('#metro-value-mob').val() + '"]').data('id');
        $('input[name="METRO-MOB"]').val(metro_id);
    });


    //FILTR SHOW ADDRESS
    $("#metro-value").change(function () {
        var metro_id = $('#metro-search option[value="' + $('#metro-value').val() + '"]').data('id'),
            metro_text = $('#metro-search option[value="' + $('#metro-value').val() + '"]').val(),
            metro_vetka_id = parseInt($('#metro-search option[value="' + $('#metro-value').val() + '"]').attr('class'));
        console.log(metro_vetka_id);

        $('input[name="METRO"]').val(metro_id);
        $('input[name="VETKA_METRO"]').val(metro_vetka_id);
        $('#text').text(metro_text.slice(0, 19));
        $('#text-vetka-ID a').each(function () {
            var vetka_id = +$(this).data('id'),
                vetka_name = $(this).text(),
                vetka_icon = $(this).find('img').attr('src');

            if (vetka_id == metro_vetka_id) {
                $('#text-vetka').text(vetka_name);
                $('#vetka-icon').find('img').attr("src", vetka_icon);
            }
        });

        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");
            $idVetkaMetro = parseInt($idVetkaMetro);
            if ($idVetkaMetro !== metro_vetka_id) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'block');
            }
        });
    });

    $('#filtr-vetka .filtr-vetka-ID a').click(function () {
        let idVetka = $(this).data('id');
        $('#text').text('Выберите станцию');
        $('#metro-value').val('');
        $('.filtr-vetka-METRO a').each(function () {
            $idVetkaMetro = $(this).attr("class");

            $idVetkaMetro = parseInt($idVetkaMetro);

            if ($idVetkaMetro !== idVetka) {
                $(this).css('display', 'none');
            } else {
                $(this).css('display', 'block');
            }
        });

        var scrIcon = $(this).find('img').attr('src');
        $('#vetka-icon').find('img').attr("src", scrIcon);

    });

    $('#filtr-vetka .filtr-vetka-METRO a').click(function () {
        $('#metro-value').val('');

    });


    //FILTR SHOW PRICE
    //if categoriya A,A1,М,B1,C,CE hide "korobka avtomat"
    $('#kategoriya li').click(function () {
        var kategoriyaID = $(this).find('a').data('id');
        if ((+kategoriyaID == 42) || (+kategoriyaID == 43) || (+kategoriyaID == 44) || (+kategoriyaID == 46) || (+kategoriyaID == 47) || (+kategoriyaID == 62) || (+kategoriyaID == 49)) {
            $("#korobka a").not("." + kategoriyaID).addClass('disabled');
        } else {
            $("#korobka a").removeClass('disabled');
        }

        //if categoriya A1,М,B1,C, CE hide "oput"
        if ((+kategoriyaID == 43) || (+kategoriyaID == 44) || (+kategoriyaID == 46) || (+kategoriyaID == 47) || (+kategoriyaID == 62) || (+kategoriyaID == 49)) {
            $("#oput a").not("." + kategoriyaID).addClass('disabled');
        } else {
            $("#oput a").removeClass('disabled');
        }

    });


    $('.button-show-map').click(function () {
        if ($('div').is('#myMap')) {
            $('#tab-1').css('display', 'none');
            $('#tab-2').css('display', 'block');
        } else {
            $(this).closest('.show-map').append(
                '<div class="btn-hint">Чтоб показать автошколу на карте, выберите станцию метро и нажмите на кнопку "Найти"</div>'
            );
            setTimeout(function () {
                $('.btn-hint').remove('.btn-hint');
            }, 3200);
        }
    });


    // $('.main-slider-btn').each(function () {
    //     var attr = $(this).attr('href');
    //     if (attr == '#') {
    //         $(this).addClass('ostavit-zayavku');
    //     }
    // });

    // $('body').on('click', '.ostavit-zayavku', function (event) {
    //     event.preventDefault();
    //     var btn = $(this);
    //     $('#zayavka-modal').addClass('active');
    //     $('.overlay').fadeIn(200,
    //         function () {
    //             $('.modal-submit').addClass('active');
    //             $('html, header').width($('html, header').width());
    //             $('html').css('overflow', 'hidden');
    //         });
    // });


    $('.submit-application').click(function () {
        $('#zayavka-modal').addClass('active');
    });

    $(document).mouseup(function (e) { // событие клика по веб-документу
        var div = $(".modal-wrap"); // тут указываем ID элемента
        if ($("#zayavka-modal").hasClass('active') && !div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $("#zayavka-modal").removeClass('active');
            // $('.modal').slideUp(300);
            $('.overlay').fadeOut(200);
            $('html').removeClass('noscroll');
            $('html').removeAttr('style');
        }
    });

    // $('.branch-btn-other').click(function () {
    //     $('.overlay').fadeIn('slow');
    //     $('html').toggleClass('noscroll');
    //     $('.modal-car').slideDown(500);
    // });

    // $('.branch-btn-other-moto').click(function () {
    //     $('.overlay').fadeIn('slow');
    //     $('html').toggleClass('noscroll');
    //     $('.modal-moto').slideDown(500);
    // });

    $('.modal .close-btn').click(function () {
        $('.overlay').fadeOut('slow');
        $('.modal').slideUp(300);
        $('html').toggleClass('noscroll');
    });

    $('.overlay').click(function () {
        $('.modal').slideUp(300);
        $('.overlay').fadeOut(200);
        $('html').removeClass('noscroll');
    });


    $().fancybox({
        selector: '.video-conteiner a:visible',
        loop: true,
        animationEffect: "zoom-in-out",
        buttons: [
            'fullScreen',
            'close'
        ],
        titleShow: true
    });

    $().fancybox({
        selector: '.docs-swiper a:visible',
        loop: true,
        animationEffect: "zoom-in-out",
        buttons: [
            'fullScreen',
            'close'
        ]
    });


// KALKULATOR
    $('.tab-btn').click(function () {
        var valueId = $(this).attr('id');
        $('.tab-item-block').removeClass('active');
        $(this).closest('.calc-select-block').find('#' + valueId + '-description').addClass('active');
    });


    function kalkulator() {
        $('.categoriya-block label').click(function () {
            var valueFor = $(this).attr('for');
            var valueCategoriya = $('input[id=' + valueFor + ']').val();
        });
    }


// FORMS
    $('#question-form').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/question-form.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/question-form.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        reset();
        showMassege();
    });

    $('.zayavka').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zayavka.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__zayavka.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                // $('.modal-submit').removeClass('active');
                $('#zayavka-modal').removeClass('active');
                showMassege();
                setTimeout(function () {
                    $('.overlay').fadeOut(200);
                    $('html').removeAttr('style');
                }, 2500);
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        // reset();
        // $('.modal-submit').removeClass('active');
        // $('#zayavka-modal').removeClass('active');
        // showMassege();
        // setTimeout(function(){
        //     $('.overlay').fadeOut(200);
        //     $('html').removeAttr('style');
        // }, 2500);
    });

    $('#form_obratnyj-zvonok').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__obratnyj-zvonok.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__obratnyj-zvonok.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-callback').removeClass('active');
                showMassege();
                setTimeout(function () {
                    $('.overlay').fadeOut(200);
                    $('html').removeAttr('style');
                }, 3000);

            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        reset();
        $('.modal-callback').removeClass('active');
        showMassege();
        setTimeout(function () {
            $('.overlay').fadeOut(200);
            $('html').removeAttr('style');
        }, 3000);
    });


    $('#form_test-drive').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__test-drive.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__test-drive.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        resetForm();
        showMassege();
    });


    $('#form_zayavka-na-obuchenie').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zayavka-na-obuchenie.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__zayavka-na-obuchenie.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        resetForm();
        showMassege();
    });


    $('#form1_zayavka-na-obuchenie').submit(function () {

        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form1__zayavka-na-obuchenie.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form1__zayavka-na-obuchenie.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        // resetForm();
        // showMassege();
    });

    $('#form2_zayavka-na-vakansiyu').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form2__zayavka-na-vakansiyu.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form2__zayavka-na-vakansiyu.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        // resetForm();
        // showMassege();
    });

    $('#form_zadat-vopros').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__zadat-vopros.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__zadat-vopros.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                $('.modal-vopros').removeClass('active');
                $('.overlay').fadeOut(200);
                $('html').removeAttr('style');
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;

        // reset();
        // $('.modal-vopros').removeClass('active');
        // $('.overlay').fadeOut(200);
        // $('html').removeAttr('style');
    });

    $('#form__otzyv').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__otzyv.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__otzyv.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
        //
        // reset();
        // showMassege();
    });


    $('#form__vizvat-menedzera').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/form__vyzov-menedjera.php',
            // url: 'https://stimul-bvi.ru/ajax/magic/form__otzyv.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                reset();
                showMassege();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
    });


    // $('#form__vizvat-menedzera').submit(function(){
    //
    //     var data = $(this).serialize();

    // var formData = new FormData();
    //
    // jQuery.each($(this).find('.file_v_form')[0].files, function(i, file) {
    //     formData.append('file_v_form', file);
    // });

    //присоединяем остальные поля
    // formData.append('NAME', $(this).find('input.name_form').val());
    // formData.append('PHONE', $(this).find('input.tel_form').val());
    // formData.append('ADRES', $(this).find('input.adres_form').val());
    // formData.append('DATE', $(this).find('input.date_form').val());
    // formData.append('TIME', $(this).find('input.time_form').val());
    // formData.append('COMMENTS', $(this).find('input.text_form').val());


    //     $.ajax({
    //         url: '/ajax/form__vizvat-menedzera_.php',
    //         type: "post",
    //
    //         // cache: false,
    //         // contentType: false,
    //         // processData: false,
    //         data: data,
    //         dataType : "json",
    //         success: function (e) {
    //             console.log(e);
    //             console.log(true);
    //             reset();
    //             showMassege();
    //
    //         },
    //         error:function(e){
    //             console.log(e);
    //             console.log(false);
    //         }
    //     });
    //     // return false;
    //
    // });


    $('#pokazat-tceny').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            url: '/ajax/pokazat-tceny.php',
            data: data,
            dataType: 'html',
            success: function (e) {
                console.log(e);
                console.log(true);
                $('.pokazat-tceny').empty();
                $('.pokazat-tceny').append(e);
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        return false;
    });


    $('#show-avtoshkola').submit(function (e) {

        var kategoriya = $(this).find('input[name="KATEGORIYA"]').val(),
            metro = $(this).find('input[name="METRO"]').val();


        if ((kategoriya != '') & (metro != '')) {
            var data = $(this).serialize();

            $.ajax({
                type: 'post',
                url: '/ajax/show-avtoshkola.php',
                data: data,
                dataType: 'html',
                success: function (e) {
                    console.log(e);
                    console.log(true);
                    $('.conteiner-block').empty();
                    $('.conteiner-block').append(e);

                    $('.load-items').remove();

                },
                error: function (e) {
                    console.log(e);
                    console.log(false);
                }
            });
            return false;

        } else {
            e.preventDefault();
            $('.conteiner-block').append(
                '<div class="btn-hint">Выберите категорию и метро</div>'
            );
            setTimeout(function () {
                $('.btn-hint').remove('.btn-hint');
            }, 3000);

        }
    });


    $('#show-avtoshkola-mob').submit(function (e) {

        var kategoriya = $(this).find('input[name="KATEGORIYA"]').val();
        metro = $(this).find('input[name="METRO-MOB"]').val();


        if ((kategoriya != '') && (metro != '')) {
            var data = $(this).serialize();

            $.ajax({
                type: 'post',
                url: '/ajax/show-avtoshkola-mob.php',
                data: data,
                dataType: 'html',
                success: function (e) {
                    console.log(e);
                    console.log(true);
                    $('.address-cards').empty();
                    $('.address-cards').append(e);
                },
                error: function (e) {
                    console.log(e);
                    console.log(false);
                }
            });
            return false;

        } else {
            e.preventDefault();
            $('.address-cards').append(
                '<div class="btn-hint">' +
                '<span>! </span> ' +
                'Выберите категорию и метро' +
                '</div>'
            );
            setTimeout(function () {
                $('.btn-hint').remove('.btn-hint');
            }, 3000);

        }
    });

    $('#comments').submit(function () {
        var data = $(this).serialize();

        $.ajax({
            type: 'post',
            // url: 'https://stimul-bvi.ru/ajax/magic/comments.php',
            url: '/ajax/comments.php',
            data: data,
            dataType: 'json',
            success: function (e) {
                console.log(e);
                console.log(true);
                resetForm();
                showMassegeAfterComment();
            },
            error: function (e) {
                console.log(e);
                console.log(false);
            }
        });
        // return false;
        resetForm();
        showMassegeAfterComment();
    });


    new WOW().init();


})
;