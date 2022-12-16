import './App.css';
import Header from './components/header/Header.jsx';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';

import React, { Component } from 'react'

export default class App extends Component {
  count = 0;

  /* 在状态中保存所有任务对象 */
  state = {
    items: [
      { id: Date.now(), value: '回家', isChecked: false }
    ]
  };

  /* 属性初始化定义任务添加方法，该方法将头组件中创建的任务对象更新到app状态中 */
  addItem = (itemObj) => {
    let { items } = this.state;
    let newItems = [itemObj, ...items];
    this.setState({ items: newItems });
  };

  deleteItem = (id) => {
    let { items } = this.state;
    let index = 3;
    for (let i = 0; i < items.length; i++) {
      const element = items[i];
      if (element.id === id) {
        index = i
      }
    }
    items.splice(index, 1);
    this.setState({ items: items });
  };
  changeChecked = (id, checkedStatus)=>{
    let {items} = this.state;
    items.forEach(
      (element)=>{
        if (id === element.id) {
          element.isChecked = checkedStatus;
        }
      }
    );
    this.setState({items: items});

  };
  checkAll = (booleanData) => {
    let { items } = this.state;
    items.forEach((element) => {
      element.isChecked = booleanData;
    });
    this.setState({ items: items });
  };

  render() {
    return (
      <div className='App'>
        <Header addItem={this.addItem} />
        <Main items={this.state.items} changeChecked={this.changeChecked} deleteItem={this.deleteItem} />
        <Footer items={this.state.items} checkAll={this.checkAll} />
      </div>
    )
  }
}


