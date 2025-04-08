import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            dark: '#0A1A3A',      // Тёмно-синий (для ховера/акцентов)
            main: '#1A56DB',      // Ярко-синий (основные кнопки)
            light: '#E1EFFE',     // Светло-голубой (фоны)
            contrastText: '#FFFFFF'
        },
        secondary: {
            dark: '#065F46',     // Тёмно-зелёный
            main: '#10B981',      // Изумрудный (доп. кнопки)
            light: '#D1FAE5',    // Мятный
            contrastText: '#FFFFFF'
        },
        background: {
            default: "#F9FAFB",   // Светло-серый (основной фон)
            paper: "#FFFFFF"      // Белый (карточки)
        },
        text: {
            primary: "#111827",  // Почти чёрный
            secondary: "#6B7280"  // Серый (второстепенный текст)
        },
        error: {
            main: "#EF4444"      // Красный для ошибок
        },
        success: {
            main: "#10B981"       // Зелёный для успеха
        }
    },
    typography: {
        fontFamily: "'Inter', 'Roboto', Arial, sans-serif",
        h1: {
            fontSize: "2.5rem",
            fontWeight: 800,
            color: "#111827"
        },
        h2: {
            fontWeight: 700,
            color: "#1E40AF"
        },
        button: {
            fontWeight: 600,
            textTransform: 'none'  // Убирает CAPS в кнопках
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.6,
            color: "#374151"
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                    padding: '10px 20px'
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: '12px',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }
            }
        }
    }
});

export default theme;