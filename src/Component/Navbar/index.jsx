
import { NavLink } from 'react-router-dom';
import logo from './logo512.png'
export default function Navbar() {
    return (      
            <nav className='bg-black flex justify-between items-center '>
                <img src={logo} alt='logo' width='70' height='70' />
                <ul className='flex'>
                    <li className='p-2 text-white'><NavLink to='/hotels' className={({ isActive }) => isActive ? "underline decoration-red-900 " : ""}>Hotels</NavLink></li>
                    <li className='p-2 text-white'><NavLink to='/hotels' className={({ isActive }) => isActive ? "underline decoration-red-900" : ""} >Contact Us</NavLink></li>
                    <li className='p-2 text-white' ><NavLink to='/hotels' className={({ isActive }) => isActive ? "underline decoration-red-900" : ""} >About</NavLink></li>

                </ul>
            </nav>       
    );
}
