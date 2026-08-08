import './HeavyComponent.css';

console.log("HeavyComponent.jsx Imported!");

const HeavyComponent = () => {
    console.log("HeavyComponent Rendered!");
    return (
        <div className="heavy-container">
            <h2> I am a Heavy Component. </h2>
            <p>Loaded lazily with CSS</p>
        </div>
    );
}

export default HeavyComponent;