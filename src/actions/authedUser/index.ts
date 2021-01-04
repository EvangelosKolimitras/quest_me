import * as Actions from './actions';
import { createActionCreator } from './actionCreators';
import { IAuthedUser } from '../../services/declarations';

const AC = createActionCreator();

type authedUser = IAuthedUser
export const setAuthedUser = (authedUser: authedUser) => AC({ type: Actions.SET_AUTHED_USER, payload: authedUser })

type API_TYPE = { setAuthedUser: Function }
const API: API_TYPE = { setAuthedUser };

// A custome hook for creating question actions
export const authedUserAction = () => API