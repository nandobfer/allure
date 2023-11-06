import React from "react"
import { Box, Checkbox, Rating } from "@mui/material"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import colors from "../style/colors"
import { Buy } from "./Buy"
import { Tabs } from "./Tabs"
import { HowUse } from "./HowUse"
import { PayWith } from "./PayWith"

interface ProductDataProps {
    product: Product
}

const WhatDo: React.FC<{ description: string }> = ({ description }) => {
    return (
        <Box sx={{ fontSize: "1.2vw", color: "#727272", alignItems: "center" }}>
            <Checkbox checkedIcon={<CheckCircleIcon />} checked={true} />
            {description}
        </Box>
    )
}

const Icon: React.FC<{ text: string; src: string }> = ({ text, src }) => {
    return (
        <Box sx={{ flexDirection: "column", color: "#727272", width: "5vw", alignItems: "center", textAlign: "center", gap: "1vw" }}>
            <img src={src} style={{ width: "3vw", height: "3vw" }} />
            {text}
        </Box>
    )
}

export const ProductData: React.FC<ProductDataProps> = ({ product }) => {
    return (
        <Box sx={{ flexDirection: "column", height: "40vw", overflowY: "auto", marginLeft: "3vw", gap: "1vw", width: "45vw", paddingBottom: "10vw" }}>
            <Box sx={{ gap: "1vw", fontSize: "1.7vw", alignItems: "center" }}>
                {product.name}
                <Box sx={{ fontSize: "0.7vw", bgcolor: colors.terciary, padding: "0.3vw 0.6vw", borderRadius: "0.3vw" }}>200ml</Box>
            </Box>

            <Box sx={{ gap: "1vw", fontSize: "1.2vw", alignItems: "center", color: "#727272", textDecoration: "line-through" }}>R$ 69,90</Box>

            <Box sx={{ gap: "0.5vw", fontSize: "1.7vw", alignItems: "center" }}>
                R$ 64,90
                <Box sx={{ color: "#727272", fontSize: "1.2vw" }}>ou 2x R$ 32,45</Box>
            </Box>

            <Box sx={{ gap: "0.5vw", alignItems: "center", color: "#727272", fontSize: "1.2vw" }}>
                <Rating value={4.5} precision={0.5} />
                4.5
                <Box sx={{ marginLeft: "1vw", textDecoration: "underline" }}>770 resenhas</Box>
            </Box>

            <Box sx={{ flexDirection: "column", paddingTop: "1vw", fontSize: "1.5vw" }}>
                o que ele faz?
                <WhatDo description="limpa profundamente e retira maquiagens leves sem ressecar" />
                <WhatDo description="controla a oleosidade" />
                <WhatDo description="auxilia no tratamento de espinhas e cravos" />
                <WhatDo description="minimiza poros dilatados" />
                <WhatDo description="pode ser usado em outras regiões acneicas do corpo" />
            </Box>

            <Box
                sx={{
                    marginTop: "1vw",
                    fontSize: "1.5vw",
                    bgcolor: colors.terciary,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "5vw",
                    width: "100%",
                }}
            >
                frete grátis acima de R$ 1191
                <Box sx={{ color: "#727272", padding: "0.5vw", fontSize: "1.2vw" }}>frete fixo por 9,90</Box>
            </Box>

            <Buy />
            <Tabs />

            <Box sx={{ width: "100%", justifyContent: "space-between", padding: "1vw 1vw" }}>
                <Icon text="vegano" src="/icone 1.webp" />
                <Icon text="sem crueldade" src="/icone 2.webp" />
                <Icon text="dermatologicamente testado" src="/icone 3.webp" />
                <Icon text="recliclável" src="/icone 4.webp" />
            </Box>

            <HowUse />
            <PayWith />
        </Box>
    )
}
