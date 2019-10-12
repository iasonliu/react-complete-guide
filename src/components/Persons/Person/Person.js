import React, { Component } from 'react';
import ProTypes from 'prop-types';
import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import classes from './Person.css';

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // document.querySelector('input').focus();
    this.inputElementRef.current.focus();
  }
  render() {
    console.log('[Person.js] rendering...');
    return (
      <Aux>
        <p onClick={this.props.click}>
          I'm a {this.props.name}! I am {this.props.age} years old!
        </p>
        <p key="i2">{this.props.children}</p>
        <input
          key="i3"
          // ref={(inputEl) => {
          //   this.inputElement = inputEl;
          // }}
          ref={this.inputElementRef}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.proTypes = {
  click: ProTypes.func,
  name: ProTypes.string,
  age: ProTypes.number,
  changed: ProTypes.func,
};
export default withClass(Person, classes.Person);
