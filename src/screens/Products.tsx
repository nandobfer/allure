import React from "react"
import { Box } from "@mui/material"
import { Header } from "../components/Header"
import { Filters } from "../components/Filters"

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <Header />
            <Box sx={{ gap: "5vw", padding: "15vw 5vw 5vw" }}>
                <Filters />
            </Box>
        </Box>
    )
}
