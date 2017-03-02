import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';


const AppRoute = ({ i18n, ...props }) => (
  <IntlProvider
    locale={i18n.locale.split('_')[0]}
    messages={i18n.messages}>
    {props.children}
  </IntlProvider>
);

AppRoute.propTypes = {
  children: PropTypes.element.isRequired,
  i18n: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
};

export default connect(
  ({ i18n }) => ({ i18n })
)(AppRoute);
