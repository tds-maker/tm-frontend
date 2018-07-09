export interface ITemplate{
    name:string,
    productNumberOption:string,
    languages:string[],
    primaryLanguage:string
}

export interface ITemplateListItem {
    _id :string;
    folderId:string;
    name:string;
    version:string;
    updatedAt : string;
    modifiedBy : {
        _id : string;
        fullNameShort:string
    }
}

export default interface ITemplatesStore{
    current : ITemplate;
    templates: ITemplateListItem[];
}