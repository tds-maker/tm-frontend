import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { Button } from '../../../../../components';

import ThirdTab from './ThirdTab';

configure({ adapter: new Adapter() });

describe('NewTemplate Third Tab Component', () => {
  let wrapper: any;
  

  beforeEach(() => {
    // template = {
    //     name : 'test-template',
    //     productNumberOption : 'optional',
    //     languages : ['en', 'tr'],
    //     primaryLanguage : 'en'
    // }
    wrapper = shallow(<ThirdTab  />);
    
  });

  it('should render third tab component successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.children().length).toEqual(2);
  });

  it('each children must have "tab-col" classname', () => {
    wrapper.children().forEach((child: any) => {
      expect(child.prop('className')).toEqual('tab-col');
    });
  });

  describe('First column', () => {
    let firstColumn: any;

    beforeAll(() => {
      firstColumn = wrapper.childAt(0);
    });

    it('should have 3 children', () => {
      expect(firstColumn.children().length).toEqual(2);
    });

    it('should have correct children', () => {
      expect(firstColumn.childAt(0).type()).toEqual('div');
      expect(firstColumn.childAt(0).childAt(0).type()).toEqual(Button);
      expect(firstColumn.childAt(0).childAt(0).props().color).toEqual('border-blue');
      expect(firstColumn.childAt(0).childAt(0).props().size).toEqual('small');
      expect(firstColumn.childAt(0).childAt(0).props().children[1]).toEqual(' New');
    });
  });

  describe('Second column', () => {
    let secondColumn: any;

    beforeAll(() => {
        secondColumn = wrapper.childAt(1);
    });

    it('should have 3 children', () => {
      expect(secondColumn.children().length).toEqual(4);
    });
  });

  it('should call save template on click save', () => {
    const saveMock = jest.fn();
    expect(saveMock.mock.calls.length).toEqual(0);
    wrapper.setProps({saveTemplate : saveMock});
    wrapper.find('#save').simulate('click');
    expect(saveMock.mock.calls.length).toEqual(1);
  })
});
