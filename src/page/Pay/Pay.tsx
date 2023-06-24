import { useFormik } from "formik";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Pay.css";
import { useDispatch, useSelector } from "react-redux";
import { clearStore, selectStore } from "../../service/StoreAPI";
import { infoBakey } from "../../type/Bakery";

export const Pay: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [hidden, setHidden] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const { listStore, total } = useSelector(selectStore);
  const infoUser = JSON.parse(localStorage.getItem("userLogin") || "{}");
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      address: "",
      gender: "",
    },
    onSubmit: (eve: any) => {
      eve.preventDefault();
    },
  });
  let infoProduct: JSX.Element = <div></div>;

  const handleSubmit = () => {
    let valFormik = Object.values(formik.values);
    let result = valFormik.every((item) => item !== "");
    if (result === false) {
    } else {
      setHidden(true);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        dispatch(clearStore());
      }, 10000);
      setTimeout(() => {
        navigate("/");
      }, 10800);
      clearTimeout(15000);
    }
  };

  const renderProduct = () => {
    infoProduct = listStore.map((ite: infoBakey) => {
      return (
        <tr key={ite.name}>
          <td className="whitespace-nowrap px-6 py-4">{ite.name}</td>
          <td className="whitespace-nowrap px-6 py-4">{ite.quanChoice}</td>
          <td className="whitespace-nowrap px-6 py-4">{ite.sum}</td>
        </tr>
      );
    });
  };
  renderProduct();
  return (
    <div
      className={
        hidden
          ? "relative bg-gradient-to-b from-indigo-300 to-purple-400 p-5 pt-[6.25rem]"
          : "z-0 relative bg-gradient-to-b from-indigo-300 to-purple-400 p-5 pt-[6.25rem]"
      }
    >
      <form
        onSubmit={formik.handleSubmit}
        className={
          !hidden
            ? "bg-transparent flex flex-row flex-wrap font-mono text-black italic border-2 border-dotted border-red-800 p-14 rounded-lg"
            : "opacity-20 bg-transparent flex flex-row flex-wrap font-mono text-black italic border-2 border-dotted border-red-800 p-14 rounded-lg"
        }
      >
        <input
          value={
            formik.values.fullName ? formik.values.fullName : infoUser.fullName
          }
          type="text"
          name="fullName"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          className="lg:w-[30%] mr-40 mb-3 outline-none pl-5 sm:w-[60%]"
        />
        <input
          value={formik.values.phone}
          type="text"
          name="phone"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Phone connect"
          className="lg:w-[30%] mr-[90px] mb-3 outline-none pl-5 sm:w-[60%]"
        />
        <input
          value={formik.values.address}
          type="text"
          name="address"
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          placeholder="Address"
          className="lg:w-[30%] mr-40 mb-3 outline-none pl-5 sm:w-[60%]"
        />
        <div className="lg:w-[40%] mb-4 mr-[100px] sm:w-[60%]">
          <input
            onChange={formik.getFieldProps("gender").onChange}
            checked={formik.values.gender === "Male"}
            name="gender"
            type="radio"
            value="Male"
          />
          Male <span className="inline-block mr-12"></span>
          <input
            onChange={formik.getFieldProps("gender").onChange}
            checked={formik.values.gender === "Famale"}
            name="gender"
            type="radio"
            value="Famale"
          />
          Famale <span className="inline-block mr-12"></span>
          <input
            onChange={formik.getFieldProps("gender").onChange}
            checked={formik.values.gender === "Other"}
            name="gender"
            type="radio"
            value="Other"
          />
          Other <span className="inline-block mr-12"></span>
        </div>
        <div className="w-[100%] mb-10">
          <table className="min-w-full text-left text-sm font-light relative">
            <thead className="border-b font-mono dark:border-neutral-500">
              <tr>
                <th scope="col" className="px-6 py-4">
                  Name
                </th>
                <th scope="col" className="px-6 py-4">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-4">
                  Sum
                </th>
              </tr>
            </thead>
            <tbody>{infoProduct}</tbody>
            <tfoot className="absolute right-[20%] mt-2">
              Total : <span className="text-red-800 font-xl">{total}</span>
            </tfoot>
          </table>
        </div>
        <div className="flex justify-around items-center w-[100%] text-white">
          <button
            type="button"
            onClick={() => navigate("/store")}
            className="boder-2 border-black bg-blue-700 w-24 rounded-md"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            type="submit"
            className="boder-2 border-black bg-red-700 w-24 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
      {hidden ? (
        <div className="absolute w-[95%] z-30 top-[50%] left-7">
          {success ? (
            <>
              <p>Loading...</p>
              <div id="process" className="">
                <p id="chilPro"></p>
              </div>
            </>
          ) : (
            <p className="text-center text-red-800 font-bold text-2xl italic">
              Succsess !
            </p>
          )}
        </div>
      ) : (
        " "
      )}
    </div>
  );
};
