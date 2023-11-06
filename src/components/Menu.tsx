import React, { useRef, useState } from "react"
import { Box, Button, MenuItem, Paper, Menu as ReactMenu, Tooltip } from "@mui/material"
import { useNavigate } from "react-router-dom"

interface MenuProps {
    name: string
    menus: string[]
    location?: string
}

export const Menu: React.FC<MenuProps> = ({ name, menus, location }) => {
    const navigate = useNavigate()

    const [open, setOpen] = useState(false)

    return (
        <Tooltip
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            title={
                <Paper sx={{ flexDirection: "column", marginTop: "-1vw" }}>
                    {menus.map((menu) => (
                        <MenuItem key={menu} onClick={() => navigate(location || "/")}>
                            {menu}
                        </MenuItem>
                    ))}
                </Paper>
            }
            slotProps={{ tooltip: { sx: { bgcolor: "transparent" } } }}
            placement="bottom"
        >
            <Button
                // onMouseEnter={handleClick}
                // onClick={handleClick}
                sx={{
                    borderBottom: "3px solid",
                    borderColor: open ? "primary.main" : "white",
                    fontWeight: open ? "bold" : "",
                }}
            >
                <p style={{ color: "black" }}>{name}</p>
            </Button>
        </Tooltip>
    )
}
