import React, { Component, Fragment } from 'react';
import Aux from '../../hoc/Aux';

import classes from './Person.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Fragment>
        <p onClick={this.props.click}>
          I'm a {this.props.name}! I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>,
        <input key="i3" type="text" onChange={this.props.changed} value={this.props.name} />
      </Fragment>
    );
  }
}

export default Person;
