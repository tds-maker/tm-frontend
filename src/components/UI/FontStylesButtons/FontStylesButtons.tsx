import * as React from 'react';
import './fontstylesbuttons.css';

interface ISelectedProps {
  selectedBold?: boolean;
  selectedItalic?: boolean;
  selectedUnderline?: boolean;
}

interface IProps {
  onBold: (e: React.MouseEvent) => void;
  onItalic: (e: React.MouseEvent) => void;
  onUnderline: (e: React.MouseEvent) => void;
}

const IApp: React.SFC<any> = ({
  selectedBold,
  selectedItalic,
  selectedUnderline,
  onBold,
  onItalic,
  onUnderline
}: IProps & ISelectedProps) => {
  return (
    <React.Fragment>
      <a
        style={selectedBold ? { backgroundColor: '#d6d6d680' } : {}}
        className="toolbar-item"
        onClick={onBold}
      >
        <i className="icon-bold" />
      </a>
      <a
        style={selectedItalic ? { backgroundColor: '#d6d6d680' } : {}}
        className="toolbar-item"
        onClick={onItalic}
      >
        <i className="icon-italic" />
      </a>
      <a
        style={selectedUnderline ? { backgroundColor: '#d6d6d680' } : {}}
        className="toolbar-item"
        onClick={onUnderline}
      >
        <i className="icon-underlined" />
      </a>
    </React.Fragment>
  );
};

export default IApp;
