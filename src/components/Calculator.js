import { Component } from 'react';
import calculate from './calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    const btnValue = event.target.value;
    this.setState((prevState) => ({
      ...calculate(prevState, btnValue),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="main-container">
        <div className="input">
          <span>
            {' '}
            {next || operation || total || '0'}
            {' '}
          </span>
        </div>
        <form className="calc-btns">
          <input type="button" value="AC" onClick={this.handleClick} />
          <input type="button" value="+/-" onClick={this.handleClick} />
          <input type="button" value="%" onClick={this.handleClick} />
          <input type="button" value="÷" className="peach" onClick={this.handleClick} />
          <input type="button" value="7" onClick={this.handleClick} />
          <input type="button" value="8" onClick={this.handleClick} />
          <input type="button" value="9" onClick={this.handleClick} />
          <input type="button" value="x" className="peach" onClick={this.handleClick} />
          <input type="button" value="4" onClick={this.handleClick} />
          <input type="button" value="5" onClick={this.handleClick} />
          <input type="button" value="6" onClick={this.handleClick} />
          <input type="button" value="-" className="peach" onClick={this.handleClick} />
          <input type="button" value="3" onClick={this.handleClick} />
          <input type="button" value="2" onClick={this.handleClick} />
          <input type="button" value="1" onClick={this.handleClick} />
          <input type="button" value="+" className="peach" onClick={this.handleClick} />
          <input type="button" value="0" className="zero" onClick={this.handleClick} />
          <input type="button" value="." onClick={this.handleClick} />
          <input type="button" value="=" className="peach" onClick={this.handleClick} />
        </form>
      </div>
    );
  }
}

export default Calculator;
