import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Option from './Option'; // Import the Option component
import { Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { Link, useNavigate, useLocation } from 'react-router-dom';


const drawerWidth = 240;
// const navItems = ['Home', 'Services', 'About', 'Contact'];
const subServices = ['Service 1', 'Service 2', 'Service 3']; // Sub-services under "Services"
// const nestedMenuItems = ['Page 1', 'Page 2']; // Nested menu items under "Service 1"

export default function HeaderMate(props) {
  const { window, navigateTo } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [subMenuOpen, setSubMenuOpen] = React.useState(false);
  const history = useNavigate();
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(null);

  const handleMainItemClick = (index) => {
    setSelectedItemIndex(index === selectedItemIndex ? null : index);
  };



  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMainMenuItemClick = (item) => {
    if (item.nestedItems && item.nestedItems.length > 0) {
      setSubMenuOpen(!subMenuOpen);
    } else {
      handleDrawerToggle(); // Close drawer
    }
  };

  const handleSubMenuItemClick = () => {
    setSubMenuOpen(!subMenuOpen); // Toggle submenu open state
  };

  const handleNestedMenuItemClick = (item) => {
    console.log(item); // You can add your logic here for nested menu item click
  };

  const GradientText = styled(Typography)(({ theme }) => ({
    background: 'linear-gradient(45deg, black, blue, yellow)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    my: 1,
  }));
  const navMenuResp = [
    {
      mainItem: 'Home',
      routes: ['/'],
    },
   
    {
      mainItem: 'GST & Tax Services',
      nestedItems: ['GST Returns & Compliances', 'Income Tax Returns & Compliances', 'TDS Returns & Compliances', 'Digital Signatures', 'Accounting'],
      routes: ['/gst-return-compliance', '/income-tax-returns', '/tds-return', '/digital-sign', '/accounting'],
    },
    {
      mainItem: 'Registration',
      nestedItems: ['GST Registration', 'Udyog Adhar Registration', 'PAN Registration', 'Company Registration', 'Shop Act Registration', 'Trademark Registration', 'Professional Tax Registrations & Returns', 'EPF Registrations & Returns', 'Food License Registration(FSSAI)', 'Import Export Registration', 'TAN Registration'],
      routes: ['/gst-registration', '/udyog-adhar-registration', '/pan-registration', '/company-registration', '/shop-act-registration', '/trademark-registrations', '/professional-tax-registration', '/epf-registration', '/food-license-registration', '/import-export-registration', '/tan-registartion'],
    },
    {
      mainItem: 'Loan',
      nestedItems: ['Personal Loan', 'Home Loan', 'Business Loan', 'Mortgage Loan', 'Car Loan', 'Education Loan', 'Balance Transfer & Top Up', 'Cash Credit Overdraft Loan'],
      routes: ['/personal-loan', '/home-loan', '/business-loan', '/mortgage-loan', '/car-loan', '/education-loan', '/balance-topup-loan', '/cash-credit-overdraft-loan'],
    },
    {
      mainItem: 'Insurance',
      nestedItems: ['Health Insurance', 'Life Insurance', 'Term Life Insurance', 'General Insurance', 'Motor Insurance', 'Home Insurance', 'Personal Accident Cover', 'Maternity Health Insurance'],
      routes: ['/health-insurance', '/life-insurance', '/term-life-insurance', '/general-insurance', '/motor-insurance', '/home-insurance', '/personal-accident-cover', '/maternity-health-insurance'],
    },
    {
      mainItem: 'Mutual Fund',
      routes: ['/mutual-fund'],
    },
    {
      mainItem: 'Contact Us',
      routes: ['/contact-us'],
    },
    {
      mainItem: 'About Us',
      routes: ['/about-us'],
    },

  ];


  const navItems = ['GST & Tax Services', 'Registration', 'Loan', 'Insurance'];

  const nestedMenuItems = [
    ['GST Returns & Compliances', 'Income Tax Returns & Compliances', 'TDS Returns & Compliances', 'Digital Signatures', 'Accounting'],
    ['GST Registration', 'Udyog Adhar Registration', 'PAN Registration', 'Company Registration', 'Shop Act Registration', 'Trademark Registration', 'Professional Tax Registrations & Returns', 'EPF Registrations & Returns', 'Food License Registration(FSSAI)', 'Import Export Registration', 'TAN Registration'],
    ['Personal Loan', 'Home Loan', 'Business Loan', 'Mortgage Loan', 'Car Loan', 'Education Loan', 'Balance Transfer & Top Up', 'Cash Credit Overdraft Loan'],
    ['Health Insurance', 'Life Insurance', 'Term Life Insurance', 'General Insurance', 'Motor Insurance', 'Home Insurance', 'Personal Accident Cover', 'Maternity Health Insurance'],
  ];

  const routes = [
    ['/gst-return-compliance', '/income-tax-returns', '/tds-return', '/digital-sign', '/accounting'],
    ['/gst-registration', '/udyog-adhar-registration', '/pan-registration', '/company-registration', '/shop-act-registration', '/trademark-registrations', '/professional-tax-registration', '/epf-registration', '/food-license-registration', '/import-export-registration', '/tan-registartion'],
    ['/personal-loan', '/home-loan', '/business-loan', '/mortgage-loan', '/car-loan', '/education-loan', '/balance-topup-loan', '/cash-credit-overdraft-loan'],
    ['/health-insurance', '/life-insurance', '/term-life-insurance', '/general-insurance', '/motor-insurance', '/home-insurance', '/personal-accident-cover', '/maternity-health-insurance'],
  ];
  const location = useLocation();

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       J A Gaikwad & Associates
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navItems.map((item) => (
  //         <React.Fragment key={item}>
  //           {item === 'Services' ? (
  //             <>
  //               <ListItemButton onClick={handleSubMenuItemClick}>
  //                 <ListItemText primary={item} />
  //                 {subMenuOpen ? <ExpandLess /> : <ExpandMore />}
  //               </ListItemButton>
  //               <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
  //                 <List component="div" disablePadding>
  //                   {subServices.map((subItem) => (
  //                     <ListItem key={subItem} disablePadding>
  //                       <ListItemButton onClick={() => handleNestedMenuItemClick(subItem)}>
  //                         <ListItemText primary={subItem} />
  //                       </ListItemButton>
  //                     </ListItem>
  //                   ))}
  //                 </List>
  //               </Collapse>
  //             </>
  //           ) : (
  //             <ListItem key={item} disablePadding>
  //               <ListItemButton sx={{ textAlign: 'center' }}>
  //                 <ListItemText primary={item} />
  //               </ListItemButton>
  //             </ListItem>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </List>
  //   </Box>
  // );



  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <GradientText variant="h6">
      J A Gaikwad & Associates
    </GradientText>
      <Divider />
      <List>
        {navMenuResp.map((item, index) => (
          <React.Fragment key={index}>
            <ListItemButton onClick={handleSubMenuItemClick} component={Link}
              to={item.routes[0]} sx={{ color: "white", backgroundColor: "#005bbc", mt: "5px" }} >
              <ListItemText><Typography variant='h6'><strong>{item.mainItem}</strong></Typography></ListItemText>
              {item.nestedItems && item.nestedItems.length > 0 ? (
                subMenuOpen ? <ExpandLess sx={{color:"#fd5b03"}} /> : <ExpandMore sx={{color:"#fd5b03"}} />
              ) : null}
            </ListItemButton>
            {item.nestedItems && item.nestedItems.length > 0 && (
              <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
      {item.nestedItems.map((nestedItem, nestedIndex) => (
        <ListItem key={nestedIndex} disablePadding>
          <ListItemButton
            component={Link}
            to={item.routes[nestedIndex]}
            sx={{
              color: location.pathname === item.routes[nestedIndex] ? 'blue' : 'inherit',
            }}
          >
            <ListItemText primary={nestedItem} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
                
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  // const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       J A Gaikwad & Associates
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navMenuResp.map((item, index) => (
  //         <React.Fragment key={index}>
  //           <ListItemButton
  //             onClick={() => {
  //               if (item.nestedItems && item.nestedItems.length > 0) {
  //                 setSubMenuOpen((prevState) => !prevState);
  //               } else {
  //                 handleDrawerToggle();
  //               }
  //             }}
  //           >
  //             <ListItemText primary={item.mainItem} />
  //             {item.nestedItems && item.nestedItems.length > 0 ? (
  //               subMenuOpen ? <ExpandLess /> : <ExpandMore />
  //             ) : null}
  //           </ListItemButton>
  //           {item.nestedItems && item.nestedItems.length > 0 && (
  //             <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
  //               <List component="div" disablePadding>
  //                 {item.nestedItems.map((nestedItem, nestedIndex) => (
  //                   <ListItem key={nestedIndex} disablePadding>
  //                     <ListItemButton component={Link} to={item.routes[nestedIndex]}>
  //                       <ListItemText primary={nestedItem} />
  //                     </ListItemButton>
  //                   </ListItem>
  //                 ))}
  //               </List>
  //             </Collapse>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </List>
  //   </Box>
  // );

  //   const drawer = (
  //   <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
  //     <Typography variant="h6" sx={{ my: 2 }}>
  //       J A Gaikwad & Associates
  //     </Typography>
  //     <Divider />
  //     <List>
  //       {navMenuResp.map((item, index) => (
  //         <React.Fragment key={index}>
  //           <ListItemButton
  //             component={Link}
  //             to={item.routes[0]} // Main menu item route
  //             sx={{ paddingLeft: item.nestedItems ? 2 : 0 }} // Indent nested items
  //           >
  //             <ListItemText primary={item.mainItem} />
  //             {item.nestedItems && (
  //               subMenuOpen ? <ExpandLess /> : <ExpandMore />
  //             )}
  //           </ListItemButton>
  //           {item.nestedItems && (
  //             <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
  //               <List component="div" disablePadding>
  //                 {item.nestedItems.map((nestedItem, nestedIndex) => (
  //                   <React.Fragment key={nestedIndex}>
  //                     <ListItemButton
  //                       component={Link}
  //                       to={item.routes[nestedIndex + 1]} // Nested item route
  //                       sx={{ paddingLeft: 4 }} // Indent nested items further
  //                     >
  //                       <ListItemText primary={nestedItem} />
  //                     </ListItemButton>
  //                   </React.Fragment>
  //                 ))}
  //               </List>
  //             </Collapse>
  //           )}
  //         </React.Fragment>
  //       ))}
  //     </List>
  //   </Box>
  // );



  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <AppBar component="nav" sx={{ bgcolor: "#252B42" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block' ,md:"none" ,lg:"none"} }}
          >
            <MenuIcon />
          </IconButton>
          <Avatar alt="Logo" src="assets/homepage/logo.jpeg" sx={{ width: 34, height: 34 }} />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: 2 }}
          >
            J A Gaikwad & Associates
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'none', md:'block',lg:'block'} }}>
            <Button sx={{ color: '#fff' }} ><Link sx={{ color: '#fff', textDecoration: "none" }} to="/">Home</Link></Button>
            <Button><Option navItems={navItems} nestedMenuItems={nestedMenuItems} routes={routes} /></Button>
            <Button sx={{ color: '#fff', backgroundColor:"blue" }} ><Link sx={{ color: '#fff', textDecoration: "none" }} to="/mutual-fund">Mutual Fund</Link></Button>
        
            <Link to="/about-us">
              <Button sx={{ color: '#fff' }}>
                About Us
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button sx={{ color: '#fff' }}>
                Contact Us
              </Button>
            </Link>
          
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none', lg: 'none'  },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
