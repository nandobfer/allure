import React from "react"
import { Avatar, Box, Grid } from "@mui/material"
import { ProductComponent } from "./ProductComponent"

interface ProductListProps {
    list: Product[]
    title: string
    hideQuantity?: boolean
}

export const ProductList: React.FC<ProductListProps> = ({ list, title, hideQuantity }) => {
    return (
        <Box sx={{ flexDirection: "column", padding: "3vw 5vw", gap: "2vw" }}>
            <p style={{ fontSize: "3vw" }}>{title}</p>
            {!hideQuantity && <p style={{ color: "grey", fontSize: "2vw" }}>{list.length} resultados</p>}

            <Box sx={{ flexWrap: "wrap", gap: "1vw", width: "100vw" }}>
                {list.map((product) => (
                    <ProductComponent product={product} />
                ))}
            </Box>
        </Box>
    )
}
