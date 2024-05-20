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
import { Link, useNavigate, useNavigation } from 'react-router-dom';


const drawerWidth = 240;
// const navItems = ['Home', 'Services', 'About', 'Contact'];
const subServices = ['Service 1', 'Service 2', 'Service 3']; // Sub-services under "Services"
// const nestedMenuItems = ['Page 1', 'Page 2']; // Nested menu items under "Service 1"

export default function HeaderMate(props) {
  const { window , navigateTo} = props;
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


  const navMenuResp = [
    {
      mainItem: 'Home',
      routes: ['/'],
    },
    {
      mainItem: 'Contact Us',
      routes: ['/contact-us'],
    },
    {
      mainItem: 'About Us',
      routes: ['/about-us'],
    },
    {
      mainItem: 'GST & Tax Services',
      nestedItems: ['GST Returns & Compliances', 'Income Tax Returns & Compliances', 'TDS Returns & Compliances', 'Digital Signatures', 'Accounting'],
      routes: ['/gst-return-compliance', '/income-tax-returns', '/tds-return', '/digital-sign', '/accounting'],
    },
    {
      mainItem: 'Registration',
      nestedItems: ['GST Registration', 'Udyog Adhar Registration', 'PAN Registration','Company Registration', 'Shop Act Registration','Trademark Registration','Professional Tax Registrations & Returns','EPF Registrations & Returns'],
      routes: ['/gst-registration', '/udyog-adhar-registration', '/pan-registration', '/company-registration', '/shop-act-registration','/trademark-registrations','/professional-tax-registration','/epf-registration'],
    },
    {
      mainItem: 'Loan',
      nestedItems: ['Personal Loan', 'Home Loan', 'Business Loan', 'Mortgage Loan', 'Car Loan', 'Education Loan', 'Balance Transfer & Top Up'],
      routes: ['/personal-loan', '/home-loan', '/business-loan', '/mortgage-loan', '/car-loan', '/education-loan', '/balance-topup-loan'],
    },
    {
      mainItem: 'Insurance',
      nestedItems: ['Health Insurance', 'Life Insurance', 'Term Life Insurance', 'General Insurance', 'Motor Insurance', 'Home Insurance', 'Personal Accident Cover', 'Maternity Health Insurance'],
      routes: ['/health-insurance', '/life-insurance', '/term-life-insurance', '/general-insurance', '/motor-insurance', '/home-insurance', '/personal-accident-cover', '/maternity-health-insurance'],
    },
   
  ];
  

  const navItems = ['GST & Tax Services', 'Registration', 'Loan', 'Insurance'];

  const nestedMenuItems = [
    ['GST Returns & Compliances', 'Income Tax Returns & Compliances', 'TDS Returns & Compliances', 'Digital Signatures', 'Accounting'],
    ['GST Registration', 'Udyog Adhar Registration', 'PAN Registration' , 'Company Registration', 'Shop Act Registration', 'Trademark Registration','Professional Tax Registrations & Returns','EPF Registrations & Returns'],
    ['Personal Loan', 'Home Loan', 'Business Loan', 'Mortgage Loan', 'Car Loan', 'Education Loan', 'Balance Transfer & Top Up'],
    ['Health Insurance', 'Life Insurance', 'Term Life Insurance', 'General Insurance', 'Motor Insurance', 'Home Insurance', 'Personal Accident Cover', 'Maternity Health Insurance'],
  ];

  const routes = [
    ['/gst-return-compliance', '/income-tax-returns', '/tds-return', '/digital-sign', '/accounting'],
    ['/gst-registration', '/udyog-adhar-registration', '/pan-registration', '/company-registration', '/shop-act-registration','/trademark-registrations','/professional-tax-registration','/epf-registration'],
    ['/personal-loan', '/home-loan', '/business-loan', '/mortgage-loan', '/car-loan', '/education-loan', '/balance-topup-loan'],
    ['/health-insurance', '/life-insurance', '/term-life-insurance', '/general-insurance', '/motor-insurance', '/home-insurance', '/personal-accident-cover', '/maternity-health-insurance'],
  ];


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
    <Typography variant="h6" sx={{ my: 2 }}>
      J A Gaikwad & Associates
    </Typography>
    <Divider />
    <List>
      {navMenuResp.map((item, index) => (
        <React.Fragment key={index}>
          <ListItemButton onClick={handleSubMenuItemClick}  component={Link}
     to={item.routes[0]} sx={{color:"black" ,backgroundColor:"#0A84FF" ,mt:"5px"}} >
            <ListItemText><Typography variant='h6'><strong>{item.mainItem}</strong></Typography></ListItemText> 
            {item.nestedItems && item.nestedItems.length > 0 ? (
              subMenuOpen ? <ExpandLess /> : <ExpandMore />
            ) : null}
          </ListItemButton>
          {item.nestedItems && item.nestedItems.length > 0 && (
            <Collapse in={subMenuOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.nestedItems.map((nestedItem, nestedIndex) => (
                  <ListItem key={nestedIndex} disablePadding>
                    <ListItemButton component={Link} to={item.routes[nestedIndex]}>
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
      <AppBar component="nav" sx={{ bgcolor: "#06121C" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
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
          <Box sx={{ display: { xs: 'none', sm: 'block', } }}>


            
               <Button sx={{ color: '#fff' }} ><Link sx={{ color: '#fff', textDecoration: "none" }} to="/">Home</Link></Button>
           

            <Button><Option navItems={navItems} nestedMenuItems={nestedMenuItems} routes={routes} /></Button> 
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
