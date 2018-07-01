import INotify from '../../components/UI/Notify/INotify';

export default interface IAppStore {
    notifications: INotify[],
    languages : object
  }