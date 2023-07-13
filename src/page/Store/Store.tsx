import { FC, Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleStore,
  pushStore,
  selectStore,
  totalStore,
} from "../../service/StoreAPI";
import { infoBakey } from "../../type/Bakery";
import currency from "currency.js";
import { useNavigate } from "react-router-dom";

export const Store: FC = () => {
  const { listStore, total } = useSelector(selectStore);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Stores, setstores] = useState<infoBakey[]>(listStore);

  let valMoney = (itemNum: number) => {
    return currency(itemNum || 0, {
      symbol: " ",
      separator: ".",
    }).format();
  };

  const renderItemStore = () => {
    return Stores?.map((itemStore, index) => {
      return (
        <tr
          key={itemStore.name}
          className="cursor-pointer border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
        >
          <td className="whitespace-nowrap px-6 py-4 font-medium">
            {index + 1}
          </td>
          <td className="whitespace-nowrap px-6 py-4">{itemStore.name}</td>
          <td className="whitespace-nowrap px-6 py-4">{itemStore.price}</td>
          <td className="whitespace-nowrap px-6 py-4">
            <button
              className="border-2 bg-blue-700 text-white text-bold text-xl rounded-lg w-6 h-9 inline-block my-0 mx-auto pb-9 pt-1 cursor-pointer"
              onClick={() => {
                dispatch(deleStore(itemStore));
                dispatch(totalStore());
              }}
            >
              -
            </button>
            <span className="inline mx-2 font-serif">
              {itemStore.quanChoice}
            </span>
            <button
              className={
                itemStore.quantity === 0
                  ? "border-2 bg-red-500 my-0 mx-auto pb-9 pt-1 text-xl rounded-lg w-6 h-9 cursor-not-allowed"
                  : "border-2 bg-red-700 text-white text-bold text-xl rounded-lg w-6 h-9 inline-block my-0 mx-auto pb-9 pt-1 cursor-pointer"
              }
              onClick={() => {
                dispatch(pushStore(itemStore));
                dispatch(totalStore());
              }}
            >
              +
            </button>
          </td>
          <td className="whitespace-nowrap px-6 py-4 text-red-600 font-serif">
            {valMoney(itemStore.sum ? itemStore.sum : 0)}
          </td>
        </tr>
      );
    });
  };

  useEffect(() => {
    setstores(listStore);
  }, [listStore]);

  return (
    <Fragment>
      <div className="flex flex-col pt-[6.25rem]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light ">
                <thead className="border-b font-mono dark:border-neutral-500 overflow-hidden">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="relative">{renderItemStore()}</tbody>
                <tfoot className="md:h-10 sm:h-[100vh]">
                  <tr className="text-right absolute md:top-auto md:left-[250px] sm:left-28 mt-6">
                    <td className="text-red-800 font-bold text-2xl">
                      Total : $ {valMoney(total)}
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          if (listStore && total !== 0) {
                            navigate("/pay");
                          } else {
                            navigate("/menu");
                          }
                        }}
                        className="text-red-800 font-bold text-2xl ml-10 bg-gradient-to-b from-indigo-300 to-purple-400 p-2 rounded-xl shadow-2xl hover:shadow-inset font-serif hover:bg-clip-text hover:bg-gradient-to-b from-indigo-500 to-purple-600 hover:text-transparent"
                      >
                        Pay the bill
                      </button>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
