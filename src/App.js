import React from 'react'
import { useState } from 'react';
import { formData } from './formData';


const getFormattedPrice = (price) => `${price.toFixed(0)}€`;

function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(formData.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + formData[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div>
      <p>What do you want to do?</p>
      <p>
        {formData.map(({name}, index) => {
          return (
            <div>
              <input
                type="checkbox"
                id={index}
                name={name}
                value={name}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label htmlFor={index}>{name}</label>
              <br />
              <br/>
            </div> 
          );
        })}
      </p>
      <div>
        <p>Price: {getFormattedPrice(total)}</p>
      </div>
    </div>
  );
}

export default App;
