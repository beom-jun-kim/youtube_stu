$(document).ready(function () {

    // 네비 클릭시 해당 섹션 이동
    const $gnbMenu = $('.gnb_menu');
    $gnbMenu.click(function () {
        const dataTarget = $(this).attr('data-target');
        const $target = $(dataTarget);
        const distance = $target.offset().top;
        $('html,body').animate({ scrollTop: distance });
    });

    // 스크롤 내렸을때 헤더 color주기
    $(document).scroll(function () {
        const $header = $('header');
        const $headerHeight = $('header').outerHeight();
        const scrollTop = $(window).scrollTop();
        if (scrollTop >= $headerHeight) {
            $header.addClass('active');
        } else {
            $header.removeClass('active');
        }
    })

    // 메인 슬라이드
    $('.mainSlide').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        autoplaySpeed:3000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    // 레퍼런스 영상 슬라이드
    $('.referenceSlide').slick({
        dots: true,
        infinite: true,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // 모바일 버전에서 네비바 
    const $toggle = $('header .toggle');
    const $gnb = $('header .gnb')
    $toggle.click(function () {
        $gnb.toggleClass('active');
        $(this).toggleClass('active');
    });

    // 모바일 버전에서 네비 눌렸을때 gnb없애기
    $gnbMenu.click(function(){
        $gnb.toggleClass('active');
        $toggle.toggleClass('active');
    });
});



