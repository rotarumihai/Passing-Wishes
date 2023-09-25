import React, { useState } from 'react';
import { generateId, getExpirationTime } from './utilities';

export function AddWishForm(props) {
  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    const wish = {
      id: generateId(),
      text: text,
      expiresAt: getExpirationTime(),
    };

    if (text.length > 0) {
      props.addWish(wish);
    };
    //props.removeThought(thought.id);
    setText('');
  }
  return (
    <form className="AddWishForm" onSubmit={handleSubmit}
    >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={ text }
        onChange={ handleTextChange }

      />
      <input type="submit" value="Add" />
    </form>
  );
}
