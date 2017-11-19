import React from 'react';
import { AppBar } from 'material-ui';

const Header = () => {
  const icon = (
    <img
      alt="logo"
      src="images/logo.svg"
      className="header__logo"
    />
  );

  return (
    <AppBar
      className="header"
      iconElementLeft={icon}
      title="Mobx Workshop"
    />
  );
};

export default Header;
