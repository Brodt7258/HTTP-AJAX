import React from 'react';
import './Friend.css';

const Friend = ({ name, age, email, id, deleteFriend }) => {
  return (
    <div className='friend-card'>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
      <button onClick={() => deleteFriend(id)}>
        &#9932;
      </button>
    </div>
  )
};

export default Friend;