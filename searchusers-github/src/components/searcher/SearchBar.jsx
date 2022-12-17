import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  render() {
    return (
        <section id='bar'>
          <p>Search Github Users</p>
          <input type="search" name='user' placeholder=' please enter the user-name ...' />
          <button> Search </button>
        </section>
    )
  }
}
