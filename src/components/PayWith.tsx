import React from "react"
import { Box } from "@mui/material"
import PixIcon from "@mui/icons-material/Pix"
import ReceiptIcon from "@mui/icons-material/Receipt"
import CreditCardIcon from "@mui/icons-material/CreditCard"
import CachedIcon from "@mui/icons-material/Cached"

interface PayWithProps {}

export const PayWith: React.FC<PayWithProps> = ({}) => {
    const iconWrapperStyle = { gap: "0.5vw", alignItems: "center", color: "#727272" }

    return (
        <Box
            sx={{
                borderRadius: "0.5vw",
                width: "100%",
                flexDirection: "column",
                padding: "1vw 0",
                color: "primary.main",
                fontSize: "1.2vw",
                alignItems: "center",
                gap: "1vw",
                border: "1px solid #727272",
            }}
        >
            pague com
            <Box sx={{ gap: "1vw" }}>
                <Box sx={iconWrapperStyle}>
                    <PixIcon />
                    pix
                </Box>
                <Box sx={iconWrapperStyle}>
                    <CreditCardIcon />
                    cartão de crédito em 2x
                </Box>
                <Box sx={iconWrapperStyle}>
                    <ReceiptIcon />
                    boleto
                </Box>
            </Box>
            <hr style={{ width: "100%" }} />
            <Box sx={iconWrapperStyle}>
                <CachedIcon />
                reembolso garantido em 30 dias em compras no site
            </Box>
        </Box>
    )
}
