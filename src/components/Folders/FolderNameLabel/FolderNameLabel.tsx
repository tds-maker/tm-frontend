import * as React from 'react';
import {IFolder} from '../../../models'

export interface IProps {
    selectedFolder? : IFolder,
    folderType?:string,
    renderAs?:string
}

export default ({selectedFolder, folderType = 'template', renderAs}:IProps) => {
    
    let folderName = '';
    
    if(selectedFolder){
        folderName = selectedFolder.name || '';
    }

    switch (renderAs) {
        case 'h3':
            return <h3>{folderName}</h3>;
        default:
            return <div>{folderName}</div>;
    }
}