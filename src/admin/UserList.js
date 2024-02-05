import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa';  // Import the trash icon
import { deleteUser, getAllUsers } from '../actions/userAction';
import axios from 'axios';
import { API_URL } from '../api/api';

const UserList = () => {
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users, loading } = userState;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleToggleAdmin = async (userid) => {
    try {
      // Make API call to toggle admin status
      // await axios.put(`${API_URL}/user/toggle-admin/${userId}`);
      await axios.put(`${API_URL}/toggle-admin/${userid}`);

      
      // After successful API call, fetch updated user list
      dispatch(getAllUsers());
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1>User List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table  bordered>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>isAdmin</th>
              <th>Action</th>
              <th>Change role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.isAdmin ? 'Yes' : 'No'}</td>
                <td>
                  <Button variant="danger" onClick={() => dispatch(deleteUser(user._id))}>
                    <FaTrash />
                  </Button>
                </td>
                <td>
                  {!user.isAdmin ? (
                    <Button variant="primary " onClick={() => handleToggleAdmin(user._id)}>
                      User
                    </Button>
                  ):(
                    <Button variant=" bg-success" onClick={() => handleToggleAdmin(user._id)}>
                      Admin
                    </Button>
                  )
                  
                }
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default UserList;
