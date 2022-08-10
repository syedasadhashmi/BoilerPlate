import { Box, AppBar } from '@mui/material';
import styles from '../../styles/Footer.module.css';
const Footer = () => {
  return (
    <AppBar position="static">
      <Box padding="8px" className={styles.footerStyle}>
        <span>Footer</span>
      </Box>
    </AppBar>
  );
};

export default Footer;
