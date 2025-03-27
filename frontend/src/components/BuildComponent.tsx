import { useState } from "react";
import FilterComponent from "../components/FilterComponent";
import ConfigComponent from "../components/ConfigComponent";

export default function BuildComponent() {
    const [components, setComponents] = useState([]);

    const handleFilter = async (budget: number, type: string) => {
        try {
            const response = await fetch(`http://localhost:3000/build?budget=${budget}&type=${type}`);
            const data = await response.json();
            setComponents(data);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };

    return (
        <>
            <FilterComponent onFilter={handleFilter} />
            <ConfigComponent components={components} />
        </>
    );
}
