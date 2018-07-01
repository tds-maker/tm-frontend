export const ADD_NOTIFY = 'ADD_NOTIFY';
export const REMOVE_NOTIFY = 'REMOVE_NOTIFY';

export function addNotify(title:string, message:string, color:string, duration:number = 2000, id = 0){
    return (dispatch:any) => {
        id = id > 0 ? id : Date.now();
        dispatch({ type : ADD_NOTIFY, title, message, color, id});

        setTimeout(() => dispatch(removeNotify(id)), duration)
    }
}

export function removeNotify(id:number){
    return {
        type : REMOVE_NOTIFY,
        id
    }
}