import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../axios'
const MainContext = createContext()

export const MainProvider = ({ children }) => {  
        const [isModal,setIsModal]=useState(false);
        const [isShopModal,setIsShopModal]=useState(false)
        const [sliderValue, setSliderValue] = useState([10, 20]);
        const [user, setUser] = useState(null)
        const [isQuantityUpdated, setIsQuantityUpdated] = useState(0)
        const [isProductUpdated, setIsProductUpdated] = useState(false)
        const [isUser,setIsUser]=useState(false);
        const [totalItem,setTotalItem]=useState(0)
        const updateQuantity =async (id,quant,update)=>{
            try {
                console.log("quantity",quant)
                if(update==="add"){
                    console.log("add")
                    quant=quant+1
                   const res= await api.put(`/cart/${id}`,  {quant} );
                   console.log(res.data)
                    
                }
                else{
                    quant=quant-1
                    const res=await api.put(`/cart/${id}`,  {quant} );
                    console.log(res.data)
                }
               
                setIsQuantityUpdated(prev=>prev+1)
               console.log("item updated")
             } catch (error) {
               console.log(error)
             }
             
        }
        const loginUser=()=>{
            setIsUser(prev=>!prev)
        }
        const logoutuser=()=>{
            setIsUser(prev=>!prev)
        }

        const toggleModal=()=>{
            
            setIsModal(prev=>!prev)
        }
        const toggleShopModal=()=>{
            setIsShopModal(prev=>!prev)
        }
        const handleTotal=(total)=>{
            setTotalItem(total)
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
                     isQuantityUpdated, 
                     setIsQuantityUpdated,
                     updateQuantity,
                     isProductUpdated, 
                     setIsProductUpdated,
                     isUser,
                      loginUser,
                      logoutuser,
                      handleTotal,
                      totalItem
                }}
            >
                {children}
            </MainContext.Provider>
        )
}
export const useMain = () => {
    return useContext(MainContext)
}
