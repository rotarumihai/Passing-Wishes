import React, { useEffect } from 'react';

export function Wish(props) {
  const { wish, removeWish } = props;

  const handleRemoveClick = () => {
    removeWish(wish.id);
  };

  useEffect(() => {
    const timeRemaining = wish.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      //alert('Time has passed!');
      removeWish(wish.id);
    }, timeRemaining);
    return () => {
      clearTimeout(timeout);
    };
  }, [wish]);

  return (
    <li className="Wish">
      <button
        aria-label="Remove wish"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{wish.text}</div>
    </li>
  );
}
