import { createTheme } from "@mui/material"
import colors from "../style/colors"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["Tilda"].join(","),
        },
        palette: {
            primary: {
                main: colors.primary,
            },
            secondary: {
                main: colors.secondary,
            },
        },
    })

    return THEME
}
