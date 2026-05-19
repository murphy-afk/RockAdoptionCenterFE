
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-pink-200 to-purple-200 py-4 shadow-md border-b-4 border-purple-300 relative">
      <div className="absolute top-0 left-0 w-32 h-32 bg-pink-300 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-extrabold text-purple-700 drop-shadow-sm hover:scale-105 transition">
          PetRock ✨
        </Link>
        <nav className="flex items-center gap-6 text-lg font-bold text-purple-700">
          <Link
            to="/"
            className="hover:text-purple-900 hover:-translate-y-1 transition">
            Home
          </Link>
          <Link
            to="/rocks"
            className="hover:text-purple-900 hover:-translate-y-1 transition">
            Rocks
          </Link>
          
          <Link
            to="/adoptedrocks"
            className="hover:text-purple-900 hover:-translate-y-1 transition">
            Adopted rocks
          </Link>
          
          <Link
            to="/wishlist"
            className="flex items-center gap-1 hover:text-purple-900 hover:-translate-y-1 transition">
            <FaHeart className="text-red-500" /> Wishlist
          </Link>
        </nav>
      </div>
    </header>
  );
}