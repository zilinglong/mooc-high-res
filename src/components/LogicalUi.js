import React, { Component } from 'react';

class LogicalUi extends Component {
  render() {
    let style = {
      display: 'inline-block',
      width: 100,
      height: 100,
      background: this.props.bgColor || '#f00',
      borderRadius: '50%'
    };
    return <div style={style}>LogicalUi</div>;
  }
}

export default LogicalUi;
