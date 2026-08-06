import TabList from "./components/advanced-react-patterns/Tabs/TabList";
import { Tabs } from "./components/advanced-react-patterns/Tabs/Tabs";
import Tab from "./components/advanced-react-patterns/Tabs/Tab";
import TabPanel from "./components/advanced-react-patterns/Tabs/TabPanel";

const App = () => {

    return (
        <div 
            style={{
                padding: "2rem",
                fontFamily: "sans-serif"
            }}
        >
            <h1>Compound Components Example: Tabs</h1>
            <Tabs defaultIndex={0}>
                <TabList>
                    <Tab index={1}>Home</Tab>
                    <Tab index={2}>Ressources</Tab>
                    <Tab index={3}>Settigns</Tab>
                </TabList>
                
                <TabPanel index={1}>
                    <p>Welcome to Home</p>
                </TabPanel>
                <TabPanel index={2}>
                    <p> You are at Ressource Center</p>
                </TabPanel>
                <TabPanel index={3}>
                    <p>Welcome to Settings</p>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default App;