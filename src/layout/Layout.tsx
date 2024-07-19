import { Box } from "@mui/material"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { Styled } from "./Layout.styles"
import { Footer } from "../components/Footer"

export const Layout = () => {
    return (
        <Box>
            <Header />
            <Styled.LayoutStyled>
                <Outlet />
            </Styled.LayoutStyled>
            <Footer />
        </Box>
    )
}