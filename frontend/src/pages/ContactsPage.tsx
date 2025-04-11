import { useState } from "react";
import { Typography, Box, useTheme, IconButton, Card, CardContent } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";

export default function FaqPage() {
    const theme = useTheme();
    const emails = ["khafmann@gmail.com", "khafmann@inbox.ru"];
    const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

    const handleCopy = (email: string) => {
        navigator.clipboard.writeText(email);
        setCopiedEmail(email);
        setTimeout(() => setCopiedEmail(null), 2000);
    };

    return (
        <Box
            sx={{
                padding: "10px 10px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                backgroundColor: theme.palette.background.default
            }}
        >
            <Card
                sx={{
                    maxWidth: 500,
                    width: "100%",
                    boxShadow: 3,
                    borderRadius: 3,
                    padding: 3,
                    backgroundColor: theme.palette.background.paper
                }}
            >
                <CardContent>
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                        Связь с разработчиком
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center", color: "text.secondary", mb: 2 }}>
                        Вы можете написать по email:
                    </Typography>

                    {emails.map((email) => (
                        <Box
                            key={email}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                backgroundColor: theme.palette.action.hover,
                                padding: "10px 15px",
                                borderRadius: 2,
                                mb: 1
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: "monospace",
                                    fontSize: "1rem",
                                    color: theme.palette.text.primary
                                }}
                            >
                                {email}
                            </Typography>
                            <IconButton
                                onClick={() => handleCopy(email)}
                                size="small"
                                sx={{
                                    transition: "transform 0.2s ease-in-out",
                                    "&:hover": { transform: "scale(1.1)" }
                                }}
                            >
                                {copiedEmail === email ? (
                                    <CheckIcon fontSize="small" color="success" />
                                ) : (
                                    <ContentCopyIcon fontSize="small" />
                                )}
                            </IconButton>
                        </Box>
                    ))}
                </CardContent>
            </Card>
        </Box>
    );
}
