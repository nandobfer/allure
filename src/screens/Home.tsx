import React from 'react'
import {Box} from '@mui/material'
import { Header } from '../components/Header'
import cover from '../assets/cover.webp'
import banner1 from '../assets/banner1.webp'
import { ProductList } from "../components/ProductList"
import product_list from "../product_list"

interface HomeProps {
    
}

export const Home:React.FC<HomeProps> = ({  }) => {
    
    return (
        <Box sx={{ flexDirection: "column", paddingTop: "12vw" }}>
            <Header />
            <img src={cover} alt="" style={{ width: "100vw", height: "auto", marginLeft: -2 }} />
            <img src={banner1} alt="" style={{ width: "100vw", height: "auto", marginLeft: -2 }} />
            <ProductList title="Destaques" list={product_list.featured} hideQuantity />
        </Box>
    )
}