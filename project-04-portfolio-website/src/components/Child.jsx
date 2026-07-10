import GrandChild from "./GrandChild";

const Child = () => {
    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#d0e0ff"
        }}>
            <GrandChild />
        </div>
    );
}

export default Child;