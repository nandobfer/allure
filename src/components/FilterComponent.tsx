import React, { useState } from "react"
import { Box, Button, Checkbox, Collapse, FormControlLabel, MenuItem } from "@mui/material"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"

interface FilterProps {
    title: string
    items: string[]
}

export const Filter: React.FC<FilterProps> = ({ title, items }) => {
    const [open, setOpen] = useState(true)

    return (
        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
            <Button
                onClick={() => setOpen((open) => !open)}
                variant="contained"
                sx={{
                    borderRadius: "5vw",
                    textTransform: "none",
                    bgcolor: "#EFEFEF",
                    transition: "0.5s",
                    fontSize: "1.1vw",
                    width: "15vw",
                    justifyContent: "space-between",
                    padding: "0.2vw 1.5vw",
                    boxShadow: "none",
                }}
                endIcon={<KeyboardArrowUpIcon sx={{ rotate: open ? "" : "180deg" }} />}
            >
                {title}
            </Button>
            <Collapse in={open}>
                <Box sx={{ flexDirection: "column" }}>
                    {items.map((item) => (
                        <FormControlLabel control={<Checkbox />} label={item} sx={{ color: "#727272" }} />
                    ))}
                </Box>
            </Collapse>
        </Box>
    )
}
