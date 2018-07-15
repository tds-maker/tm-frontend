import { IAction, IFolder, IFolderTree } from '../../models';
import HttpProvider from '../../utils/http.provider';
import { addNotify } from './app.actions';

export const INIT_TEMPLATE_FOLDERS = 'INIT_TEMPLATE_FOLDERS';
export const INIT_DATASHEET_FOLDERS = 'INIT_DATASHEET_FOLDERS';
export const TOOGLE_TEMPLATE_FOLDER = 'TOOGLE_TEMPLATE_FOLDER';
export const TOOGLE_DATASHEET_FOLDER = 'TOOGLE_DATASHEET_FOLDER';
export const CREATE_TEMPLATE_FOLDER = 'CREATE_TEMPLATE_FOLDER';

export function initFolders(folderType: string) {
  return (dispatch: any) => {
    HttpProvider.get(`/folders/${folderType}`).then(folders => {
      dispatch({
        type:
          folderType === 'template'
            ? INIT_TEMPLATE_FOLDERS
            : INIT_DATASHEET_FOLDERS,
        payload: folders
      });
    });
  };
}

export function toogleFolder(folderType: string, folder: IFolder): IAction {
  return {
    type:
      folderType === 'template'
        ? TOOGLE_TEMPLATE_FOLDER
        : TOOGLE_DATASHEET_FOLDER,
    payload: folder
  };
}

export function createFolder(folderType: string, name: string) {
  return (dispatch: any, getState: any) => {
    const foldersTree: IFolderTree = getState()[`${folderType}Folders`]
      .foldersTree;

    const selectedFolder = foldersTree.selectedFolder!;
    const parentId = selectedFolder._id;

    HttpProvider.post(`/folders/${folderType}`, {
      name,
      parentId
    }).then(res => {
      if (!res.status) {
        dispatch(addNotify('Attention!', res.message, 'error', 3500));
      } else {
        dispatch(initFolders(folderType));
      }
    });
  };
}
