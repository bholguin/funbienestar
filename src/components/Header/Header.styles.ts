import { styled, Typography, ListItemText } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';

export namespace Styled {
    export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: '2rem !important',
        paddingRight: '2rem !important',
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

    export const ImageStyled = styled('img')(({ theme }) => ({
        width: '50px',
        [theme.breakpoints.up('md')]: {
            width: '80px'
        }
    }))


    export const LinkStyled = styled(Link, {
        shouldForwardProp: props => props !== 'active'
    })<{ active: boolean }>(({ active }) => {
        return {
            position: 'relative',
            padding: '.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            "::before": {
                content: '" "',
                borderRadius: '5px',
                position: 'absolute',
                backgroundColor: active ? 'white' : '#262A31',
                backgroundSize: 'contain',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
                opacity: '.9'
            }
        }
    })

    export const LinkTextStyled = styled(Typography, {
        shouldForwardProp: props => props !== 'active'
    })<{ active: boolean }>(({ active }) => {
        return {
            position: 'relative',
            fontWeight: 'bold',
            padding: '0px',
            color: active ? '#262A31' : 'white'
        }
    })


    export const LinkMobileStyled = styled(Link, {
        shouldForwardProp: props => props !== 'active'
    })<{ active: boolean }>(({ active }) => {
        return {
            position: 'relative',
            padding: '.5rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: active ? '#262A31' : 'white',
        }
    })

    export const ListItemTextStyled = styled(ListItemText, {
        shouldForwardProp: props => props !== 'active'
    })<{ active: boolean }>(({ active }) => {
        return {
            ".MuiListItemText-primary": {
                color: active ? 'white' : '#262A31',
                padding: '0px',
                fontWeight: 'bold',
            }
        }
    })
}