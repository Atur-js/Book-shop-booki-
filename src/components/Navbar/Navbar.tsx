import React from  'react';
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { AppBar, Toolbar, Switch as ThemeSwitch } from '@mui/material';
import Logo from "../../images/logo.png";
import styles from "../../styles/Navbar.module.css"
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import shopIcon from "../../assets/icons/shop.svg";

import { LOCALES } from '../i18n';
import t from '../i18n/translate';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';

interface Props {
    dataSwitchTheme: () => void;
    dataTheme: any;
    setLocale: any;
}

                


export const Navbar: React.FC<Props> = ({dataSwitchTheme,dataTheme,setLocale}): JSX.Element => {
  const state = useSelector((state: RootState) => state.cartState);
  


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
    </Menu>
  );

  // const mobileMenuId = 'primary-search-account-menu-mobile';
  // const renderMobileMenu = (
  //   <Menu 
      
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{
  //       vertical: 'top',
  //       horizontal: 'right',
  //     }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >

      
  //     <MenuItem className={styles.menuMobile} >
  //        <button  onClick={()=> setLocale(LOCALES.EN)} className={styles.en} style={{marginLeft:"10px"}}>EN</button>
  //        <button onClick={()=> setLocale(LOCALES.FA)} className={styles.en}>FA</button>
  //     </MenuItem>
  //   </Menu>
  // );

  return (
    <Box className={styles.mainNavbar} sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={styles.mainNavbar} style={{padding:"20px"}}>
        <Toolbar>
          <img alt='logo' className={styles.logoMain} src={Logo} style={{width:"50px",height:"40px", marginRight:"20px"}}/>
          <Typography
          
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },marginLeft:"20px",color:"white" }}
          >
            <Link className={styles.booki} to="/">Booki</Link>
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            
              <button onClick={()=> setLocale(LOCALES.EN)} className={styles.en}>EN</button>
              <button onClick={()=> setLocale(LOCALES.FA)} className={styles.en}>FA</button>
            
          </Box>
          
          <div className={styles.iconContainer}>
          <Link to="/cart">
            <img alt="icon" src={shopIcon} />
          </Link>
          <span>{state.itemsCounter}</span>
        </div>
          {dataTheme === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
          <ThemeSwitch size="small" onChange={dataSwitchTheme} color="default" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

