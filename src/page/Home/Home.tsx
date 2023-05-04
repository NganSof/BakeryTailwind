import { FC, Fragment } from "react";
import {
  HiBeaker,
  HiBell,
  HiBookOpen,
  HiHeart,
  HiOutlineGift,
  HiOutlineMap,
  HiSparkles,
} from "react-icons/hi";
import foodBG from "../../asset/foodBG.jpg";
import { CardFood } from "../../component/CardFood";
import { useNavigate } from "react-router-dom";
import { SlideFood } from "../../component/SlideFood";

export const Home: FC = () => {
  const navigate = useNavigate();
  const handleNavOrder = () => {
    navigate("/order");
  };
  // Có các mục nhỏ menu,order,about us,gift xong làm croll cho thanh kéo
  return (
    <Fragment>
      <section id="about" className="relative text-white mb-5">
        <img
          src={foodBG}
          alt="backgroundFood"
          className="rounded-full p-5 ml-20 rounded-tl-[80px] rounded-tr-[160px] rounded-br-[80px] rounded-bl-[160px]"
        />
        <div className="absolute top-14 left-52">
          <h1 className="font-serif text-3xl w-64">
            It’s not just a Food Its a Expirence!
          </h1>
          <p className="overflow-hidden text-left w-52 absolute top-24 left-36 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nobis cupiditate voluptas aspernatur sapiente inventore suscipit
            fuga et ut cum!
          </p>
        </div>
        <div className="text-black absolute top-32 right-52 w-64 flex justify-around items-center py-2 rounded-lg">
          <button className="flex flex-row items-center bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset">
            <HiOutlineMap className="shrink-0 mr-2" />
            <p className="flex-1 font-serif">Our menu</p>
          </button>
          <button className="flex flex-row items-center bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset">
            <HiOutlineGift className="shrink-0 mr-2" />
            <p className="flex-1 font-serif"> About Us</p>
          </button>
        </div>
      </section>
      <section
        id="menu"
        className="max-w-7xl mx-20 font-serif text-center bg-slate-50"
      >
        <h1 className="font-bold from-neutral-800 text-4xl">Our Menu</h1>
        <h2 className="my-2 text-orange-600 font-bold tracking-widest">
          Eat Fresh & Healthy
        </h2>
        <div className="flex flex-row mx-10 justify-evenly my-4 shadow-inset p-3 rounded-md">
          <div
            id="itemMenu"
            className="flex justify-between items-center decoration-wavy decoration-orange-500 underline hover:text-orange-500 hover:no-underline hover:cursor-pointer"
          >
            <HiBell />
            <p className="ml-2">Cakes & Pastries</p>
          </div>
          <div
            id="itemMenu"
            className="flex justify-between items-center decoration-wavy decoration-orange-500 underline hover:text-orange-500 hover:no-underline hover:cursor-pointer"
          >
            <HiBeaker />
            <p className="ml-2">Sandwich</p>
          </div>
          <div
            id="itemMenu"
            className="flex justify-between items-center decoration-wavy decoration-orange-500 underline hover:text-orange-500 hover:no-underline hover:cursor-pointer"
          >
            <HiHeart />
            <p className="ml-2">Burger</p>
          </div>
          <div
            id="itemMenu"
            className="flex justify-between items-center decoration-wavy decoration-orange-500 underline hover:text-orange-500 hover:no-underline hover:cursor-pointer"
          >
            <HiSparkles />
            <p className="ml-2">Pizza</p>
          </div>
        </div>
        <CardFood />
        <button
          onClick={handleNavOrder}
          className="mx-auto mb-1 flex flex-row items-center bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset"
        >
          <HiBookOpen className="shrink-0 mr-2" />
          <p className="flex-1 font-serif">More</p>
        </button>
      </section>
      <section id="order" className="max-w-7xl mx-20 my-9">
        <h2>Order Now</h2>
        <SlideFood />
      </section>
      <section id="girf"></section>
    </Fragment>
  );
};
