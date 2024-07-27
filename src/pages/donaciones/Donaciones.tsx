import { Box, ImageListItem, Typography } from "@mui/material"
import { useDonaciones } from "./Donaciones.hook"
import { Styled } from "./Donaciones.styles"
import CreditCardIcon from '@mui/icons-material/CreditCard';

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
            <Typography style={{textAlign: 'start'}}>
                Apoyamos la inclusión laboral formal de los beneficiarios con
                discapacidad y sus familias. Hacemos acompañamiento a nuestros
                héroes y a las empresas que así lo deseen.
                Construimos alianzas con empresas privadas y empresarios para
                crear oportunidades laborales.
            </Typography>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                fontSize: '1.3rem'
            }}>
                <CreditCardIcon style={{fontSize: '1.8rem'}} /> XXXX-XXXX-XXXX-XXXX - Bank1
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '.5rem',
                fontSize: '1.3rem'
            }}>
                <CreditCardIcon style={{fontSize: '1.8rem'}} /> XXXX-XXXX-XXXX-XXXX - Bank2
            </Box>
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