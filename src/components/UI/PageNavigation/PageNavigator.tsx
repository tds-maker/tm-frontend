import * as React from 'react';
import './pagenavigator.css';

export default class HelloWorld extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { number: 1 };
  }
  public handleChangePlus = () => {
    console.log('handleChangePlus');
    // this.setState(prevState{})
  };
  public handleChangeMinus = () => {
    console.log('handleChangeMinus');
  };
  public render() {
    return (
      <div className="page-navigator">
        <span onClick={this.handleChangePlus} className="plus" />
        <span className="number">{this.state.number}</span>
        <span onClick={this.handleChangeMinus} className="minus" />
      </div>
    );
  }
}
