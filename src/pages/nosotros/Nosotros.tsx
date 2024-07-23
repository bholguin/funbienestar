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
            width: "100%",
            display: 'flex',
            paddingTop: '2rem',
            position: 'relative',
            justifyContent: 'center',
            minHeight: '60vh',
            "::before": {
                content: '" "',
                position: 'absolute',
                backgroundImage: 'url(/assets/discapacitados.png)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: "50% 35%",
                backgroundSize: 'cover',
                width: { lg: '70%' },
                margin: '0 auto',
                top: { xs: '370px', sm: '200px', md: '120px', lg: '180px' },
                right: '0px',
                bottom: '0px',
                left: '0px',
            }
        }}>
            <Box sx={{
                width: { xs: '90%', lg: '60%' },
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'absolute',
                padding: '.5rem',
                backgroundColor: 'rgba(255,255,255,0.7)',
                borderRadius: '10px'
            }}>
                <Typography variant="h1">Misión</Typography>
                <Typography variant="body1">
                    Somos una institución sin ánimo de lucro que promueve la protección en necesidades básicas de salud, nutrición y recreación de la primera infancia,
                    adultos mayores y personas en situación de discapacidad; así como también fomentamos programas y proyectos de inclusión social, educativa y económica.
                </Typography>

                <Typography variant="h1">Visión</Typography>
                <Typography variant="body1">
                    Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora en la calidad de vida de las personas beneficiarias, para así contribuir
                    al desarrollo de nuestra patria colombiana de forma exitosa con profesionales que presten sus servicios con amor, pasión y honestidad.
                </Typography>
            </Box>

        </Box>
        <Box>

        </Box>
    </>

}