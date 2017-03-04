import { SET_LOCALE } from 'app/constants';
import messages from 'app/translations/ru_RU';

const initialState = {
  locale: 'ru_RU',
  messages,
};

const i18n = (state=initialState, action) => {
  switch(action.type) {
    case SET_LOCALE:
      return {
        messages: action.payload.messages,
        locale: action.payload.locale,
      };
    default:
      return state;
  }
};

export default i18n;
