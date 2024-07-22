import { Box, styled } from "@mui/material";

export namespace Styled {
    export const LayoutStyled = styled(Box)(({theme}) => ({
        paddingTop: '9rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '85vh',
        justifyContent: 'center',
        [theme.breakpoints.up('sm')]: {
            paddingTop: '10.6rem',
        }
    }))
}