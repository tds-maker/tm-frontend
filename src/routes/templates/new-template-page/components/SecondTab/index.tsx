import {connect} from 'react-redux';

import { IStore, ITemplate } from '../../../../../models';
import SecondTab, {IProps} from './SecondTab';

interface IPropsFromState {
    template?:ITemplate,
    languages?: object
}

const mapStateToProps = (state:IStore) => ({
    template : state.templates.current,
    languages :state.app.languages
})

interface IPropsFromDispatch {
    dispatch?: (dispatch:any) => void
}

const mapDispatchToProps =(dispatch:any) =>({
    dispatch
})

export default connect<IPropsFromState, IPropsFromDispatch, IProps>(mapStateToProps, mapDispatchToProps)(SecondTab);