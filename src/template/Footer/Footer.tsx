import { FC } from "react";
import logo from "../../asset/logo.gif";
import partner1 from "../../asset/partner1.gif";
import partner2 from "../../asset/partner2.gif";
import partner3 from "../../asset/partner3.gif";
import partner4 from "../../asset/partner4.gif";
import partner5 from "../../asset/partner5.gif";

export const Footer: FC = () => {
  const handleClickLink = () => {
    window.open("new");
  };
  return (
    <div className="flex flex-col bg-gray-100 sticky mt-[5%]">
      <div className="border-none max-w-7xl m-5 bg-slate-200 h-48 outline-none rounded-2xl overflow-hidden shadow-inset">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2412779.816630198!2d103.92312432664896!3d9.579529377809665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x31752955992c954d%3A0x32e5b358c834448f!2zS2jDs2kgcm9vZnRvcCwgMS0zIFBow7ogTeG7uSwgUGjGsOG7nW5nIDIyLCBCw6xuaCBUaOG6oW5oLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!3m2!1d10.7907675!2d106.7147803!5e0!3m2!1svi!2s!4v1682329121432!5m2!1svi!2s"
          loading="lazy"
          width="100%"
          height="100%"
          className="p-2 rounded-3xl"
          allowFullScreen
        />
      </div>
      <section className="max-w-7xl my-5 mx-12 text-center">
        <h2 className="font-bold tracking-wider font-mono text-xl">
          Our Online Partners
        </h2>
        <ul className="no-underline flex flex-row justify-around ">
          <li className="bg-slate-400 cursor-pointer hover:shadow-2xl lg:overflow-hidden lg:my-6 lg:w-40 lg:h-40 p-3 rounded-full sm:w-20 sm:h-20">
            <img
              src={partner1}
              alt="partner1"
              className="w-[100%] h-[100%] object-contain"
            />
          </li>
          <li className="bg-slate-400 cursor-pointer hover:shadow-2xl lg:overflow-hidden lg:my-6 lg:w-40 lg:h-40 p-3 rounded-full sm:w-20 sm:h-20">
            <img
              src={partner2}
              alt="partner2"
              className="w-[100%] h-[100%] object-contain"
            />
          </li>
          <li className="bg-slate-400 cursor-pointer hover:shadow-2xl lg:overflow-hidden lg:my-6 lg:w-40 lg:h-40 p-3 rounded-full sm:w-20 sm:h-20">
            <img
              src={partner3}
              alt="partner3"
              className="w-[100%] h-[100%] object-contain"
            />
          </li>
          <li className="bg-slate-400 cursor-pointer hover:shadow-2xl lg:overflow-hidden lg:my-6 lg:w-40 lg:h-40 p-3 rounded-full sm:w-20 sm:h-20">
            <img
              src={partner4}
              alt="partner4"
              className="w-[100%] h-[100%] object-contain"
            />
          </li>
          <li className="bg-slate-400 cursor-pointer hover:shadow-2xl lg:overflow-hidden lg:my-6 lg:w-40 lg:h-40 p-3 rounded-full sm:w-20 sm:h-20">
            <img
              src={partner5}
              alt="partner5"
              className="w-[100%] h-[100%] object-contain"
            />
          </li>
        </ul>
      </section>
      <section className="max-w-7xl my-5 mx-12 text-center">
        <div className="flex flex-row justify-around">
          <div className="flex flex-col w-[20%] flex-1">
            <img
              src={logo}
              alt="logo"
              className="w-28 h-28 object-contain m-auto mb-1"
            />
            <p className="mb-1 text-left pl-8 font-mono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              deleniti, quo amet illo incidunt rerum?
            </p>
            <div className="flex flex-row justify-around items-center mt-2">
              <button className="bg-white text-yellow-500 shadow-stone-600 shadow-sm rounded-full outline-none w-10 h-10 hover:text-white hover:bg-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto hover:scale-75 hover:delay-0 hover:duration-300 hover:transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
                  />
                </svg>
              </button>
              <button className="bg-white text-yellow-500 shadow-stone-600 shadow-sm rounded-full outline-none w-10 h-10 hover:text-white hover:bg-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto hover:scale-75 hover:delay-0 hover:duration-300 hover:transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
              </button>
              <button className="bg-white text-yellow-500 shadow-stone-600 shadow-sm rounded-full outline-none w-10 h-10 hover:text-white hover:bg-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 m-auto hover:scale-75 hover:delay-0 hover:duration-300 hover:transition-all"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="w-[20%] flex flex-col flex-1">
            <h2 className="font-bold shrink-0 font-mono">Location</h2>
            <div className="flex-1 mt-3 flex flex-col justify-evenly self-start w-[100%] text-left italic">
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Thủ Đức
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Bình Thạnh
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Bình Phước
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Biên Hòa
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Quận 3
              </p>
            </div>
          </div>
          <div className="w-[20%] flex flex-col flex-1">
            <h2 className="font-bold shrink-0 font-mono">Links</h2>
            <div className="flex-1 mt-3 flex flex-col justify-evenly self-start w-[100%] text-left italic">
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Home
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                About
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Order
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Menu
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Contract
              </p>
            </div>
          </div>
          <div className="w-[20%] flex flex-col flex-1">
            <h2 className="font-bold shrink-0 font-mono">Company</h2>
            <div className="flex-1 mt-3 flex flex-col justify-evenly self-start w-[100%] text-left italic">
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Tern & Condition
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Privacy Policy
              </p>
              <p
                onClick={handleClickLink}
                className="ml-28 hover:decoration-amber-600 hover:underline-offset-8 hover:underline hover:underline-translate-x-3 cursor-pointer"
              >
                Cookie Policy
              </p>
            </div>
          </div>
        </div>
        <div className="m-6 pt-5 border-t border-t-gray-600 w-[100%] ">
          © All rights reserved
        </div>
      </section>
    </div>
  );
};
