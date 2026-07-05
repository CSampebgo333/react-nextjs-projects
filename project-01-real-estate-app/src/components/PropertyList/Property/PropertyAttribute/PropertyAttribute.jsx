import './PropertyAttribute.css';

const PropertyAttribute = ({children, color = '#444', bold}) => {
const styleAttribute = {color: color, fontWeight: bold ? 'bold' : 'normal' }

    return (
        <p className = 'property-attribute' style={styleAttribute}>
            {children}
        </p>
    );
}

export default PropertyAttribute;