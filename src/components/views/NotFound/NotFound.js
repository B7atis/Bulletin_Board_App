import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './NotFound.module.scss';

import { Link } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={styles.paperCard__textError}>
      <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} /> 404
    </h1>
    <h1 className={styles.page}>Page not found</h1>
    <h3>We&apos;re sorry, the page you requested could not be found. Please go back to the homepage or contact us.</h3>
    <Link href='/'>
      <h2>Homepage</h2>
    </Link>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as NotFound,
  // Container as NotFound,
  Component as NotFoundComponent,
};
