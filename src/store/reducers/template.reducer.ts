import { ITemplateStore, Reducer } from '../../models';

class TemplateReducer extends Reducer<ITemplateStore> {

    public changeTemplateName(state: ITemplateStore, name: string): ITemplateStore {
        return Object.assign({}, state, { name });
    }

    public selectProductNumberOption(state: ITemplateStore, productNumberOption: string): ITemplateStore {
        return Object.assign({}, state, { productNumberOption });
    }

    public selectLanguage(state: ITemplateStore, params: any) {
        const { isSelected, language } = params;

        const languages = isSelected
            ? [...state.languages, language]
            : [...state.languages.filter(x => x !== language)];

        let primaryLanguage = state.primaryLanguage;

        const hasSelectedLanguage = languages.length > 0;
        const primaryLanguageIsInSelectedLanguages = languages.indexOf(state.primaryLanguage) >= 0;

        if (!primaryLanguageIsInSelectedLanguages && hasSelectedLanguage) {
            primaryLanguage = languages[0];
        } else if (!primaryLanguageIsInSelectedLanguages && !hasSelectedLanguage) {
            primaryLanguage = '';
        }

        return Object.assign({}, state, { primaryLanguage, languages })
    }

    public initBlankTemplate(state:ITemplateStore){
        return Object.assign({}, defaultState);
    }
}

const defaultState: ITemplateStore = {
    name: '',
    productNumberOption: 'optional',
    languages: ['en'],
    primaryLanguage: 'en'
}

const reducer = new TemplateReducer();
export default function (state: ITemplateStore = defaultState, action: any) {
    return reducer.call(state, action);
}