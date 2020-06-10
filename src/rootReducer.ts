import { combineReducers } from 'redux';
import testimonial from './ignitus-HomePage/ignitus-Testimonial';
import contributors from './ignitus-AboutPage/ignitus-Team';
import sharedLogin from './ignitus-Authentication/ignitus-CommonLoginInterface';
import sharedSignup from './ignitus-Authentication/ignitus-CommonSignupInterface';
import * as t from './ignitus-Authentication/ignitus-CommonLoginInterface/actionTypes';

const overlayMessageReducer = (state = { active: null }, action) => {
  switch (action.type) {
    case t.LOG_USER_OUT:
      return { ...state, active: 'LOGOUT' };
    case 'CLEAR_OVERLAY_MESSAGE':
      return { ...state, active: null };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  [testimonial.constants.NAME]: testimonial.reducer,
  [sharedSignup.constants.NAME]: sharedSignup.reducer,
  [sharedLogin.constants.NAME]: sharedLogin.reducer,
  [contributors.constants.NAME]: contributors.reducer,
  overlayMessage: overlayMessageReducer,
});

export type rootState = ReturnType<typeof rootReducer>;
export default rootReducer;
