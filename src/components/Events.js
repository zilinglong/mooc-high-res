import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0
    };
    this.handleBindClick = this.handleBindClick.bind(this);
  }
  handleBindClick() {
    let number = this.state.num;
    this.setState({
      num: number + 1
    });
  }
  handleClick() {
    let number = this.state.num;
    this.setState({
      num: number + 1
    });
  }
  handlePropClick = () => {
    let number = this.state.num;
    this.setState({
      num: number + 1
    });
  };
  render() {
    const { num } = this.state;
    return (
      <div>
        <p>当前数据是：{num}</p>
        <button onClick={this.handleBindClick}>通过“bind”的方式加一</button>
        {/* <button onClick={this.handleClick.bind(this)}>加一</button> */}
        <button onClick={() => this.handleClick()}>通过“回调函数”的方式加一</button>
        <button onClick={this.handlePropClick}>通过“属性初始化”的方式加一</button>
      </div>
    );
  }
}

export default Events;
