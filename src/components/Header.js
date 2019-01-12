import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="fab fa-jedi-order" /> Star Wars Characters
          <div>
            <ul className="navbar-nav mr-auto" />
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
