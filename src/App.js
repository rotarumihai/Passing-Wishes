
import './App.css';

import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
import { AddWishForm } from './AddWishForm';
import { Wish } from './Wish';
import { generateId, getExpirationTime } from './utilities';

export default function App() {
  const [wishes, setWishes] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing wishes.',
      expiresAt: getExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getExpirationTime(),
    },
  ]);

  const addWish = (wish) => {
    setWishes(prev => [wish, ...prev]); 
  };
  const removeWish = (wishIdToRemove) => {
    setWishes((wishes) => 
      wishes.filter(wish => wish.id !== wishIdToRemove)
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Passing Wishes</h1>
      </header>
      <main>
        <AddWishForm addWish={ addWish }/>
        <ul className="wishes">
          {wishes.map((wish) => (
            <Wish key={wish.id} wish={wish}
            removeWish={ removeWish } />
          ))}
        </ul>
      </main>
    </div>
  );
}

