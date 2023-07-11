import { FC, useState } from "react";
import { infoBakey } from "../type/Bakery";
import { HiBeaker, HiBell, HiHeart, HiSparkles } from "react-icons/hi";
import { GiBeech } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushStore, totalStore } from "../service/StoreAPI";

export const Bakery: FC<{ bakery: infoBakey }> = ({ bakery }) => {
  let userLocalStorage = localStorage.getItem("userLogin");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [textChange, setTextChange] = useState<string>("text-black");
  const handleType = (type: string) => {
    switch (type) {
      case "cakes":
        return (
          <span>
            <HiBell className="w-6 h-6" />
          </span>
        );
      case "sandwich":
        return (
          <span>
            <HiBeaker className="w-6 h-6" />
          </span>
        );
      case "burger":
        return (
          <span>
            <HiHeart className="w-6 h-6" />
          </span>
        );
      case "pizza":
        return (
          <span>
            <HiSparkles className="w-6 h-6" />
          </span>
        );
      default:
        break;
    }
  };

  return (
    <div className="border-2 border-orange-600 rounded-xl w-60 h-[480px] mt-5 ml-10 overflow-hidden">
      <div className="flex flex-1 flex-col">
        <img
          src={bakery.picture}
          alt="picBakery"
          className="object-fill w-[auto] h-36 "
        />
        <div id="bakeryRate" className="flex justify-around items-center">
          <div>
            <h2 className="text-2xl text-orange-600 font-mono font flex flex-col">
              {bakery.name}
            </h2>
            <p className="inline-flex">
              <span className="mr-2">4.5</span>
              {handleType(`${bakery.type}`)}
            </p>
          </div>
          <>
            <p
              title="Are you like ???"
              onClick={() => {
                if (textChange === "text-black") {
                  setTextChange("text-red-500");
                } else {
                  setTextChange("text-black");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className={`w-6 h-6 cursor-pointer hover:text-red-500 ${textChange}`}
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </p>
          </>
        </div>
        <div
          id="baketyInfo"
          className="w-auto h-28 overflow-hidden px-2 my-1 text-left break-words"
        >
          {bakery.description?.slice(0, 100) + "..."}
        </div>
        <div id="bakeyPrice" className="flex justify-around items-center">
          <p className="font-mono font-extrabold tracking-wider text-xl italic text-red-800">
            <div id="bakeyQuan" className="flex items-center">
              <GiBeech />
              <p className="text-black ml-2">{bakery.quantity}</p>
            </div>
            ${bakery.price}
          </p>
          <div className="relative">
            <p className="text-red-800 bg-transparent absolute -top-[0.75rem] left-5">
              {bakery.quanChoice}
            </p>
            <button
              className="rounded-full shadow-xl shadow-zinc-500 p-1 hover:shadow-inset "
              onClick={() => {
                if (userLocalStorage) {
                  navigate("/store");
                  dispatch(pushStore(bakery));
                  dispatch(totalStore());
                } else {
                  navigate("/login");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
