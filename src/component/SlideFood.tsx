import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { OrderFood } from "./OrderFood";

export const SlideFood: FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        <div className="border-none outline-none hover:-translate-y-6 hover:transition-all">
          <OrderFood
            type={"pizza"}
            name="bakery 1"
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
        </div>
        <div className="border-none outline-none hover:-translate-y-6 hover:transition-all">
          <OrderFood
            type={"burger"}
            name="bakery 2"
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
        </div>
        <div className="border-none outline-none hover:-translate-y-6 hover:transition-all">
          <OrderFood
            type={"sandwich"}
            name="bakery 3"
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
        </div>
        <div className="border-none outline-none hover:-translate-y-6 hover:transition-all">
          <OrderFood
            type={"pizza"}
            name="bakery 4"
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
        </div>
        <div className="border-none outline-none hover:-translate-y-6 hover:transition-all">
          <OrderFood
            type={"pizza"}
            name="bakery 5"
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
        </div>
      </Slider>
    </div>
  );
};
