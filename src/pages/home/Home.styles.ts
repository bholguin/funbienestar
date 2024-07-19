import { Box, styled } from "@mui/material";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export namespace Styled {
    export const ImageStyled = styled('img')(({ theme }) => ({
        display: 'flex',
        width: '100%',
        height: '50vh',
        [theme.breakpoints.up('md')]: {
            height: '100vh'
        }
    }))

    export const CorouselContent = styled(Box)(({ theme }) => ({
        position: 'relative',
    }))

    export const WelcomeBox = styled(Box)(({ theme }) => ({
        position: 'absolute',
        backgroundColor: 'rgba(38, 42, 49, .9)',
        zIndex: '50',
        top: '5%',
        padding: '1rem',
        right: '15%',
        left: '15%',
        borderRadius: '5px',
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
            right: '15%',
            left: '15%',
        },
        [theme.breakpoints.up('lg')]: {
            display: 'block',
            right: '35%',
            left: '35%',
        }
    }))

    export const ExpandCircleDownIconStyled = styled(ExpandCircleDownIcon)({
        color: 'white',
        cursor: 'pointer'
    })

    export const ContentMisionVision = styled(Box)(({ theme }) => ({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '2rem',
        paddingBottom: '2rem',
        gap: '0rem',
        [theme.breakpoints.up('lg')]: {
            gap: '1rem',
        }
    }))
    export const NextContent = styled(Box)(({ theme }) => ({
        width: '100%',
        padding: '1rem',
        [theme.breakpoints.up('md')]: {
            width: '45%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '35%',
        }
    }))

    export const SectionBox = styled(Box)(({ theme }) => ({
        backgroundColor: '#FAF6F1',
        width: '100%',
        display: 'flex',
        gap: '2rem',
        padding: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    }))

    export const SectionBoxOptions = styled(Box)(() => ({
        backgroundColor: '#FFFFFF',
        width: '350px',
        height: '350px',
        border: '2px solid #262A31'
    }))

    export const AliadosBox = styled(Box)(() => ({
        "@keyframes slide": {
            '0%': {
                transform: "translateX(0)"
            },
            "100%": {
                transform: "translateX(-100%)"
            }
        },
        display: 'inline-block',
        animation: '15s slide infinite linear',
    }))

    export const BoxPhotos = styled(Box)(() => ({
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    }))
}