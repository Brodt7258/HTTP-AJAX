import React, { useState } from 'react';
import axios from 'axios';

import './Friend.css';

const FriendForm = () => {

  const [newFriend, setNewFriend] = useState({
    name: '',
    age: '',
    email: ''
  });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(newFriend);
    axios.post('http://localhost:5000/friends', newFriend);
  };

  return (
    <form action="" className="friend-form" onSubmit={submitForm}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {setNewFriend({
            ...newFriend,
            name: e.target.value
          })}}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {setNewFriend({
            ...newFriend,
            age: e.target.value
          })}}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="name"
          onChange={(e) => {setNewFriend({
            ...newFriend,
            email: e.target.value
          })}}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default FriendForm;