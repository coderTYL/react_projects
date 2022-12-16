import React, { Component } from 'react'
import './footer.css'

export default class Footer extends Component {
  checkAll = (event)=>{
    let {items} = this.props;
    if (items.length === 0) {
      console.log(items.length)
      event.target.checked = false;
      return;
    }
    this.props.checkAll(event.target.checked);
  };
  render() {
    let {items} = this.props;
    let newItems = items.filter((element)=>{
      return element.isChecked !== false;
    });
    let count = newItems.length;
    return (
        <div>
            <input onChange={this.checkAll} id='checkAll' type="checkbox" name='checkAll' value='checkAll' />
            <label htmlFor="checkAll"> 全选</label>
            <p>已完成任务数：{count}</p>
        </div>
    )
  }
}
