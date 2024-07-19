import { Box } from "@mui/material"
import { Header } from "../components/Header"
import { Outlet } from "react-router-dom"
import { Styled } from "./Layout.styles"

export const Layout = () => {
    return (
        <Box display={'flex'}>
            <Header />
            <Styled.LayoutStyled>
                <Outlet />
            </Styled.LayoutStyled>
        </Box>
    )
}