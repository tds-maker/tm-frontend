import { IFolder, IFolderStore, IFolderTreeNode, Reducer } from '../../../models';

export default abstract class FolderReducer extends Reducer<IFolderStore>{
    public initFolders(state: IFolderStore, folders: IFolder[]): IFolderStore {

        const root: IFolder | undefined = folders.find(folder => !folder.parentId);

        if (!root) {
            return state;
        }

        const rootFolderTree: IFolderTreeNode = {
            folder: root,
            childNodes: this.setSubFolders(root, folders)
        }

        return Object.assign({}, state, {
            source: folders,
            foldersTree: {
                rootFolder: rootFolderTree,
                selectedFolder: rootFolderTree.folder,
                openState: { [root._id]: true }
            }
        });
    }

    public toggleFolder(state: IFolderStore, folder: IFolder): IFolderStore {
        return Object.assign({}, state, {
            foldersTree: {
                ...state.foldersTree,
                openState : {
                    ...state.foldersTree.openState,
                    [folder._id] : !state.foldersTree.openState[folder._id]
                },
                selectedFolder : folder
            }
        })
    }

    private setSubFolders(folder: IFolder, allFolders: IFolder[]): IFolderTreeNode[] {
        const subFolders = allFolders.filter(x => folder.folders.indexOf(x._id) >= 0);
        const result: IFolderTreeNode[] = [];

        subFolders.forEach(subFolder => {
            const node: IFolderTreeNode = {
                folder: subFolder,
                childNodes: this.setSubFolders(subFolder, allFolders)
            }
            result.push(node);
        })

        return result;
    }
}