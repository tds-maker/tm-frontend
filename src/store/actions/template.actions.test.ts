import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as sinon from 'sinon';
import httpProvider from '../../utils/http.provider';
import {
    CHANGE_TEMPLATE_NAME,
    changeName,
    GET_TEMPLATES,
    getAccountTemplates,
    INIT_BLANK_TEMPLATE,
    initBlankTemplate,
    SELECT_LANGUAGE,
    SELECT_PRIMARY_LANGUAGE,
    SELECT_PRODUCT_NUMBER_OPTION,
    selectLanguage,
    selectPrimaryLanguage,
    selectProductNumberOption
} from './template.actions';

const mockStore = configureMockStore([thunk]);

describe('Template actions', () => {
    let sandbox: sinon.SinonSandbox
    beforeEach(() => {
        sandbox = sinon.createSandbox();

    })

    afterEach(() => {
        sandbox.restore();
    })

    describe('New template state', () => {


        it('should create INIT_BLANK_TEMPLATE action', () => {
            const expectedAction = {
                type: INIT_BLANK_TEMPLATE,
                payload:null
            }
            expect(initBlankTemplate()).toEqual(expectedAction)
        })


        it('should create SELECT_LANGUAGE action', () => {
            const expectedAction = {
                type: SELECT_LANGUAGE,
                payload: { language: 'tr', isSelected: true }
            }
            expect(selectLanguage({ language: 'tr', isSelected: true })).toEqual(expectedAction)
        })

        it('should create CHANGE_TEMPLATE_NAME action', () => {
            const expectedAction = {
                type: CHANGE_TEMPLATE_NAME,
                payload: 'template-name'
            }
            expect(changeName('template-name')).toEqual(expectedAction)
        })

        it('should create SELECT_PRODUCT_NUMBER_OPTION action', () => {
            const expectedAction = {
                type: SELECT_PRODUCT_NUMBER_OPTION,
                payload: "1"
            }
            expect(selectProductNumberOption("1")).toEqual(expectedAction)
        })

        it('should create SELECT_PRIMARY_LANGUAGE action', () => {
            const expectedAction = {
                type: SELECT_PRIMARY_LANGUAGE,
                payload: "1"
            }
            expect(selectPrimaryLanguage("1")).toEqual(expectedAction)
        })

        it('should create GET_TEMPLATES action', async done => {
            sandbox.stub(httpProvider, 'get').resolves([{ name : 'fake-template'}]);
            
            const store = mockStore();
            await store.dispatch(getAccountTemplates() as any);
            const actions = store.getActions();
            expect(actions).toEqual([ { type: GET_TEMPLATES, payload: [{name : 'fake-template'}] } ]);
            done();
        })
    })
})