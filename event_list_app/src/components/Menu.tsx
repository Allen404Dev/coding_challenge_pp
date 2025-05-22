import { useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import logoIconX from "../assets/logo_eventX_transparent.png";
import { Link } from "react-router-dom";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className=" text-white shadow-md fixed top-0 left-0 w-full border-b-[1px] border-blue-400 z-50 backdrop-blur-md bg-[#0f172a]/80">
      <div className="container mx-auto flex items-center justify-end relative h-20">
        <Link to="/" className="absolute top-[30px] left-0">
          <img src={logoIconX} alt="Logo" className="h-20" />
        </Link>

        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:text-blue-400 transition-colors">
            Link 1
          </a>
          <a href="#" className="hover:text-blue-400  transition-colors">
            Link 2
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Link 3
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            Link 4
          </a>
        </nav>

        <button
          className="md:hidden focus:outline-none p-4"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <X size={40} color="#42a5f5" />
          ) : (
            <MenuIcon size={40} color="#42a5f5" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0f172a] flex flex-col gap-4 pt-10 pb-10 p-4 ">
          <a href="#" className="block text-white hover:text-[#42a5f5]">
            Link 1
          </a>
          <a href="#" className="block text-white hover:text-[#42a5f5]">
            Link 2
          </a>
          <a href="#" className="block text-white hover:text-[#42a5f5]">
            Link 3
          </a>
          <a href="#" className="block text-white hover:text-[#42a5f5]">
            Link 4
          </a>
        </div>
      )}
    </header>
  );
};

export default Menu;
