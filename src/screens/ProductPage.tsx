import React, { useEffect, useState } from "react"
import { Avatar, Box, IconButton } from "@mui/material"
import { Header } from "../components/Header"
import { useLocation, useNavigate } from "react-router-dom"
import { Images } from "../components/Images"
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown"
import BrokenImageIcon from "@mui/icons-material/BrokenImage"
import { ProductData } from "../components/ProductData"

interface ProductPageProps {}

export const ProductPage: React.FC<ProductPageProps> = ({}) => {
    const product: Product | undefined = useLocation().state?.product
    const navigate = useNavigate()

    const [currentImage, setCurrentImage] = useState(1)

    const changeImage = (value: number) => {
        setCurrentImage((image) => {
            if (image + value > 3) {
                return 1
            } else if (image + value < 1) {
                return 3
            } else {
                return image + value
            }
        })
    }

    useEffect(() => {
        if (!product) navigate("/")
    }, [product])

    return product ? (
        <Box sx={{ flexDirection: "column", overflowY: "hidden" }}>
            <Header />

            <Box sx={{ padding: "13vw 3vw 3vw", gap: "1vw" }}>
                <Images product={product} setCurrentImage={setCurrentImage} />

                <Box
                    sx={{
                        position: "relative",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "35vw",
                        height: "35vw",
                        padding: "1vw",
                    }}
                >
                    <Avatar
                        variant="square"
                        src={`/Id ${product.id}.${currentImage}.webp`}
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "35vw",
                            height: "35vw",
                            // bgcolor: "primary.main",
                            borderRadius: "2vw",
                        }}
                    >
                        <BrokenImageIcon />
                    </Avatar>
                    <IconButton onClick={() => changeImage(-1)}>
                        <ExpandCircleDownIcon sx={{ rotate: "90deg", color: "#fff" }} />
                    </IconButton>
                    <IconButton onClick={() => changeImage(1)}>
                        <ExpandCircleDownIcon sx={{ rotate: "-90deg", color: "#fff" }} />
                    </IconButton>
                </Box>

                <ProductData product={product} />
            </Box>
        </Box>
    ) : (
        <></>
    )
}
