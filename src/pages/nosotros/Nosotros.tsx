import { Box, Typography, Card, CardHeader, CardContent, styled } from "@mui/material"
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import LightbulbCircleIcon from '@mui/icons-material/LightbulbCircle';

const ImageStyled = styled('img')(({theme}) => ({
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
        width:{ sm: '90%',  lg:'60%'},
        display: 'flex',
        flexDirection: 'column',
        gap: '3rem',
        paddingTop: '3rem'
    }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', lg: 'row' }, gap: '2rem', justifyContent: 'center', alignItems: 'center' }}>
            <ImageStyled
                src="http://localhost:3000/assets/nosotros-img.jpeg"
                alt="nosotros-img"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Typography variant="h4">Nosotros</Typography>
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
        <Box sx={{
            display: 'flex',
            gap: '2rem',
            flexDirection: { xs: 'column', md: 'row' }
        }}>
            <Card variant="elevation" style={{
                background: 'linear-gradient(135deg, rgba(97,40,6,1) 0%, rgba(226,102,27,1) 35%, rgba(255,165,111,1) 100%)',
                borderRadius: '10px',
                boxShadow: '10px 15px 59px -8px rgba(0,0,0,0.74)'
            }}>
                <CardHeader title={
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CrisisAlertIcon style={{ fontSize: '3rem' }} />
                        <Typography variant="h3">Misión</Typography>
                    </Box>
                } style={{ color: 'white' }} />
                <CardContent>
                    <Typography align="justify" color={'white'} >
                        Somos una institución sun ánimo de lucro que promueve la protección en necesidades básicas de salud, nutrición y recreación de la primera infancia,
                        adultos mayores y personas en situación de discapacidad; así como también fomentamos programas y proyectos de inclusión social, educativa y económica.
                    </Typography>
                </CardContent>
            </Card>
            <Card style={{
                background: 'linear-gradient(135deg, rgba(6,26,88,1) 0%, rgba(33,46,86,1) 35%, rgba(83,115,213,1) 100%)',
                   borderRadius: '10px',
                boxShadow: '10px 15px 59px -8px rgba(0,0,0,0.74)'
            }}>
                <CardHeader title={
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <LightbulbCircleIcon style={{ fontSize: '3rem' }} />
                        <Typography variant="h3">Visión</Typography>
                    </Box>
                } style={{ color: 'white' }} />
                <CardContent>
                    <Typography align="justify" color={'white'} >
                        Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora en la calidad de vidade las personas beneficiarias, para así contribuir
                        al desarrollo de nuestra patria colombiana de forma exitosa con profesionales que presten sus servicios con amor, pasión y honestidad.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    </Box>
}