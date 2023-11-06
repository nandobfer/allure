import React from 'react'
import {Box, Button, SxProps} from '@mui/material'
import { Search } from '@mui/icons-material'
import { Logo } from './Logo'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Menu } from './Menu';

interface HeaderProps {
    
}

export const Header: React.FC<HeaderProps> = ({ }) => {
    
    const buttonStyle: SxProps = {
        borderRadius: '5vw',
        padding: '0vw 1vw',
    }
    
    return (
        <Box sx={{flexDirection: 'column', position: 'fixed', top: 0, bgcolor: 'white'}}>
            <Box sx={{bgcolor: 'primary.main', width: '100vw', justifyContent: 'center', color: 'white', padding: '0.5vw'}}>
                Primeira compra? Frete grátis + 20% OFF
            </Box>

            <Box sx={{justifyContent: 'space-between', width: '100vw', padding: '3vw 4vw 1vw 4vw', alignItems: 'center' }}>
                <Box sx={{gap: '0.5vw', alignItems: 'center', flex: 1}}>
                    <Search />
                    <Button color='secondary' sx={buttonStyle} variant='outlined'>buscar</Button>
                </Box>

                <Logo sx={{ justifyContent: 'center', width: '10vw'}} />

                <Box sx={{gap: '2vw', flex: 1, justifyContent: 'flex-end'}}>
                    <Button sx={buttonStyle} color='secondary' variant='outlined'>quiz da pele</Button>
                    <PersonOutlinedIcon />
                    <ShoppingBagOutlinedIcon />
                </Box>
            </Box>

            <Box sx={{borderTop: '1px solid', borderBottom: '1px solid', borderColor: '#cbcbcb', padding: '0.2vw 7vw', justifyContent: 'space-between'}}>
                <Menu name='kits incríveis' menus={['por rotinas', 'por necessidades', 'por ingredientes', 'para presentear','ver todos']} />
                <Menu name='por categoria' menus={['limpadores', 'hidratantes', 'séruns e óleos', 'para presentear', 'esfoliantes', 'gel', 'máscaras', 'corpo', 'cabelo', 'ver todos']} />
                <Menu name='por tipo de pele' menus={['todos os tipos', 'pele mista', 'pele seca', 'pele sensível', 'pele oleosa', 'ver todos']} />
                <Menu name='por necessidades' menus={[]} />
                <Menu name='por ingredientes' menus={[]} />
                <Menu name='por linhas' menus={[]} />
            </Box>
        </Box>
    )
}