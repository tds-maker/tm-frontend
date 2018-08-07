import * as React from 'react';
import './popover.css';

export interface IState {
  isPopoverActive?: boolean;
}

export default class IPopover extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isPopoverActive: false
    };
  }
  public render() {
    return (
      <div
        className={`dropdown toolbar-item ${
          this.state.isPopoverActive ? 'active' : ''
        }`}
      >
        <span className="popover-trigger">
          <span onClick={this.onPopoverActive} className="dropdown-icon">
            <i className="shadow-icon" />
          </span>
          <span className="arrow" />
        </span>
        <div
          className={`popover popover-box ${
            this.state.isPopoverActive ? 'show' : ''
          }`}
          id="color_popover"
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
