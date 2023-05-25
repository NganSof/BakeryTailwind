import { FC } from "react";
import { Bakery } from "./Bakery";
import { infoBakey } from "../type/Bakery";

export const Burger: FC<{ item: infoBakey[] | infoBakey }> = ({ item }) => {
  const handleShowBurger = (item: infoBakey[]) => {
    return item?.map((item: infoBakey) => {
      return <Bakery key={item.name} bakery={item} />;
    });
  };
  return (
    <div className="flex flex-wrap justify-around items-center">
      {handleShowBurger(item)}
    </div>
  );
};
