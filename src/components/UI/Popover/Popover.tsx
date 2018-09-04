import * as React from 'react';
import './popover.css';

export interface IState {
  isPopoverActive?: boolean;
}
interface IProps {
  popoverTypeClass: string;
  popoverTypeId: string;
  dropdownIcon: string;
  dropdownClass?: string;
}
export default class IPopover extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isPopoverActive: false
    };
  }
  public render() {
    return (
      <div className={`dropdown toolbar-item ${this.state.isPopoverActive ? 'active' : ''}`}>
        <span className="popover-trigger">
          <span
            onClick={this.onPopoverActive}
            className={`dropdown-icon ${this.props.dropdownClass ? this.props.dropdownClass : ''}`}
          >
            <i className={this.props.dropdownIcon} />
          </span>
          <span className="arrow" />
        </span>
        <div
          className={`popover ${this.props.popoverTypeClass} ${
            this.state.isPopoverActive ? 'show' : ''
          }`}
          id={this.props.popoverTypeId}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
  private onPopoverActive = () => {
    this.setState(prevState => ({
      isPopoverActive: !prevState.isPopoverActive
    }));
  };
}
