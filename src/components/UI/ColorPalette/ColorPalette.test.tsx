import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import ColorPalette from './ColorPalette';

configure({ adapter: new Adapter() });

describe('ColorPalette Component', () => {
  let wrapper: any;
  wrapper = shallow(<ColorPalette colors={[]} />);
  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('div');
  });
  it('should isColorPicker initially false', () => {
    expect(wrapper.state().isColorPickerShow).toEqual(false);
  });
  describe('when customize prop is true', () => {
    beforeEach(() => wrapper.setProps({ customize: true }));
    it('should isColorPicker true', () => {
      const mockFn = jest.fn();
      wrapper.setProps({ onClick: mockFn });
      wrapper.find('.add-color').simulate('click');
      expect(wrapper.state().isColorPickerShow).toEqual(true);
    });
    it('when click apply button', () => {
      const mockFn = jest.fn();
      wrapper.setProps({ onClick: mockFn });
      wrapper.setState({ currentColor: '#000' });
      wrapper.find('input').simulate('click', { target: { value: 'Apply' } });
      expect(wrapper.state().currentColor).toEqual('#000');
      expect(wrapper.state().isColorPickerShow).toEqual(false);
      expect(wrapper.state().colors).toEqual(['#000']);
    });
  });
});
