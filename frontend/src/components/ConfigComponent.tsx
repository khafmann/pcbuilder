import { Card, Typography, Box, Link, Collapse, Fade } from "@mui/material";

const categoryNames = {
    cpu: "Процессор",
    motherboard: "Материнская плата",
    ram: "ОЗУ",
    gpu: "Видеокарта",
    storage: "Накопитель",
    psu: "Блок питания",
    cooling: "Охлаждение",
    pcCase: "Корпус"
};

// @ts-ignore
export default function ConfigComponent({ components, open }) {
    if (!components || typeof components !== "object") {
        console.error("Ошибка: components не является объектом", components);
        return <Typography variant="h6" sx={{ textAlign: "center", color: "red" }}>Ошибка загрузки данных</Typography>;
    }

    const componentArray = Object.entries(components).map(([category, data]) => ({
        category: categoryNames[category] || category,
        ...data
    }));

    return (
        <Fade in={open} timeout={800}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "85vh" }}>
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, width: "60%", padding: 2 }}>
                        {componentArray.map((item) => (
                            <Collapse in={open} timeout={500}>
                                <Card
                                    key={item?.id || item.category}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        padding: "10px 20px",
                                        borderRadius: "8px",
                                        height: "50px",
                                        boxShadow: 1
                                    }}>
                                    <Box sx={{ width: "20%" }}>
                                        <Typography fontWeight="bold">{item.category}</Typography>
                                    </Box>
                                    <Box sx={{ width: "60%" }}>
                                        {item.name ? (
                                            <Typography textAlign="center">{item.name}</Typography>
                                        ) : (
                                            <Typography textAlign="center" color="text.secondary">
                                                Подходящий товар не найден в базе данных. База будет расширена позже
                                            </Typography>
                                        )}
                                    </Box>
                                    <Box sx={{ width: "15%", textAlign: "center" }}>
                                        <Typography fontWeight="bold">{new Intl.NumberFormat("ru-RU").format(item.price)} ₸</Typography>
                                    </Box>
                                    <Box sx={{ width: "15%", textAlign: "right" }}>
                                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                            Ссылка
                                        </Link>
                                    </Box>
                                </Card>
                            </Collapse>
                        ))}
                    </Box>
            </Box>
        </Fade>
    );
}
