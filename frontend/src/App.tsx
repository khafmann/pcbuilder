import {Outlet} from "react-router-dom";
import Header from "./components/Header"
import {GlobalStyles} from "@mui/material";

function App() {
    return (
        <>
            <GlobalStyles
                styles={{
                    body: {
                        backgroundColor: "#FFFFFF", // Цвет фона
                        minHeight: "100vh"
                    },
                }}
            />
            <Header/>
            <Outlet></Outlet>
        </>
    )
}

export default App;
