import { FC } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { infoBakey } from "../type/Bakery";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushStore, totalStore } from "../service/StoreAPI";

export const OrderFood: FC<{ itemBakery: infoBakey }> = ({ itemBakery }) => {
  const bakeryNew = { ...itemBakery };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (bakeryNew: infoBakey) => {
    dispatch(pushStore(bakeryNew));
    dispatch(totalStore());
    navigate("/store");
  };

  return (
    <div className="lg:w-[100%]">
      <div className="rounded-full flex p-5justify-between items-center shadow-2xl mx-5 my-10 border-x-red-300 border-y-sky-500 border-4 lg:relative">
        <img
          src={bakeryNew.picture}
          alt="orderPic"
          className="w-32 h-32 rounded-full mr-1 shrink-0 cursor-pointer"
        />
        <div
          id="contentNew"
          className="flex flex-col overflow-hidden flex-wrap sm:absolute sm:z-30 sm:my-0 sm:mx-6 sm:bg-[burlywood] sm:bg-opacity-60 md:absolute md:bg-blue-500 md:shadow-sm lg:bg-transparent lg:absolute lg:left-36 lg:top-10"
        >
          <p className="shrink-0 flex flex-wrap w-[110px]">{bakeryNew.name}</p>
          <div className="flex flex-row justify-around items-center flex-wrap">
            <p className="shrink-0 italic text-red-800">$ {bakeryNew.price}</p>
            <HiOutlineShoppingCart
              className="cursor-pointer"
              onClick={() => handleClick(bakeryNew)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
