import { IFolderStore } from '../../../models';
import DatasheetFolderReducer from './DatasheetFolderReducer';
import TemplateFolderReducer from './TemplateFolderReducer';

const defaultState: IFolderStore = {
    source: [],
    foldersTree: {
        rootFolder: null,
        selectedFolder: null,
        openState: {}
    }
}

const templateFolders = new TemplateFolderReducer();
const datasheetFolders = new DatasheetFolderReducer();

export const templateFoldersReducer = (state: IFolderStore = defaultState, action: any) => {
    return templateFolders.call(state, action);
}

export const datasheetFoldersReducer = (state: IFolderStore = defaultState, action: any) => {
    return datasheetFolders.call(state, action);
}