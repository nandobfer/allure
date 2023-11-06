import React, { useState } from "react"
import { Box, Tabs as MuiTabs, SxProps, Tab } from "@mui/material"
import colors from "../style/colors"

interface TabsProps {}

const Tag: React.FC<{ name: string }> = ({ name }) => {
    return <Box sx={{ borderRadius: "5vw", border: "1px solid #727272", padding: "0.5vw", color: "#727272", fontSize: "1.2vw" }}>{name}</Box>
}

export const Tabs: React.FC<TabsProps> = ({}) => {
    const [currentTab, setCurrentTab] = useState(1)

    const tabStyle: SxProps = {
        textTransform: "none",
    }

    return (
        <Box sx={{ width: "100%", flexDirection: "column", gap: "1vw" }}>
            <MuiTabs value={currentTab} onChange={(_, value) => setCurrentTab(value)}>
                <Tab sx={tabStyle} label="o que ele tem" value={1} />
                <Tab sx={tabStyle} label="o que ele é" value={2} />
                <Tab sx={tabStyle} label="resultados" value={3} />
            </MuiTabs>

            <Box sx={{ gap: "1vw" }}>
                {currentTab == 1 && (
                    <>
                        <Tag name="ácido salicílico 2%" />
                        <Tag name="melaleuca" />
                        <Tag name="niacinamida" />
                    </>
                )}
                {currentTab == 2 && (
                    <>
                        <Tag name="químico" />
                        <Tag name="cosmético" />
                        <Tag name="produto para face" />
                    </>
                )}
                {currentTab == 3 && (
                    <>
                        <Tag name="uma pele fascinante" />
                    </>
                )}
            </Box>
            <p style={{ color: colors.primary, textDecoration: "underline", alignSelf: "center" }}>ver detalhes dos ingredientes</p>
        </Box>
    )
}
