const settings = {
  dots: false,
  // infinite: false,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 3,
  currentSlide: 0,

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        // infinite: false,
        // infinite: true,
        currentSlide: 0,
        dots: false,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // initialSlide: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default settings;
