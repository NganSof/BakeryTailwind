import { FC } from "react";
import { infoBakey } from "../type/Bakery";

export const CardFood: FC<{ food: infoBakey[] }> = ({ food }) => {
  return (
    <div className="flex flex-row flex-wrap justify-around items-center mb-0">
      {food?.map((itemFood: infoBakey) => {
        return (
          <div
            key={itemFood.name}
            className="w-48 bg-white rounded-3xl shadow-xl shadow-gray-400 relative my-24 mx-3"
          >
            <img
              src={itemFood.picture}
              alt="PicFood"
              className="shrink-0
  object-cover w-[50%] h-[30%] absolute -top-[100px] left-12 border-2 bg-slate-50 shadow-neutral-300 shadow-inset rounded-full border-solid border-red-600"
            />
            <div className="flexn flex-1 flex-col justify-start items-center py-8 overflow-hidden ">
              <h2 className="shrink-0 ml-5 text-start text-orange-600 font-mono font-bold tracking-wider text-xl">
                {itemFood.name}
              </h2>
              <p className="flex-1 h-48 overflow-hidden text-center p-2 break-words">
                {itemFood.description?.slice(0, 130) + "..."}
              </p>
              <p className="flex-1 text-red-800 font-bold italic">
                Price : ${itemFood.price}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
