import * as React from 'react';
import PageNavigator from './PageNavigator';

interface IProps {
  totalPage: number;
  currentPage: number;
  onUp?: ((e: any) => void);
  onDown?: ((e: any) => void);
}
interface IState {
  currentPage: number;
  totalPage: number;
}
export default class HelloWorld extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPage: 5
    };
  }
  public handleChangePlus = () => {
    console.log('handleChangePlus');
    if (this.state.currentPage !== this.state.totalPage) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage + 1
      }));
    }
  };

  public handleChangeMinus = () => {
    console.log('handleChangeMinus');
    if (this.state.currentPage !== 1) {
      this.setState(prevState => ({
        currentPage: prevState.currentPage - 1
      }));
    }
  };
  public render() {
    return (
      <PageNavigator
        onUp={this.handleChangePlus}
        onDown={this.handleChangeMinus}
        totalPage={this.state.totalPage}
        currentPage={this.state.currentPage}
      />
    );
  }
}
