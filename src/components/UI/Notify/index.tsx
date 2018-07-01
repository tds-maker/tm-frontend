import {connect } from 'react-redux';

import {IStore} from '../../../models';
import Notify, {IProps} from './Notify';

const mapStateToProps = (state:IStore) => ({
    notifications : state.app.notifications
})

export default connect<IProps, any, IProps>(mapStateToProps)(Notify);