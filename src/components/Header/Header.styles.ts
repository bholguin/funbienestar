import { styled } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';

export namespace Styled {
    export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '3rem !important',
        paddingRight: '3rem !important',
        paddingTop: '1rem',
        paddingBottom: '1rem',
        [theme.breakpoints.up('md')]: {
            alignItems: 'flex-end',
            paddingLeft: '4rem !important',
            paddingRight: '4rem !important',
        },
        [theme.breakpoints.up('lg')]: {
            alignItems: 'flex-end',
            paddingLeft: '7rem !important',
            paddingRight: '7rem !important',
        }
    }))

    export const ImageStyled = styled('img')(({theme}) => ({
        width: '80px',
        [theme.breakpoints.up('sm')]: {
            width: '100px'
        }
    }))
}