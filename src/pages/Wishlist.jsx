import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
      <div className="max-w-6xl mx-auto relative z-10 my-3">
        <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-10 shadow-xl border border-white/40">
          <h1 className="text-5xl font-extrabold text-pink-600 mb-10 drop-shadow-sm text-center">
            Your Wishlist
          </h1>

          {wishlist.length === 0 ? (
            <div className="text-center text-pink-600 text-xl font-semibold">
              Your wishlist is empty…
              <br />
              <Link
                to="/rocks"
                className="inline-block mt-6 px-6 py-3 bg-pink-400 text-white rounded-2xl border-4 border-pink-500 shadow-[4px_4px_0px_#f9a8d4] hover:-translate-y-1 transition">
                Find Cute Rocks
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {wishlist.map((rock) => (
                <div
                  key={rock.id}
                  className="
                    bg-white/80 backdrop-blur-md rounded-3xl p-5
                    border-4 border-pink-400 shadow-[4px_4px_0px_#f9a8d4]
                    hover:shadow-[6px_6px_0px_#f472b6] hover:-translate-y-1
                    transition-all">
                  <img
                    src={
                      rock.image_url
                        ? `http://127.0.0.1:8000/storage/${rock.image_url}`
                        : "http://127.0.0.1:8000/storage/img/placeholder.jpg"
                    }
                    alt={rock.name}
                    className="
                      w-full h-64 object-cover object-center rounded-2xl
                      transition-transform duration-300 cursor-pointer"/>
                  <h2 className="text-3xl font-bold text-pink-600 mt-4 text-center">
                    {rock.name}
                  </h2>
                  <div className="flex justify-center gap-4 mt-6">
                    <button
                      onClick={() => removeFromWishlist(rock.id)}
                      className="
                        px-4 py-2 bg-red-400 text-white font-bold rounded-xl
                        border-4 border-red-500 shadow-[3px_3px_0px_#f87171]
                        hover:shadow-[5px_5px_0px_#ef4444] hover:-translate-y-1
                        transition-all duration-200">
                      Remove
                    </button>
                    <Link
                      to={`/adopt/${rock.id}`}
                      className="
                        px-6 py-3 bg-purple-500 text-white text-xl font-bold rounded-2xl
                        border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc]
                        hover:shadow-[6px_6px_0px_#a855f7] hover:-translate-y-1
                        transition-all duration-200">
                      {rock.adopted ? "Already Adopted!" : "Adopt Me"}
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
