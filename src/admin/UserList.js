import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getAllUsers } from '../actions/userAction'

const UserList = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
        dispatch(getAllUsers())
  },[dispatch])
  return (
    <div>UserList</div>
  )
}

export default UserList