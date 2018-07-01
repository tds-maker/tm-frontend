import * as camelcase from 'camelcase';
import {IAction} from './';

export default abstract class Reducer<T> {

    public call(state:T, action:IAction){
        const actionType = camelcase(action.type.toLowerCase());
        if(this[actionType]){
            return this[actionType](state, action.payload);
        }else{
            return state;
        }
    }
}