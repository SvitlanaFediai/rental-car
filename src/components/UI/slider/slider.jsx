import React from "react";
import Slider from "react-slick";
import "./slider.scss";
import { Link } from "react-router-dom";
import image1 from "../../../img/slider/slider-1.jpg";
import image2 from "../../../img/slider/slider-2.jpg";
import image3 from "../../../img/slider/slider-3.jpg";
import image4 from "../../../img/slider/slider-4.jpg";
import image5 from "../../../img/slider/slider-5.jpg";

const CarSlider = () => {
  const images = [
    {"name":"pic_1",
      "url": image1
    },
    {"name":"pic_2",
      "url": image2
    },
    {"name":"pic_3",
      "url": image3
    },
    {"name":"pic_4",
      "url": image4
    },
    {"name":"pic_5",
      "url": image5
    },
  ]
  
  const settings = {
    //fade: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  }

  return <Slider {...settings} className="car__slider">
     {images.map((image, index) => (
    <div key={index} style={{maxWidth: '100%', height: '650px'}}>
      <div className="slider__item" 
        style={{
          background: `linear-gradient(rgb(0, 13, 107, 0.5), rgb(0, 13, 107, 0.5)), url(${image.url})`,
          width: '100%',
          height: '650px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="content">
          <div className="slider__content">
            <h6 className="slider__text" data-aos="fade-right">For rent $70 per day</h6>
            <h1 data-aos="fade-left">Reserve now and get 50% Off</h1>
            <button className="reserve__btn btn" data-aos="fade-down">
              <Link to='/cars'>Reserve Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
    ))}
    

  </Slider>
}

export default CarSlider;