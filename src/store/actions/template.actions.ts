import {IAction} from '../../models';
import HttpProvider from '../../utils/http.provider';

export const CHANGE_TEMPLATE_NAME = 'CHANGE_TEMPLATE_NAME';
export const SELECT_PRODUCT_NUMBER_OPTION = 'SELECT_PRODUCT_NUMBER_OPTION'
export const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
export const SELECT_PRIMARY_LANGUAGE = 'SELECT_PRIMARY_LANGUAGE';
export const INIT_BLANK_TEMPLATE = 'INIT_BLANK_TEMPLATE';
export const GET_TEMPLATES = 'GET_TEMPLATES';

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

export function initBlankTemplate():IAction{
  return {
    type : INIT_BLANK_TEMPLATE,
    payload : null
  }
}

export function getAccountTemplates(){
  return (dispatch:any) => {
    HttpProvider.get('/templates').then(res => {
      dispatch({
        type : GET_TEMPLATES,
        payload : res
      })
    })
  }
}