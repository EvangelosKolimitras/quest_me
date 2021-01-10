import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IAuthedUser } from '../../services/declarations';

const AC = createActionCreator();

type authedUser = IAuthedUser
export const setAuthedUser = (authedUser: authedUser) => AC({ type: Actions.SET_AUTHED_USER, payload: authedUser })

export const unsetAuthedUser = () => AC({ type: Actions.UNSET_AUTHED_USER })

type API_TYPE = { setAuthedUser: Function, unsetAuthedUser: Function }
const API: API_TYPE = { setAuthedUser, unsetAuthedUser };

// A custome hook for creating question actions
export const authedUserAction = () => API