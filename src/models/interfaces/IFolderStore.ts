export interface IFolder {
    readonly _id: string;
    readonly name: string;
    readonly parentId?: string;
    readonly folders: string[]    
}

export interface IFolderTreeNode {
    folder: IFolder;
    childNodes:IFolderTreeNode[];
}

export interface IFolderTree {
    rootFolder : IFolderTreeNode | null,
    selectedFolder: IFolder | null,
    openState: object
}

export default interface IFolderStore {
    source: IFolder[],
    foldersTree: IFolderTree
}