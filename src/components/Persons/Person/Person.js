import React from 'react';

import classes from './Person.css';
const person = ({ name, age, click, changed, children }) => {
  // const rnd = Math.random();
  // if (rnd > 0.7) {
  //   throw new Error('Something wrong');
  // }
  console.log('[Person.js] rendering...');
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
