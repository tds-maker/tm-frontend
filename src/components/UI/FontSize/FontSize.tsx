import * as React from 'react';
import { Input, Popover } from '../../';
import './fontsize.css';

export interface IFontSizeState {
  fontsize: number;
}

export default class FontSize extends React.Component<any, IFontSizeState> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontsize: 11
    };
  }

  public render() {
    const dropdownHead = (
      <Input onChange={this.handleChange} type="text" value={this.state.fontsize} />
    );

    return (
      <Popover
        dropdownWrapperClass="font-size"
        dropdownClass="selected"
        dropdownText={dropdownHead}
        popoverTypeClass="font-size-popover"
        popoverTypeId="font_size"
      >
        <ul>{this.returnFontSizes()}</ul>
      </Popover>
    );
  }
  private returnFontSizes = () => {
    const sizes = [6, 7, 8, 9, 10, 11, 12, 14, 18, 24, 30, 36, 48, 60, 72, 96];
    return sizes.map((e, i) => (
      <li key={i} onClick={() => this.handleClick(e)}>
        {e}
      </li>
    ));
  };
  private handleClick = (selectedFontSize: number) => {
    this.setState({ fontsize: selectedFontSize });
  };
  private handleChange = (e: any) => {
    if (e.target.value.match('^\\d*$') != null) {
      this.setState({
        fontsize: e.target.value
      });
    }
  };
}
