import * as React from 'react';
import './supersubscript.css';
interface ISuperSubScriptProps {
  onSuperScript: ((e: React.MouseEvent) => void);
  onSubScript: ((e: React.MouseEvent) => void);
}

const ISuperSubScript: React.SFC<ISuperSubScriptProps> = ({
  onSuperScript,
  onSubScript
}: ISuperSubScriptProps) => {
  return (
    <div className="group">
      <a onClick={onSuperScript} className="toolbar-item">
        <i className="icon-superscript" />
      </a>
      <a onClick={onSubScript} className="toolbar-item">
        <i className="icon-subscript" />
      </a>
    </div>
  );
};

export default ISuperSubScript;
