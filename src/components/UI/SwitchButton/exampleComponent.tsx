import * as React from 'react';
import SwitchButton from './SwitchButton';

interface IProps {
  onChange?: ((e: any) => void);
}
interface IState {
  currentState: boolean;
}
export default class HelloWorld extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentState: false
    };
  }
  public handleChangeSwitchButton = (e: any) => {
    this.setState(prevState => ({ currentState: !prevState.currentState }));
  };

  public render() {
    return (
      <div className="toolbar-item switch">
        <div className="onoffswitch">
          <SwitchButton
            checked={this.state.currentState}
            onChange={this.handleChangeSwitchButton}
            id="customHeader"
          />
          <label className="onoffswitch-label" htmlFor="customHeader" />
        </div>
        Custom Header
      </div>
    );
  }
}
