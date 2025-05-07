import React ,{use, useEffect, useState} from "react";
import "./cart/Cart.css";
import CartItem from "./cart/CartItem.jsx";
// import { useSelector, useDispatch } from 'react-redux';
import api from "../axios.js";
import { useMain } from "../context/MainContext.jsx";

function Cart() {
{/*const {CartItem}=useSelector(state=>state.Cart)
console.log(CartItem)*/}
const {isQuantityupdated}=useMain()
const [loading, setLoading] = useState(true);
const [posts, setPosts] = useState([])
const [error, setError] = useState(null)
const [totalSum, setTotalSum] = useState(0)
const fetchCartItems=async()=>{
  try{
    setLoading(true)
    const res=await api.get('/cart')
    console.log("post res",res.data)
    setPosts(res.data)
  }
  catch(error){
    console.log(error)
    setError(error.message)
  }finally{
    setLoading(false)
  }
}
// const product=[
//     {
//         id:1,
//         title:"Apple",
//         price:100,
//         img:'https://res.cloudinary.com/dpfspbjyk/image/upload/v1745325293/11473559_kqimck.png',
//         category:'fruit',
//         quantity:1
//     },
//   ]
  const [quantities, setQuantities] =useState(1);
  const calculateTotalSum = () => {
    
    let sum=0;
    console.log(posts)
    posts.forEach((item) => {
      sum += item.price * item.quantity;
    });
    setTotalSum(sum);
    console.log("total sum",sum)
  };
  
  useEffect(()=>{
    fetchCartItems()
    calculateTotalSum()
  },[isQuantityupdated])

  



  return (
    <>
      {/* <div>
        <h1>Cart</h1>
      </div> */}

    {posts.length!==0 ?<div className="cart-page">
      <div className="cart-items">
        <div className="cart-items-heading">
          Your Cart
        </div>
        <div className="cart-table">
          <div className="cart-table-header">
            <div className="header-product">Product</div>
            <div className="header-quantity">Quantity</div>
            <div className="header-total item-total-heading">Total</div>
            <div className="header-actions item-total-heading">Actions</div>
          </div>
          
          <div>
            {posts.map((pro,index)=>(
              <CartItem key={index} id={pro._id} title={pro.title} src={pro.img} quantity={pro.quantity} price={pro.price} setQuantities={setQuantities}/>

            ))}

            {/*{CartItem && CartItem.map((item)=>(<CartItem/>))}*/}

          </div>          
        </div>
      </div>
      {/*price summery */}
      <div className="price-summary">
        <h3 className="price-summary-heading">Price Summary</h3>
        <div className="summary-item">
          <p className="summary-lable">SubTotal:</p>
          <p className="summary-value">{totalSum}</p>
        </div>
        <div className="summary-item">
          <p className="summary-lable">Delivery:</p>
          <p className="summary-value">FREE</p>
        </div>
        <div className="summary-total">
          <p className="total-lable">SubTotal: </p>
          <p className="total-value">{totalSum}</p>
        </div>
        <button className="checkout-btn">Proceed To Payment</button>
      </div>
    </div>:
    <>
    <div className="empty-cart">your cart is empty
    <button className="empty-btn">Proceed To Payment</button>
    </div>
    
    </>
   
}
      
    </>
  );
}

export default Cart;


