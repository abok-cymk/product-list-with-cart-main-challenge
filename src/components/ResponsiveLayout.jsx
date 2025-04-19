import React from 'react';
import PropTypes from 'prop-types';

const ResponsiveLayout = ({ children, className = '', cols = 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' }) => {
  return (
    <div className={`grid ${cols} ${className}`}>
      {children}
    </div>
  );
};

ResponsiveLayout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  cols: PropTypes.string,
};

export default ResponsiveLayout;