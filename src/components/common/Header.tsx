import Sun from 'components/svg/Sun';
import React, { FunctionComponent, useState } from 'react';
import { Link } from 'gatsby';
import Moon from 'components/svg/Moon';
import useDarkMode from 'hooks/useDarkMode';

const Header: FunctionComponent = function () {
  const [isLightShowing, setIshLightShowing] = useState(
    localStorage.theme === 'light' ? true : false,
  );
  useDarkMode();

  const handleLightModeClick = () => {
    setIshLightShowing(prev => {
      if (prev) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }

      return !prev;
    });
  };

  return (
    <section className="border-b-2  border-light__bar dark:border-bar">
      <div className="flex justify-between p-3 max-w-5xl mx-auto">
        <Link to="/">
          <h1 className="text-xl font-semibold">blog</h1>
        </Link>
        <div onClick={handleLightModeClick}>
          {isLightShowing ? <Moon /> : <Sun />}
        </div>
      </div>
    </section>
  );
};

export default Header;
