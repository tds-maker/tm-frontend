import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as sinon from 'sinon';
import httpProvider from '../../utils/http.provider';
import { createFolder, INIT_TEMPLATE_FOLDERS, initFolders } from './folders.actions';

const mockStore = configureMockStore([thunk]);

describe('Folder actions', () => {
    describe('Template folders', () => {
        let sandbox: sinon.SinonSandbox
        beforeEach(() => {
            sandbox = sinon.createSandbox();
            
        })

        afterEach(() => {
            sandbox.restore();
        })

        it('should create INIT_TEMPLATE_FOLDERS action', async done => {
            sandbox.stub(httpProvider, 'get').resolves([]);
            
            const store = mockStore();
            await store.dispatch(initFolders('template') as any);
            const actions = store.getActions();
            expect(actions).toEqual([ { type: INIT_TEMPLATE_FOLDERS, payload: [] } ]);
            done();
        })

        xit('should create folder', async done => {
            sandbox.stub(httpProvider, 'get').resolves([]);
            sandbox.stub(httpProvider, 'post').resolves({ status : true });

            const store = mockStore({
                folders : {
                    selectedFolder : {
                        template : '1'
                    }
                }
            });
            await store.dispatch(createFolder('template', 'new folder') as any);
            const actions = store.getActions();
            console.log("actions", actions);
            expect(actions).toEqual([ { type: 'INIT_FOLDERS', folderType: 'template', folders: [] } ]);
            done();
        })
    })
})