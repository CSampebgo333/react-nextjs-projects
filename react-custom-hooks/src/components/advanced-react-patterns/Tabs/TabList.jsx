
export default function TabList ({ children }){
    return(
        <div 
            style={{
                display: "flex",
                gap: "1rem"
            }}
        >
            {children}
        </div>
    )
}