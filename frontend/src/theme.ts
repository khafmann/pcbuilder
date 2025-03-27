import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            dark: '#512DA8',
            light: '#D1C4E9',
            main: '#673AB7',
            contrastText: '#FFFFFF'
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000'
        },
        background: {
            default: "#536DFE",
            paper: "#D1C4E9" // Цвет фона карточек
        },
        text: {
            primary: "#512DA8"
        },
    },
    typography: {
        fontFamily: "Roboto, Arial, sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 700,
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.5,
        },
    }
});

export default theme;
