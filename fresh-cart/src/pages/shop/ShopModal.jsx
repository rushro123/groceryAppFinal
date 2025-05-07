import { useState } from "react";
import { createPortal } from "react-dom";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import ShopRangeSlider from "./ShopSlider";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useMain } from "../../context/MainContext";

const filters = [
  {
    id: "category",
    name: "category",
    options: [
      { value: "vegetables", label: "vegetables", checked: false },
      { value: "fruits", label: "fruits", checked: false },
      { value: "dairy", label: "dairy", checked: true },
      { value: "non-Veg", label: "non-Veg", checked: false },
    ],
  },
  {
    id: "inStock",
    name: "inStock",
    options: [
      { value: "In-stock", label: "In stock", checked: false },
      { value: "out-stick", label: "Out of stock", checked: false },
    ],
  },
  {
    id: "price",
    name: "Size",
    options: [],
  },
];

const ShopModal = () => {
  const { isShopModal, toggleShopModal } = useMain();
  return createPortal(
    <Dialog
      open={isShopModal}
      onClose={toggleShopModal}
      className="tw:relative tw:z-600 tw:lg:hidden"
    >
      <DialogBackdrop
        transition
        className="tw:fixed tw:inset-0 tw:bg-black/25 tw:transition-opacity tw:duration-300 tw:ease-linear tw:data-closed:opacity-0"
      />

      <div className="tw:fixed tw:inset-0 tw:z-40 tw:flex">
        <DialogPanel
          transition
          className="tw:relative tw:ml-auto tw:flex tw:size-full tw:max-w-xs tw:transform tw:flex-col tw:overflow-y-auto tw:bg-white tw:py-4 tw:pb-12 tw:shadow-xl tw:transition tw:duration-300 tw:ease-in-out tw:data-closed:translate-x-full"
        >
          <div className="tw:flex tw:items-center tw:justify-between tw:px-4">
            <h2 className="tw:text-lg tw:font-medium tw:text-gray-900">
              Filters
            </h2>
            <button
              type="button"
              onClick={toggleShopModal}
              className="tw:-mr-2 tw:flex tw:size-10 tw:items-center tw:justify-center tw:rounded-md tw:bg-white tw:p-2 tw:text-gray-400"
            >
              <span className="tw:sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Filters */}
          <form className="tw:mt-4 tw:border-t tw:border-gray-200">
            <h3 className="tw:sr-only">Categories</h3>
            {/* <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                    {subCategories.map((category) => (
                      <li key={category.name}>
                        <a href={category.href} className="tw:block tw:px-2 tw:py-3">
                          {category.name}
                        </a>
                      </li>
                    ))}
                  </ul> */}

            {filters.map((section) => (
              <Disclosure
                key={section.id}
                as="div"
                className="tw:border-t tw:border-gray-200 tw:px-4 tw:py-6"
              >
                <h3 className="tw:-mx-2 tw:-my-3 tw:flow-root">
                  <DisclosureButton className="tw:group tw:flex tw:w-full tw:items-center tw:justify-between tw:bg-white tw:px-2 tw:py-3 tw:text-gray-400 tw:hover:text-gray-500">
                    <span className="tw:font-medium tw:text-gray-900">
                      {section.name}
                    </span>
                    <span className="ml-6 flex items-center">
                      <PlusIcon
                        aria-hidden="true"
                        className="tw:size-5 tw:group-data-open:hidden"
                      />
                      <MinusIcon
                        aria-hidden="true"
                        className="tw:size-5 tw:group-not-data-open:hidden"
                      />
                    </span>
                  </DisclosureButton>
                </h3>
                <DisclosurePanel className="tw:pt-6">
                  <div className="tw:space-y-6">
                    {section.options.length ? (
                      section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <div className="tw:flex h-5 tw:shrink-0 tw:items-center">
                            <div className="tw:group tw:grid tw:size-4 tw:grid-cols-1">
                              <input
                                defaultValue={option.value}
                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                name={`${section.id}[]`}
                                type="checkbox"
                                className="tw:col-start-1 tw:row-start-1 tw:appearance-none tw:rounded-sm tw:border tw:border-gray-300 tw:bg-white tw:checked:border-indigo-600 tw:checked:bg-indigo-600 tw:indeterminate:border-indigo-600 tw:indeterminate:bg-indigo-600 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-indigo-600 tw:disabled:border-gray-300 disabled:bg-gray-100 tw:disabled:checked:bg-gray-100 tw:forced-colors:appearance-auto"
                              />
                              <svg
                                fill="none"
                                viewBox="0 0 14 14"
                                className="tw:pointer-events-none tw:col-start-1 tw:row-start-1 tw:size-3.5 tw:self-center tw:justify-self-center tw:stroke-white tw:group-has-disabled:stroke-gray-950/25"
                              >
                                <path
                                  d="M3 8L6 11L11 3.5"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="tw:opacity-0 tw:group-has-checked:opacity-100"
                                />
                                <path
                                  d="M3 7H11"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="tw:opacity-0 tw:group-has-indeterminate:opacity-100"
                                />
                              </svg>
                            </div>
                          </div>
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="tw:min-w-0 tw:flex-1 tw:text-gray-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))
                    ) : (
                      <div
                        key={3}
                        className="tw:flex tw:flex-col tw:gap-3 tw:justify-center tw:items-stretch tw:px-[.5rem]"
                      >
                        <ShopRangeSlider />
                        <div className="tw:flex tw:justify-between tw:w-[100%] tw:px-[.5rem]">
                          <span className="tw:text-[#000]">10 rs</span>{" "}
                          <span className="tw:text-[#000]">200 rs</span>{" "}
                        </div>
                      </div>
                    )}
                  </div>
                </DisclosurePanel>
              </Disclosure>
            ))}
          </form>
        </DialogPanel>
      </div>
    </Dialog>,
    document.getElementById("modal")
  );
};
export default ShopModal;
