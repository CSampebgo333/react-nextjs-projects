const CompanyLogo = ({ logo, index }) => {
    return (
        <div 
        //key={index}
        className="h-10 sm:h-12 transition"
        >
            <img 
                src={logo} 
                alt={`Company Logo ${index}`}
                className="h-full object-contain transition grayscale hover:grayscale-0 dark:invert"
            />
        </div>
    )
}

export default CompanyLogo;