"use client";
import { useState } from 'react';
import Link from 'next/link';

const Home = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  const handleBack=()=>{
    setInput(input.slice(0,-1));
    }

  return (
    <div className="calculator">
   <div className="display">
  <h1 className="calculator-heading">CALCULATOR</h1>
    <input type="text" value={input} readOnly />
    <div className="result">{result}</div>
  </div>

    <div className="buttons">
      {['7', '8', '9', '/'].map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
      {['4', '5', '6', '*'].map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
      {['1', '2', '3', '-'].map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
      {['0', '.', '=', '+'].map((item) => (
        <button
          key={item}
          onClick={item === '=' ? handleCalculate : () => handleClick(item)}
        >
          {item}
        </button>
      ))}
      <button className="clear" onClick={handleClear}>C</button>
      <button className="back" onClick={handleBack}>🔙</button>
    </div>
  </div>
 );
};

export default Home;
