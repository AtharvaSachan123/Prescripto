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
                <img className='w-44 cursor-pointer' src={assets.logo} alt='logo' />
                <ul className='hidden md:flex items-start gap-5 font-medium'>
                    <NavLink to="/" >
                        <li className='py-1'>Home</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/doctors" >
                        <li className='py-1'>All Doctors</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/about" >
                        <li className='py-1'>About</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                    <NavLink to="/contact" >
                        <li className='py-1'>Contact</li>
                        <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                    </NavLink>
                </ul>
                <div className='flex items-center gap-4 '>
                    {token ? (
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} />
                            <img className='w-2.5 ' src={assets.dropdown_icon} />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                                    <p onClick={handleLogout} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => { navigate('/login') }} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                            Create Account
                        </button>
                    )}
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