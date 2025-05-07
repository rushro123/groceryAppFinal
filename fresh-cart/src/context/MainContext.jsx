import React, { createContext, useContext, useEffect, useState } from 'react'
const MainContext = createContext()
export const useMain = () => {
    return useContext(MainContext)
}
export const MainProvider = ({ children }) => {  
        const [isModal,setIsModal]=useState(false);
        const [isShopModal,setIsShopModal]=useState(false)
        const [sliderValue, setSliderValue] = useState([10, 20]);
        const [user, setUser] = useState(null)
        const [loading, setLoading] = useState(false)
        const [isQuantityupdated, setIsQuantityUpdated] = useState(0)
        const toggleModal=()=>{
            setIsModal(prev=>!prev)
        }
        const toggleShopModal=()=>{
            setIsShopModal(prev=>!prev)
        }
        return(
            <MainContext.Provider
                value={{
                    isModal:isModal,
                    toggleModal,
                    isShopModal:isShopModal,
                    toggleShopModal,
                    sliderValue,
                    setSliderValue,
                    user:user,
                    setUser,
                    loading,
                     setLoading,
                     isQuantityupdated, setIsQuantityUpdated

                }}
            >
                {children}
            </MainContext.Provider>
        )
}
