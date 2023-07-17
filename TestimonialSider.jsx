import React from "react";
import Slider from "react-slick";
import Nature from "../../../../assets/Image/man_Delivery.png";
import womanDivery from "../../../../assets/Image/man_DD.png";
import Hero from "../../../../assets/Image/hero.png";

const TestimonialSider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToshow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h2>
          <p className="text-[1.5rem font-[600] mt-[1.5rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            error eius cum temporibus mollitia, ab delectus at. Ipsa, at
            excepturi!
          </p>
        </h2>
        <div className="slide-content flex items-center gap-3 mt-4">
          <img src={Hero} alt="Hero" className="w-[90px] " />
          <p>Hello A5</p>
        </div>
      </div>
      <div>
        <h2>
          <p className="text-[1.5rem font-[600] mt-[1.5rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad
            ullam sunt quas illum laboriosam fuga nihil suscipit porro ipsum.
          </p>
        </h2>
        <div className="slide-content flex items-center gap-3 mt-4">
          <img
            src={Nature}
            alt="Nature"
            className="w-[100px] h-[100px] mt-[2rem] "
          />
          <p className="text-[1.4rem]">Yeng</p>
        </div>
      </div>
      <div>
        <h2>
          <p className="text-[1.4rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ad
            ullam sunt quas illum laboriosam fuga nihil suscipit porro ipsum.
          </p>
        </h2>
        <div className="slide-content flex items-center gap-3 mt-4">
          <img
            src={womanDivery}
            alt=""
            className="w-[100px] h-[100px] mt-[2rem]"
          />
          <p className="text-[1.4rem]">Group A5</p>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSider;
