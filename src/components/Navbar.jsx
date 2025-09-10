import { Link, NavLink } from 'react-router-dom'

const phone = '7780232547'
const wa = '917780232547'

const navLinkClass = ({isActive}) => 
  'px-3 py-2 rounded-xl text-sm font-medium ' + (isActive ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-200')

export default function Navbar(){
  return (
    <header className="bg-white/90 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-3">
        <Link to="/" className="flex flex-col md:flex-row items-center gap-0 md:gap-2">
          {/* Removed the logo image */}
          <div className="leading-4 text-center md:text-left">
            <p className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
              Sri Ganesh Batteries
            </p>
            <p className="text-xs text-gray-500">Kodad &bull; Since 2010</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-2">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/products" className={navLinkClass}>Products</NavLink>
          <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
          <NavLink to="/Reviews" className={navLinkClass}>Reviews</NavLink>
         

        </nav>

        <div className="flex gap-2">
          <a href={`tel:${phone}`} className="px-3 py-2 rounded-xl bg-gray-900 text-white text-sm">Call Now</a>
          <a href={`https://wa.me/${wa}`} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded-xl bg-green-600 text-white text-sm">WhatsApp</a>
        </div>
      </div>

      <div className="md:hidden flex justify-center gap-2 pb-3">
        <NavLink to="/" className={navLinkClass}>Home</NavLink>
        <NavLink to="/products" className={navLinkClass}>Products</NavLink>
        <NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink>
        <NavLink to="/about" className={navLinkClass}>About</NavLink>
        <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        <NavLink to="/Reviews" className={navLinkClass}>Reviews</NavLink>
        

      </div>
    </header>
  )
}
