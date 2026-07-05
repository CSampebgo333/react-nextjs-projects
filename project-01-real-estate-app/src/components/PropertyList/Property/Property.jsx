import './Property.css';
import PropertyImage from './PropertyImage/PropertyImage';
import PropertyTypeLabel from './PropertyImage/PropertyTypeLabel/PropertyTypeLabel';
import PropertyBanner from './PropertyImage/PropertyBanner/PropertyBanner';
import IconWithText from './PropertyImage/IconWithText/IconWithText';
import PropertyAttribute from './PropertyAttribute/PropertyAttribute';
import { Bath, Bed, Bold, Maximize } from 'lucide-react';


const Property = (
    {
        id, 
        image, 
        bedrooms,
        bathrooms, 
        address, 
        rent,
        surface, 
        available, 
        date, 
        type,
    }
) => {
    return (
    <div className='property-card' style={{opacity: !available ? 0.5 : 1 }}>
            <PropertyImage image={image}>
                <PropertyTypeLabel type={type}/>
                {!available && <PropertyBanner />}
                <div className='property-info'>
                    <IconWithText Icon={Bed} text={bedrooms} />
                    <span>|</span>
                    <IconWithText Icon={Bath} text={bathrooms} />
                    <span>|</span>
                    <IconWithText Icon={Maximize} text={`${surface} m²`} />
                </div>
            </PropertyImage>
            <PropertyAttribute children={address}/>
            <PropertyAttribute children={`£${rent} / month`} color={'#2cdeb6'} bold />
            <PropertyAttribute children={`Available from: ${date}`}/>
        </div>
    );
}

export default Property;