import React, { useEffect, useState } from 'react';
import contentfulClient from './contentfulClient';
import NavItem from './NavItem';  // Import the NavItem component
import './MainNav.css'; // Import the CSS

export const MainNav = () => {
  const [mainNavTitle, setMainNavTitle] = useState('');
  const [navItems, setNavItems] = useState([]);

  useEffect(() => {
    contentfulClient.getEntry('424Pw4siarFVfdORGDpbrq')
      .then((entry) => {
        setMainNavTitle(entry.fields.title);
        setNavItems(entry.fields.navItems);
      })
      .catch((error) => {
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="main-nav">
      <h1></h1>
      <ul className="nav-list">
        {navItems.map((navItem, index) => (
          <NavItem key={index} title={navItem.fields.title} />
        ))}
      </ul>
    </div>
  );
};

export default MainNav;
