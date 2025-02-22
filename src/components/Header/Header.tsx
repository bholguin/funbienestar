import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Styled } from './Header.styles';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
}

const drawerWidth = 240;
const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Nosotros', to: '/nosotros' },
    { label: 'Programas', to: '/nuestros-programas' },
    { label: 'Donaciones', to: '/donaciones' },
];

export const Header = (props: Props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const navigate = useNavigate()

    const location = useLocation()

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h3" sx={{ my: 2 }}>
                Funbienestar
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <Styled.LinkMobileStyled active={location.pathname === item.to} key={item.label} to={item.to}>
                        <ListItem disablePadding>
                            <ListItemButton sx={{ textAlign: 'start' }}>
                                <Styled.ListItemTextStyled
                                    active={location.pathname === item.to}
                                    primary={item.label}
                                />
                            </ListItemButton>
                        </ListItem>
                    </Styled.LinkMobileStyled>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar component="nav" style={{ backgroundColor: '#262A31', }}>
                <Styled.ToolbarStyled>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { md: 'none' } }}
                    >
                        <MenuIcon fontSize='large' />
                    </IconButton>
                    <Box
                        onClick={() => navigate('/')}
                        sx={{
                            display: 'flex',
                            padding: '.1rem',
                            background: 'rgba(255, 255, 255, 0.5)',
                            width: { xs: '80px', md: '120px' },
                            borderRadius: '50%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer'
                        }}>
                        <Styled.ImageStyled
                            src="/assets/logo_funbienestar.png" alt="logo"
                        />
                    </Box>

                    <Box sx={{ padding: '1rem', display: { xs: 'none', md: 'flex' }, gap: '3rem' }}>
                        {navItems.map((item) => (
                            <Styled.LinkStyled active={location.pathname === item.to} to={item.to} key={item.label} >
                                <Styled.LinkTextStyled active={location.pathname === item.to}>{item.label}</Styled.LinkTextStyled>
                            </Styled.LinkStyled>
                        ))}
                    </Box>
                </Styled.ToolbarStyled>
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
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}