import React from 'react';
import './Friend.css';

const Friend = ({ name, age, email }) => {
  return (
    <div className='friend-card'>
      <p>{name}</p>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
};

export default Friend;