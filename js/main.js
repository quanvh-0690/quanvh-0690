
const LacquanProject = {
  Init: function () {
    this.slickSlider();
  },

  slickSlider: function () {
    $('.js_banner-slider').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
    });

    $('.js_slider').slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
          }
        }
      ]
    });

    $('.js_testimonial-slider').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
    });
  },

  onLoad: function () {
    console.log('Onload Project');
  },

  reSize: function () {
    console.log('Resize Project');
  }
}

$(document).ready(function (e) {
  LacquanProject.Init();

  AOS.init({
    duration: 1200,
    easing: 'ease-out-quart'
  })

  // Swiper Slider
  var sliderSelector = '.swiper-container',
    options = {
      init: false,
      loop: true,
      speed: 800,
      slidesPerView: 3,
      centeredSlides : true,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      grabCursor: true,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1180: {
          slidesPerView: 2
        },
        1023: {
          slidesPerView: 1
        }
      },
    };
    var mySwiper = new Swiper(sliderSelector, options);

    // Initialize Swiper Slider
    mySwiper.init();

  $(document).on('click', function(e) {
    if ($(e.target).closest('.header__menu-icon').length) {
      $('.menu-mobile').toggleClass('active');
    }
    else if (!$(e.target).closest('.menu-mobile').length) {
      $('.menu-mobile').removeClass('active');
    }
  });

  $('.menu-mobile__icon').on('click', function(e) {
    $('.menu-mobile').removeClass('active');
  });

  $(window).bind('scroll', function(e) {
		if ($(window).scrollTop() > 95) {
			$('.js_header').addClass('fixed');
		} else {
			$('.js_header').removeClass('fixed');
		}
	});
});

$(window).on('load', function () {
  LacquanProject.onLoad();
});

$(window).on('resize', function () {
  LacquanProject.reSize();
});
