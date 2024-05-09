import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Hidden } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function MyAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [serviceMenuOpen, setServiceMenuOpen] = React.useState(false);
  const [service1MenuOpen, setService1MenuOpen] = React.useState(false);
  const [serviceMenuPosition, setServiceMenuPosition] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
    setServiceMenuPosition(event.currentTarget.getBoundingClientRect());
  };

  const handleServiceMenuClick = () => {
    setServiceMenuOpen(true);
  };

  const handleService1MenuClick = () => {
    setService1MenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setServiceMenuOpen(false);
    setService1MenuOpen(false);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Hidden mdUp>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Hidden smDown>
          <MenuItem onClick={handleServiceMenuClick}>Service</MenuItem>
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          
          <Menu
            anchorEl={anchorEl}
            open={serviceMenuOpen}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: serviceMenuPosition ? serviceMenuPosition.bottom : null, left: serviceMenuPosition ? serviceMenuPosition.left : null }}
          >
            <MenuItem onClick={handleService1MenuClick}>Service 1</MenuItem>
            <MenuItem onClick={handleClose}>Service 2</MenuItem>
          </Menu>
          <Menu
            anchorEl={anchorEl}
            open={service1MenuOpen}
            onClose={handleClose}
            anchorReference="anchorPosition"
            anchorPosition={{ top: serviceMenuPosition ? serviceMenuPosition.bottom : null, left: serviceMenuPosition ? serviceMenuPosition.right : null }}
          >
            <MenuItem onClick={handleClose}>Page 1</MenuItem>
            <MenuItem onClick={handleClose}>Page 2</MenuItem>
          </Menu>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default MyAppBar;
