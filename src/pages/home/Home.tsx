import { Box, ImageListItem, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Styled } from "./Home.styles";
import { useHome } from "./Home.hook";


export const Home = () => {
    const { options, aliados, itemData } = useHome()
    return <Box sx={{ width: '100%' }}>
        <Styled.CorouselContent>
            <Styled.WelcomeBox>
                <Typography variant="h3" color={'white'}>Bienvenidos a:</Typography>
                <Typography variant="h1" color={'white'} padding={0}>FUNBIENESTAR</Typography>
                <Typography variant="h5" color={'white'}>FUNDACION NACIONAL DE BIENESTAR SOCIAL</Typography>
                <Styled.ExpandCircleDownIconStyled />
            </Styled.WelcomeBox>
            <Carousel
                animation="fade"
                autoPlay
                swipe
                duration={2500}
                indicators={false}
                stopAutoPlayOnHover={false}
                NextIcon={<ArrowForwardIosIcon />}          // Change the "inside" of the next button to "next"
                PrevIcon={<ArrowBackIosNewIcon />}
            >
                {options.map((item, index) => (
                    <Styled.ImageStyled key={"carousel" + index} src={item.url} alt={item.url} loading="lazy" />
                ))}
            </Carousel>
        </Styled.CorouselContent>
        <Styled.ContentMisionVision>
            <Styled.NextContent>
                <Typography variant="h1">Misión</Typography>
                <Typography variant="body1">
                    Somos una institución sin ánimo de lucro que promueve la protección en necesidades básicas de salud, nutrición y recreación de la primera infancia,
                    adultos mayores y personas en situación de discapacidad; así como también fomentamos programas y proyectos de inclusión social, educativa y económica.
                </Typography>
            </Styled.NextContent>
            <Styled.NextContent>
                <Typography variant="h1">Visión</Typography>
                <Typography variant="body1">
                    Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora en la calidad de vida de las personas beneficiarias, para así contribuir
                    al desarrollo de nuestra patria colombiana de forma exitosa con profesionales que presten sus servicios con amor, pasión y honestidad.
                </Typography>
            </Styled.NextContent>
        </Styled.ContentMisionVision>
        <Styled.SectionBox>
            <Styled.SectionBoxOptions>
                <img src="/assets/donate_icon.png" style={{
                    width: '100px'
                }} alt="" />
            </Styled.SectionBoxOptions>
            <Styled.SectionBoxOptions>
                <img src="/assets/heart_icon.png" style={{
                    width: '100px'
                }} alt="" />
            </Styled.SectionBoxOptions>
            <Styled.SectionBoxOptions>
                <img src="/assets/spade_icon.png" style={{
                    width: '100px'
                }} alt="" />
            </Styled.SectionBoxOptions>
        </Styled.SectionBox>


        <Box sx={{
            overflow: 'hidden',
            padding: '2rem',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            backgroundColor: 'white',
            width: { md: '50%', xs: '90%' }
        }}>
            <Typography variant="h2" padding={1}>Aliados</Typography>
            <Styled.AliadosBox>
                {aliados.map((item, index) => (
                    <img
                        key={'carousel-2-' + index}
                        style={{
                            marginRight: '40px'
                        }}
                        height={'100px'}
                        src={item.url}
                        alt={item.url}
                        loading="lazy"
                    />
                ))}
            </Styled.AliadosBox>
            <Styled.AliadosBox>
                {aliados.map((item, index) => (
                    <img
                        key={'carousel-1-' + index}
                        style={{
                            marginRight: '40px'
                        }}
                        height={'100px'}
                        src={item.url}
                        alt={item.url}
                        loading="lazy"
                    />
                ))}
            </Styled.AliadosBox>
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
}