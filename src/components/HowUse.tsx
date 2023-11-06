import React from "react"
import { Box } from "@mui/material"
import colors from "../style/colors"

interface HowUseProps {}

export const HowUse: React.FC<HowUseProps> = ({}) => {
    const list = [
        { id: 1, text: "coloque sobre as mãos úmidas uma pequena quandidade do Limpador Antiacne." },
        { id: 2, text: "esfregue as mãos até formar uma espuma cremosa." },
        { id: 3, text: "aplique a espuma no rosto também úmido, inclusive na área dos olhos, massageando suavemente com movimentos circulares." },
        { id: 4, text: "exágue com água em abundância e sinta na pele uma limpeza profunda com toque macio." },
    ]

    return (
        <Box
            sx={{
                flexDirection: "column",
                width: "100%",
                bgcolor: colors.terciary,
                alignItems: "center",
                color: "#727272",
                fontSize: "1.3vw",
                padding: "1vw",
                borderRadius: "0.5vw",
                gap: "1vw",
            }}
        >
            como usar essa formula?
            <Box sx={{ flexDirection: "column", bgcolor: "white", width: "100%", borderRadius: "0.5vw", padding: "1vw", gap: "1vw" }}>
                {list.map((item) => (
                    <Box key={item.id} sx={{ color: "#727272", alignItems: "center", fontSize: "1.2vw", gap: "0.5vw" }}>
                        <Box
                            sx={{
                                borderRadius: "100%",
                                padding: "0.5vw",
                                fontSize: "1.5vw",
                                justifyContent: "center",
                                alignItems: "center",
                                color: "black",
                                border: "1px solid black",
                                width: "3vw",
                                height: "3vw",
                            }}
                        >
                            {item.id}
                        </Box>
                        {item.text}
                    </Box>
                ))}
            </Box>
        </Box>
    )
}
