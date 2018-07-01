import * as React from 'react';
import { Header, Tab, Tabs } from '../../../components';
import { ITemplateStore } from '../../../models';
import FirstTab from './components/FirstTab';
import SecondTab from './components/SecondTab';
import ThirdTab from './components/ThirdTab';
import Welcome from './components/Welcome';
import './css/newTemplate.css';

export interface IProps {
  template: ITemplateStore,
  changeTab?: (param: number) => void,
  initBlankTemplate?: () => void
}

interface IState {
  activeTab: number
}

export default class NewTemplate extends React.PureComponent<IProps, IState>{

  constructor(props: IProps) {
    super(props);
    this.state = {
      activeTab: -1
    }

    this.onTabClicked = this.onTabClicked.bind(this);
  }

  public componentWillMount() {
    if (this.props.initBlankTemplate) {
      this.props.initBlankTemplate();
    }
  }

  public render() {
    return (
      <div>
        <Header />
        <div className="container main">
          {this.state.activeTab < 0 ? (
            <Welcome onButtonClick={this.onTabClicked} />
          ) : (
              <Tabs
                activeTab={this.state.activeTab}
                onTabClicked={this.onTabClicked}
              >
                <Tab header="Step 1" className="first-tab text-center">
                  <FirstTab onButtonClicked={this.onTabClicked} />
                </Tab>
                <Tab header="Step 2" className="second-tab">
                  <SecondTab onChangeTab={this.onTabClicked} />
                </Tab>
                <Tab header="Step 3" className="folder-tab">
                  <ThirdTab onChangeTab={this.onTabClicked}/>
                </Tab>
              </Tabs>
            )}
        </div>
      </div>
    );
  }

  private onTabClicked(index: number) {
    this.setState({
      activeTab: index
    })
  }
}
