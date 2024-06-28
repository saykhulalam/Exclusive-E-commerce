import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";
import accountimg from "../assets/accountimg.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { userloginInfo } from "../userSlice";

const CreateAccount = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  let handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(userloginInfo(user));
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode);
      });
  };

  const auth = getAuth();
  return (
    <section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Container>
        <Flex className="md:flex-row lg:flex-row flex-col justify-between lg:gap-20 md:gap-7 gap-10 items-center">
          <div>
            <Image src={accountimg} alt="Create account" />
          </div>
          <div className="lg:w-[371px] w-[300px] md:mt-8">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
              }}
              validationSchema={Yup.object({
                name: Yup.string().required("Required"),
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string()
                  .min(6, "Password must be at least 6 characters long")
                  .required("Required"),
              })}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                const { name, email, password } = values;
                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    toast.success("Account created successfully!", {
                      position: "top-center",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                    sendEmailVerification(auth.currentUser).then(() => {
                      updateProfile(auth.currentUser, {
                        displayName: name,
                      })
                        .then(() => {
                          // const user = userCredential.user;
                          toast.success("Account created successfully!", {
                            position: "top-center",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                          });
                          navigate("/login");
                        })
                        .catch((error) => {
                          toast.error(error, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                            transition: Bounce,
                          });
                        });
                    });
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    toast.error(errorCode, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      transition: Bounce,
                    });
                    setSubmitting(false);
                  });
                resetForm();
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <h2 className="lg:text-[36px] text-[30px] font-medium font-inter text-black leading-[30px] tracking-[2px] mb-[24px]">
                    Create an account
                  </h2>
                  <h5 className="text-[16px] font-popins font-normal text-black leading-[24px] mb-4">
                    Enter your details below
                  </h5>
                  <div className="relative h-11 lg:w-[370px] min-w-[200px] mb-[40px]">
                    <Field
                      name="name"
                      placeholder="Name"
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-[16px] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-[#000000] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Name
                    </label>
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="relative h-11 lg:w-[370px] min-w-[200px] mb-[40px]">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email or Phone Number"
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-[16px] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-[#000000] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Email or Phone Number
                    </label>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="relative h-11 lg:w-[370px] min-w-[200px] mb-[40px]">
                    <Field
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-[16px] font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 placeholder:opacity-0 focus:placeholder:opacity-100"
                    />
                    <label className="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[16px] font-normal leading-tight text-[#000000] transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                      Password
                    </label>
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="lg:w-[371px] w-[300px] h-[56px] bg-prymari-red rounded-[4px] text-[16px] font-medium leading-[24px] font-popins text-white mb-[16px]"
                    disabled={isSubmitting}
                  >
                    Create Account
                  </button>
                </Form>
              )}
            </Formik>
            <button
              onClick={handleGoogle}
              className="relative lg:w-[371px] w-[300px] h-[56px] bg-transparent rounded-[4px] text-[16px] font-medium leading-[24px] font-popins text-black mb-[16px] border-[2px] border-[#00000069]"
            >
              <FcGoogle className="text-[24px] absolute lg:left-16 left-8" />{" "}
              Sign up with Google
            </button>
            <div className="flex gap-[16px] lg:ml-11 mt-[20px] lg:mt-[34px]">
              <h5 className="text-[18px] font-popins font-normal leading-[24px] text-black">
                Already have an account?
              </h5>
              <Link
                className="text-[18px] font-popins font-medium leading-[24px] text-black underline"
                to="/login"
              >
                Log in
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default CreateAccount;
