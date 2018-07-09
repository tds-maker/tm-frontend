import {IStore} from '../models';
import store from './createStore';

describe('Create store', () => {
  let state: IStore;
  beforeAll(() => {
    state = store.getState();
  });
  it('should return default state', () => {
    expect(state).toBeDefined();
  });

  it('should set default app state', () => {
    expect(state.app).toBeDefined();
  });

  it('should set default user state', () => {
    expect(state.user).toBeDefined();
  });

  it('should set default template state', () => {
    expect(state.templates).toBeDefined();
  });

  it('should set default template folders state', () => {
    expect(state.templateFolders).toBeDefined();
  });
});
