// Article.js
import React from 'react';

function Article({ title, date, preview, minutesToRead }) {
  const renderMinutesToRead = (minutes) => {
    const coffeeCups = Math.ceil(minutes / 5);
    const bentoBoxes = Math.ceil(minutes / 10);
    const coffeeCupEmoji = '☕️';
    const bentoBoxEmoji = '🍱';

    if (minutes < 30) {
      return coffeeCupEmoji.repeat(coffeeCups);
    } else {
      return bentoBoxEmoji.repeat(bentoBoxes);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || "January 1, 1970"}</small>
      <p>{preview}</p>
      <p>{renderMinutesToRead(minutesToRead)} {minutesToRead} min read</p>
    </article>
  );
}

export default Article;
