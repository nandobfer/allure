import React from "react"
import { Box } from "@mui/material"
import TuneIcon from "@mui/icons-material/Tune"
import { Filter } from "./FilterComponent"

interface FiltersProps {}

export const Filters: React.FC<FiltersProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "1vw" }}>
            <Box sx={{ gap: "1vw" }}>
                <TuneIcon /> FILTROS
            </Box>

            <Filter
                title="tipo de pele"
                items={["pele mista", "pele normal", "pele oleosa", "pele seca", "pele sensível", "todos os tipos de pele"]}
            />
            <Filter title="necessidades" items={["acnes", "linhas finas", "antipoluição"]} />
        </Box>
    )
}
