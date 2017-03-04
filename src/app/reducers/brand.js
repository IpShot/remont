import { GET_BRAND_NAME } from '../constants';

const initialState = {
  name: 'Безымянный',
};

const brand = (state=initialState, action) => {
  switch(action.type) {
    case GET_BRAND_NAME:
      return {...state, name: 'Валера' };
    default:
      return state;
  }
};

export default brand;
