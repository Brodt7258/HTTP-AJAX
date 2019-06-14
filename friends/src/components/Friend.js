import React, { useState } from 'react';
import './Friend.css';

import FriendForm from './FriendForm'

const Friend = ({ name, age, email, id, deleteFriend }) => {
  const [editing, setEditing] = useState(false);

  return (
    <div className='friend-card'>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <button onClick={() => setEditing(!editing)}>
        Edit
      </button>
      <button onClick={() => deleteFriend(id)}>
        &#9932;
      </button>
      {editing &&
      <FriendForm {...{name, age, email, id}} />}
    </div>
  )
};

export default Friend;