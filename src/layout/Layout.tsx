import { Box } from '@mui/material';
import { Header } from '../components/Header';
import { Outlet } from 'react-router-dom';
import { Styled } from './Layout.styles';
import { Footer } from '../components/Footer';
import { Release } from '../components/Release';

export const Layout = () => {
  return (
    <Box>
      <Header />

      <Styled.LayoutStyled>
        <Release />
        <Outlet />
      </Styled.LayoutStyled>
      <Footer />
    </Box>
  );
};
