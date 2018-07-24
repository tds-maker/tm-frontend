import * as React from 'react';

import './undoredobutton.css';

interface IProps {
  handleClickUndo?: ((e: React.FormEvent) => void);
  handleClickRedo?: ((e: React.FormEvent) => void);
  undoEnabled: boolean;
  redoEnabled: boolean;
}

const UndoRedoButton: React.SFC<IProps> = ({
  handleClickUndo,
  handleClickRedo,
  undoEnabled,
  redoEnabled
}: IProps) => {
  return (
    <div>
      <a
        onClick={handleClickUndo}
        style={{ pointerEvents: undoEnabled ? 'auto' : 'none' }}
        className="undo toolbar-item history-step"
      >
        <i className="icon-undo" />
      </a>
      <a
        style={{ pointerEvents: redoEnabled ? 'auto' : 'none' }}
        onClick={handleClickRedo}
        className="redo toolbar-item history-step"
      >
        <i className="icon-redo" />
      </a>
    </div>
  );
};

export default UndoRedoButton;
