import logo from '../assets/PRE_Technologies.png';
const NavBar = () => {
    return (
        <>
        <div>
            
        </div>
        <nav className="flex flex-row justify-around align-middle p-4 text-black bg-white pt-8 border-b-2 border-gray-300">
            <div className="h-16 w-64">
                <img src={logo} alt="PRE Technologies Logo" />
            </div>
            <ul className="flex space-x-4 underline-none gap-16">
                <li><a href="#home " className='underline-none'>Why Us?</a></li>
                <li><a href="#about" className='underline-none'>Services</a></li>
                <li><a href="#services" className='underline-none'>Sectors</a></li>
                <li><a href="#contact" className='underline-none'>Experience</a></li>
                <li><a href="#services" className='underline-none'>Contact</a></li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar;