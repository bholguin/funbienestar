import { Typography } from "@mui/material"
import { Styled } from "./Footer.styles"
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
export const Footer = () => {
    return <Styled.Content>
        <Styled.CompanyInfo>
            <Typography variant="h4" color={'white'} padding={0}>FUNBIENESTAR</Typography>
            <Typography variant="h6" color={'white'}>FUNDACION NACIONAL DE BIENESTAR SOCIAL.</Typography>
        </Styled.CompanyInfo>
        <Styled.CompanySocial>
            <Styled.CompanyContact>
                <WhatsAppIcon style={{ color: 'white' }} /> <Styled.SocialOption>+57 311 827 0406</Styled.SocialOption>
            </Styled.CompanyContact>
            <Styled.CompanyContact>
                <EmailIcon style={{ color: 'white' }} /> <Styled.SocialOption>funbienestar@outlook.com</Styled.SocialOption>
            </Styled.CompanyContact>
            <Styled.CompanyContact>
                <FacebookIcon style={{ color: 'white' }} /> <Styled.SocialOption>funbienestar</Styled.SocialOption>
            </Styled.CompanyContact>
            <Styled.CompanyContact>
                <InstagramIcon style={{ color: 'white' }} /> <Styled.SocialOption>funbienestar</Styled.SocialOption>
            </Styled.CompanyContact>
        </Styled.CompanySocial>


    </Styled.Content>
}