import { connect } from 'react-redux';
import { IStore } from '../../../../../models';

import Welcome, { IProps } from './Welcome';

interface IStateFromProps {
  firstName?: string;
}

const mapStateToProps = (state: IStore) => ({
  firstName: state.user.firstName
});

export default connect<IStateFromProps, any, IProps>(mapStateToProps)(Welcome);
