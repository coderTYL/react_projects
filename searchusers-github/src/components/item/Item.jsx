import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
  render() {
    let {html_url, login, avatar_url} = this.props.user;
    return (
        <li>
            <a rel='noreferrer' href={html_url} target='_blank' >
                <img src={avatar_url} alt={login} style={{width: 100, height: 100}} />
            </a>
            <p>{login}</p>
        </li>
    )
  }
}
