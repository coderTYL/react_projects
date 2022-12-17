import React, { Component } from 'react'
import './App.css'
import SearchBar from './components/searcher/SearchBar'
import List from './components/list/List'

export default class App extends Component {
  render() {
    return (
      <div id='container'>
        <SearchBar />
        <List />
      </div>
    )
  }
}
