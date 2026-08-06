import { useTabs } from "./Tabs";

export default function ({ index, children }) {

    const { selectedIndex, setSelectedIndex } = useTabs();

    const isSelected = selectedIndex === index;

    return(
        <button
            onClick={() => setSelectedIndex(index)}
            style={{ 
                padding: "0.5rem 1rem", // Space
                border: "1px solid #ccc", // Simple
                backgroundColor: isSelected ? "#007bff" : "#fff", // Blue
                color: isSelected ? "#fff" : "#000", // White
                cursor: "pointer", // Pointer
            }}
        >
            {children}
        </button>
    )

}