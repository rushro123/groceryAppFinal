import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { NavLink, useNavigate } from "react-router-dom"; // for routing
import api from "../../axios";
import { toast } from 'react-toastify';
const Register = () => {
    const Navigate=useNavigate()
  const initialValues = {
    name:"",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = async(values) => {
    try {
        console.log("Register form data:", values);
        const val={name:values.name,email:values.email,password:values.confirmPassword}
        const res=await api.post("/user/register",val)
        if(res.status ===201){
                    toast.success("registration succes", {
                        position: 'top-center',
                        autoClose: 3000,
              });
                }
        Navigate("/login")
        
    } catch (error) {
        console.log(error)
    }
    
  };

  return (
    <div className="tw:flex tw:items-center tw:justify-center tw:min-h-screen tw:bg-gray-100 dark:tw:bg-gray-800">
      <div className="tw:bg-white dark:tw:bg-gray-900  tw:rounded-lg tw:shadow-md tw:w-full tw:max-w-md tw:!p-[2rem]">
        <h3 className="tw:text-2xl tw:font-bold tw:text-center tw:text-gray-900 dark:tw:text-white tw:mb-6">
          Create an Account
        </h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="tw:space-y-4 tw:flex tw:flex-col tw:gap-[2rem] tw:!p-[2rem]">
            <div>
              <label
                htmlFor="name"
                className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 dark:tw:text-gray-300"
              >
                username
              </label>
              <Field
                type="name"
                name="name"
                id="name"
                className="tw:mt-1 tw:block tw:w-full tw:p-2 tw:border tw:rounded-md tw:bg-gray-50 dark:tw:bg-gray-700 tw:text-gray-900 dark:tw:text-white tw:border-gray-300 dark:tw:border-gray-600 focus:tw:ring-primary-500 focus:tw:border-primary-500"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="tw:text-red-500 tw:text-sm tw:mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 dark:tw:text-gray-300"
              >
                Email
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="tw:mt-1 tw:block tw:w-full tw:p-2 tw:border tw:rounded-md tw:bg-gray-50 dark:tw:bg-gray-700 tw:text-gray-900 dark:tw:text-white tw:border-gray-300 dark:tw:border-gray-600 focus:tw:ring-primary-500 focus:tw:border-primary-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="tw:text-red-500 tw:text-sm tw:mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 dark:tw:text-gray-300"
              >
                Password
              </label>
              <Field
                type="password"
                name="password"
                id="password"
                className="tw:mt-1 tw:block tw:w-full tw:p-2 tw:border tw:rounded-md tw:bg-gray-50 dark:tw:bg-gray-700 tw:text-gray-900 dark:tw:text-white tw:border-gray-300 dark:tw:border-gray-600 focus:tw:ring-primary-500 focus:tw:border-primary-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="tw:text-red-500 tw:text-sm tw:mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="confirmPassword"
                className="tw:block tw:text-sm tw:font-medium tw:text-gray-700 dark:tw:text-gray-300"
              >
                Confirm Password
              </label>
              <Field
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="tw:mt-1 tw:block tw:w-full tw:p-2 tw:border tw:rounded-md tw:bg-gray-50 dark:tw:bg-gray-700 tw:text-gray-900 dark:tw:text-white tw:border-gray-300 dark:tw:border-gray-600 focus:tw:ring-primary-500 focus:tw:border-primary-500"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="tw:text-red-500 tw:text-sm tw:mt-1"
              />
            </div>

            <button
              type="submit"
              className="tw:w-[auto] tw:cursor-pointer tw:!px-[1rem] tw:self-center tw:bg-[#3f730a] hover:tw:bg-primary-700 tw:text-white tw:font-medium tw:!py-[.5rem] tw:rounded focus:tw:outline-none focus:tw:ring-2 focus:tw:ring-offset-2 focus:tw:ring-primary-500 "
            >
              Register
            </button>
          </Form>
        </Formik>

        <p className=" tw:text-sm tw:text-center tw:text-gray-600 dark:tw:text-gray-400 tw:!mt-[1rem]">
          Already have an account?{" "}
          <NavLink to="/login" className="tw:text-primary-600 hover:tw:underline">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Register;
