
import { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="input">
          <span> 0 </span>
        </div>
        <form className="calc-btns">
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input type="button" value={'\u00f7'} className="peach" />
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" value={'\u00D7'} className="peach" />
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" value={'\u2212'} className="peach" />
          <input type="button" value="3" />
          <input type="button" value="2" />
          <input type="button" value="1" />
          <input type="button" value={'\u1429'} className="peach" />
          <input type="button" value="0" className="zero" />
          <input type="button" value="." />
          <input type="button" value={'\u003D'} className="peach" />
        </form>
      </div>
    );
  }
}

export default Calculator;
