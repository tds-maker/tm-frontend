import { connect } from 'react-redux';
import {IStore} from '../../../models';
import FoldersTree, {IProps} from './FoldersTree';

const mapStateToProps = (state:IStore, ownProps:IProps) => {
  return {
    selectedFolder : state[`${ownProps.folderType}Folders`].foldersTree.selectedFolder,
    openState : state[`${ownProps.folderType}Folders`].foldersTree.openState,
    rootFolder : state[`${ownProps.folderType}Folders`].foldersTree.rootFolder
  }
}

const mapDispatchToProps = (dispatch:any) => ({
  dispatch
})



export default connect<any,any,IProps>(mapStateToProps,mapDispatchToProps)(FoldersTree);