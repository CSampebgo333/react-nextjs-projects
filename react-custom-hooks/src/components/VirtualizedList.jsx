import { List } from "react-virtualized";


const users = Array.from({length: 10000}, (_, i) => {
    return {id: i + 1, name: `User ${i + 1}` }
})


const VirtualizedList = () => {

    const renderRow = ({ key, index, style }) => {
        const user = users[index];
        return(
            <div
                key={key}
                style={{
                    ...style,
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                }}
            >
                {user.name}
            </div>
        )
    }

    return (
        <div
            style={{
                marginTop: "2rem",
            }}
        >
            <h2>Virtualized List Demo</h2>
            <p>Scrolling remains smooth even with 1,000+ items.</p>
            
            <List
                width={250}
                height={400}
                rowHeight={40}
                rowCount={users.length}
                rowRenderer={renderRow}
                overscanRowCount={5}
            />

        </div>
    );
}

export default VirtualizedList;