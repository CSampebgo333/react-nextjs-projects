import { useTabs } from "./Tabs";

export default function TabPanel({ index, children }){
    const { selectedIndex } = useTabs();
    if (selectedIndex !== index) return null;
    return(
        <div>
            { children }
        </div>
    )
}