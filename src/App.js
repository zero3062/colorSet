import React, {Component} from 'react';

import Option from './components/Option.js';
import Text from './components/Text';
import Picker from './components/Picker';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      textColor: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = (text) => {
    this.setState({
      text:text,
      textColor:text
    });
  }

  onChangeComplete = (color) => {
    this.setState({
      textColor: color
    })
  }

  render() {
    return (
      <div>
        <Text textColor={this.state.textColor} text={this.state.text}/>
        <Option value={this.state.text} onChange={this.onChange}/>
        <Picker color={this.state.textColor} onChangeComplete={this.onChangeComplete}/>
      </div>
    );
  }
}

export default App;
