import React from 'react';

import classes from './Person.css';
const person = ({ name, age, click, changed, children }) => {
  return (
    <div className={classes.Person}>
      <p onClick={click}>
        I'm a {name}! I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default person;
