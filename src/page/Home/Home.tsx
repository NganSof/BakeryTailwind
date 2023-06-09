import { FC, useEffect, useRef, useState } from "react";
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
import { infoBakey } from "../../type/Bakery";
import { createBakery, selectBakery } from "../../service/BakeryAPI";
import { useDispatch, useSelector } from "react-redux";
import Food10 from "../../asset/Food10.png";

export const Home: FC = () => {
  const navigate = useNavigate();
  const handleNavOrder = () => {
    navigate("/menu");
    dispatch(
      createBakery({
        type: "pizza",
        name: "Hot Pizza",
        picture: Food10,
        price: 520000,
        quantity: 7,
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam accusamus dolore quasi incidunt inventore quos quibusdam officia distinctio eligendi natus architecto at provident eveniet, ea recusandae autem ut consequatur veritatis rem officiis quidem culpa alias illum? Doloribus porro molestiae rerum repudiandae ad itaque dignissimos, fuga sequi. Eos voluptates quam amet voluptatibus suscipit. Est magni fugiat earum corporis molestias ipsam odit!",
      })
    );
  };
  const scrOrder = useRef<null | HTMLDivElement>(null);
  const scrAbout = useRef<null | HTMLDivElement>(null);
  const [idChange, setIdChange] = useState<string>("");
  let { listBake } = useSelector(selectBakery);
  const dispatch = useDispatch();
  const handlScrOrder = () => {
    scrOrder?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handlScrAbout = () => {
    scrAbout?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const [listBa, setListBa] = useState<infoBakey[]>(listBake);
  useEffect(() => {
    setListBa(listBake);
  }, [listBake]);

  let allItemBakery: infoBakey[] = [];
  let renderContent: JSX.Element = <CardFood food={listBa.slice(0, 3)} />;
  const handleShow = (id: string) => {
    return listBa?.map((itemBakety: infoBakey) => {
      if (itemBakety.type === id) {
        allItemBakery.push(itemBakety);
        switch (itemBakety.type) {
          case "cakes":
            renderContent = <CardFood food={allItemBakery} />;
            break;
          case "burger":
            renderContent = <CardFood food={allItemBakery} />;
            break;
          case "sandwich":
            renderContent = <CardFood food={allItemBakery} />;
            break;
          case "pizza":
            renderContent = <CardFood food={allItemBakery} />;
            break;
          default:
            break;
        }
      }
    });
  };
  handleShow(idChange);

  return (
    <div className="pt-[6.25rem]">
      <section
        id="about"
        className="relative text-white mb-5 sm:flex sm:justify-start sm:flex-wrap sm:mb-24"
      >
        <img
          src={foodBG}
          alt="backgroundFood"
          className="rounded-full p-5 sm:ml-0 md:ml-20 rounded-tl-[80px] rounded-tr-[160px] rounded-br-[80px] rounded-bl-[160px]"
        />
        <div className="absolute md:top-14 md:left-32 sm:left-[3rem] sm:top-[4rem]">
          <h1 className="font-serif text-3xl w-64">
            It’s not just a Food Its a Expirence!
          </h1>
          <p className="overflow-hidden text-left w-52 absolute top-24 left-36 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            nobis cupiditate voluptas aspernatur sapiente inventore suscipit
            fuga et ut cum!
          </p>
        </div>
        <div className="sm:top-[22rem] sm:right-[7.7rem] text-black absolute md:top-32 md:right-72 w-64 flex justify-around items-center py-2 rounded-lg">
          <button className="flex flex-row items-center bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset">
            <HiOutlineMap className="shrink-0 mr-2" />
            <p className="flex-1 font-serif" onClick={handlScrOrder}>
              Our menu
            </p>
          </button>
          <button className="flex flex-row items-center bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset">
            <HiOutlineGift className="shrink-0 mr-2" />
            <p className="flex-1 font-serif" onClick={handlScrAbout}>
              About Us
            </p>
          </button>
        </div>
      </section>
      <section
        id="menu"
        ref={scrOrder}
        className="max-w-7xl mx-20 font-serif text-center bg-slate-50"
      >
        <h1 className="bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 text-transparent font-bold text-4xl">
          Our Menu
        </h1>
        <h2 className="my-2 text-orange-600 font-bold tracking-widest">
          Eat Fresh & Healthy
        </h2>
        <div className="md:flex flex-row mx-10 md:justify-evenly my-4 shadow-inset p-3 rounded-md overflow-hidden sm:text-md sm:list-item">
          <div
            onClick={() => {
              setIdChange("cakes");
            }}
            className="flex justify-between items-center shadow-2xl border-4 border-l-red-800 px-2 bg-gradient-to-r from-violet-200 to-fuchsia-300 rounded-lg outline-none hover:text-orange-500 hover:no-underline hover:cursor-pointer hover:border-none"
          >
            <HiBell />
            <p className="ml-2">Cakes & Pastries</p>
          </div>
          <div
            onClick={() => {
              setIdChange("sandwich");
            }}
            className="flex justify-between items-center shadow-2xl border-4 border-l-red-800 px-2 bg-gradient-to-r from-violet-200 to-fuchsia-300 rounded-lg hover:text-orange-500 hover:no-underline hover:cursor-pointer hover:border-none"
          >
            <HiBeaker />
            <p className="ml-2">Sandwich</p>
          </div>
          <div
            onClick={() => {
              setIdChange("burger");
            }}
            className="flex justify-between items-center shadow-2xl border-4 border-l-red-800 px-2 bg-gradient-to-r from-violet-200 to-fuchsia-300 rounded-lg hover:text-orange-500 hover:no-underline hover:cursor-pointer hover:border-none"
          >
            <HiHeart />
            <p className="ml-2">Burger</p>
          </div>
          <div
            onClick={() => {
              setIdChange("pizza");
            }}
            className="flex justify-between items-center shadow-2xl border-4 border-l-red-800 px-2 bg-gradient-to-r from-violet-200 to-fuchsia-300 rounded-lg hover:text-orange-500 hover:no-underline hover:cursor-pointer hover:border-none"
          >
            <HiSparkles />
            <p className="ml-2">Pizza</p>
          </div>
        </div>
        {renderContent}
        <button
          onClick={handleNavOrder}
          className="mx-auto mb-4 inline-flex flex-row items-center bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset"
        >
          <HiBookOpen className="shrink-0 mr-2" />
          <p className="flex-1 font-serif">More</p>
        </button>
      </section>
      <section id="order" className="max-w-7xl mx-20 my-12">
        <h2 className="mb-5 text-center font-serif bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 text-transparent font-bold text-4xl">
          Order Now
        </h2>
        <SlideFood />
      </section>
      <section
        id="girf"
        ref={scrAbout}
        className="text-center bg-no-repeat bg-cover bg-gift-img h-96 max-w-7xl mx-20 my-12 relative"
      >
        <h2 className="font-bold italic font-serif bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 text-transparent md:text-4xl my-3 animate-bounce absolute md:top-64 md:left-40 sm:top-64 sm:left-10 sm:text-2xl">
          Lucky coupons
        </h2>
        <ul className="ml-72 md:mt-5 text-left text-red-800 absolute top-10 -left-8 sm:mt-0">
          <li className="italic font-mono tracking-wider cursor-pointer pb-2 hover:text-red-700 hover:text-xl">
            Lucky coupons by month
          </li>
          <li className="italic font-mono tracking-wider cursor-pointer pb-2 hover:text-red-700 hover:text-xl">
            Free delivery within city area
          </li>
          <li className="italic font-mono tracking-wider cursor-pointer pb-2 hover:text-red-700 hover:text-xl">
            Golden hour to receive free new cakes
          </li>
          <li className="italic font-mono tracking-wider cursor-pointer pb-2 hover:text-red-700 hover:text-xl">
            Earn points to receive gifts with every bill
          </li>
        </ul>
      </section>
    </div>
  );
};
