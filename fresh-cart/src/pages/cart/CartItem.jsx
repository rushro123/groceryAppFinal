import React, { useEffect, useState,useRef } from 'react';
import { toast } from 'react-toastify';
// import { useDispatch } from 'react-redux';
// import { addItemsToCart, removeErrors } from '../actions/cartActions'; // Adjust path as needed
import './Cart.css'
import api from '../../axios';
// import { set } from 'mongoose';
import { useMain } from '../../context/MainContext.jsx';
const CartItem=({ src,id, title, quantity, price,setQuantities })=> {
//   const [quantities, setQuantities] = useState(quantity);
  // const dispatch = useDispatch(); // Uncomment when using Redux
  const loading = false; // Replace this with actual loading state if needed
  
    const {setIsQuantityUpdated,updateQuantity,setIsProductUpdated}=useMain()
   const [quantities, setQuantity] = useState(quantity);
   const [isModal,setIsModal]=useState(false)
   
  const handleModal=()=>{
    setIsModal(prev=>!prev)
  }
  const deleteItem = async () => {
    try { 
      const res= await api.delete(`/cart/${id}`)
      if(res.status ===201){
                  toast.warn("cart item removed", {
                      position: 'top-center',
                      autoClose: 3000,
            });
          }
      setIsProductUpdated(prev=>!prev)
    }
    catch (error) { 
      console.log(error)
    }finally{
      setIsModal(prev=>!prev)
    }

  }
  

  useEffect(()=>{
    setIsQuantityUpdated(quantities)
  },[quantities])

  return (
    <div className="cart-item">
    <div className={`cart-modal ${isModal && "active-Modal"}`}>
      <button className='succes' onClick={handleModal}>cancel</button>
      <button className='cancel' onClick={deleteItem}>confirm delete</button>
    </div>
      <div className="item-info">
        <img src={src} alt="product img" className="item-image" />
        <div className="item-details">
          <h3 className="item-name "><strong>Product Name: {title}</strong></h3>
          <p className="item-price"><strong>Price: {price}</strong></p>
          {/* <p className="item-quantity"><strong>{quantities}</strong></p> */}
        </div>
      </div>
      <div className="quantity-controls">
        <button className="quantity-button decrease-btn" onClick={()=>{
             if (quantities <= 1) {
      toast.error('Quantity cannot be less than 1', {
        position: 'top-center',
        autoClose: 3000,
      });
    return;}
          setQuantity(prev=>prev-1)
          updateQuantity(id,quantities,"remove")
        }}>-</button>
        <input
          type="number"
          value={quantities}
          className={`quantity-input tw:!text-[#000]`}
          readOnly
          min="1"
          
          
        />
        <button className="quantity-button increase-btn" onClick={()=>{
           if (quantities >= 10) {
                toast.error('Quantity cannot be more than 10', {
                  position: 'top-center',
                  autoClose: 3000,
                });
                // dispatch(removeErrors());
                
                return;
              }
          setQuantity(prev=>prev+1)
          updateQuantity(id,quantities,"add")
        }}>+</button>
      </div>
      <div className="item-total">
        <span className="item-total-price">{price * quantities}</span>
      </div>
      <div className="item-actions">
        <button className="remove-item-btn tw:!bg-[#4f8a10] tw:hover:!bg-[#ff7d09]" onClick={handleModal} >Remove</button>
      </div>
    </div>
  );
}

export default CartItem;









