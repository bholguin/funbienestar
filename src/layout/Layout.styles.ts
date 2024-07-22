import { Box, styled } from "@mui/material";

export namespace Styled {
    export const LayoutStyled = styled(Box)(({theme}) => ({
        paddingTop: '6.5rem',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '85vh',
        [theme.breakpoints.up('md')]: {
            paddingTop: '9rem',
        }
    }))
}