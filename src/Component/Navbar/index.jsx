
import { NavLink } from 'react-router-dom';
import SiteLogo from '../../Assests/Images/SiteLogo.png'
export default function Navbar() {
    return (      
            <nav className='bg-slate-300 flex justify-between items-center '>
                <img src={SiteLogo} alt='logo' width='70' height='70' />
                <ul className='flex'>
                    <li className='p-2'><NavLink to='/hotels' className={({ isActive }) => isActive ? "underline decoration-red-900 " : ""}>Hotels</NavLink></li>
                    <li className='p-2'><NavLink to='/hotels' className={({ isActive }) => isActive ? "underline decoration-red-900" : ""} >Contact Us</NavLink></li>
                    <li className='p-2' ><NavLink to='/hotels' className={({ isActive }) => isActive ? "underline decoration-red-900" : ""} >About</NavLink></li>

                </ul>
            </nav>       
    );
}
