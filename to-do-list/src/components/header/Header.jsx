import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
  submit = (event) => {
    if (event.keyCode !== 13) {
      return;
    } else {
      let itemValue = event.target.value;
      let itemObj = {
        id: Date.now(),
        value: itemValue,
        isChecked: false
      };
      this.props.addItem(itemObj);
      event.target.value = null;
    }
  };
  render() {
    return (
      <input onKeyUp={this.submit} type="text" id='input' placeholder='  请输入您的任务名称，按回车健确认！' name='itemObj' />
    )
  }
}
