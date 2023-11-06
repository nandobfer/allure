import React from "react"
import { Box } from "@mui/material"
import { Header } from "../components/Header"
import { Filters } from "../components/Filters"
import { Route, Routes } from "react-router-dom"
import { ProductList } from "../components/ProductList"
import products from "../product_list"

interface ProductsProps {}

export const Products: React.FC<ProductsProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column" }}>
            <Header />
            <Box sx={{ gap: "2vw", padding: "15vw 5vw 5vw" }}>
                <Filters />
                <Routes>
                    <Route path="kits" element={<ProductList title="kits presenteáveis" list={products.kits} />} />
                    <Route path="cleaners" element={<ProductList title="limpadores" list={products.cleaners} />} />
                    <Route path="oiled_skin" element={<ProductList title="para peles oleosas" list={products.oiled_skin} />} />
                </Routes>
            </Box>
        </Box>
    )
}
