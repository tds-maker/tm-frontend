import {connect} from 'react-redux';

import { IStore, ITemplateStore } from '../../../../../models';
import SecondTab, {IProps} from './SecondTab';

interface IPropsFromState {
    template?:ITemplateStore,
    languages?: object
}

const mapStateToProps = (state:IStore) => ({
    template : state.template,
    languages :state.app.languages
})

interface IPropsFromDispatch {
    dispatch?: (dispatch:any) => void
}

const mapDispatchToProps =(dispatch:any) =>({
    dispatch
})

export default connect<IPropsFromState, IPropsFromDispatch, IProps>(mapStateToProps, mapDispatchToProps)(SecondTab);