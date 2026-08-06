import { useState, createContext, use } from "react";

const TabsContext = createContext();

export function Tabs ({ children, defaultIndex = 0}) {

    const [selectedIndex, setSelectedIndex] = useState(defaultIndex);

    return (
        <TabsContext
            value={{ selectedIndex, setSelectedIndex }}
        >
            { children }
        </TabsContext>
    );
    
}

export function useTabs () {
    const context = use(TabsContext);
    if (!context){
        throw new Error("useTabs must be use within a Tab component")
    }
    return context;
}