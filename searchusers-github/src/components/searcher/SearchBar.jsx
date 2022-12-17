import React, { Component, createRef } from 'react'
import axios from 'axios';
import './SearchBar.css'

export default class SearchBar extends Component {
  searchBar = new createRef();
  search = () => {
    let stateObject = {
      users: [],
      isNew: false,
      loading: true,
      error: ''
    };
    this.props.update(stateObject);
    let promise = axios.get(`http://localhost:3000/search/users?q=${this.searchBar.current.value}`);
    promise.then(
      (response) => {
        let { items } = response.data;
        stateObject.users = items;
        stateObject.loading = false;
        this.props.update(stateObject);
      },
      (error) => {
        stateObject.error = error.toJSON();
        stateObject.loading = false;
        this.props.update(stateObject);
      }
      );
  };
  render() {
    return (
      <section id='bar'>
        <p>Search Github Users</p>
        <input ref={this.searchBar} type="search" name='user' placeholder=' please enter the user-name ...' />
        <button onClick={this.search}> Search </button>
      </section>
    )
  }
}
