import React from 'react';
import { connect } from 'react-redux';
import Hello from 'app/components/Hello';


const Homepage = ({ brandName }) => (
  <Hello brandName={brandName} />
);

export default connect(
  ({ brandName }) => ({ brandName })
)(Homepage);
