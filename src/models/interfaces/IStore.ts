import {IAppStore, IFolderStore, ITemplateStore, IUserStore} from '../';

export default interface IStore {
    template: ITemplateStore,
    user: IUserStore,
    app: IAppStore,
    templateFolders: IFolderStore
  }