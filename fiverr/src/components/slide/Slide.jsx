import React from "react"
import Slider from "react-slick"
import "./Slide.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Slide({ children, slidesToShow = 3, arrowsScroll = 1 }) {
  const settings = {
    dots: false, // show dots below slider
    infinite: true, // infinite loop
    speed: 500, // animation speed
    slidesToShow: slidesToShow,
    slidesToScroll: arrowsScroll,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="slide">
      <div className="container">
        <Slider {...settings}>{children}</Slider>
      </div>
    </div>
  )
}

export default Slide
