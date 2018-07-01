import {addNotify, REMOVE_NOTIFY, removeNotify} from './app.actions';

describe('App Actions', () => {
    describe('Notifications', () => {

        it('should create ADD_NOTIFY', async done => {
            const dispatch = jest.fn();
            await addNotify("fake-title", "fake-message","error", 1000, 1)(dispatch);
            expect(dispatch).toBeCalledWith({"color": "error", "id": 1, "message": "fake-message", "title": "fake-title", "type": "ADD_NOTIFY"});
            setTimeout(() => {
                expect(dispatch).toBeCalledWith({ type : REMOVE_NOTIFY, id : 1});
                done();
            }, 1200);
        })

        it('should create an action to remove notification', () => {
            const id = 123
            const expectedAction = {
              type: REMOVE_NOTIFY,
              id
            }
            expect(removeNotify(id)).toEqual(expectedAction)
        })
    })
})