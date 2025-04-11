import { Typography, Box, useTheme, Card, CardContent, Divider } from "@mui/material";

export default function FaqPage() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                padding: "100px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                backgroundColor: theme.palette.background.default
            }}
        >
            <Card
                sx={{
                    maxWidth: 800,
                    width: "100%",
                    boxShadow: 3,
                    borderRadius: 3,
                    padding: 3,
                    backgroundColor: theme.palette.background.paper,
                    '&:hover': {
                        boxShadow: 3,
                        transform: 'none',
                    },
                    transition: 'none',
                }}
            >
                <CardContent>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: "bold", textAlign: "center", mb: 2 }}
                    >
                        FAQ - Как собирать и выбирать комплектующие ПК
                    </Typography>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.palette.action.hover }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                Как пользоваться нашим сайтом?
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                Выберите диапазон вашего бюджета. В данной версии ПК собирается по вашему максимальному бюджету.
                                Далее выберите для каких целей будет собираться ПК: Игровой, офисный или 3D моделирование.
                                От желаемых целей сборки ПК будет зависеть, какие комплектующие и конфигурации подберет наш генератор.
                            </Typography>
                        </Box>

                        <Divider />

                        <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.palette.action.hover }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                1. Выбор процессора
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                При выборе процессора учитывается его совместимость с материнской платой (сокет),
                                тепловыделение (TDP) и производительность для ваших задач.
                            </Typography>
                        </Box>

                        <Divider />

                        <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.palette.action.hover }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                2. Выбор материнской платы
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                Материнская плата должна поддерживать выбранный процессор (сокет), иметь нужные
                                вам разъемы (USB, M.2 и т.д.) и форм-фактор, подходящий для вашего корпуса.
                            </Typography>
                        </Box>

                        <Divider />

                        <Box sx={{ padding: 2, borderRadius: 2, backgroundColor: theme.palette.action.hover }}>
                            <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                                3. Выбор оперативной памяти
                            </Typography>
                            <Typography variant="body1" sx={{ color: "text.secondary", lineHeight: 1.6 }}>
                                Обращайте внимание на тип памяти (DDR4/DDR5), частоту и тайминги. Для большинства
                                современных систем рекомендуется 16-32 ГБ памяти, наш конфигуратор также это учитывает за вас.
                            </Typography>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}
