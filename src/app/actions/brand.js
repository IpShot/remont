import { createAction } from 'app/utils/redux';
import { GET_BRAND_NAME } from 'app/constants';

export const fetchBrandName = createAction(
  GET_BRAND_NAME
);
