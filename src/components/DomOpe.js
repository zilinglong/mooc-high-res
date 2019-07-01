import React, { Component } from 'react';
import './DomeOpe.css';
class DomOpe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      bgColor: ''
    };
  }
  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }
  changeColor() {
    this.setState({
      bgColor: this.state.inputValue,
      inputValue: ''
    });
  }
  render() {
    const { bgColor, inputValue } = this.state;
    return (
      <div>
        <div className="rec" style={{ backgroundColor: bgColor }} />
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={this.handleChange.bind(this)}
          />
          <button onClick={this.changeColor.bind(this)}>改变颜色</button>
        </div>
      </div>
    );
  }
}

export default DomOpe;
