import React, { Component } from 'react'
import './item.css';

export default class Item extends Component {
    state = {
        mouseState: false
    };
    mouseDetect = (booleanData)=>{
        return ()=>{
            this.setState({mouseState: booleanData});
        }
    };
    clickBtn = ()=>{
        if (window.confirm('确认删除该任务？')) {
            this.props.deleteItem(this.props.info.id);
        }
    };
    changeChecked = (event)=>{
        this.props.changeChecked(this.props.info.id, event.target.checked);
    };
    render() {
        let {info} = this.props;
        return (
            <li onMouseEnter={this.mouseDetect(true)} onMouseLeave={this.mouseDetect(false)}> 
                <label>
        
                    <input type="checkbox" name='mission' value={info.value} checked={info.isChecked} onChange={this.changeChecked} /> {info.value}
                </label>
                <button style={{visibility: this.state.mouseState? 'visible': 'hidden'}} id='btn' onClick={this.clickBtn}>删 除</button>
            </li>

        )
    }
}
