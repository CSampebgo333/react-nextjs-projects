import './Footer.css';
import { Clock } from 'lucide-react';

const Footer = () => {

    const openingHour = 9;
    const closingHour = 17;

    const currentTime = new Date();

    const currentHour = currentTime.getHours(); 
    const currentDay = currentTime.getDay();

    const isWorkingHour = currentHour >= openingHour && currentHour <= closingHour;
    const isWeekDay = currentDay >= 1 && currentDay <= 5;

    const isOpen = isWeekDay && isWorkingHour;

   const styleIcon = {
    marginRight: '0.5rem', 
    color: isOpen ? '#2CDEB6' : '#DC3545' };

    const openElement = (
        <div>
            <div className='message'>
                <Clock style={styleIcon}/>
                <span className='status open'>We are open now!</span>
            </div>
            <div className='contact'>
                Call us at <strong>(266) 77-54-07-92</strong>
            </div> 
        </div>
    );
    
    const closedElement = (
        <div>
            <div className='message'>
                <Clock style={styleIcon}/>
                <span className='status closed'>We are closed now!</span>
            </div>
            <div className='open-days'>
                Opening hours: Monday to Friday, {openingHour} AM to {closingHour} PM.
            </div> 
        </div>
    );

    return (
        <footer className='footer'>
            {isOpen ? openElement : closedElement}
        </footer>
    );
}

export default Footer;