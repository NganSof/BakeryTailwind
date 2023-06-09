import { FC, useEffect, useState } from "react";
import { Tab, initTE } from "tw-elements";
import { CakePastries } from "../../component/CakePastries";
import { Sandwich } from "../../component/Sandwich";
import { Burger } from "../../component/Burger";
import { Pizza } from "../../component/Pizza";
import { infoBakey } from "../../type/Bakery";
import { useSelector } from "react-redux";
import { selectBakery } from "../../service/BakeryAPI";
import { selectStore } from "../../service/StoreAPI";

export const Menu: FC = () => {
  initTE({ Tab });
  const [id, setId] = useState<string>("cakes");
  let { listBake } = useSelector(selectBakery);
  let { listStore } = useSelector(selectStore);
  const [listBa, setListBa] = useState<infoBakey[]>(listBake);

  useEffect(() => {
    let dm = [...listBake];
    listStore?.map((itDm: infoBakey) => {
      dm?.map((stName: infoBakey, ind: number) => {
        if (stName.name === itDm.name) {
          dm.splice(ind, 1);
          dm.push(itDm);
        }
        return dm;
      });

      return dm;
    });
    listBake = dm;
    setListBa(listBake);
  }, [listBake, listStore]);

  let renderContent: JSX.Element = <></>;
  let allItemBakery: infoBakey[] = [];
  listBa?.forEach((itemBakety: infoBakey) => {
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
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline cursor-pointer"
          onClick={() => {
            changeID("cakes");
          }}
        >
          Cakes & Pastries
        </li>
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline cursor-pointer"
          onClick={() => {
            changeID("sandwich");
          }}
        >
          Sandwich
        </li>
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline cursor-pointer"
          onClick={() => {
            changeID("burger");
          }}
        >
          Burger
        </li>
        <li
          className="p-2 flex text-center hover:shadow-lg hover:shadow-orange-700 w-[100%] decoration-wavy decoration-orange-500 underline cursor-pointer"
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
