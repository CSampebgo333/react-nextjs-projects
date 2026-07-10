import "./AppBanner.css";

const AppBanner = () => {
    return (
        <div className="app-banner">
            <span role="img" aria-label="car" className="car-icon">🚘</span>
            <p className="banner-text">Driving Theory Test Practice App</p>
            <span role="img" aria-label="car" className="car-icon">🚗</span>
        </div>
    );
}

export default AppBanner;