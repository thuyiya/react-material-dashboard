import React from 'react';

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      style={{ height: 40}}
      src="/static/logo.png"
      {...props}
    />
  );
};

export default Logo;
