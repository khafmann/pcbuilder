import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { GlobalStyles, ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles styles={{ body: { backgroundColor: theme.palette.background.default, minHeight: "100vh" } }} />
            <Header />
            <Outlet />
        </ThemeProvider>
    );
}

export default App;
