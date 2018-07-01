import {connect } from 'react-redux';

import {IFolder, IStore} from '../../../models';
import FolderNameLabel, {IProps} from './FolderNameLabel';

interface IPropsFromState {
    selectedFolder : IFolder
}

const mapStateToProps = (state:IStore, ownProps:IProps) => ({
    selectedFolder : state[`${ownProps.folderType}Folders`].foldersTree.selectedFolder
})

export default connect<IPropsFromState, any, IProps>(mapStateToProps)(FolderNameLabel);