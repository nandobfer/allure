import React, { useRef, useState } from "react"
import { Box, Button, MenuItem, Paper, Menu as ReactMenu, Tooltip } from "@mui/material"

interface MenuProps {
    name: string
    menus: string[]
}

export const Menu: React.FC<MenuProps> = ({ name, menus }) => {
    const [open, setOpen] = useState(false)

    return (
        <Tooltip
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            title={
                <Paper sx={{ flexDirection: "column", marginTop: "-1vw" }}>
                    {menus.map((menu) => (
                        <MenuItem key={menu} onClick={() => {}}>
                            {menu}
                        </MenuItem>
                    ))}
                </Paper>
            }
            slotProps={{ tooltip: { sx: { bgcolor: "transparent" } } }}
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
