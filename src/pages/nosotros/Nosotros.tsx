import { Box, List, ListItem, ListItemText, Typography, styled } from "@mui/material"

const ImageStyled = styled('img')(({ theme }) => ({
    width: '350px',
    height: '400px',
    borderRadius: '10%',
    boxShadow: '10px 15px 59px -8px rgba(0,0,0,0.74)',
    [theme.breakpoints.up('lg')]: {
        width: '700px'
    }
}))

export const Nosotros = () => {
    return <Box sx={{
        width: { xs: '90%', lg: '60%' },
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        paddingTop: '3rem',
        paddingBottom: '1rem'
    }}>
        <Typography variant="h1" padding={0}>Nosotros</Typography>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <ImageStyled
                src="/assets/nosotros-img.jpeg"
                alt="nosotros-img"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <Typography align="justify" >
                    La <b>FUNDACION NACIONAL DE BIENESTAR SOCIAL</b> es una entidad autónoma de servicio social, de
                    carácter privado y sin ánimo de lucro con personería jurídica reconocida, comprometida con el
                    bienestar social de nuestro país.
                </Typography>
                <Typography align="justify" >
                    su objetivo contribuir al desarrollo comunitario y social mediante la concepción, promoción y
                    ejecución de planes y programas directos proyectando obras sociales.
                </Typography>
                <Typography align="justify" >
                    Desde hace años trabajamos con hombres y mujeres de las Fuerzas Militares y de Policía e inpec
                    heridos, con discapacidad adquirida, sus familias y las familias de los fallecidos en cumplimiento
                    de su deber.
                </Typography>


            </Box>
        </Box>
    </Box>
}