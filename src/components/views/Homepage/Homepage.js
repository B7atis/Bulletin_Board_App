import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/postsRedux';
import { PostSummary } from '../../features/PostSummary/PostSummary';

import styles from './Homepage.module.scss';

const Component = ({ className, posts }) => (
  <div className={clsx(className, styles.root)}>
    <h1 className={styles.header}>Announcements</h1>
    {posts.map(post => (
      <PostSummary key={post.id} {...post} />
    ))}
  </div>
);

Component.propTypes = {
  posts: PropTypes.array,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  posts: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Homepage,
  Container as Homepage,
  Component as HomepageComponent,
};
