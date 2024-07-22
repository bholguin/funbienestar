import { Box, List, ListItem, ListItemText, styled, Typography } from "@mui/material"
import { useEffect } from "react"

const ListItemStyled = styled(ListItem)({
     display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start'
})

export const NuestrosProgramas = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Box sx={{
            width: { xs: '90%', lg: '60%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingTop: '3rem',
            paddingBottom: '1rem'
        }}>

            <Typography variant="h1" padding={0}>Nuestros Programas</Typography>
            <List style={{ display: 'flex', flexDirection: 'column', justifyContent: 'start', alignItems: 'flex-start', gap: '1rem' }}>
                <ListItemStyled>
                    <Typography variant="h3">
                        MATERIAL DE REHABILITACIÓN
                    </Typography>
                    <Typography variant="body1">
                        Entrega de material de rehabilitación física (muletas, caminador, sillas de ruedas, bastón) Para el personal que lo requiera.
                    </Typography>
                </ListItemStyled>
                <ListItemStyled>
                    <Typography variant="h3">
                        PATROCINIO A DEPORTISTAS
                    </Typography>
                    <Typography variant="body1">
                        Patrocinamos deportistas de alto rendimiento y equipos deportivos. Los apoyamos para participar en eventos nacionales e internacionales de diferentes disciplinas, que les permitan clasificar a los mundiales y juegos paralímpicos.
                    </Typography>
                </ListItemStyled>
                <ListItemStyled>
                    <Typography variant="h3">
                        APOYO A PARTIR DE SU RETIRO
                    </Typography>
                    <Typography variant="body1">
                        ofrece apoyo a nuestras familias de veteranos, retirados. Nuestra vida militar no termina. Una vez
                        afuera es cuando más apoyo nuestras familias necesitan. En este grupo de apoyo, nuestros grupos
                        comparten sus experiencias que les permite educarse de programas, ayudas, recursos para
                        nuestros veteranos, y retirados.
                    </Typography>
                </ListItemStyled>
                <ListItemStyled>
                    <Typography variant="h3">
                        ORIENTACIÓN EN PROCESOS JURÍDICOS
                    </Typography>
                    <Typography variant="body1">
                        Personal calificado atento para orientar en todo lo relacionado con procesos jurídicos
                    </Typography>
                </ListItemStyled>
                <ListItemStyled>
                    <Typography variant="h3">
                        ORIENTACIÓN PSICOLÓGICA
                    </Typography>
                    <Typography variant="body1">
                        Personal profesional calificado para prestar orientación, acompañamiento y proporcionar un alivio
                        a las personas que se enfrentan a cambios y momento difíciles.
                    </Typography>
                </ListItemStyled>
                <ListItemStyled>
                    <Typography variant="h3">
                        BIENESTAR SOCIAL
                    </Typography>
                    <Typography variant="body1">
                        Con el fin de contribuir a un entorno social sano y solidario, se presenta el programa de Bienestar
                        social propuesto para los servidores públicos a nivel nacional, en la búsqueda de una mejor calidad
                        de vida, exaltando así la labor del servidor, intensificando además una cultura que manifieste en
                        sus servidores un sentido de pertenencia y solidaridad. Los cambios que experimenta el Estado
                        Colombiano demandan el fortalecimiento Institucional de la Administración Pública; en este
                        sentido, los programas de funbienestar se convierten en un componente esencial del desarrollo
                        armónico e integral de nuestros afiliados.
                    </Typography>
                </ListItemStyled>
            </List>

        </Box>
    )
}