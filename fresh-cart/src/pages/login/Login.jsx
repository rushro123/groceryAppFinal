import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../../axios";
import { useMain } from "../../context/MainContext";
import { toast } from 'react-toastify';
const Login = () => {
  const initialValues = {
    email1: "",
    password1: "",
  };
  // const {loginUser}=useMain()
  const {loginUser}=useMain()
  const Navigate=useNavigate()
  const validationSchema = Yup.object({
    email1: Yup.string().email("Invalid email").required("Required"),
    password1: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const onSubmit = async(values) => {
    try {
        console.log("loign form data:", values);
        const val={email:values.email1,password:values.password1}
        const res=await api.post("/user/login",val)
       
        
        if(res.status ===201){
            toast.success("login succes", {
                position: 'top-center',
                autoClose: 3000,
      });
        }
        // loginUser()
        Navigate("/")
        loginUser()
    } catch (error) {
        console.log(error)
        toast.error(error.message, {
            position: 'top-center',
            autoClose: 3000,
  });
    }
    
  };

  return (
    <div className="tw:flex tw:items-center tw:justify-center tw:min-h-screen tw:bg-gray-100 dark:tw:bg-gray-800">
      <div className="tw:bg-white dark:tw:bg-gray-900  tw:rounded-lg tw:shadow-md tw:w-full tw:max-w-md tw:!p-[2rem]">
      <h3 className="tw:text-2xl tw:font-bold tw:text-center tw:text-gray-900 dark:tw:text-white tw:mb-6">
          Login
        </h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="tw:space-y-4 tw:flex tw:flex-col tw:gap-[2rem] tw:!p-[2rem]">
            <div>
              <label
                htmlFor="email1"
                className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 dark:tw:text-gray-300"
              >
                Email
              </label>
              <Field
                type="email"
                name="email1"
                id="email1"
                className="tw:mt-1 tw:block tw:w-full tw:p-2 tw:border tw:rounded-md tw:bg-gray-50 dark:tw:bg-gray-700 tw:text-gray-900 dark:tw:text-white tw:border-gray-300 dark:tw:border-gray-600 focus:tw:ring-primary-500 focus:tw:border-primary-500"
              />
              <ErrorMessage
                name="email1"
                component="div"
                className="tw:text-red-500 tw:text-sm tw:mt-1"
                
              />
            </div>

            <div>
              <label
                htmlFor="password1"
                className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 dark:tw:text-gray-300"
              >
                Password
              </label>
              <Field
                type="password"
                name="password1"
                id="password1"
                className="tw:mt-1 tw:block tw:w-full tw:p-2 tw:border tw:rounded-md tw:bg-gray-50 dark:tw:bg-gray-700 tw:text-gray-900 dark:tw:text-white tw:border-gray-300 dark:tw:border-gray-600 focus:tw:ring-primary-500 focus:tw:border-primary-500"
              />
              <ErrorMessage
                name="password1"
                component="div"
                className="tw:text-red-500 tw:text-sm tw:mt-1"
              />
            </div>

            <button
              type="submit"
              className="tw:w-[auto] tw:cursor-pointer tw:!px-[1rem] tw:self-center tw:bg-[#3f730a] hover:tw:bg-primary-700 tw:text-white tw:font-medium tw:!py-[.5rem] tw:rounded focus:tw:outline-none focus:tw:ring-2 focus:tw:ring-offset-2 focus:tw:ring-primary-500 "
            >
              Login
            </button>
          </Form>
        </Formik>

        <p className="tw:mt-4 tw:text-sm tw:text-center tw:text-gray-600 dark:tw:text-gray-400">
          Don't have an account?{" "}
          <a
            
            className="tw:text-primary-600 hover:tw:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
