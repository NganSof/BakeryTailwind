import { FC } from "react";
import { Bakery } from "./Bakery";
import { infoBakey } from "../type/Bakery";

export const Pizza: FC<{ item: infoBakey[] | infoBakey }> = ({ item }) => {
  const handleShowPizza = (item: infoBakey[]) => {
    return item?.map((item: infoBakey) => {
      return <Bakery key={item.name} bakery={item} />;
    });
  };
  return (
    <div className="flex flex-wrap justify-around items-center">
      {handleShowPizza(item)}
    </div>
  );
};
