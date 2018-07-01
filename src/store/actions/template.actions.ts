import {IAction} from '../../models';
export const CHANGE_TEMPLATE_NAME = 'CHANGE_TEMPLATE_NAME';
export const SELECT_PRODUCT_NUMBER_OPTION = 'SELECT_PRODUCT_NUMBER_OPTION'
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const SELECT_PRIMARY_LANGUAGE = 'SELECT_PRIMARY_LANGUAGE';
export const INIT_BLANK_TEMPLATE = 'INIT_BLANK_TEMPLATE';

export function changeName(name:string):IAction{
  return {
    type : CHANGE_TEMPLATE_NAME,
    payload : name
  }
}

export function selectProductNumberOption(payload:string):IAction {
  return {
    type :SELECT_PRODUCT_NUMBER_OPTION,
    payload
  }
}

export function selectLanguage(payload:any):IAction{
  return {
    type : SELECT_LANGUAGE,
    payload
  }
}

export function selectPrimaryLanguage(payload:string):IAction{
  return {
    type:SELECT_PRIMARY_LANGUAGE,
    payload
  }
}

export function initBlankTemplate(){
  return {
    type : INIT_BLANK_TEMPLATE
  }
}

// export const NT_TEMPLATE_INIT = 'NT_TEMPLATE_INIT';
// export const NT_CHANGE_TAB = 'NT_CHANGE_TAB';
// export const NT_SELECT_LANGUAGE = 'NT_SELECT_LANGUAGE';
// export const NT_CHANGE_NAME = 'NT_CHANGE_NAME';
// export const NT_ON_PRODUCT_NUMBER_OPTION_CHANGE = 'NT_ON_PRODUCT_NUMBER_OPTION_CHANGE';
// export const NT_SET_PRIMARY_LANGUAGE = 'NT_SET_PRIMARY_LANGUAGE';

// export function initNewTemplate() {
//   return {
//     type: NT_TEMPLATE_INIT
//   };
// }

// export function changeTab(tabIndex: number) {
//   return {
//     type: NT_CHANGE_TAB,
//     index: tabIndex
//   };
// }

// export function setSelectedLanguage(language: string, isSelected: boolean) {
//   return {
//     type: NT_SELECT_LANGUAGE,
//     language,
//     isSelected
//   };
// }

// export function nt_changeTemplateName(value: string) {
//   return {
//     type: NT_CHANGE_NAME,
//     name: value
//   };
// }

// export function nt_onProductNumberOptionChange(selection: object) {
//   return {
//     type: NT_ON_PRODUCT_NUMBER_OPTION_CHANGE,
//     selection
//   };
// }

// export function nt_setPrimaryLanguage(selection: object) {
//   return {
//     type: NT_SET_PRIMARY_LANGUAGE,
//     selection
//   };
// }

