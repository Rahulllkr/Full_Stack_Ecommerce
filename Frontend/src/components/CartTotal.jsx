import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const CartTotal = () => {

    const {currency,delevery_fee,getCartAmount} = useContext(ShopContext)
  return (
    <div>CartTotalhere is tha total price</div>
  )
}

export default CartTotal