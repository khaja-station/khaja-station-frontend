import React from 'react';
import Toggle from './partials/toggle';

interface Props {
  toggleTheme: () => void;
}

const TopNavbar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <div className='top-navbar'>
      <div>Khaja Station</div>
      <div className='toggle-wrapper'>
        <Toggle toggleTheme={toggleTheme} />
      </div>
    </div>
  );
};

export default TopNavbar;
