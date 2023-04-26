const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 10,
  initialSlide: 0,
  appendDots: dots => (
    <div
      style={{
        backgroundColor: '#ddd',
        borderRadius: '10px',
        padding: '10px',
      }}
    >
      <ul style={{ margin: '0px' }}> {dots} </ul>
    </div>
  ),
  customPaging: i => (
    <div
      style={{
        width: '30px',
        color: 'blue',
        border: '1px blue solid',
        borderRadius: '50%',
      }}
    >
      {i + 1}
    </div>
  ),

  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 670,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

export default settings;
