import { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css";
import { OrderFood } from "./OrderFood";
import { bakeryNew } from "../mock/bakeryNew";
import { infoBakey } from "../type/Bakery";

export const SlideFood: FC = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[100%]">
      <Slider {...settings}>
        {bakeryNew.map((item: infoBakey) => {
          return (
            <div
              key={item.name}
              className="border-none outline-none hover:-translate-y-6 hover:transition-all"
            >
              <OrderFood itemBakery={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
