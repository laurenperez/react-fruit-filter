import React, { Component } from 'react';
import FruitList from './FruitList';
import FruitFilter from './FruitFilter';


class FruitContainer extends Component {
  constructor(props) {
    super()
    this.state = {
      filterValue: '',
      fruitsToDisplay: props.fruits
    }
    this.handleFilterChange = this.handleFilterChange.bind(this)
  }

  handleFilterChange = (event) => {
    event.preventDefault()
    //the value from the input below
    const filterValue = event.target.value
    //then set state and pass in a function
    this.setState((prevState, props) => {
      const filteredFruitList = props.fruits.filter(fruit => fruit.toLocaleLowerCase().includes(filterValue.toLocaleLowerCase()))
      //we must return an object to setState, so we create it below
      return {
        fruitsToDisplay: filteredFruitList,
        filterValue
      }
    }) //end setState
  } //end handleFilterChange


  render() {
    return (
      <div>
        <FruitFilter value={this.state.filterValue} onChange={this.handleFilterChange} />
        <FruitList fruits={this.state.fruitsToDisplay} />
      </div>
    );
  }
}

export default FruitContainer;
