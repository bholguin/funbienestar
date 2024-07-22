import { Box, Typography } from "@mui/material"
import { useEffect } from "react"

export const Nosotros = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>
        <Box
            sx={{
                position: 'relative',
                minHeight: { xs: '200px', md: '400px' },
                overflow: 'hidden',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                "::before": {
                    content: '" "',
                    position: 'absolute',
                    backgroundImage: 'url(/assets/inpec-helps.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: { xs: "50% 50%", md: "50% 32%" },
                    backgroundSize: 'cover',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                    opacity: '0.7'
                }
            }}
        >
            <Typography sx={{
                position: 'relative',
                fontSize: { xs: "2.5rem", md: '4rem' },
                fontWeight: 'bold',
                color: 'white',
                textShadow: '4px 4px 6px rgba(0,0,0,0.70)',
            }}>
                Quienes Somos
            </Typography>
        </Box>
        <Box sx={{
            width: { xs: '90%', lg: '60%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingTop: '3rem',
            paddingBottom: '3rem',
            position: 'relative'
        }}>

            <Typography align="justify">
                La <b>FUNDACION NACIONAL DE BIENESTAR SOCIAL</b> es una entidad autónoma de servicio social, de
                carácter privado y sin ánimo de lucro con personería jurídica reconocida, comprometida con el
                bienestar social de nuestro país.
            </Typography>
            <Typography align="justify">
                su objetivo contribuir al desarrollo comunitario y social mediante la concepción, promoción y
                ejecución de planes y programas directos proyectando obras sociales.
            </Typography>
            <Typography align="justify">
                Desde hace años trabajamos con hombres y mujeres de las Fuerzas Militares y de Policía e inpec
                heridos, con discapacidad adquirida, sus familias y las familias de los fallecidos en cumplimiento
                de su deber.
            </Typography>
        </Box>
    </>

}