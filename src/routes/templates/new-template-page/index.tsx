import { connect } from 'react-redux';
import { IStore} from '../../../models';
import { initBlankTemplate} from '../../../store'
import NewTemplate, {IProps} from './NewTemplate';

const mapStateToProps = (state: IStore) => ({
  template: state.template
});

const mapDispatchToProps = (dispatch:any) => ({
  initBlankTemplate : () => dispatch(initBlankTemplate())
})

export default connect<any, any, IProps>(mapStateToProps, mapDispatchToProps)(NewTemplate);
