import { FC } from "react";
import { OrderFood } from "../../component/OrderFood";

export const Gift: FC = () => {
  return (
    <div>
      <section id="giftInfo" className="flex flex-col max-w-5xl mx-auto">
        <h1 className="bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 text-transparent text-2xl ml-5 mt-5 font-bold font-serif uppercase tracking-wider">
          promotion program
        </h1>
        <p className="max-w-5xl m-auto h-36 text-center py-10 tracking-wider">
          No infomation program in month.
        </p>
      </section>
      <section id="newInfo" className="flex flex-col max-w-5xl mx-auto">
        {/* map list bánh */}
        <h1 className="bg-clip-text bg-gradient-to-b from-indigo-500 to-purple-600 font-bold text-transparent text-2xl ml-5 font-serif uppercase tracking-wider">
          List new bakary
        </h1>
        <div className="grid grid-cols-3">
          <OrderFood
            type={"pizza"}
            name="bakery 2"
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
          <OrderFood
            name="bakery 2"
            type={"pizza"}
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
          <OrderFood
            name="bakery 3"
            type={"pizza"}
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
          <OrderFood
            name="bakery 4"
            type={"pizza"}
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
          <OrderFood
            name="bakery 5"
            type={"pizza"}
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
          <OrderFood
            name="bakery 6"
            type={"pizza"}
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
          <OrderFood
            name="bakery 7"
            type={"pizza"}
            description="lorem10"
            quantity={12}
            price={25000}
            quanChoice={0}
          />
        </div>
      </section>
    </div>
  );
};
