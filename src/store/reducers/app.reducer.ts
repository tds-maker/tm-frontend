import config from '../../config';
import { IAppStore } from '../../models';
import { ADD_NOTIFY, REMOVE_NOTIFY } from '../actions/app.actions';

const defaultState:IAppStore =  {
    notifications : [],
    languages : config.languages
}

export default function(state:IAppStore = defaultState, action:any){
    switch(action.type){
        case ADD_NOTIFY:
            return Object.assign({}, state, { notifications : [...state.notifications, {
                title : action.title,
                message : action.message,
                color: action.color,
                id:action.id
            }]});

        case REMOVE_NOTIFY:
            const indexOf = state.notifications.findIndex(x => x.id === action.id);
            return Object.assign({}, state, {
                notifications : [
                    ...state.notifications.slice(0, indexOf),
                    ...state.notifications.slice(indexOf + 1)
                ]
            })
        default:
            return state;
    }
}