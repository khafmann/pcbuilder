import React, { useState } from "react";
import {
    Slider,
    Button,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Box,
    Typography,
    Checkbox, FormControlLabel
} from "@mui/material";

const FilterComponent: React.FC = () => {
    const [budget, setBudget] = useState<number[]>([100000, 500000]);
    const [gpu, setGpu] = useState<string>("Any");

    return (
        <Box sx={{ p: 3, bgcolor: "#CFD1E0", borderRadius: 2, width: 400 }}>
            <Typography variant="h6">Бюджет</Typography>
            <Slider
                value={budget}
                onChange={(_, newValue) => setBudget(newValue as number[])}
                valueLabelDisplay="auto"
                min={100000}
                max={500000}
                step={50000}
            />

            <Typography variant="h6">Для каких задач:</Typography>
            <FormControl>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Офисные" />
                <FormControlLabel control={<Checkbox />} label="Игровые" />
                <FormControlLabel control={<Checkbox />} label="3D моделирование" />
                <FormControlLabel control={<Checkbox />} label="Монтаж видео" />
                <FormControlLabel control={<Checkbox />} label="Программирование" />
            </FormControl>

            <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Выберите разрешение вашего монитора</InputLabel>
                <Select value={gpu} onChange={(e) => setGpu(e.target.value)}>
                    <MenuItem value="1">Ниже 1080p</MenuItem>
                    <MenuItem value="2">1080p</MenuItem>
                    <MenuItem value="3">1440p</MenuItem>
                    <MenuItem value="4">4K</MenuItem>
                </Select>
            </FormControl>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary">Показать</Button>
                <Button variant="outlined" color="secondary" onClick={() => { setBudget([100000, 500000]); setCpu("Any"); setGpu("Any"); }}>Сбросить</Button>
            </Box>
        </Box>
    );
};

export default FilterComponent;