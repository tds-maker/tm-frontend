import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import ColorPalette from './ColorPalette';

configure({ adapter: new Adapter() });

describe('ColorPalette Component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(<ColorPalette customize={true} colors={[]} />);
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('div');
  });
});
