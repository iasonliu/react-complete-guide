import React from 'react';

const person = ({ name, age, click, changed, children }) => {
  return (
    <div>
      <p onClick={click}>
        I'm a {name}! I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="test" onChange={changed} value={name} />
    </div>
  );
};

export default person;
