import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import PageNavigator from './PageNavigator';

configure({ adapter: new Adapter() });

describe('Input number component', () => {
  const onDown = jest.fn();
  const onUp = jest.fn();
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <PageNavigator
        onUp={onUp}
        onDown={onDown}
        totalPage={5}
        currentPage={3}
      />
    );
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('div');
  });
  it('Page Navigator Properly', () => {
    const navigatorValue = wrapper.find('.number').text();
    expect(navigatorValue).toEqual('3');

    const onDownButton = wrapper.find('span .minus');
    expect(onDownButton.length).toEqual(1);

    const onUpButton = wrapper.find('span .plus');
    expect(onUpButton.length).toEqual(1);
  });
  it('should call onClick event when onUp clicked', () => {
    const onUpButton = wrapper.find('span .plus');
    wrapper.setProps({ onClick: onUp });
    expect(onUp.mock.calls.length).toEqual(0);
    onUpButton.simulate('click');
    expect(onUp.mock.calls.length).toEqual(1);
  });
  it('should call onClick event when onDown clicked', () => {
    const onDownButton = wrapper.find('span .minus');
    wrapper.setProps({ onClick: onDown });
    expect(onDown.mock.calls.length).toEqual(0);
    onDownButton.simulate('click');
    expect(onDown.mock.calls.length).toEqual(1);
  });
});
