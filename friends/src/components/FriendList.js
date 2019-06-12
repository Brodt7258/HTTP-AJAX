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

  return (
    <>
      {friends.map(e => (
        <Friend {...e} key={e.id} />
      ))}
    </>
  )
};

export default FriendList;