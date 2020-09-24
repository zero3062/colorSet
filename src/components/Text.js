import React, { Component } from 'react';

class Text extends Component {
  render() {
    return (
      <div>
        <h1 style={{color: this.props.textColor}}>Color : {this.props.text}</h1>
      </div>
    )
  }
}

export default Text;
