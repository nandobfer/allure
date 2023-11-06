import React from 'react'
import {Box, Button, MenuItem, Menu as ReactMenu} from '@mui/material'

interface MenuProps {
    name: string
    menus: string[]
}

export const Menu: React.FC<MenuProps> = ({ name, menus }) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    }
    
    const handleClose = () => {
        setAnchorEl(null);
      };
      
    return (
        <Box sx={{ flex: 1 }}>
            <Button
                // onMouseEnter={handleClick}
                // onMouseLeave={handleClose}
                onClick={handleClick}
                sx={{
                    borderBottom: "3px solid",
                    borderColor: open ? "primary.main" : "white",
                    fontWeight: open ? "bold" : "",
                }}
            >
                <p style={{ color: "black" }}>{name}</p>
            </Button>
            <ReactMenu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    "aria-labelledby": "basic-button",
                    onMouseLeave: handleClose,
                }}
                // elevation={0}
            >
                {menus.map((menu) => (
                    <MenuItem key={menu} onClick={handleClose}>
                        {menu}
                    </MenuItem>
                ))}
            </ReactMenu>
        </Box>
    )
}