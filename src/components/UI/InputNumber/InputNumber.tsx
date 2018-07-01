import * as React from 'react';

import './inputNumber.css';

interface IProps {
  value?: number | string;
}

interface IState {
  value?: number;
}

export default class InputNumber extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      value:
        props.value !== undefined
          ? this.convertNumber(props.value.toString())
          : undefined
    };

    this.onValueChange = this.onValueChange.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  public componentWillReceiveProps(nextProps: IProps) {
    if (nextProps.value !== undefined) {
      this.setState({
        value: this.convertNumber(nextProps.value.toString())
      });
    }
  }

  public render() {
    return (
      <div className="tm-input-number">
        <div>
          <input
            type="text"
            onKeyPress={this.isNumber}
            onChange={this.onValueChange}
            value={this.state.value !== undefined ? this.state.value : ''}
          />
        </div>
        <div>
          <button className="plus" onClick={this.onButtonClick}>
            +
          </button>
          <button className="minus" onClick={this.onButtonClick}>
            -
          </button>
        </div>
      </div>
    );
  }

  private onValueChange(e: any) {
    this.setState({
      value: this.convertNumber(e.target.value)
    });
  }

  private onButtonClick(e: any) {
    let currentValue = this.state.value !== undefined ? this.state.value : '0';
    currentValue = this.convertNumber(currentValue.toString());
    this.setState({
      value: e.target.className === 'plus' ? currentValue + 1 : currentValue - 1
    });
  }

  private isNumber(e: any): boolean {
    e = e ? e : window.event;
    const charCode = e.which ? e.which : e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
      e.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  private convertNumber(param: string): number {
    try {
      return parseFloat(param);
    } catch (error) {
      return 0;
    }
  }
}
