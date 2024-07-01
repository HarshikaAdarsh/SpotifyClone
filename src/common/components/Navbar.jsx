import { forwardRef } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, Box, Link, ListItemText } from '@mui/material';
import PropTypes from 'prop-types';

import logo from '@/assets/svg/logo.svg';

const NAV_ITEMS = [
  {
    id: 1,
    to: '/for-you',
    title: 'For You',
  },
  {
    id: 2,
    to: '/top-tracks',
    title: 'Top Tracks',
  },
  // {
  //   id: 3,
  //   to: '/favourites',
  //   title: 'Favourites',
  // },
  // {
  //   id: 4,
  //   to: '/recently-played',
  //   title: 'Recently Played',
  // },
];

const Navbar = () => {
  return (
    <Box>
      <img src={logo} alt="logo" />

    </Box>
  );
};

const CustomNavLink = forwardRef(function getNavLink(props, ref) {
  return (
    <NavLink
      ref={ref}
      {...props}
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
    >
      {props.children}
    </NavLink>
  );
});

CustomNavLink.propTypes = {
  children: PropTypes.element,
};

export default Navbar;
