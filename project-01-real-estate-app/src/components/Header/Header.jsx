import './Header.css';
import { House, Phone, Mail } from 'lucide-react';

const Header = () => {
    return (
        <header className='header'>
            <div className='item brand'>
                <House className='icon' />
                <span> Bobo Rentals</span>
            </div>
            <div className='item contact'>
                <Phone className='icon' />
                <span>(226) 77-54-07-92</span>
            </div>
            <div className='item contact'>
                <Mail className='icon' />
                <span>cl.sampebgo@gmail.com</span>
            </div>
        </header>
    )
}

export default Header;