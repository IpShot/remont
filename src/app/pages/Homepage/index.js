import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, FormattedMessage } from 'react-intl';
import { bindActionCreators } from 'redux';
import * as brandActions from 'app/actions/brand';
import * as i18nActions from 'app/actions/i18n';
import Hello from 'app/components/Hello';
import translations from 'app/translations';


const messages = {
  test: { id: 'HOMEPAGE.TEST' }
};

const intl = (locale, action) => () => {
  addLocaleData(require(`react-intl/locale-data/${locale.slice(0, 2)}`));
  translations[locale]()
    .then(messages => action(locale, messages.default));
};

const Homepage = ({ brand, fetchBrandName, changeLocale }) => (
  <div>
    <Hello
      brandName={brand.name}
      onShowBrandClick={fetchBrandName}
    />
    <FormattedMessage {...messages.test} />
    <br />
    <button onClick={intl('en_US', changeLocale)}>
      Change locale
    </button>
  </div>
);

export default connect(
  ({ i18n, brand }) => ({ i18n, brand }),
  (dispatch) => ({
    ...bindActionCreators({ ...brandActions, ...i18nActions }, dispatch)
  })
)(Homepage);
