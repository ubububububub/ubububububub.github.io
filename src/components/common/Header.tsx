import React, { FunctionComponent } from 'react';
import { Link } from 'gatsby';

const Header: FunctionComponent = function () {
  return (
    <section className="border-b-2 border-bar">
      <div className="flex justify-start p-3 max-w-5xl mx-auto">
        <Link to="/">
          <h1 className="text-xl font-semibold">blog</h1>
        </Link>
      </div>
    </section>
  );
};

export default Header;
