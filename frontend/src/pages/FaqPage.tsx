import { Typography, Box, useTheme } from "@mui/material";

export default function FaqPage() {
    const theme = useTheme();

    return (
        <Box sx={{
            padding: "80px 20px 20px",
            maxWidth: "800px",
            margin: "0 auto",
            color: theme.palette.text.primary
        }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", marginBottom: "30px" }}>
                FAQ - Как собирать и выбирать комплектующие ПК
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                <section>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                        Как пользоваться нашим сайтом?
                    </Typography>
                    <Typography variant="body1">
                        Выберите диапазон вашего бюджета. В данной версии ПК собирается по вашему максимальному бюджету.
                        Далее выберите для каких целей будет собираться ПК: Игровой, офисный или 3D моделирование.
                        От желаемых целей сборки ПК будет зависеть какие комплектующие и конфигурации подберет наш генератор.
                    </Typography>
                </section>

                <section>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                        1. Выбор процессора
                    </Typography>
                    <Typography variant="body1">
                        При выборе процессора учитывается его совместимость с материнской платой (сокет),
                        тепловыделение (TDP) и производительность для ваших задач.
                    </Typography>
                </section>

                <section>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                        2. Выбор материнской платы
                    </Typography>
                    <Typography variant="body1">
                        Материнская плата должна поддерживать выбранный процессор (сокет), иметь нужные
                        вам разъемы (USB, M.2 и т.д.) и форм-фактор, подходящий для вашего корпуса.
                    </Typography>
                </section>

                <section>
                    <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
                        3. Выбор оперативной памяти
                    </Typography>
                    <Typography variant="body1">
                        Обращайте внимание на тип памяти (DDR4/DDR5), частоту и тайминги. Для большинства
                        современных систем рекомендуется 16-32 ГБ памяти, наш конфигуратор так же это учитывает за вас.
                    </Typography>
                </section>
            </Box>
        </Box>
    );
}