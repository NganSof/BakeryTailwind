import { FC } from "react";
import partner1 from "../asset/partner1.gif";

export const CardFood: FC = () => {
  let content =
    " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim vero animi consequuntur molestias quidem, repudiandae providentnecessitatibus vbus vbus vbus vbus voluptas quis pariatur quisquam,dolore repr ita maiores?tempore amet nesciunt.";
  return (
    <div className="flex flex-row flex-wrap justify-around items-center mb-0">
      {/* chỉnh lại shrif và flex cho các flex */}

      <div className="w-48 bg-white rounded-3xl shadow-xl shadow-gray-400 relative my-24 mx-3">
        <img
          src={partner1}
          alt="PicFood"
          className="shrink-0
        object-contain w-[50%] absolute -top-[100px] left-12 border-2 bg-slate-50 shadow-neutral-300 shadow-inset rounded-full border-solid border-red-600"
        />
        <div className="flexn flex-1 flex-col justify-start items-center py-8 overflow-hidden ">
          <h2 className="shrink-0 ml-5 text-start text-orange-600 font-mono font">
            Lorem ipsum sit amtempore amet nesciunt.et.
          </h2>
          <p className="flex-1 h-72 overflow-hidden text-center p-2">
            {content.slice(0, 200) + "..."}
          </p>
          <p className="flex-1 text-red-800 font-bold italic">Price : ${}</p>
        </div>
      </div>
      <div className="w-48 bg-white rounded-3xl shadow-xl shadow-gray-400 relative my-24 mx-3">
        <img
          src={partner1}
          alt="PicFood"
          className="shrink-0
        object-contain w-[50%] absolute -top-[100px] left-12 border-2 bg-slate-50 shadow-neutral-300 shadow-inset rounded-full border-solid border-red-600"
        />
        <div className="flexn flex-1 flex-col justify-start items-center py-8 overflow-hidden ">
          <h2 className="shrink-0 ml-5 text-start text-orange-600 font-mono font">
            Lorem ipsum sit amtempore amet nesciunt.et.
          </h2>
          <p className="flex-1 h-72 overflow-hidden text-center p-2">
            {content.slice(0, 200) + "..."}
          </p>
          <p className="flex-1 text-red-800 font-bold italic">Price : ${}</p>
        </div>
      </div>
      <div className="w-48 bg-white rounded-3xl shadow-xl shadow-gray-400 relative my-24 mx-3">
        <img
          src={partner1}
          alt="PicFood"
          className="shrink-0
        object-contain w-[50%] absolute -top-[100px] left-12 border-2 bg-slate-50 shadow-neutral-300 shadow-inset rounded-full border-solid border-red-600"
        />
        <div className="flexn flex-1 flex-col justify-start items-center py-8 overflow-hidden ">
          <h2 className="shrink-0 ml-5 text-start text-orange-600 font-mono font">
            Lorem ipsum sit amtempore amet nesciunt.et.
          </h2>
          <p className="flex-1 h-72 overflow-hidden text-center p-2 break-words">
            {content.slice(0, 200) + "..."}
          </p>
          <p className="flex-1 text-red-800 font-bold italic">Price : ${}</p>
        </div>
      </div>
    </div>
  );
};
