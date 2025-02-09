import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);
    const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

    const handleLogout = () => {
        setShowLogoutConfirm(true);
    };

    const confirmLogout = () => {
        setToken(false);
        setShowLogoutConfirm(false);
        navigate('/');
    };

    const cancelLogout = () => {
        setShowLogoutConfirm(false);
    };

    return (
        <div className='relative'>
            <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-gray-300'>
                <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='logo' />
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink to="/" className="hover:text-primary">
                        <li className='py-1'>Home</li>
                    </NavLink>
                    <NavLink to="/doctors" className="hover:text-primary">
                        <li className='py-1'>All Doctors</li>
                    </NavLink>
                    <NavLink to="/about" className="hover:text-primary">
                        <li className='py-1'>About</li>
                    </NavLink>
                    <NavLink to="/contact" className="hover:text-primary">
                        <li className='py-1'>Contact</li>
                    </NavLink>
                </ul>
                <div className='flex items-center gap-4'>
                    {token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="Dropdown" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                    <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                            Create Account
                        </button>
                    )}
                    <img onClick={() => setShowMenu(true)} className='w-6 md:hidden cursor-pointer' src={assets.menu_icon} alt='Menu' />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 ${showMenu ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setShowMenu(false)}>
                <div className={`fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${showMenu ? "translate-x-0" : "translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center justify-between px-4 py-3 border-b">
                        <img src={assets.logo} alt="Logo" className="w-32" />
                        <img onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="Close" className="w-6 cursor-pointer" />
                    </div>
                    <ul className="flex flex-col gap-4 p-4 text-lg font-medium">
                        <NavLink to="/" onClick={() => setShowMenu(false)} className="hover:text-primary">Home</NavLink>
                        <NavLink to="/doctors" onClick={() => setShowMenu(false)} className="hover:text-primary">All Doctors</NavLink>
                        <NavLink to="/about" onClick={() => setShowMenu(false)} className="hover:text-primary">About</NavLink>
                        <NavLink to="/contact" onClick={() => setShowMenu(false)} className="hover:text-primary">Contact</NavLink>
                    </ul>
                </div>
            </div>

            {/* Logout Confirmation */}
            <div className={`fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 transition-opacity duration-300 ${showLogoutConfirm ? 'opacity-100 pointer-events-auto z-30' : 'opacity-0 pointer-events-none'}`}>
                <div className={`bg-white p-6 rounded shadow-lg transition-transform duration-300 ${showLogoutConfirm ? 'scale-100' : 'scale-95'}`}>
                    <p className='mb-4'>Are you sure you want to logout?</p>
                    <div className='flex gap-4'>
                        <button onClick={confirmLogout} className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors'>Yes</button>
                        <button onClick={cancelLogout} className='bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition-colors'>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
