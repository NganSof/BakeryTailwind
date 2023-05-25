import { FC, Fragment } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { infoBakey } from "../type/Bakery";
import { createBakery } from "../service/BakeryAPI";
import { useDispatch } from "react-redux";

export const OrderFood: FC<infoBakey> = (props) => {
  const dispatch = useDispatch();
  // test send payload
  // const data = dispatch(createBakery({ ...props }));
  // console.log("data", data);
  return (
    <Fragment>
      <div className="flex-row cursor-cell rounded-full p-5 flex justify-between items-center shadow-2xl mx-5 my-10 border-x-red-300 border-y-sky-500 border-4">
        <img
          src="https://picsum.photos/id/237/200/300"
          alt="orderPic"
          className="w-32 h-32 rounded-full object-cover mr-1 shrink-0"
        />
        <div className="flex flex-col">
          <p className="shrink-0">{props.name ? props.name : "Name Bakery"} </p>
          <div className="flex flex-row justify-between items-center">
            {/*  nếu price hơn 6 số cho 1 splite.... hiện title đủ số*/}
            <p className="shrink-0 italic text-red-800">$100 </p>
            <HiOutlineShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
