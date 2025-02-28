import React, { useState } from "react";
import {
    Slider,
    Button,
    FormControl,
    Box,
    Typography,
    Checkbox, FormControlLabel, Autocomplete, TextField, Grid
} from "@mui/material";
import { monitorResolution } from '../data/monitorResolution.ts'

const FilterComponent: React.FC = () => {
    const [budget, setBudget] = useState<number[]>([100000, 1000000]);

    const handleSliderChange = (_: Event, newValue: number | number[]) => {
        setBudget(newValue as number[]);
    };

    const handleInputChange = (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value === "" ? "" : Number(event.target.value);
        const newBudget = [...budget];
        newBudget[index] = value as number;
        setBudget(newBudget);
    };

    const handleBlur = (index: number) => () => {
        let newBudget = [...budget];

        if (budget[index] === null) {
            newBudget[index] = index === 0 ? 100000 : 1000000;
        } else {
            newBudget[index] = Math.max(100000, Math.min(1000000, budget[index] as number));
        }

        if (newBudget[0] > newBudget[1]) {
            newBudget[index] = budget[index] as number;
        }

        setBudget(newBudget);
    };


    return (
        <Box sx={{ p: 3, bgcolor: "#3f51b5", borderRadius: 2, width: 400, color:"white"}}>
            <Typography gutterBottom>Выберите диапазон бюджета</Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={6}>
                    <TextField
                        label="От"
                        value={budget[0]}
                        onChange={handleInputChange(0)}
                        onBlur={handleBlur(0)}
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white" }, // Белая граница
                                "&:hover fieldset": { borderColor: "white" },
                                "&.Mui-focused fieldset": { borderColor: "white" }
                            },
                            "& .MuiInputLabel-root": { color: "white" }, // Цвет текста метки (label)
                            "& .MuiInputBase-input": { color: "white" }, // Цвет введенного текста
                        }}

                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="До"
                        value={budget[1]}
                        onChange={handleInputChange(1)}
                        onBlur={handleBlur(1)}
                        fullWidth
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": { borderColor: "white" }, // Белая граница
                                "&:hover fieldset": { borderColor: "white" },
                                "&.Mui-focused fieldset": { borderColor: "white" }
                            },
                            "& .MuiInputLabel-root": { color: "white" }, // Цвет текста метки (label)
                            "& .MuiInputBase-input": { color: "white" }, // Цвет введенного текста
                        }}
                    />
                </Grid>
            </Grid>
            <Slider
                value={budget as number[]}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                min={100000}
                max={1000000}
                step={50000}
                sx={{
                    color: "white", // Цвет ползунка
                    "& .MuiSlider-thumb": {
                        backgroundColor: "white", // Кружки ползунка
                        border: "2px solid white"
                    },
                    "& .MuiSlider-rail": {
                        backgroundColor: "white" // Линия под ползунком
                    },
                    "& .MuiSlider-track": {
                        backgroundColor: "white" // Линия за ползунком
                    }
                }}
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
                <Autocomplete
                    disablePortal
                    options={monitorResolution}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Выберите разрешение монитора" />}
                />
            </FormControl>

            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained" color="primary">Показать</Button>
                <Button variant="outlined" color="error" onClick={() => { setBudget([100000, 1000000]); }}>Сбросить</Button>
            </Box>
        </Box>
    );
};

export default FilterComponent;