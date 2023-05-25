import { FC } from "react";
import { Bakery } from "./Bakery";
import { infoBakey } from "../type/Bakery";

export const CakePastries: FC<{ item: infoBakey[] }> = ({ item }) => {
  const handleShowCakes = (item: infoBakey[]) => {
    return item?.map((item: infoBakey) => {
      return <Bakery key={item.name} bakery={item} />;
    });
  };

  return (
    <div className="flex flex-wrap justify-around items-center">
      {/* {item?.map((item: any) => {
        return <Bakery key={item.name} />;
      })} */}
      {handleShowCakes(item)}
    </div>
  );
};
