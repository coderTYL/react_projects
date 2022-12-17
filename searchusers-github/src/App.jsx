import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/searcher/SearchBar'
import List from './components/list/List'

export default class App extends Component {
  state = {
    users: [],
    isNew: true,
    loading: false,
    error: ''
  }
  /* search = (userName)=>{
    let promise = axios.get(`http://localhost:3000/search/users?q=${userName}`);
    promise.then(
      (response)=>{
        let {items} = response.data;
        this.setState({users: items});
      },
      (error)=>{
      }
    );

  }; */
  update = (stateObject)=>{
    this.setState(stateObject);
  }
  render() {
    return (
      <div id='container'>
        <SearchBar update={this.update} />
        <List appState={this.state} />
      </div>
    )
  }
}
