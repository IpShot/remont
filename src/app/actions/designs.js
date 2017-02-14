import { createAction } from 'app/utils/redux';
import {
  FETCH_DESIGNS_SUCCEEDED,
  FETCH_DESIGNS_FAILED,
} from 'app/constants';

export const fetchDesignsSuccess = createAction(
  FETCH_DESIGNS_SUCCEEDED,
  (designs) => designs
);

export const fetchDesignsError = createAction(
  FETCH_DESIGNS_FAILED,
  (designs) => designs
);
