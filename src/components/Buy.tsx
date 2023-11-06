import React, { useState } from "react"
import { Box, Button, IconButton } from "@mui/material"

interface BuyProps {}

export const Buy: React.FC<BuyProps> = ({}) => {
    const [quantity, setQuantity] = useState(1)

    const changeQuantity = (value: number) => {
        setQuantity((quantity) => {
            if (quantity + value < 1) return 1
            return quantity + value
        })
    }

    return (
        <Box sx={{ gap: "2vw", marginTop: "1vw" }}>
            <Box
                sx={{
                    padding: "1vw",
                    justifyContent: "space-between",
                    alignItems: "center",
                    border: "1px solid #727272",
                    borderRadius: "5vw",
                    gap: "2vw",
                    textAlign: "center",
                }}
            >
                <IconButton color="primary" onClick={() => changeQuantity(-1)}>
                    -
                </IconButton>
                <Box sx={{ width: "1vw", justifyContent: "center" }}>{quantity}</Box>
                <IconButton color="primary" onClick={() => changeQuantity(1)}>
                    +
                </IconButton>
            </Box>

            <Button variant="contained" sx={{ borderRadius: "5vw", color: "white", textTransform: "none", fontSize: "1.5vw", padding: "0 3vw" }}>
                comprar
            </Button>
        </Box>
    )
}
