import { Box, List, ListItem, ListItemText, Typography } from "@mui/material"

export const NuestrosProgramas = () => {
    return(
        <Box sx={{
            width: { sm: '90%', lg: '60%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingTop: '3rem'
        }}>

            <Typography variant="h1" padding={0}>Nuestros Programas</Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary="MATERIAL DE REHABILITACIÓN"
                        secondary="Entrega de material de rehabilitación física (muletas, caminador, sillas de ruedas, bastón) Para el personal que lo requiera."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="PATROCINIO A DEPORTISTAS"
                        secondary="Patrocinamos deportistas de alto rendimiento y equipos deportivos. Los apoyamos para participar en eventos nacionales e internacionales de diferentes disciplinas, que les permitan clasificar a los mundiales y juegos paralímpicos."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="APOYO A PARTIR DE SU RETIRO"
                        secondary="ofrece apoyo a nuestras familias de veteranos, retirados. Nuestra vida militar no termina. Una vez
    afuera es cuando más apoyo nuestras familias necesitan. En este grupo de apoyo, nuestros grupos
    comparten sus experiencias que les permite educarse de programas, ayudas, recursos para
    nuestros veteranos, y retirados."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="ORIENTACIÓN EN PROCESOS JURÍDICOS"
                        secondary="Personal calificado atento para orientar en todo lo relacionado con procesos jurídicos"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="ORIENTACIÓN PSICOLÓGICA"
                        secondary="Personal profesional calificado para prestar orientación, acompañamiento y proporcionar un alivio
    a las personas que se enfrentan a cambios y momento difíciles."
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="BIENESTAR SOCIAL"
                        secondary="Con el fin de contribuir a un entorno social sano y solidario, se presenta el programa de Bienestar
    social propuesto para los servidores públicos a nivel nacional, en la búsqueda de una mejor calidad
    de vida, exaltando así la labor del servidor, intensificando además una cultura que manifieste en
    sus servidores un sentido de pertenencia y solidaridad. Los cambios que experimenta el Estado
    Colombiano demandan el fortalecimiento Institucional de la Administración Pública; en este
    sentido, los programas de funbienestar se convierten en un componente esencial del desarrollo
    armónico e integral de nuestros afiliados."
                    />
                </ListItem>
            </List>
    
        </Box>
    )
}