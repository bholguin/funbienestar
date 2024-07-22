import { ImageListItem } from "@mui/material"
import { useDonaciones } from "./Donaciones.hook"
import { Styled } from "./Donaciones.styles"

export const Donaciones = () => {
    const { itemData } = useDonaciones()
    return (
        <>
            Apoyamos la inclusión laboral formal de los beneficiarios con
            discapacidad y sus familias. Hacemos acompañamiento a nuestros
            héroes y a las empresas que así lo deseen.
            Construimos alianzas con empresas privadas y empresarios para
            crear oportunidades laborales.
            DONA AQUÍ


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
        </>
    )
}