import React, { useState } from "react";
import {
    Slider,
    Button,
    FormControl,
    Box,
    Typography,
    Checkbox,
    FormControlLabel,
    Autocomplete,
    TextField,
    Grid,
    RadioGroup,
    Radio
} from "@mui/material";
import { monitorResolution } from '../data/monitorResolution.ts'

export default function FilterComponent({ onFilter }: { onFilter: (budget: number, type: string) => void }) {
    const [budget, setBudget] = useState<number[]>([100000, 1000000]);
    const [type] = useState("gaming");

    const handleShow = () => {
        onFilter(budget[1], type);
    };

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
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
        }}>
            <Box sx={{ p: 3, borderRadius: 2, width: 500, bgcolor: "background.paper", marginTop: "70px", color:"text.primary"}}>
                <Typography  gutterBottom>Выберите диапазон бюджета</Typography>
                <Grid container spacing={2} sx={{ mt: 2 }}>
                    <Grid item xs={6}>
                        <TextField
                            label="От"
                            value={budget[0]}
                            onChange={handleInputChange(0)}
                            onBlur={handleBlur(0)}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="До"
                            value={budget[1]}
                            onChange={handleInputChange(1)}
                            onBlur={handleBlur(1)}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Slider
                    value={budget as number[]}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    min={100000}
                    max={1000000}
                    step={100000}
                    marks={[
                        { value: 100000, label: "100K" },
                        { value: 300000, label: "300K" },
                        { value: 500000, label: "500K" },
                        { value: 700000, label: "700К" },
                        { value: 1000000, label: "1M" },
                    ]}
                />

                <Typography variant="h6">Для каких задач:</Typography>
                <FormControl component="fieldset">
                    <RadioGroup defaultValue="gaming" name="pc-type">
                        <FormControlLabel
                            value="gaming"
                            control={<Radio />}
                            label="Игровые"
                        />
                        <FormControlLabel
                            value="office"
                            control={<Radio />}
                            label="Офисные"
                        />
                        <FormControlLabel
                            value="workstation"
                            control={<Radio />}
                            label="3D моделирование"
                        />
                    </RadioGroup>
                </FormControl>

                <FormControl fullWidth sx={{ mt: 2 }}>
                    <Autocomplete
                        disablePortal
                        options={monitorResolution}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Выберите разрешение монитора" />}
                    />
                </FormControl>

                <FormControlLabel control={<Checkbox />} label="Собрать всё в одном магазине" />

                <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
                    <Button variant="contained" color="primary" onClick={handleShow}>Собрать ПК</Button>
                    <Button variant="outlined" color="error" onClick={() => { setBudget([100000, 1000000]); }}>Сбросить</Button>
                </Box>
            </Box>
        </Box>
    );
};
