import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext"

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart()

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 py-14 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-pink-600 mb-10 drop-shadow-sm text-center">
          Your Wishlist 💗
        </h1>

        {wishlist.length === 0 ? (
          <div className="text-center text-pink-600 text-xl font-semibold">
            Your wishlist is empty…
            <br />
            <Link
              to="/rocks"
              className="inline-block mt-6 px-6 py-3 bg-pink-400 text-white rounded-2xl border-4 border-pink-500 shadow-[4px_4px_0px_#f9a8d4] hover:-translate-y-1 transition">
              Find Cute Rocks ✨
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-3xl border-4 border-pink-400 shadow-[4px_4px_0px_#f9a8d4] flex gap-6">
                <img
                  src={item.image_url || 'https://picsum.photos/300'}
                  alt={item.name}
                  className="w-32 h-32 rounded-2xl object-cover border-4 border-pink-300" />
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-pink-600">{item.name}</h2>
                  <p className="text-pink-500 font-semibold">€{item.price}</p>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="
                    px-4 py-2 bg-red-400 text-white font-bold rounded-xl
                    border-4 border-red-500 shadow-[3px_3px_0px_#f87171]
                    hover:shadow-[5px_5px_0px_#ef4444] hover:-translate-y-1
                    transition-all duration-200">
                    Remove
                  </button>
                  <Link
                    to={`/adopt/${item.id}`}
                    className="
                    px-6 py-3 bg-purple-500 text-white text-xl font-bold rounded-2xl
                    border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc]
                    hover:shadow-[6px_6px_0px_#a855f7] hover:-translate-y-1
                    transition-all duration-200">
                    {item.adopted ? "Already Adopted!" : "Adopt Me 💖"}
                  </Link>

                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
