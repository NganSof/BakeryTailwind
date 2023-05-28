import { FC } from "react";
import { Bakery } from "./Bakery";
import { infoBakey } from "../type/Bakery";

export const Sandwich: FC<{ item: infoBakey[] }> = ({ item }) => {
  const handleShowSandwich = (item: infoBakey[]) => {
    return item?.map((item: infoBakey) => {
      return <Bakery key={item.name} bakery={item} />;
    });
  };
  return (
    <div className="flex flex-wrap justify-around items-center">
      {handleShowSandwich(item)}
    </div>
  );
};
