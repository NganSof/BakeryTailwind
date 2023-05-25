import { FC, useEffect, useState } from "react";
import { Tab, initTE } from "tw-elements";
import { CakePastries } from "../../component/CakePastries";
import { Sandwich } from "../../component/Sandwich";
import { Burger } from "../../component/Burger";
import { Pizza } from "../../component/Pizza";
import { bakeryTypeDate } from "../../mock/bakery";
import { infoBakey } from "../../type/Bakery";

export const Menu: FC = () => {
  initTE({ Tab });
  const [id, setId] = useState<string>("cakes");
  let renderContent: JSX.Element = <CakePastries item={bakeryTypeDate} />;
  let allItemBakery: infoBakey[] = [];

  bakeryTypeDate?.map((itemBakety: infoBakey) => {
    if (itemBakety.type === id) {
      allItemBakery.push(itemBakety);
      switch (itemBakety.type) {
        case "cakes":
          renderContent = <CakePastries item={allItemBakery} />;
          break;
        case "sandwich":
          renderContent = <Sandwich item={allItemBakery} />;
          break;
        case "burger":
          renderContent = <Burger item={allItemBakery} />;
          break;
        case "pizza":
          renderContent = <Pizza item={allItemBakery} />;
          break;
        default:
          break;
      }
    }
  });

  const changeID = (valID: string) => {
    setId(valID);
  };

  return (
    <div className="flex flex-row justify-between">
      <ul className="flex list-none flex-col flex-wrap w-[20%] justify-evenly text-xl italic font-bold">
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline"
          onClick={() => {
            changeID("cakes");
          }}
        >
          Cakes & Pastries
        </li>
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline"
          onClick={() => {
            changeID("sandwich");
          }}
        >
          Sandwich
        </li>
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline"
          onClick={() => {
            changeID("burger");
          }}
        >
          Burger
        </li>
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline"
          onClick={() => {
            changeID("pizza");
          }}
        >
          Pizza
        </li>
      </ul>
      <div className="w-[100%]  h-[100vh] border-l-2 border-l-red-800 overflow-x-hidden overflow-scroll">
        <div className="w-[100%]">
          <div className="opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block">
            {renderContent}
          </div>
        </div>
      </div>
    </div>
  );
};
