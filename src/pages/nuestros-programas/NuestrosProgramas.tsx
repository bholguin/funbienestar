import { Box} from "@mui/material"
import { useEffect } from "react"
import { Programa } from "../../components/Programa"


export const NuestrosProgramas = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Box sx={{
            width: { xs: '90%', lg: '60%' },
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm:'50% 50%'},
            flexDirection: 'column',
            gap:{ xs:'1rem',   md:'2.5rem'},
            paddingTop: '5rem',
            paddingBottom: '1rem',

        }}>

            <Programa
                src="/assets/juegos-olimpicos.jpeg"
                title=" PATROCINIO A DEPORTISTAS"
                description="Patrocinamos deportistas de alto rendimiento y equipos deportivos. Los apoyamos para participar en eventos nacionales e internacionales de diferentes disciplinas, que les permitan clasificar a los mundiales y juegos paralímpicos."
            />
            <Programa
                src="/assets/img-web-5.jpg"
                title="APOYO A PARTIR DE SU RETIRO"
                description="ofrece apoyo a nuestras familias de veteranos, retirados. Nuestra vida militar no termina. Una vez
                        afuera es cuando más apoyo nuestras familias necesitan. En este grupo de apoyo, nuestros grupos
                        comparten sus experiencias que les permite educarse de programas, ayudas, recursos para
                        nuestros veteranos, y retirados."
            />
            <Programa
                src="/assets/img-web-1.jpg"
                title=" MATERIAL DE REHABILITACIÓN"
                description="Entrega de material de rehabilitación física (muletas, caminador, sillas de ruedas, bastón) Para el personal que lo requiera."
            />
            <Programa
                src="/assets/imagen-1.jpeg"
                title="ORIENTACIÓN EN PROCESOS JURÍDICOS"
                description="Personal calificado atento para orientar en todo lo relacionado con procesos jurídicos."
            />
            <Programa
                src="/assets/img-web-8.jpg"
                title="ORIENTACIÓN PSICOLÓGICA"
                description="Personal profesional calificado para prestar orientación, acompañamiento y proporcionar un alivio
                        a las personas que se enfrentan a cambios y momento difíciles."
            />
            <Programa
                src="/assets/nosotros-img.jpeg"
                title="BIENESTAR SOCIAL"
                description="Con el fin de contribuir a un entorno social sano y solidario, se presenta el programa de Bienestar
                        social propuesto para los servidores públicos a nivel nacional, en la búsqueda de una mejor calidad
                        de vida, exaltando así la labor del servidor, intensificando además una cultura que manifieste en
                        sus servidores un sentido de pertenencia y solidaridad. Los cambios que experimenta el Estado
                        Colombiano demandan el fortalecimiento Institucional de la Administración Pública; en este
                        sentido, los programas de funbienestar se convierten en un componente esencial del desarrollo
                        armónico e integral de nuestros afiliados."
            />
        </Box>
    )
}