import { Box, ImageList, styled } from "@mui/material"

export namespace Styled {
    export const BoxPhotos = styled(Box)(() => ({
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
    }))

    export const ImageListStyled = styled(ImageList)(({theme}) => ({
        display: 'grid',
        width: '100%',
        gridTemplateColumns: 'repeat(2, 1fr) !important',
        [theme.breakpoints.up('md')]: {
            width: '80%',
            gridTemplateColumns: 'repeat(3, 1fr) !important',
        },
        [theme.breakpoints.up('lg')]: {
            width: '60%',
            gridTemplateColumns: 'repeat(4, 1fr) !important',
        }
    }))
}