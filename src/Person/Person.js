import React from 'react';
import Radium from 'radium';
import './Person.css';
const person = ({ name, age, click, changed, children }) => {
  const style = {
    '@media (min-width: 500px)': {
      width: '450px',
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={click}>
        I'm a {name}! I am {age} years old!
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Radium(person);
