import { useState, useEffect, use } from "react";
import { useMain } from "../context/MainContext.jsx";
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import api from "../axios.js";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import ShopRangeSlider from "./shop/ShopSlider.jsx";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";
import DATA from "../DATA.js";
import styles from "../styles/Shop.module.css";
import ShopModal from "./shop/ShopModal.jsx";
import ShopCard from "./shop/ShopCard.jsx";
const products = DATA.product;
const sortOptions = [
  { name: "category", href: "#", current: true },
  { name: "alpabetically", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const filters = [
  {
    id: "category",
    name: "category",
    options: [
      { value: "vegetables", label: "vegetables", checked: false },
      { value: "fruit", label: "fruit", checked: false },
      { value: "dairy", label: "dairy", checked: false },
      { value: "nonVeg", label: "nonVeg", checked: false },
    ],
  },
  
  {
    id: "price",
    name: "price",
    options: [],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { isShopModal, toggleShopModal } = useMain();
  const [items,setItems]=useState([])
  const [loading, setLoading] = useState(true);
  const todosPerPage = 8;
  const totalPages = Math.ceil(items.length / todosPerPage);
  const startIndex = (currentPage - 1) * todosPerPage;
  const selectedTodos = items.slice(startIndex, startIndex + todosPerPage);
  const [filter,setFilter]=useState([])
  const handleFilterChange=(e)=>{
    
    if(filter.includes(e.target.value)){
      setFilter(prev=>prev.filter((item)=>item!==e.target.value))
      return
    }
    setFilter(prev=>[...prev,e.target.value])
    
  }
  const fetchCartItems=async ()=>{
    try{
      let queryString=''
      if(filter.length){
        filter.map((item)=>{
          queryString+=`category=${item}&`
        })
      }
      const res=await api.get(`/shop?${queryString}`)
      console.log("shop res datas",res.data)
      setItems(res.data)
      console.log("shop posts",items)
    }
    catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  
  useEffect(()=>{
    fetchCartItems()
    console.log(filter)
  },[filter])
  useEffect(() => {
    if (selectedTodos.length === 0 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [selectedTodos]);
  return (
    <div className="tw:bg-white">
      <div>
        {/* Mobile filter dialog */}
        <ShopModal />

        <main className="tw:mx-auto  tw:max-w-[auto] tw:!px-[1rem] tw:!py-[2rem] tw:sm:!py-[3rem] tw:lg:px-8 tw:!W-[100%]">
          <div className="tw:flex tw:items-baseline tw:justify-between tw:border-b tw:border-gray-200 tw:pt-24 tw:pb-6">
            <h1 className="tw:text-4xl tw:font-bold tw:tracking-tight tw:text-gray-900">
              New Arrivals
            </h1>

            <div className="tw:flex tw:items-center">
              <Menu
                as="div"
                className="tw:relative tw:inline-block tw:text-left"
              >
                <div>
                  <MenuButton className="tw:group tw:inline-flex tw:justify-center tw:text-sm tw:font-medium tw:text-gray-700 tw:hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="tw:-mr-1 tw:ml-1 tw:size-5 tw:shrink-0 tw:text-gray-400 tw:group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="tw:absolute tw:right-0 tw:z-10 tw:mt-2 w-40 tw:origin-top-right tw:rounded-md tw:bg-white tw:shadow-2xl tw:ring-1 tw:ring-black/5 tw:transition tw:focus:outline-hidden tw:data-closed:scale-95 tw:data-closed:transform tw:data-closed:opacity-0 tw:data-enter:duration-100 tw:data-enter:ease-out tw:data-leave:duration-75 tw:data-leave:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "tw:font-medium text-gray-900"
                              : "tw:text-gray-500",
                            "tw:block tw:px-4 tw:py-2 tw:text-sm tw:data-focus:bg-gray-100 tw:data-focus:outline-hidden"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="tw:-m-2 tw:ml-5 tw:p-2 tw:text-gray-400 tw:hover:text-gray-500 tw:sm:ml-7"
              >
                <span className="tw:sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="tw:size-5" />
              </button>
              <button
                type="button"
                onClick={toggleShopModal}
                className="tw:-m-2 tw:ml-4 tw:p-2 tw:text-gray-400 tw:hover:text-gray-500 tw:sm:ml-6 tw:lg:hidden"
              >
                <span className="tw:sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="tw:size-5" />
              </button>
            </div>
          </div>

          <section
            aria-labelledby="products-heading"
            className="tw:pt-6 tw:pb-24 tw:mt-[2rem]"
          >
            <h2 id="products-heading" className="tw:sr-only">
              Products
            </h2>

            <div className="tw:grid tw:grid-cols-1 tw:gap-x-8 tw:gap-y-10 tw:lg:grid-cols-4">
              {/* Filters */}
              <form className="tw:hidden tw:lg:flex tw:lg:flex-col tw:gap-y-[1rem]">
                <h3 className="tw:sr-only">Categories</h3>
                

                {filters.map((section) => (
                  <Disclosure
                    key={section.id}
                    as="div"
                    className="tw:border-b tw:border-gray-200 tw:py-6"
                  >
                    <h3 className="tw:-my-3 tw:flow-root tw:text-[2rem]">
                      <DisclosureButton className="tw:group tw:flex tw:w-full tw:items-center tw:justify-between tw:bg-white tw:py-3 tw:text-sm tw:text-gray-400 tw:hover:text-gray-500">
                        <span className="tw:text-[2rem] tw:text-gray-900 ">
                          {section.name}
                        </span>
                        <span className="tw:ml-6 tw:flex tw:items-center">
                          <PlusIcon
                            aria-hidden="true"
                            className="tw:size-5 tw:group-data-open:hidden tw:cursor-pointer"
                          />
                          <MinusIcon
                            aria-hidden="true"
                            className="tw:size-5 tw:group-not-data-open:hidden tw:cursor-pointer"
                          />
                        </span>
                      </DisclosureButton>
                    </h3>
                    <DisclosurePanel className="pt-6">
                      <div className="space-y-4">
                        {section.options.length ? (
                          section.options.map((option, optionIdx) => (
                            <div
                              key={option.value}
                              className="tw:flex tw:gap-3 tw:items-center "
                            >
                              <div className="tw:flex tw:h-5 tw:shrink-0 tw:items-center">
                                <div className="tw:group tw:grid tw:size-4 tw:grid-cols-1">
                                  <input
                                    defaultValue={option.value}
                                    defaultChecked={option.checked}
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    type="checkbox"
                                    onChange={handleFilterChange}
                                    className="tw:col-start-1  tw:row-start-1 tw:appearance-none tw:rounded-sm tw:border tw:border-gray-300 tw:bg-white tw:checked:border-indigo-600 tw:checked:bg-indigo-600 tw:indeterminate:border-indigo-600 tw:indeterminate:bg-indigo-600 tw:focus-visible:outline-2 tw:focus-visible:outline-offset-2 tw:focus-visible:outline-indigo-600 tw:disabled:border-gray-300 tw:disabled:bg-gray-100 tw:disabled:checked:bg-gray-100 tw:forced-colors:appearance-auto"
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
                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                className="tw:text-sm tw:text-gray-600 tw:!text-[1.5rem]"
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

              {/* Product grid */}
              <div className="tw:lg:col-span-3 tw:flex tw:justify-center tw:items-center tw:flex-col tw:gap-[2rem]">
                <div className={styles.itemsHolder}>
                  {selectedTodos.map((item, id) => {
                    return (
                      <ShopCard item={item} key={id}/>
                    );
                  })}
                </div>
                {totalPages > 1 && (
                  <div className="tw:btn tw:d-flex tw:w-[100] tw:justify-content-center tw:gap-[1rem] tw:text-[#000] tw:justify-center tw:items-center">
                    <button
                      className="tw:btn tw:transition tw:duration-[.3s] tw:bg-[#4f8a10] tw:hover:bg-[#ff7d09] tw:hover:text-[#fff] tw:!w-[5rem]"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <FaChevronLeft className="tw:fill-[#fff]"/>
                    </button>

                    <span>
                      page {currentPage} of {totalPages}{" "}
                    </span>

                    <button
                      className="tw:btn tw:transition tw:duration-[.3s] tw:bg-[#4f8a10] tw:hover:bg-[#ff7d09] tw:hover:text-[#fff] tw:!w-[5rem] "
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === totalPages}
                    >
                      <FaChevronRight className="tw:fill-[#fff]" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Shop;
