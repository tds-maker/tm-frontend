import { connect } from 'react-redux';

import {IStore} from '../../../../models';
import {getAccountTemplates} from '../../../../store';

import TemplatesTable, {IProps} from './TemplatesTable';

const mapStateToProps = (state: IStore) => ({
  templates: state.templates.templates,
  selectedFolder: state.templateFolders.foldersTree.selectedFolder
});

const mapDispatchToState = (dispatch:any) => ({
  getTemplates : () => dispatch(getAccountTemplates())
})

export default connect<any, any, IProps>(mapStateToProps, mapDispatchToState)(TemplatesTable);
