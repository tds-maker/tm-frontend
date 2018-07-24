import * as React from 'react';
import './undoredobutton.css';

export interface IProps {
  handleClickUndo?: () => void;
  handleClickRedo?: () => void;
  undoEnabled: boolean;
  redoEnabled: boolean;
}

export default class IApp extends React.Component<IProps> {
  public render() {
    const { undoEnabled, redoEnabled } = this.props;
    return (
      <>
        <a
          onClick={this.onUndoClick}
          style={{ pointerEvents: undoEnabled ? 'auto' : 'none' }}
          className=" toolbar-item history-step"
        >
          <i className="icon-undo" />
        </a>
        <a
          onClick={this.onRedoClick}
          style={{ pointerEvents: redoEnabled ? 'auto' : 'none' }}
          className=" toolbar-item history-step"
        >
          <i className="icon-redo" />
        </a>
      </>
    );
  }
  private onUndoClick = () => {
    if (this.props.handleClickUndo && this.props.undoEnabled) {
      this.props.handleClickUndo();
    }
  };
  private onRedoClick = () => {
    if (this.props.handleClickRedo && this.props.redoEnabled) {
      this.props.handleClickRedo();
    }
  };
}
