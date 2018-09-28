import React, {Component} from 'react';
import './dataSort.css';
import Select from 'react-select';
import { updateData } from '../Redux/action';
import { connect } from 'react-redux';
import Data from '../data.json';
import DataItem from './DataItem';

class DataSort extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
            userData: null,
            radioBtns: null
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAlphabetical = this.handleAlphabetical.bind(this);
        this.handlePriority = this.handlePriority.bind(this);
        this.handleDefault = this.handleDefault.bind(this);
    }

    componentWillMount(){
        let arrOne = [];
        let arrTwo = [];
        let arrThree = [];
        for(let i = 0; i < Data.data.length; i++){
            arrOne.push(Data.data[i].category);
        }
        for(let i = 0; i < arrOne.length; i++){
            if(arrTwo.indexOf(arrOne[i]) == -1){
                if(arrOne[i] === "one"){
                    arrTwo.splice(0, 0, arrOne[i]);
                }
                else if (arrOne[i] === 'two') {
                    arrTwo.splice(1, 0, arrOne[i]);
                }
                else {
                    arrTwo.push(arrOne[i]);
                }
            }
        }
        console.log(arrTwo);
        this.props.updateData(Data.data);
        this.setState({ userData: Data.data, radioBtns: arrTwo })

    }

    handleChange(selectedOption) {
        this.setState({ selectedOption });
        console.log('Option Selected:', selectedOption);
        switch(selectedOption.value){
            case "alphabetically":
                this.handleAlphabetical();
                break;
            case "priority":
                this.handlePriority();
                break;
            default:
                this.setState({ userData: [] })
                this.handleDefault();
                break;
        }
    }

    handleAlphabetical(){
        let alphaArray = [];
        let alphabeticalCopy = Data.data.slice();
        let alphabetical = alphabeticalCopy.sort( (a, b) => {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            let comparison = 0;
            if (nameA > nameB) {
              comparison = 1;
            } else if (nameA < nameB) {
              comparison = -1;
            }
            return comparison;
        });
        for(let i = 0; i < alphabetical.length; i++){
            alphaArray.push(alphabetical[i]);
        }
        console.log(alphaArray);
        this.setState({ userData: alphaArray });
    }

    handlePriority(){
        let priorityArray = [];
        let priorityCopy = Data.data.slice();
        let priority = priorityCopy.sort( (a, b) => {
            let priorityA = a.priority;
            let priorityB = b.priority;
            let comparison = 0;
            if (priorityA > priorityB) {
              comparison = 1;
            } else if (priorityA < priorityB) {
              comparison = -1;
            }
            return comparison;
        });
        for(let i = 0; i < priority.length; i++){
            priorityArray.push(priority[i]);
        }
        console.log(priorityArray)
        this.setState({ userData: priorityArray });
    }

    handleDefault(){
        this.setState({ userData: this.props.dataInfo });
        console.log(this.props.dataInfo);
    }

    handleFilter(e){
        let filterCopy = Data.data.slice();
        let filterArray = [];
        for(let i = 0; i < filterCopy.length; i++){
            if(filterCopy[i].category === e.target.value){
                filterArray.push(filterCopy[i]);
            }
        }
        this.setState({ userData: filterArray });
    }

    render() {
        const options = [
            {value: 'default', label: 'Default'},
            {value: 'alphabetically', label: 'Alphabetically A-Z'},
            {value: 'priority', label: 'User Priority'}
        ];
        const { selectedOption, userData, radioBtns } = this.state;
        console.log(this.state);
        const displayData = userData.map( item => {
            const index = userData.indexOf(item);
            return ( <DataItem
                        key={`dataItem${index}`}
                        index={index}
                        name={item.name}
                        age={item.age}
                        category={item.category}
                        color={item.priority === 1 ? '#F39237' : item.priority === 2 ? '#496F5D' : item.priority === 3 ? '#6495ED' : '#7C238C'}
            />)
        })
        const displayRadio = radioBtns.map( btn => {
            const index = radioBtns.indexOf(btn);
            return (
                <div className='radio-btns' key={`radioItem${index}`}>
                    <input id={btn} type='radio' name="category" value={btn} onChange={ (e) => {this.handleFilter(e)} }/>
                    <label htmlFor={btn}>{btn}</label>
                </div>
            )
        })
        return(
            <div className='wrapper'>
                <header>
                    <h2>Data Sort</h2>
                    <div className='select-wrap'>
                        {displayRadio}
                        <Select
                            value={selectedOption}
                            onChange={this.handleChange}
                            options={options}
                            className='select'
                        />
                    </div>
                </header>
                <div className='select-body'>
                {displayData}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


export default connect(mapStateToProps, {updateData}) (DataSort);