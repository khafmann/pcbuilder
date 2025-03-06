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
    }
];

export default function ConfigComponent() {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "40vh",
            bgcolor: "#f5f5f5"
        }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", width: "60%", padding: "10px" }}>
                {components.map((item) => (
                    <Card
                        key={item.id}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: "#E3F2FD",
                            padding: "10px 20px",
                            borderRadius: "8px",
                            height: "50px",
                        }}
                    >
                        <Typography variant="body1" fontWeight="bold">
                            {item.category}
                        </Typography>
                        <Typography variant="body1">{item.name}</Typography>
                        <Typography variant="body1" fontWeight="bold">
                            {item.price}
                        </Typography>
                        <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            Ссылка
                        </Link>
                    </Card>
                ))}
            </Box>
        </Box>
    );
};
