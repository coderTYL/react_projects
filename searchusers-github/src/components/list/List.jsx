import React, { Component } from 'react'
import Item from '../item/Item';
import './List.css'

export default class List extends Component {
    render() {
        let { users, isNew, loading, error } = this.props.appState;
        if (isNew === true) {
            return <p>请输入...</p>
        } else if (loading === true) {
            return <p>正在加载中...</p>
        } else if (users.length !== 0) {
            return (
                <ul id='showcase'>
                    {
                        users.map(element => {
                            return <Item key={element.node_id} user={element} />;
                        })
                    }
                </ul>
            )
        } else {
            return <p>{error.message}</p>
        }
    }
}
