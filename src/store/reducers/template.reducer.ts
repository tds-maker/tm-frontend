import { ITemplate, ITemplateListItem , ITemplatesStore, Reducer } from '../../models';

class TemplateReducer extends Reducer<ITemplatesStore> {

    public changeTemplateName(state: ITemplatesStore, name: string): ITemplatesStore {
        return Object.assign({}, state, { current : { ...state.current , name }});
    }

    public selectProductNumberOption(state: ITemplatesStore, productNumberOption: string): ITemplatesStore {
        return Object.assign({}, state, { current: {...state.current, productNumberOption }});
    }

    public selectLanguage(state: ITemplatesStore, params: any) {
        const { isSelected, language } = params;

        const languages = isSelected
            ? [...state.current.languages, language]
            : [...state.current.languages.filter(x => x !== language)];

        let primaryLanguage = state.current.primaryLanguage;
        const hasSelectedLanguage = languages.length > 0;
        const primaryLanguageIsInSelectedLanguages = languages.indexOf(state.current.primaryLanguage) >= 0;

        if (!primaryLanguageIsInSelectedLanguages && hasSelectedLanguage) {
            primaryLanguage = languages[0];
        } else if (!primaryLanguageIsInSelectedLanguages && !hasSelectedLanguage) {
            primaryLanguage = '';
        }

        return Object.assign({}, state, { current : {...state.current, primaryLanguage, languages }})
    }

    public selectPrimaryLanguage(state: ITemplatesStore, primaryLanguage: string){
        return Object.assign({}, state, { current : {...state.current, primaryLanguage }})
    }

    public initBlankTemplate(state:ITemplatesStore){
        return Object.assign({}, defaultState);
    }

    public getTemplates(state:ITemplatesStore, templates:ITemplateListItem[]){
        return Object.assign({}, state, { templates });
    }
}

const defaultCurrentTemplate: ITemplate = {
    name: '',
    productNumberOption: 'optional',
    languages: ['en'],
    primaryLanguage: 'en'
}

const defaultState: ITemplatesStore = {
    current : defaultCurrentTemplate,
    templates : []
}

const reducer = new TemplateReducer();
export default function (state: ITemplatesStore = defaultState, action: any) {
    return reducer.call(state, action);
}