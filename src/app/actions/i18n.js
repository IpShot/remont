import { createAction } from 'app/utils/redux';
import { SET_LOCALE } from 'app/constants';

export const changeLocale = createAction(
  SET_LOCALE,
  (locale, messages) => ({ locale, messages })
);
