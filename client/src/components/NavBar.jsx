import logo from '../assets/PRE_Technologies.png';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubmenu, setMobileSubmenu] = useState(null);
    const [isScrolled, setIsScrolled] = useState(true);

    const menuData = {
        whyUs: [
            { title: 'About us', subtitle: 'Why choose PRE Technologies?' },
            { title: 'FAQ', subtitle: 'Frequently asked questions' }
        ],
        services: [
            { title: 'Finite element analysis', subtitle: 'Mechanical, thermal, fatigue and vibrations' },
            { title: 'Computational fluid dynamics', subtitle: 'Heat transfer, aero and hydrodynamics' },
            { title: 'Research projects', subtitle: 'Management, partnering, delivery' }
        ],
        sectors: [
            { title: 'Our technical expertise', subtitle: 'Technical white papers (CFD and FEA)' },
            { title: 'Test cases', subtitle: 'Example projects for various industries' },
            { title: 'Oil & Gas', subtitle: '' },
            { title: 'Pharma & Drug Delivery', subtitle: '' },
            { title: 'Food Industry', subtitle: '' },
            { title: 'Water & Waste Water', subtitle: '' },
            { title: 'Heat Exchange Products', subtitle: '' },
            { title: 'Pressure Containing Products', subtitle: '' },
            { title: 'Plastics & Composites', subtitle: '' },
            { title: 'Waste to Energy', subtitle: '' },
            { title: 'Fuel Cells & Batteries', subtitle: '' },
            { title: 'Renewable Energies', subtitle: '' }
        ],
        experience: [
            { title: 'Case studies', subtitle: 'Real world applications and solutions' },
            { title: 'Client testimonials', subtitle: 'What our customers say about us' },
            { title: 'Our portfolio', subtitle: 'Completed projects across industries' }
        ]
    };

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on window resize (if screen becomes large)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setIsMobileMenuOpen(false);
                setMobileSubmenu(null);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMenuHover = (menu) => {
        if (window.innerWidth >= 1024) { // Only for desktop
            setActiveMenu(menu);
        }
    };

    const handleMenuLeave = () => {
        if (window.innerWidth >= 1024) { // Only for desktop
            setActiveMenu(null);
        }
    };

    const toggleMobileMenu = () => {
        setIsScrolled(false)
        setIsMobileMenuOpen(!isMobileMenuOpen);
        if (!isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const toggleMobileSubmenu = (menu) => {
        if (mobileSubmenu === menu) {
            setMobileSubmenu(null);
        } else {
            setMobileSubmenu(menu);
        }
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setMobileSubmenu(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            {/* Top Language Bar - Responsive */}
            {
                isScrolled &&
                <div className={`w-full bg-gray-100 border-b border-gray-300 px-4 sm:px-6 md:px-8 py-2 transition-all duration-300`}>
                    <div className="flex justify-end items-center">
                        <div className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-gray-700">
                            <button className="text-blue-600 hover:text-blue-600 transition-colors px-2 py-1">
                                ENG
                            </button>
                            <span className="text-gray-500">|</span>
                            <button className="text-gray-700 hover:text-blue-600 transition-colors px-2 py-1">
                                ESP
                            </button>
                        </div>
                    </div>
                </div>
            }
            {/* Main Navbar - Responsive */}
            <nav className={`flex flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 text-black bg-white border-b-2 border-gray-300 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-2 lg:py-4' : ''}`}>
                {/* Logo - Responsive sizing */}
                <div className="h-12 sm:h-14 lg:h-16 w-32 sm:w-48 lg:w-64">
                    <img src={logo} alt="PRE Technologies Logo" className="w-full h-full object-contain" />
                </div>

                {/* Desktop Menu - Hidden on mobile/tablet */}
                <ul className="hidden lg:flex space-x-4 underline-none gap-8 xl:gap-12 2xl:gap-16 relative">
                    {/* Why Us? Menu with Submenu */}
                    <li
                        className="relative"
                        onMouseEnter={() => handleMenuHover('whyUs')}
                        onMouseLeave={handleMenuLeave}
                    >
                        <a href="#why-us" className="underline-none hover:text-blue-600 transition-colors text-sm xl:text-base font-medium whitespace-nowrap">Why Us?</a>
                        {activeMenu === 'whyUs' && (
                            <div className="absolute left-0 mt-2 w-64 xl:w-72 bg-gray-900 text-white rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                {menuData.whyUs.map((item, index) => (
                                    <div key={index} className="px-4 xl:px-6 py-3 xl:py-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-800 transition-colors cursor-pointer">
                                        <div className="font-bold text-xs xl:text-sm">{item.title}</div>
                                        {item.subtitle && <div className="text-xs text-gray-300 italic mt-1">{item.subtitle}</div>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* Services Menu with Submenu */}
                    <li
                        className="relative"
                        onMouseEnter={() => handleMenuHover('services')}
                        onMouseLeave={handleMenuLeave}
                    >
                        <a href="#services" className="underline-none hover:text-blue-600 transition-colors text-sm xl:text-base font-medium whitespace-nowrap">Services</a>
                        {activeMenu === 'services' && (
                            <div className="absolute left-0 mt-2 w-80 xl:w-96 bg-gray-900 text-white rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                {menuData.services.map((item, index) => (
                                    <div key={index} className="px-4 xl:px-6 py-3 xl:py-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-800 transition-colors cursor-pointer">
                                        <div className="font-bold text-xs xl:text-sm">{item.title}</div>
                                        {item.subtitle && <div className="text-xs text-gray-300 italic mt-1">{item.subtitle}</div>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* Sectors Menu with Submenu (Grid Layout) */}
                    <li
                        className="relative"
                        onMouseEnter={() => handleMenuHover('sectors')}
                        onMouseLeave={handleMenuLeave}
                    >
                        <a href="#sectors" className="underline-none hover:text-blue-600 transition-colors text-sm xl:text-base font-medium whitespace-nowrap">Sectors</a>
                        {activeMenu === 'sectors' && (
                            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-gray-900 text-white rounded-lg shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-200 min-w-[500px] xl:min-w-[600px]">
                                <div className="grid grid-cols-2 gap-0">
                                    {menuData.sectors.map((item, index) => (
                                        <div key={index} className="px-3 xl:px-5 py-3 xl:py-4 border-b border-gray-700 border-r border-gray-700 last:border-r-0 hover:bg-gray-800 transition-colors cursor-pointer">
                                            <div className="font-bold text-white text-xs leading-tight">{item.title}</div>
                                            {item.subtitle && <div className="text-xs text-gray-300 italic mt-1.5 font-light">{item.subtitle}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </li>

                    {/* Experience Menu with Submenu */}
                    <li
                        className="relative"
                        onMouseEnter={() => handleMenuHover('experience')}
                        onMouseLeave={handleMenuLeave}
                    >
                        <a href="#experience" className="underline-none hover:text-blue-600 transition-colors text-sm xl:text-base font-medium whitespace-nowrap">Experience</a>
                        {activeMenu === 'experience' && (
                            <div className="absolute left-0 mt-2 w-80 xl:w-96 bg-gray-900 text-white rounded-lg shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                {menuData.experience.map((item, index) => (
                                    <div key={index} className="px-4 xl:px-6 py-3 xl:py-4 border-b border-gray-700 last:border-b-0 hover:bg-gray-800 transition-colors cursor-pointer">
                                        <div className="font-bold text-xs xl:text-sm">{item.title}</div>
                                        {item.subtitle && <div className="text-xs text-gray-300 italic mt-1">{item.subtitle}</div>}
                                    </div>
                                ))}
                            </div>
                        )}
                    </li>

                    {/* Contact Menu (No Submenu) */}
                    <li className="relative">
                        <a href="#contact" className="underline-none hover:text-blue-600 transition-colors text-sm xl:text-base font-medium whitespace-nowrap">Contact</a>
                    </li>
                </ul>

                {/* Mobile Menu Button - Visible on tablet and mobile */}
                <button
                    onClick={toggleMobileMenu}
                    className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none"
                    aria-label="Toggle mobile menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-6 h-0.5 bg-gray-600 mt-1.5 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </nav>

            {/* Mobile Menu Overlay - Responsive for mobile/tablet */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden animate-in fade-in duration-300">
                    <div className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 animate-in slide-in-from-right duration-300 overflow-y-auto">
                        <div className="p-6">
                            {/* Mobile Menu Items */}
                            <ul className="space-y-2 pt-6">
                                {/* Why Us? Mobile Menu */}
                                <li className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleMobileSubmenu('whyUs')}
                                        className="flex justify-between items-center w-full py-3 text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        Why Us?
                                        <svg className={`w-5 h-5 transition-transform duration-200 ${mobileSubmenu === 'whyUs' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {mobileSubmenu === 'whyUs' && (
                                        <div className="pl-4 space-y-2 pb-3 animate-in slide-in-from-top-2 duration-200">
                                            {menuData.whyUs.map((item, index) => (
                                                <a key={index} href="#why-us" className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">{item.title}</div>
                                                    {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>

                                {/* Services Mobile Menu */}
                                <li className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleMobileSubmenu('services')}
                                        className="flex justify-between items-center w-full py-3 text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        Services
                                        <svg className={`w-5 h-5 transition-transform duration-200 ${mobileSubmenu === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {mobileSubmenu === 'services' && (
                                        <div className="pl-4 space-y-2 pb-3 animate-in slide-in-from-top-2 duration-200">
                                            {menuData.services.map((item, index) => (
                                                <a key={index} href="#services" className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">{item.title}</div>
                                                    {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>

                                {/* Sectors Mobile Menu */}
                                <li className="border-b border-gray-100">
                                    <button
                                        onClick={() => toggleMobileSubmenu('sectors')}
                                        className="flex justify-between items-center w-full py-3 text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        Sectors
                                        <svg className={`w-5 h-5 transition-transform duration-200 ${mobileSubmenu === 'sectors' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {mobileSubmenu === 'sectors' && (
                                        <div className="pl-4 space-y-2 pb-3 max-h-96 overflow-y-auto animate-in slide-in-from-top-2 duration-200">
                                            {menuData.sectors.map((item, index) => (
                                                <a key={index} href="#sectors" className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">{item.title}</div>
                                                    {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>

                                {/* Experience Mobile Menu */}
                                <li className="border-b border-gray-100 pb-2">
                                    <button
                                        onClick={() => toggleMobileSubmenu('experience')}
                                        className="flex justify-between items-center w-full py-3 text-left font-medium text-gray-800 hover:text-blue-600 transition-colors"
                                    >
                                        Experience
                                        <svg className={`w-5 h-5 transition-transform duration-200 ${mobileSubmenu === 'experience' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                    {mobileSubmenu === 'experience' && (
                                        <div className="pl-4 space-y-2 pb-3 animate-in slide-in-from-top-2 duration-200">
                                            {menuData.experience.map((item, index) => (
                                                <a key={index} href="#experience" className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                                                    <div className="font-medium">{item.title}</div>
                                                    {item.subtitle && <div className="text-xs text-gray-500 mt-0.5">{item.subtitle}</div>}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>

                                {/* Contact Mobile Menu */}
                                <li className="border-b border-gray-100 pb-2">
                                    <a href="#contact" className="block py-3 text-left font-medium text-gray-800 hover:text-blue-600 transition-colors">
                                        Contact
                                    </a>
                                </li>

                                {/* Mobile Language Selector */}
                                <li className="pt-4 mt-4 border-t border-gray-200">
                                    <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-600">Language:</span>
                                        <button className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-50 rounded-md">
                                            ENG
                                        </button>
                                        <button className="px-3 py-1 text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
                                            ESP
                                        </button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default NavBar;