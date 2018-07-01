import config from '../../config'
import reducer from './app.reducer';

describe('App Reducer', () => {
    it('should load initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            notifications : [],
            languages : config.languages
        })
    })

    describe('Notification state', () => {
        it('should add new notification', () => {
            const action = { type : 'ADD_NOTIFY', color: 'error', title : 'fake-title', message : 'fake-message', id:1}
            expect(reducer(undefined, action)).toEqual({
                notifications : [{
                    color:action.color, id : action.id, message : action.message, title : action.title
                }],
                languages : config.languages
            })
        })

        it('should remove notification from liste', () => {
            const action = { type : 'REMOVE_NOTIFY', id : 11};
            const store = {
                notifications : [{
                    color:'error', id : 11, message : "fake-message", title : "fake-title"
                }],
                languages:{}
            };
            expect(reducer(store, action).notifications).toEqual([]);
        })
    })
})