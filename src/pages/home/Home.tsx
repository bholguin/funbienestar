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
                NextIcon={<ArrowForwardIosIcon />}  
                PrevIcon={<ArrowBackIosNewIcon />}
            >
                {options.map((item, index) => (
                    <Styled.ImageStyled key={"carousel" + index} src={item.url} alt={item.url} loading="lazy" />
                ))}
            </Carousel>
        </Styled.CorouselContent>
        <Styled.ContentMisionVision>
            <Styled.NextContent>
                <Typography align="justify" position={'relative'}>
                    La <b>FUNDACION NACIONAL DE BIENESTAR SOCIAL</b> es una entidad autónoma de servicio social, de
                    carácter privado y sin ánimo de lucro con personería jurídica reconocida, comprometida con el
                    bienestar social de nuestro país.
                </Typography>
                <Typography align="justify" position={'relative'}>
                    su objetivo contribuir al desarrollo comunitario y social mediante la concepción, promoción y
                    ejecución de planes y programas directos proyectando obras sociales.
                </Typography>
                <Typography align="justify" position={'relative'}>
                    Desde hace años trabajamos con hombres y mujeres de las Fuerzas Militares y de Policía e inpec
                    heridos, con discapacidad adquirida, sus familias y las familias de los fallecidos en cumplimiento
                    de su deber.
                </Typography>
            </Styled.NextContent>
        </Styled.ContentMisionVision>
        <Styled.SectionBox>
            <video controls>
                <source src="/assets/video.mp4" type="video/mp4" />
            </video>

            {/* <Styled.SectionBoxOptions>
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
            </Styled.SectionBoxOptions> */}
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