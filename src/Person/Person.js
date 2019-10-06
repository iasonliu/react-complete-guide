import React from 'react';

const person = ({ name, age, children }) => {
  return (
    <div>
      <p>
        I'm a {name}! I am {age} years old!
      </p>
      <p>{children}</p>
    </div>
  );
};

export default person;
