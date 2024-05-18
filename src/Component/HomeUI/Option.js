import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function Option({ navItems, nestedMenuItems, routes }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [nestedMenuIndex, setNestedMenuIndex] = React.useState(null);

  const handleClick = (event, index) => {
    setAnchorEl(event.currentTarget);
    setNestedMenuIndex(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setNestedMenuIndex(null);
  };

  return (
    <Box style={{ display: 'flex' }}>
      {navItems.map((item, index) => (
        <Box key={index} style={{ marginRight: '4px' }}>
          <Button
            id={`services-button-${index}`}
            aria-controls={`services-menu-${index}`}
            aria-haspopup="true"
            variant="contained"
            disableElevation
            onClick={(event) => handleClick(event, index)}
            endIcon={<KeyboardArrowDownIcon />}
          >
            {item}
          </Button>
          <StyledMenu
            id={`services-menu-${index}`}
            MenuListProps={{
              'aria-labelledby': `services-button-${index}`,
            }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl) && nestedMenuIndex === index}
            onClose={handleClose}
          >
            {nestedMenuItems[index].map((menuItem, menuItemIndex) => (
              <MenuItem key={menuItemIndex} onClick={handleClose} disableRipple>
                <Link to={routes[index][menuItemIndex]} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {menuItem}
                </Link>
              </MenuItem>
            ))}
          </StyledMenu>
        </Box>
      ))}
    </Box>
  );
}
