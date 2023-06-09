import { FC, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, selectUser } from "../../service/UserAPI";
import { useNavigate } from "react-router-dom";

export const Login: FC = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { ...payload } = useSelector(selectUser);
  const schema = Yup.object().shape({
    fullName: Yup.string()
      .required("Username is required")
      .min(5, "Username must have min 5 characters")
      .max(10, "Username have max 10 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must have min 8 characters"),
    phone: Yup.number().required("Phone is required"),
    address: Yup.string()
      .required("Address is required")
      .min(10, "Address must have min 10 characters")
      .max(30, "Address have max 30 characters"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      password: "",
      email: "",
      phone: "",
      address: "",
    },
    onSubmit: (eve: any) => {
      eve.preventDefault();
    },
    validationSchema: schema,
    validateOnMount: true,
  });

  const handleSubmit = () => {
    // Chuyển qua đăng ký
    // setShowSignIn(false);
    // formik.values = formik.initialValues;
    var body = {
      fullName: formik.values.fullName,
      password: formik.values.password,
    };
    if (body.fullName === "" && body.password === "") {
      dispatch(loginUser(payload.userInfo));
      navigate("/menu", { replace: true });
    } else {
      dispatch(loginUser(body));
      window.history.back();
    }
    return;
  };

  return (
    <div className="pt-[6.25rem]">
      <div className="flex flex-col m-auto max-w-5xl my-32">
        {!showSignIn ? (
          <form className="flex bg-transparent flex-col w-80 text-center m-auto my-14">
            <input
              value={
                payload.userInfo
                  ? payload.userInfo.fullName
                  : formik.values.fullName
              }
              autoFocus
              type="text"
              name="fullName"
              placeholder="Full name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2 mb-5"
            />
            {/* {formik.errors.fullName && (
              // <div className="text-red-800">{formik.errors.fullName}</div>
            )} */}
            <input
              value={formik.values.email}
              autoFocus
              type="email"
              name="email"
              placeholder="Email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2 mb-5"
            />
            {/* <div className="text-red-800">{formik.errors.email}</div> */}
            <input
              value={formik.values.phone}
              autoFocus
              type="text"
              name="phone"
              placeholder="Phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2 mb-5"
            />
            {/* <div className="text-red-800">{formik.errors.phone}</div> */}
            <input
              value={formik.values.address}
              autoFocus
              type="text"
              name="address"
              placeholder="Address"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2 mb-5"
            />
            {/* <div className="text-red-800">{formik.errors.address}</div> */}
            <input
              value={
                payload.userInfo
                  ? payload.userInfo.password
                  : formik.values.password
              }
              autoFocus
              autoComplete="off"
              type="password"
              name="password"
              placeholder="Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2"
            />
            {/* <div className="text-red-800">{formik.errors.password}</div> */}
            <div className=" m-auto my-6">
              <button
                type="submit"
                className="bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset"
              >
                <p className="font-serif"> Sign Up</p>
              </button>
            </div>
          </form>
        ) : (
          <form
            className="flex bg-transparent flex-col w-80 text-center m-auto my-14"
            onSubmit={formik.handleSubmit}
          >
            <input
              value={formik.values.fullName}
              type="text"
              name="fullName"
              placeholder={
                payload.userInfo
                  ? payload.userInfo.fullName
                  : formik.values.fullName
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2 mb-5"
            />
            {/* {formik.errors.fullName && formik.touched.fullName && (
              // <div className="text-red-800">{formik.errors.fullName}</div>
            )} */}
            <input
              value={formik.values.password}
              autoComplete="off"
              type="password"
              name="password"
              placeholder={
                payload.userInfo
                  ? payload.userInfo.password
                  : formik.values.password
              }
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className="outline-none border-t-indigo-600 border-b-indigo-600 border-r-purple-600 rounded-xl border-l-purple-600 border-[3px] py-1 pl-2"
            />
            {/* {formik.errors.password && formik.touched.password && (
              // <div className="text-red-800">{formik.errors.password}</div>
            )} */}
            <div className=" m-auto my-6">
              <button
                onClick={handleSubmit}
                type="submit"
                className="bg-slate-100 border-2 border-double border-orange-500 p-2 rounded-xl shadow-2xl hover:shadow-inset"
              >
                <p className="font-serif"> Sign In</p>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
