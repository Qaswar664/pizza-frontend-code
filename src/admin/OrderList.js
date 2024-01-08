import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllOrders } from '../actions/orderAction'


const OrderList = () => {
const dispatch = useDispatch()

useEffect(()=>{
        dispatch(getAllOrders())
},[dispatch])

  return (
    <div>OrderList</div>
  )
}

export default OrderList