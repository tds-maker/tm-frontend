import * as classNames from 'classnames';
import * as React from 'react';

import { IFolder, IFolderTreeNode } from '../../../models';
import { initFolders, toogleFolder } from '../../../store';

import './css/folders.css';

export interface IProps {
  folderType: string;
  selectedFolder? : IFolder;
  openState? : object;
  rootFolder? : IFolderTreeNode;
  dispatch?: (action: any) => void;
}

class FoldersTree extends React.Component<IProps> {

  public componentDidMount() {
    if (this.props.dispatch) {
      this.props.dispatch(initFolders(this.props.folderType));
    }
  }

  public render() {
    const { selectedFolder, openState, rootFolder} = this.props;
    if (!rootFolder) {
      return null; // Add loading state
    }

    return (
      <ul className="tm-folders">
        { [rootFolder].map(this.renderFolderItem.bind(this, selectedFolder, openState))}
      </ul>
    );
    
  }

  private renderFolderItem(selectedFolder:IFolder, openState:object, node:IFolderTreeNode): JSX.Element|null {
    const {folder, childNodes}  = node;
    if(!folder){
      return null;
    }

    const isOpen = openState ? openState[folder._id] : false;
    
    const folderClassNames = classNames({
      'has-child': childNodes && childNodes.length > 0,
      current: selectedFolder ? selectedFolder._id === folder._id : false,
      'open' : isOpen
    });

    return (<li  key={folder._id}
        className={folderClassNames}
        onClick={this.onFolderClick.bind(this, folder)}>
        <span>{folder.name}</span>
        {childNodes && childNodes.length > 0 ? (
          <ul
            style={{
              display: isOpen
                ? 'block'
                : 'none'
            }}
          >
            {childNodes.map(this.renderFolderItem.bind(this, selectedFolder, openState))}
          </ul>
        ) : null}
      </li>)
  }

  private onFolderClick(folder:IFolder, e:any){
    e.stopPropagation();
    if(this.props.dispatch){
      this.props.dispatch(toogleFolder(this.props.folderType, folder));
    }
  }
}

export default FoldersTree;
