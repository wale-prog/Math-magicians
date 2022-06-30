import { useState } from 'react';
import calculate from './calculate';

const Calculator = () => {
  const [btnInput, setBtnInput] = useState({
    total: '',
    next: '',
  });

  const handleClick = (event) => {
    const btnValue = event.target.value;
    setBtnInput((prevState) => ({
      ...calculate(prevState, btnValue),
    }));
  };
  const { total, next } = btnInput;
  return (
    <div className="main-container">
      <div className="input">
        <span>{next || total || '0'}</span>
      </div>
      <form className="calc-btns">
        <input type="button" value="AC" onClick={handleClick} />
        <input type="button" value="+/-" onClick={handleClick} />
        <input type="button" value="%" onClick={handleClick} />
        <input type="button" value="÷" className="peach" onClick={handleClick} />
        <input type="button" value="7" onClick={handleClick} />
        <input type="button" value="8" onClick={handleClick} />
        <input type="button" value="9" onClick={handleClick} />
        <input type="button" value="x" className="peach" onClick={handleClick} />
        <input type="button" value="4" onClick={handleClick} />
        <input type="button" value="5" onClick={handleClick} />
        <input type="button" value="6" onClick={handleClick} />
        <input type="button" value="-" className="peach" onClick={handleClick} />
        <input type="button" value="3" onClick={handleClick} />
        <input type="button" value="2" onClick={handleClick} />
        <input type="button" value="1" onClick={handleClick} />
        <input type="button" value="+" className="peach" onClick={handleClick} />
        <input type="button" value="0" className="zero" onClick={handleClick} />
        <input type="button" value="." onClick={handleClick} />
        <input type="button" value="=" className="peach" onClick={handleClick} />
      </form>
    </div>
  );
};

export default Calculator;
