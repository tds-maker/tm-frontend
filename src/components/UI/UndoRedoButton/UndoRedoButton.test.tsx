import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import UndoRedoButton from './UndoRedoButton';

configure({ adapter: new Adapter() });

describe('UnduRedo Button Component', () => {
  const handleClickUndo = jest.fn();
  const handleClickRedo = jest.fn();
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <UndoRedoButton
        handleClickUndo={handleClickUndo}
        handleClickRedo={handleClickRedo}
        undoEnabled={true}
        redoEnabled={true}
      />
    );
  });

  it('should render successfully', () => {
    expect(wrapper.exists()).toEqual(true);
    expect(wrapper.type()).toEqual('div');
  });
});
