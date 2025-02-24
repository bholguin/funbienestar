import { Box, Link, styled, Typography } from "@mui/material";

export namespace Styled {
    export const Content = styled(Box)(({theme}) => ({
        display: 'flex',
        width: '100%',
        backgroundColor: 'rgba(38, 42, 49, .7)',
        justifyContent: 'center',
        padding: '1rem',
        flexDirection: 'column',
        gap: '.5rem',
        [theme.breakpoints.up('md')]: {
            padding: '2.5rem',
        }
    }))
    export const CompanyInfo = styled(Box)(() => ({
        display: 'flex',
        flexDirection: 'column'
    }))
    export const CompanySocial = styled(Box)(({theme}) => ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '0rem',
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            gap: '2rem',
        }
    }))
    export const CompanyContact= styled(Link)(() => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '.2rem',
    }))

    export const SocialOption = styled(Typography)({
        color: 'white',
        padding: '0',
        display: 'flex',
        alignItems: 'center'
    })
}