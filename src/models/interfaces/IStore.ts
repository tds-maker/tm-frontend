import {IAppStore, IFolderStore, ITemplatesStore, IUserStore} from '../';

export default interface IStore {
    templates: ITemplatesStore,
    user: IUserStore,
    app: IAppStore,
    templateFolders: IFolderStore
  }