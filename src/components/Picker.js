import React, {Component} from 'react';
import { SketchPicker } from 'react-color';

class Picker extends Component {
  constructor(props) {
    super(props);
    this.onChangeComplete = this.onChangeComplete.bind(this);
  }

  onChangeComplete(event){
    this.props.onChangeComplete(event.hex);
  }

  render() {
    return(
      <div>
        <SketchPicker color={this.props.color} onChangeComplete={this.onChangeComplete}/>
      </div>
    )
  }
}

export default Picker;
