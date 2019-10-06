import React from 'react';

const person = ({ name, age, children }) => {
  return (
    <p>
      <b>{children}</b>
      <br />
      I'm a {name}! I am {age} years old!
    </p>
  );
};

export default person;
