import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Friend from './Friend';

const FriendList = () => {

  const [friends, setFriends] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:5000/friends')
      .then(({ data }) => {
        console.log(data);
        setFriends(data);
      });
  }, []);

  const deleteFriend = (id) => {
    axios.delete(`http://localhost:5000/friends/${id}`);
    setFriends(friends.filter(e => e.id !== id));
  };

  return (
    <>
      {friends.map(e => (
        <Friend {...e} key={e.id} deleteFriend={deleteFriend} />
      ))}
    </>
  )
};

export default FriendList;