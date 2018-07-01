import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import App from './App';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
  });
});
