import { Card, Typography, Box, Link } from "@mui/material";

const components = [
    {
        id: 1,
        category: "Процессор",
        name: "AMD Ryzen 5 7600, AM5, OEM",
        price: "99 990 ₸",
        link: "https://shop.kz/offer/protsessor-amd-ryzen-5-7600-am5-oem/"
    },
    {
        id: 2,
        category: "Видеокарта",
        name: "MSI GeForce RTX 4070 VENTUS 3X E1 OC",
        price: "362 990 ₸",
        link: "https://www.dns-shop.kz/product/5a7c53476434d582/videokarta-msi-geforce-rtx-4070-ventus-3x-e1-oc-geforce-rtx-4070-ventus-3x-e1-12g-oc/"
    },
    {
        id: 3,
        category: "Оперативная память",
        name: "RAM",
        price: "10 000 ₸",
        link: "https://google.com/"
    },
    {
        id: 4,
        category: "Охлаждение",
        name: "ID Cooling",
        price: "10 000 ₸",
        link: "https://google.com/"
    },
    {
        id: 5,
        category: "Корпус",
        name: "Cougar",
        price: "10 000 ₸",
        link: "https://google.com/"
    },
    {
        id: 6,
        category: "Материнская плата",
        name: "ID Cooling",
        price: "10 000 ₸",
        link: "https://google.com/"
    },
    {
        id: 7,
        category: "Блок питания",
        name: "ID Cooling",
        price: "10 000 ₸",
        link: "https://google.com/"
    },
    {
        id: 8,
        category: "Хранение данных",
        name: "ID Cooling",
        price: "10 000 ₸",
        link: "https://google.com/"
    },
];

export default function ConfigComponent() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "60%", padding: "10px" }}>
                {components.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            height: "50px",
                        }}
                    >
                        <Box sx={{ width: "20%" }}>
                            <Typography fontWeight="bold">{item.category}</Typography>
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <Typography textAlign="center">{item.name}</Typography>
                        </Box>
                        <Box sx={{ width: "20%", textAlign: "right" }}>
                            <Typography fontWeight="bold">{item.price}</Typography>
                        </Box>
                        <Box sx={{ width: "20%", textAlign: "right" }}>
                            <Link href={item.link} target="_blank" rel="noopener noreferrer">
                                Ссылка
                            </Link>
                        </Box>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};
