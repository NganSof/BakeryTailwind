import { FC, useMemo, useState } from "react";
import logo from "../../asset/logo.gif";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBakery } from "../../service/BakeryAPI";
import { infoBakey } from "../../type/Bakery";
import { selectStore } from "../../service/StoreAPI";

export const Header: FC = () => {
  let { listBake } = useSelector(selectBakery);
  let { listStore, total } = useSelector(selectStore);
  const [first, setfirst] = useState<any>("");
  const [valShow, setValShow] = useState<string>("");
  const [numChoi, setNumChoi] = useState<number>(0);
  let num: number = 0;

  useMemo(() => {
    if (total === 0) {
      setNumChoi(0);
    } else {
      listStore.forEach((item: infoBakey) => {
        num = num + item.quanChoice;
        setNumChoi(num);
      });
    }
  }, [listStore]);

  const navigate = useNavigate();
  let listShow: string[] = [];
  let listNameSearch: string[] = [];
  let renderShowSearch: JSX.Element | JSX.Element[] = <p>{first}</p>;

  listBake.forEach((valName: infoBakey) => {
    listNameSearch.push(valName.name);
  });

  const render = () => {
    setfirst(
      listShow?.map((item: string, index: number) => {
        return (
          <p key={index}>
            <Link
              onClick={() => {
                setfirst("");
                setValShow("");
              }}
              to={"/menu"}
              className="underline underline-offset-8 decoration-emerald-500 decoration-4 cursor-pointer hover:no-underline"
            >
              {item}
            </Link>
          </p>
        );
      })
    );
  };

  const handleChange = (event: any) => {
    let valSearch = event.target.value;
    setValShow(event.target.value);
    if (valSearch.trim() !== "") {
      listShow = listNameSearch.filter((item) => {
        return item.toLowerCase().includes(valSearch.toLowerCase());
      });
      render();
    }
    return listShow;
  };

  return (
    <header className="@apply:bg:#F3F3F5 fixed z-40 w-[100%] font-mono shadow-md flex h-24 justify-around items-center bg-gradient-to-r from-violet-100 to-fuchsia-200 bg-opacity-25">
      <div
        onClick={() => navigate("")}
        id="logoHeader"
        className="flex flex-row justify-evenly items-center cursor-pointer"
      >
        <img src={logo} alt="logo" className="w-14 h-14 shrink-0" />
        <h4 className="flex-1 ml-2 italic text-2xl">Bakery</h4>
      </div>
      <div id="navHeader" className="flex flex-row justify-evenly items-center">
        <ul className="shrink-0 flex flex-row px-5 justify-center ">
          <li
            className="mr-4 hover:border-b-indigo-500/50 cursor-pointer border-solid border-black hover:border-b-2 hover:text-indigo-500/50"
            onClick={() => navigate("/menu")}
          >
            Menu
          </li>
          <li
            className="mr-4 hover:border-b-indigo-500/50 cursor-pointer border-solid border-black hover:border-b-2 hover:text-indigo-500/50"
            onClick={() => navigate("/gift")}
          >
            Gift
          </li>
        </ul>
        <input
          value={valShow}
          onChange={handleChange}
          type="search"
          autoFocus
          name=""
          placeholder="Search cake"
          id=""
          className="relative outline-none border-2 pl-4 italic rounded-2xl shadow-xl hover:border-x-indigo-500 hover:border-y-purple-600 outline-none caret-transparent"
        />
      </div>
      <div className="bg-red-500 absolute top-[11%] left-[49%] z-10 w-[20%] pl-2 bg-transparent">
        {renderShowSearch}
      </div>
      <div
        id="loginHeader"
        className="flex flex-row justify-around items-center"
      >
        <button
          onClick={() => navigate("/store")}
          className="rounded-full relative shadow-xl p-2 mr-5 bg-slate-5 hover:shadow-slate-400 hover:shadow-inner"
        >
          <p className="absolute -top-3 left-7 text-red-800 font-bold text-xl">
            {numChoi}
          </p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="rounded-full shadow-xl p-2 mr-5 bg-slate-5 hover:shadow-slate-400 hover:shadow-inner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};
