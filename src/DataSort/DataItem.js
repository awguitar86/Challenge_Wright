import React, { Component } from 'react';
import './dataSort.css';

class DataItem extends Component {

    render(){
        const { name, age, category, color } = this.props;
        return(
            <div className='item-wrap' style={{background: color}}>
                <h4>{name}</h4>
                <div className='item-body'>
                    <div>Age: {age}</div>
                    <div>Category: {category}</div>
                </div>
            </div>
        )
    }
}

export default DataItem;