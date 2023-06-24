import { FC } from "react";
import { OrderFood } from "../../component/OrderFood";
import { bakeryNew } from "../../mock/bakeryNew";
import { infoBakey } from "../../type/Bakery";

export const Gift: FC = () => {
  return (
    <div className="pt-[6.25rem]">
      <section id="giftInfo" className="flex flex-col max-w-5xl mx-auto">
        <h1 className="bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 text-transparent text-2xl ml-5 mt-5 font-bold font-serif uppercase tracking-wider">
          promotion program
        </h1>
        <p className="max-w-5xl m-auto h-36 text-center py-10 tracking-wider">
          No infomation program in month.
        </p>
      </section>
      <section id="newInfo" className="flex flex-col max-w-5xl mx-auto">
        <h1 className="bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 font-bold text-transparent text-2xl ml-5 font-serif uppercase tracking-wider">
          List new bakary
        </h1>
        <div className="grid grid-cols-3">
          {bakeryNew.map((item: infoBakey) => {
            return <OrderFood itemBakery={item} />;
          })}
        </div>
      </section>
    </div>
  );
};
