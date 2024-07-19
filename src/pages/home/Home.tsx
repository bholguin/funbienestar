import { Box, styled, Typography } from "@mui/material"
import Carousel from 'react-material-ui-carousel'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Styled } from "./Home.styles";
import { useHome } from "./Home.hook";


export const Home = () => {
    const { options, aliados } = useHome()
    return <Box sx={{ width: '100%' }}>
        <Styled.CorouselContent>
            <Styled.WelcomeBox>
                <Typography variant="h3" color={'white'}>Bienvenidos a:</Typography>
                <Typography variant="h1" color={'white'}>FUNBIENESTAR</Typography>
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
                {options.map(item => (
                    <Styled.ImageStyled src={item.url} alt={item.url} />
                ))}
            </Carousel>
        </Styled.CorouselContent>
        <Styled.ContentMisionVision>
            <Styled.NextContent>
                <Typography variant="h1">Misión</Typography>
                <Typography variant="body1">
                    Somos una institución sun ánimo de lucro que promueve la protección en necesidades básicas de salud, nutrición y recreación de la primera infancia,
                    adultos mayores y personas en situación de discapacidad; así como también fomentamos programas y proyectos de inclusión social, educativa y económica.
                </Typography>
            </Styled.NextContent>
            <Styled.NextContent>
                <Typography variant="h1">Visión</Typography>
                <Typography variant="body1">
                    Ser una institución líder que promueva el trabajo digno por medio de la educación y la mejora en la calidad de vidade las personas beneficiarias, para así contribuir
                    al desarrollo de nuestra patria colombiana de forma exitosa con profesionales que presten sus servicios con amor, pasión y honestidad.
                </Typography>
            </Styled.NextContent>
        </Styled.ContentMisionVision>
        <Styled.SectionBox>
            <Styled.SectionBoxOptions>
                <img src="http://localhost:3000/assets/donate_icon.png" style={{
                    width: '100px'
                }} alt="" />
            </Styled.SectionBoxOptions>
            <Styled.SectionBoxOptions>
                <img src="http://localhost:3000/assets/heart_icon.png" style={{
                    width: '100px'
                }} alt="" />
            </Styled.SectionBoxOptions>
            <Styled.SectionBoxOptions>
                <img src="http://localhost:3000/assets/spade_icon.png" style={{
                    width: '100px'
                }} alt="" />
            </Styled.SectionBoxOptions>
        </Styled.SectionBox>


        <Box sx={{
            overflow: 'hidden',
            padding: '1rem',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            backgroundColor: 'white',
            width: {md: '50%', xs: '90%'}
        }}>
            <Typography variant="h1">Aliados</Typography>
            <Styled.AliadosBox>
                {aliados.map(item => (
                    <img style={{
                        marginRight: '40px'
                    }} height={'100px'} src={item.url} alt={item.url} />
                ))}
            </Styled.AliadosBox>
         <Styled.AliadosBox>
            {aliados.map(item => (
                    <img style={{
                        marginRight: '40px'
                    }} height={'100px'} src={item.url} alt={item.url} />
                ))}
            </Styled.AliadosBox> 
        </Box>

    </Box>
}