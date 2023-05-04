import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SlideFood: FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <div className="w-[100%]">
      <Slider {...settings} className="bg-red-700">
        <div className="border-2 border-white border-solid">
          <h3>1</h3>
        </div>
        <div className="border-2 border-white border-solid">
          <h3>2</h3>
        </div>
        <div className="border-2 border-white border-solid">
          <h3>3</h3>
        </div>
        <div className="border-2 border-white border-solid">
          <h3>4</h3>
        </div>
        <div className="border-2 border-white border-solid">
          <h3>5</h3>
        </div>
        <div className="border-2 border-white border-solid">
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};
