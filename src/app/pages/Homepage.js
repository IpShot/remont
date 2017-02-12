import React from 'react';
import { connect } from 'react-redux';
import Hello from 'app/components/Hello';


const Homepage = ({ brandName }) => (
  <Hello brandName={brandName} />
);

const map = ({ brandName }) => ({ brandName });

export default connect(map)(Homepage);
