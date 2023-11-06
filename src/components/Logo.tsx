import React from 'react'
import {Box, SxProps} from '@mui/material'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom"

interface LogoProps {
    sx?: SxProps
}

export const Logo:React.FC<LogoProps> = ({ sx }) => {
    const navigate = useNavigate()
    
    return (
        <Box sx={sx} onClick={() => navigate("/")}>
            <img src={logo} style={{ width: "100%", height: "100%" }} />
        </Box>
    )
}