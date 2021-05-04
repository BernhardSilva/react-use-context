import { GET_PROFILE, GET_USERS } from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        users: payload.users,
      };

    case GET_PROFILE:
      return {
        ...state,
        selectedUser: payload,
      };

    default:
      return state;
  }
};
