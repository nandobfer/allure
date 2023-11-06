import React from "react"
import { Avatar, Box } from "@mui/material"
import { useArray } from "burgos-array"
import BrokenImageIcon from "@mui/icons-material/BrokenImage"

interface ImagesProps {
    product: Product
    setCurrentImage: React.Dispatch<React.SetStateAction<number>>
}

export const Images: React.FC<ImagesProps> = ({ product, setCurrentImage }) => {
    const imageList = useArray().newArray(3)

    return (
        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
            {imageList.map((index) => {
                const src = `/Id ${product.id}.${index}.webp`

                return (
                    <Avatar
                        variant="square"
                        src={src}
                        sx={{
                            width: "7vw",
                            height: "7vw",
                            cursor: "pointer",
                            bgcolor: "primary.main",
                            borderRadius: "1.5vw",
                        }}
                        onClick={() => setCurrentImage(index)}
                    >
                        <BrokenImageIcon />
                    </Avatar>
                )
            })}
        </Box>
    )
}
