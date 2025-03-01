import {Box, Typography} from "@mui/material";

export default function Header(){
    return (
        <Box
            component="header"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                backgroundColor: "#121826",
                padding: "10px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#FFD700", textTransform: "lowercase" }}
            >
                pcbuilder<span style={{ color: "#ffffff" }}>.kz</span>
            </Typography>

            <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography variant="body1" sx={{ color: "#ffffff", fontWeight: "bold", cursor: "pointer" }}>
                    FAQ
                </Typography>
                <Typography variant="body1" sx={{ color: "#ffffff", fontWeight: "bold", cursor: "pointer" }}>
                    Контакты
                </Typography>
            </Box>
        </Box>
    );
}