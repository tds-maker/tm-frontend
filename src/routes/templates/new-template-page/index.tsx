import { connect } from 'react-redux';
import { IStore} from '../../../models';
import { addNotify, initBlankTemplate} from '../../../store'
import NewTemplate, {IProps} from './NewTemplate';

const mapStateToProps = (state: IStore) => ({
  template: state.templates.current,
  templateFolders: state.templateFolders
});

const mapDispatchToProps = (dispatch:any) => ({
  initBlankTemplate : () => dispatch(initBlankTemplate()),
  addNotify: (title:string, message:string, color:string) => dispatch(addNotify(title, message, color))
})

export default connect<any, any, IProps>(mapStateToProps, mapDispatchToProps)(NewTemplate);
