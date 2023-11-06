import { createTheme } from "@mui/material"
import colors from "../style/colors"

export const useMuiTheme = () => {
    const THEME = createTheme({
        typography: {
            fontFamily: ["Montserrat", "Futura Medium BT"].join(","),
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
