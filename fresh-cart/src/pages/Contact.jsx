import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Field, Label, Switch } from '@headlessui/react'
import { GoMail } from "react-icons/go";
import { IoCall } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
// import Style from './ContactUs.css'
<link href="/src/ContactUs.css" rel="stylesheet"></link>

export default function ContactUs() {
  const [agreed, setAgreed] = useState(false)

  return (

    <div className="tw:main">
      <img className="tw:opacity-60" src="photo.jpg" alt="photo is not found" />
      <div className="tw:pho tw:py-4"></div>

      <div className="tw:gap-x-16 tw:py-16 tw:grid tw:grid-flow-col tw:justify-items-center">
        <div className="tw:gap-x-16 sm:tw:flex">
          <div className="tw:border-2 tw:border-emerald-600 tw:my-4 sm:tw:border-none">
            <button className="tw:w-32 hover:!tw:bg-[orange] hover:!tw:text-[#fff] sm:tw:w-80 tw:h-16">Mail</button>
            <div className="tw:grid tw:grid-flow-col tw:justify-items-center sm:tw:py-4 md:tw:py-8">
              <GoMail />
            </div>
            <h3>info@example.com</h3>
            <h3>support@example.com</h3>
          </div>
          <div className="tw:border-2 tw:border-emerald-600 tw:my-4 sm:tw:border-none">
            <button className="tw:w-32 hover:!tw:bg-[orange] hover:!tw:text-[#fff] sm:tw:w-80 tw:h-16">Phone</button>
            <div className="tw:grid tw:grid-flow-col tw:justify-items-center sm:tw:py-4 md:tw:py-8">
              <IoCall />
            </div>
            <h3>+91 0123456789</h3>
            <h3>+91 0123456789</h3>
          </div>
          <div className="tw:border-2 tw:border-emerald-600 tw:my-4 sm:tw:border-none">
            <button className="tw:w-32 hover:!tw:bg-[orange] hover:!tw:text-[#fff] sm:tw:w-80 tw:h-16">Address</button>
            <div className="tw:grid tw:grid-flow-col tw:justify-items-center sm:tw:py-16 md:tw:py-8">
              <FaLocationArrow />
            </div>
            <p>No: 58 A, East Madison Street, Baltimore</p>
          </div>
        </div>
      </div>

      <div className="tw:map tw:sm-w-1">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.201404864757!2d73.84270727465213!3d18.51979856919892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c079ae9682c7%3A0x641627f2b9e5d2e1!2sITpreneur%20Institute!5e0!3m2!1sen!2sin!4v1746435287509!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="tw:isolate tw:bg-white tw:px-6 tw:py-24 sm:tw:py-32 lg:tw:px-8">
        <div
          aria-hidden="true"
          className="tw:absolute tw:inset-x-0 tw:top-[-10rem] -tw:z-10 tw:transform-gpu tw:overflow-hidden tw:blur-3xl sm:tw:top-[-20rem]"
        ></div>
        <div className="tw:mx-auto tw:max-w-2xl tw:text-center">
          <h2 className="tw:text-4xl tw:font-semibold tw:tracking-tight tw:text-balance tw:text-gray-900 sm:tw:text-5xl">Contact sales</h2>
          <p className="tw:mt-2 tw:text-lg/8 tw:text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
        </div>
        <form action="#" method="POST" className="tw:mx-auto tw:mt-16 tw:max-w-xl sm:tw:mt-20">
          <div className="tw:grid tw:grid-cols-1 tw:gap-x-8 tw:gap-y-6 sm:tw:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="tw:block tw:text-sm/6 tw:font-semibold tw:text-gray-900">
                First name
              </label>
              <div className="tw:mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="tw:block tw:w-full tw:rounded-md tw:bg-white tw:px-3.5 tw:py-2 tw:text-base tw:text-gray-900 tw:outline-1 -tw:outline-offset-1 tw:outline-gray-300 tw:placeholder:text-gray-400 focus:tw:outline-2 focus:-tw:outline-offset-2 focus:tw:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="tw:block tw:text-sm/6 tw:font-semibold tw:text-gray-900">
                Last name
              </label>
              <div className="tw:mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="tw:block tw:w-full tw:rounded-md tw:bg-white tw:px-3.5 tw:py-2 tw:text-base tw:text-gray-900 tw:outline-1 -tw:outline-offset-1 tw:outline-gray-300 tw:placeholder:text-gray-400 focus:tw:outline-2 focus:-tw:outline-offset-2 focus:tw:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:tw:col-span-2">
              <label htmlFor="email" className="tw:block tw:text-sm/6 tw:font-semibold tw:text-gray-900">
                Email
              </label>
              <div className="tw:mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="tw:block tw:w-full tw:rounded-md tw:bg-white tw:px-3.5 tw:py-2 tw:text-base tw:text-gray-900 tw:outline-1 -tw:outline-offset-1 tw:outline-gray-300 tw:placeholder:text-gray-400 focus:tw:outline-2 focus:-tw:outline-offset-2 focus:tw:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:tw:col-span-2">
              <label htmlFor="phone-number" className="tw:block tw:text-sm/6 tw:font-semibold tw:text-gray-900">
                Phone number
              </label>
              <div className="tw:mt-2.5">
                <div className="tw:flex tw:rounded-md tw:bg-white tw:outline-1 -tw:outline-offset-1 tw:outline-gray-300 has-[input:focus-within]:tw:outline-2 has-[input:focus-within]:-tw:outline-offset-2 has-[input:focus-within]:tw:outline-indigo-600">
                  <div className="tw:grid tw:shrink-0 tw:grid-cols-1 focus-within:tw:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="tw:col-start-1 tw:row-start-1 tw:w-full tw:appearance-none tw:rounded-md tw:py-2 tw:pr-7 tw:pl-3.5 tw:text-base tw:text-gray-500 tw:placeholder:text-gray-400 focus:tw:outline-2 focus:-tw:outline-offset-2 focus:tw:outline-indigo-600 sm:tw:text-sm/6"
                    >
                      <option>IN</option>
                      <option>US</option>
                      <option>EU</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="tw:pointer-events-none tw:col-start-1 tw:row-start-1 tw:mr-2 tw:size-5 tw:self-center tw:justify-self-end tw:text-gray-500 sm:tw:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="number"
                    placeholder="123-456-7890"
                    className="tw:block tw:min-w-0 tw:grow tw:py-1.5 tw:pr-3 tw:pl-1 tw:text-base tw:text-gray-900 tw:placeholder:text-gray-400 focus:tw:outline-none sm:tw:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:tw:col-span-2">
              <label htmlFor="message" className="tw:block tw:text-sm/6 tw:font-semibold tw:text-gray-900">
                Message
              </label>
              <div className="tw:mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="tw:block tw:w-full tw:rounded-md tw:bg-white tw:px-3.5 tw:py-2 tw:text-base tw:text-gray-900 tw:outline-1 -tw:outline-offset-1 tw:outline-gray-300 tw:placeholder:text-gray-400 focus:tw:outline-2 focus:-tw:outline-offset-2 focus:tw:outline-indigo-600"
                  defaultValue={''}
                />
              </div>
            </div>
            <Field className="tw:flex tw:gap-x-4 sm:tw:col-span-2">
              <div className="tw:flex tw:h-6 tw:items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className="tw:group tw:flex tw:w-8 tw:flex-none tw:cursor-pointer tw:rounded-full tw:bg-gray-200 tw:p-px tw:ring-1 tw:ring-gray-900/5 tw:transition-colors tw:duration-200 tw:ease-in-out tw:ring-inset focus-visible:tw:outline-2 focus-visible:tw:outline-offset-2 focus-visible:tw:outline-indigo-600 data-checked:tw:bg-indigo-600"
                >
                  <span className="tw:sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className="tw:size-4 tw:transform tw:rounded-full tw:bg-white tw:shadow-xs tw:ring-1 tw:ring-gray-900/5 tw:transition tw:duration-200 tw:ease-in-out group-data-checked:tw:translate-x-3.5"
                  />
                </Switch>
              </div>
              <Label className="tw:text-sm/6 tw:text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="#" className="tw:font-semibold tw:text-indigo-600">
                  privacy&nbsp;policy
                </a>
                .
              </Label>
            </Field>
          </div>
          <div className="tw:mt-10">
            <button
              type="submit"
              className="tw:block tw:w-full tw:rounded-md tw:bg-indigo-600 tw:px-3.5 tw:py-2.5 tw:text-center tw:text-sm tw:font-semibold tw:text-black tw:shadow-xs hover:tw:bg-indigo-500 focus-visible:tw:outline-2 focus-visible:tw:outline-offset-2 focus-visible:tw:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}