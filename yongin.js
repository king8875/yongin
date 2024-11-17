const FamilyPopSwiper = new Swiper('.familyPop__swiper.swiper',{
    direction: 'vertical',
    slidesPerView: 1,
    loop:true,  
    autoplay:{
        delay:2000,
    },
});

$('.lang__btn').click(function(){
    $('.lang__dropdown').addClass('active');
});
$('.close').click(function(){
    $('.lang__dropdown').removeClass('active');

})

$(document).ready(function(){
    $('.header__item').hover(function(){
        $('.header__item').removeClass('active');
        $(this).addClass('active');
        $('.tab__item').removeClass('active');
        const tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });
    $('.header__list, .tab__item').mouseleave(function() {
        $('.header__list').removeClass('active');
        $('.tab__item').removeClass('active');
    });
});


// visual swiper js
const VisualSwiper = new Swiper('.visual-swiper.swiper',{
    loop:true,
    slidesPerView: 1,
    centeredSlides : true,
    spaceBetween : 15,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: '.visual-btn.next',
        prevEl: '.visual-btn.prev',
    },
    autoplay:{
        delay:3000,
    },
});

let isPlaying = true;

$('.swiper-play-pause').on('click', function () {
    if (isPlaying) {
        VisualSwiper.autoplay.stop(); // 자동 재생 멈춤
        console.log('good');
        $(this).text('Play'); // 버튼 텍스트 변경
    } else {
        VisualSwiper.autoplay.start(); // 자동 재생 시작
        $(this).text('Pause'); // 버튼 텍스트 변경
    }
    isPlaying = !isPlaying; // 상태 토글
});




$('.news-tab-item-link').on('click',function(e){
    e.preventDefault(); // 기본 링크 동작 방지

    $('.news-tab-item-link').removeClass('on');
    $(this).addClass('on');

    const target = $(this).attr('href');
    $('.news-tab-pane').removeClass('active');
    $(target).addClass('active');
});


// visual swiper js
const AdminSwiper = new Swiper('.admin-tab-swiper.swiper',{
    slidesPerView: 7,
    // spaceBetween : 15,
    navigation: {
        nextEl: '.admin-tab-swiper .next',
        prevEl: '.admin-tab-swiper .prev',
    },
});

$('.admin-tab-item').on("click",function(e){
    e.preventDefault();

    $('.admin-tab-item').removeClass('active');
    $(this).addClass('active');
});