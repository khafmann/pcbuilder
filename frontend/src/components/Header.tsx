import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
    const theme = useTheme();

    return (
        <Box
            component="header"
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "98%",
                backgroundColor: theme.palette.primary.main,
                padding: "10px 20px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                zIndex: theme.zIndex.appBar,
                boxShadow: theme.shadows[4],
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    fontWeight: "bold",
                    color: theme.palette.primary.light,
                    '& span': {
                        color: theme.palette.common.white
                    }
                }}>
                pcbuilder<span>.kz</span>
            </Typography>

            <Box sx={{ display: "flex", gap: "20px" }}>
                <Typography
                    component={Link}
                    to="/faq"
                    variant="body1"
                    sx={{
                        color: theme.palette.common.white,
                        fontWeight: "bold",
                        cursor: "pointer",
                        textDecoration: "none",
                        '&:hover': {
                            color: theme.palette.secondary.light
                        }
                    }}>
                    FAQ
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.common.white,
                        fontWeight: "bold",
                        cursor: "pointer",
                        '&:hover': {
                            color: theme.palette.secondary.light
                        }
                    }}>
                    Контакты
                </Typography>
            </Box>
        </Box>
    );
}