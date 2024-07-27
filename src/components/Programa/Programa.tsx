import { Box, Typography } from "@mui/material"
import { FC, memo, useEffect, useState } from "react"

type Props = {
    title: string
    description: string
    src: string
}

const MAX_STRING = 300

export const Programa: FC<Props> = memo((props) => {
    const [showDesc, setShowDesc] = useState(false)
    const handleShowDesc = () => setShowDesc(!showDesc);
    const [options, setOptions] = useState<{
        desc: string
        max: boolean
    }>({
        desc: '',
        max: false
    })

    useEffect(() => {
        setOptions({
            desc: props.description.length >= MAX_STRING ? `${props.description.substring(0, MAX_STRING)}...` : props.description ,
            max: props.description.length > MAX_STRING
        })
    }, [props.description])

    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: { xs: '200px', md: '400px' },
                overflow: 'hidden',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-end',
                borderRadius: '1rem'
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    height: '600px',
                    backgroundImage: `url(${props.src})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "50% 35%",
                    backgroundSize: 'cover',
                }}
            />

            <Box
                sx={{
                    position: 'absolute',
                    minHeight: '180px',
                    overflow: 'hidden',
                    width: '100%',
                    display: 'flex',
                    padding: '1rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    "::before": {
                        content: '" "',
                        position: 'absolute',
                        backgroundColor: 'rgba(38, 42, 49, 1)',
                        backgroundSize: 'contain',
                        top: '0px',
                        right: '0px',
                        bottom: '0px',
                        left: '0%',
                        opacity: '0.8'
                    }
                }}
            >
                <Typography sx={{
                    textAlign: 'start',
                    position: 'relative',
                    fontSize: { xs: "1.2rem", md: '1.5rem' },
                    fontWeight: 'bold',
                    color: 'white',
                    textShadow: '4px 4px 6px rgba(0,0,0,0.70)',
                }}>
                    {props.title}
                </Typography>
                <Typography sx={{
                    textAlign: 'justify',
                    position: 'relative',
                    color: 'white',
                }}>
                    {showDesc ? props.description : options.desc}
                    {options.max
                        ? <span onClick={handleShowDesc} style={{fontSize: '.8rem', cursor: 'pointer', marginLeft: '.5rem', textDecoration: 'underline'}}>{showDesc ? 'Leer menos' : 'Leer más'}</span>
                        : null
                    }
                </Typography>
            </Box>
        </Box>

    )
})