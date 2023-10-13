// Calculator.js

import React, { useState } from 'react';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState('');
  const [firstNumber, setFirstNumber] = useState(null);
  const [output, setOutput] = useState('');

  const handleClick = (buttonValue) => {
    if (buttonValue === '=') {
      // Evaluate the expression and update the display value
      const result = eval(`${firstNumber}${operator}${parseInt(displayValue, 10)}`);
      setOutput(result);
    } else if (buttonValue === 'C') {
      // Clear the display value, the operator, and the first number
      setDisplayValue('0');
      setOperator('');
      setFirstNumber(null);
    } else if (isOperator(buttonValue)) {
      // Update the operator
      if (firstNumber !== null) {
        setOperator(buttonValue);
      } else {
        // The first number has not been entered yet, so store the operator in memory
        setOperator(buttonValue);
      }
    } else {
      // Add the button value to the display value
      if (firstNumber === null) {
        // The first number has not been entered yet, so store it in memory
        setFirstNumber(parseFloat(displayValue));
      }

      setDisplayValue(`${displayValue}${buttonValue}`);
    }
  };

  const isOperator = (buttonValue) => {
    return ['+', '-', '*', '/'].includes(buttonValue);
  };

  return (
    <div className="calculator">
      <div className="display">
        {output ? output : displayValue}
      </div>
      <div className="numpad">
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('=')}>=</button>
        <button onClick={() => handleClick('C')}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
      </div>
    </div>
  );
};

export default Calculator;







