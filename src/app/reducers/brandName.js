const brandName = (state='Валера', action) => {
  switch(action.type) {
    case 'GET_BRAND_NAME':
      return 'Валера';
    default:
      return state;
  }
};

export default brandName;
