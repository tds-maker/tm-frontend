import { IFolder, IFolderStore } from '../../../models';
import FolderReducer from './FolderReducer';

export default class TemplateFolderReducer extends FolderReducer{
    public initTemplateFolders(state: IFolderStore, folders: IFolder[]): IFolderStore {
        return this.initFolders(state, folders);
    }
    
    public toogleTemplateFolder(state: IFolderStore, folder: IFolder): IFolderStore {
        return this.toggleFolder(state, folder);
    }
}