import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Typography } from '@mui/material';

function Tab({ to, title }) {
  return (
    <NavLink
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
      to={to}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 'bold', opacity: 0.4 }}
      >
        {title}
      </Typography>
    </NavLink>
  );
}

Tab.propTypes = {
  to: PropTypes.string,
  title: PropTypes.string,
};

export default Tab;
