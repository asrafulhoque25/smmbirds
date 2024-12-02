document.addEventListener( 'DOMContentLoaded', function() {
    new Splide('#splide', {
      type: 'loop',
      perPage: 3,
      autoplay: false,
      interval: 8000,
      pagination: false,
    //   padding: '10%',
      breakpoints: {
        1200: {
          perPage: 2,
        },
        850: {
          perPage: 2,
        },
        776: {
          perPage: 1,
        },
        556: {
          perPage: 1,
          arrows: false, 
  
        }
      }
    }).mount();
  });
document.addEventListener( 'DOMContentLoaded', function() {
    new Splide('#splide2', {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      interval: 8000,
      pagination: false,
    //   padding: '10%',
      breakpoints: {
     
        556: {
          perPage: 1,
          arrows: false, 
  
        }
      }
    }).mount();
  });
document.addEventListener( 'DOMContentLoaded', function() {
    new Splide('#splide3', {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      interval: 8000,
      pagination: false,
    //   padding: '10%',
      breakpoints: {
     
        556: {
          perPage: 1,
          arrows: false, 
  
        }
      }
    }).mount();
  });

  //testimonial
document.addEventListener( 'DOMContentLoaded', function() {
    new Splide('#splide4', {
      type: 'loop',
      perPage: 1,
      autoplay: false,
      interval: 8000,
      pagination: false,
    //   padding: '10%',
      breakpoints: {
     
        556: {
          perPage: 1,
          arrows: false, 
  
        }
      }
    }).mount();
  });

    // FAQ
    $(function () {
      if ($('.faq-list').length) {
          $('.faq-list').on('click', '.faq-title', function (e) {
              e.preventDefault();
              // remove siblings activities
              $(this).closest('.faq-list-item').siblings().removeClass('open').find('.faq-desc').slideUp();
              $(this).closest('.faq-list-item').siblings().find('.ni').addClass('ni-plus').removeClass('ni-minus');

              // add slideToggle into this
              $(this).closest('.faq-list-item').toggleClass('open').find('.faq-desc').slideToggle();
              $(this).find('.ni').toggleClass('ni-plus ni-minus');
          });
      }
  });
