export { default as store } from './createStore';
export { addNotify } from './actions/app.actions';
export { createFolder, initFolders, toogleFolder } from './actions/folders.actions';
export {
  // changeTab,
  // initNewTemplate,
  // setSelectedLanguage,
  // nt_changeTemplateName,
  // nt_onProductNumberOptionChange,
  // nt_setPrimaryLanguage,
  changeName,
  getAccountTemplates,
  initBlankTemplate,
  selectProductNumberOption,
  selectLanguage,
  selectPrimaryLanguage
} from './actions/template.actions';
