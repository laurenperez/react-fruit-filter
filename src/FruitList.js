import React from 'react';


const FruitList = props => (
  <ul>
    {props.fruits.map((fruit, index) => <li>{fruit}</li>)}
  </ul>
)

export default FruitList;
