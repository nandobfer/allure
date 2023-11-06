import React, { useState } from "react"
import { Box, Rating } from "@mui/material"
import colors from "../style/colors"
import { useNavigate } from "react-router-dom"

interface ProductComponentProps {
    product: Product
}

export const ProductComponent: React.FC<ProductComponentProps> = ({ product }) => {
    const navigate = useNavigate()

    const [hovered, setHovered] = useState(false)

    return (
        <Box
            sx={{ flexDirection: "column", width: "22vw", gap: "0.5vw", paddingBottom: "3vw", height: "35vw", cursor: "pointer" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={() => navigate("/product", { state: { product } })}
        >
            <img src={`/Id ${product.id}.1.webp`} style={{ width: "100%", height: "22vw", objectFit: "fill" }} />
            {product.new ? (
                <Box
                    sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        padding: "0.2vw 0.4vw",
                        width: "max-content",
                        fontSize: "0.8vw",
                        borderRadius: "0.5vw",
                    }}
                >
                    novidade
                </Box>
            ) : (
                <Rating value={4} />
            )}
            <p style={{ fontSize: "1.5vw", color: hovered ? colors.primary : "" }}>{product.name}</p>
            <p style={{ fontSize: "1vw", color: "grey" }}>{product.description}</p>
        </Box>
    )
}
