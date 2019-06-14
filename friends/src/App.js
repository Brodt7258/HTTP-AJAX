import React from 'react';
import './App.css';

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm';

function App() {
  return (
    <div className="App">
      <FriendList />
      <FriendForm />
    </div>
  );
}

export default App;
