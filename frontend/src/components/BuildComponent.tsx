import { useState, useRef } from "react";
import FilterComponent from "../components/FilterComponent";
import ConfigComponent from "../components/ConfigComponent";

export default function BuildComponent() {
    const [components, setComponents] = useState([]);
    const [showConfig, setShowConfig] = useState(false);
    const configRef = useRef<HTMLDivElement>(null);

    const handleFilter = async (budget: number, type: string) => {
        try {
            const response = await fetch(`http://localhost:3000/build?budget=${budget}&type=${type}`);
            const data = await response.json();
            setComponents(data);
            setShowConfig(true);

            setTimeout(() => {
                configRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        } catch (error) {
            console.error("Ошибка загрузки данных:", error);
        }
    };

    return (
        <>
            <FilterComponent onFilter={handleFilter} />
            <div ref={configRef}>
                <ConfigComponent components={components} open={showConfig} />
            </div>
        </>
    );
}
