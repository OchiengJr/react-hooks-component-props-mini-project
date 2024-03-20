import React from 'react';

const Header = ({ name }) => {
  return (
    <header>
      <h1>{name || "Default Name"}</h1>
    </header>
  );
}

Header.defaultProps = {
  name: "Default Name"
};

export default Header;
