import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: '#2563EB',     // Более насыщенный синий
            dark: '#1E40AF',     // Глубокий синий
            light: '#93C5FD',    // Мягкий голубой
            contrastText: '#FFFFFF'
        },
        secondary: {
            main: '#EC4899',     // Ярко-розовый (вместо зелёного)
            dark: '#BE185D',
            light: '#FBCFE8',
            contrastText: '#FFFFFF'
        },
        background: {
            default: '#F8FAFC',  // Очень светлый серо-голубой
            paper: '#FFFFFF'
        },
        text: {
            primary: '#1E293B',   // Тёмно-синий вместо чёрного
            secondary: '#64748B'
        },
        error: {
            main: '#EF4444'
        },
        success: {
            main: '#10B981'
        }
    },
    typography: {
        fontFamily: '"system-ui", sans-serif',
        h1: {
            fontSize: "2.8rem",
            fontWeight: 700,
            letterSpacing: "-0.5px",
            color: '#1E293B'
        },
        h2: {
            fontSize: "2rem",
            fontWeight: 600,
            color: '#2563EB',
            letterSpacing: "-0.3px"
        },
        button: {
            fontWeight: 600,
            letterSpacing: "0.5px"
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.7,
            color: '#334155'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    padding: '12px 24px',
                    transition: 'all 0.2s',
                    '&:hover': {
                        transform: 'translateY(-2px)'
                    }
                },
                contained: {
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    '&:hover': {
                        boxShadow: '0 6px 8px rgba(0, 0, 0, 0.15)'
                    }
                },
                outlinedPrimary: {
                    borderWidth: '2px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '16px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                    border: '1px solid rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                        borderColor: '#93C5FD'
                    }
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#FFFFFF',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                    borderBottom: '1px solid #E2E8F0'
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: '#E2E8F0'
                }
            }
        }
    },
    shape: {
        borderRadius: 12
    }
});

export default theme;