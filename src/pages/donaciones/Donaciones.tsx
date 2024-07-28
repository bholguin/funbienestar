import { Box, ImageListItem, Typography } from "@mui/material"
import { useDonaciones } from "./Donaciones.hook"
import { Styled } from "./Donaciones.styles"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from "react-router-dom";

export const Donaciones = () => {
    const { itemData } = useDonaciones()
    return (
        <Box sx={{
            width: { xs: '90%', lg: '60%' },
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            paddingTop: { xs: '3rem', md: '3rem' },
            paddingBottom: { xs: '1.5rem', md: '3rem' },

        }}>
            <Typography sx={{
                position: 'relative',
                fontSize: { xs: "2.5rem", md: '4rem' },
                fontWeight: 'bold',
                color: 'rgb(38, 42, 49)',
            }}>
                DONA AQUÍ
            </Typography>
            <Typography style={{ textAlign: 'start' }}>
                Apoyamos la inclusión laboral formal de los beneficiarios con
                discapacidad y sus familias. Hacemos acompañamiento a nuestros
                héroes y a las empresas que así lo deseen.
                Construimos alianzas con empresas privadas y empresarios para
                crear oportunidades laborales.
            </Typography>
            <Link
                target="_blank"
                to='https://wa.me/+573118270406'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '.3rem',
                    fontSize: '1.3rem',
                    textDecoration: 'underline'
                }}>
                <WhatsAppIcon style={{ fontSize: '2rem' }} /> 
                <Typography style={{padding: '0px'}}>Comunicate con nosotros para mas información</Typography>
            </Link>
            <Styled.BoxPhotos>
                <Styled.ImageListStyled
                    variant="quilted"
                    rowHeight={280}
                >
                    {itemData.map((item, index) => (
                        <ImageListItem key={item.img}>
                            <img
                                key={index}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </Styled.ImageListStyled>
            </Styled.BoxPhotos>
        </Box>



    )
}