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
        <Box sx={{ flexDirection: "column", padding: "3vw 5vw", gap: "2vw", paddingTop: hideQuantity ? "" : "0" }}>
            <Box sx={{ flexDirection: "column" }}>
                <p style={{ fontSize: hideQuantity ? "3vw" : "2vw" }}>{title}</p>
                {!hideQuantity && <p style={{ color: "grey", fontSize: "1.5vw" }}>{list.length} resultados</p>}
            </Box>

            <Box sx={{ flexWrap: "wrap", gap: "1vw", width: hideQuantity ? "100vw" : "70vw" }}>
                {list.map((product) => (
                    <ProductComponent product={product} />
                ))}
            </Box>
        </Box>
    )
}
