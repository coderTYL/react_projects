import React, { Component } from 'react'
import Item from '../item/Item';
import './main.css'

export default class Main extends Component {
    
    render() {
        let { items } = this.props; 
        return (
            <ul id='checkboxes'>
                {
                    items.map(element => {
                        return <Item key={element.id} info={element} changeChecked={this.props.changeChecked} deleteItem={this.props.deleteItem} />;
                    })
                }
            </ul>
        )
    }
}
