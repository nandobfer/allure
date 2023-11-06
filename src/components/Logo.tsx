import React from 'react'
import {Box, SxProps} from '@mui/material'
import logo from '../assets/logo.png'

interface LogoProps {
    sx?: SxProps
}

export const Logo:React.FC<LogoProps> = ({ sx }) => {
    
    return (
        <Box sx={sx}>
            <img src={logo} style={{width: '100%', height: '100%'}} />
        </Box>
    )
}