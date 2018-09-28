import React, {Component} from 'react';
import './dataSort.css';
import Select from 'react-select';

class DataSort extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <div className='wrapper'>
                <header>
                    <h2>Data Sort</h2>
                    <div className='select-wrap'>
                        <Select />
                    </div>
                </header>
                Hello
            </div>
        )
    }
}

export default DataSort;