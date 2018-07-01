import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { ITemplateStore } from '../../../models';

import { Header } from '../../../components';

import Tabs from '../../../components/UI/Tabs/Tabs';
import Welcome from './components/Welcome';
import NewTemplate from './NewTemplate';

configure({ adapter: new Adapter() });

const testState: ITemplateStore = {
  name: '',
  languages: ['en'],
  productNumberOption: 'optional',
  primaryLanguage: 'en'
};

describe('NewTemplate Route Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<NewTemplate template={testState} />);
  });

  it('should render new template successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.children().length).toEqual(2);
  });

  it('should have header', () => {
    expect(wrapper.childAt(0).type()).toEqual(Header);
  });

  it('should have main container', () => {
    expect(wrapper.childAt(1).type()).toEqual('div');
    expect(wrapper.childAt(1).prop('className')).toEqual('container main');
  });

  it('should render welcome screen as default', () => {
    const mainContainer = wrapper.childAt(1);
    expect(mainContainer.childAt(0).type()).toEqual(Welcome);
  });

  xit('should render tabs if activeTab >= 0', () => {
    wrapper.setProps({
      newTemplateState: { activeTab: 0 }
    });

    const mainContainer = wrapper.childAt(1);
    expect(mainContainer.childAt(0).type()).toEqual(Tabs);
  });
});
