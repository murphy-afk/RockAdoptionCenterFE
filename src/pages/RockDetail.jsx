import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useCart } from "../context/CartContext"
import { useWishlist } from "../context/WishlistContext"

export default function RockDetail() {
  const { id } = useParams()
  const [rock, setRock] = useState(null)
  const { toggleWishlist, wishlist } = useWishlist();
  const { addToCart } = useCart()

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/rocks/${id}`).then((res) => {
      setRock(res.data.data);
    });
  }, [id]);

  if (!rock) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-200 py-14 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 border-4 border-purple-300 shadow-[6px_6px_0px_#c084fc] relative">

        <div className="w-full h-80 rounded-3xl overflow-hidden border-4 border-purple-200 bg-gradient-to-br from-pink-100 to-purple-100 mb-6">
          <img
            src={rock.image_url || "https://picsum.photos/800"}
            alt={rock.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-sm">
          {rock.name}
        </h1>
        <div className="flex flex-wrap gap-3 mb-6">
          {rock.type && (
            <span className="px-4 py-2 bg-purple-200 text-purple-700 font-bold rounded-xl border-2 border-purple-400">
              Type: {rock.type.name}
            </span>
          )}

          {rock.mood && (
            <span className="px-4 py-2 bg-pink-200 text-pink-700 font-bold rounded-xl border-2 border-pink-400">
              Mood: {rock.mood.name}
            </span>
          )}

          {rock.rarity && (
            <span className="px-4 py-2 bg-yellow-200 text-yellow-700 font-bold rounded-xl border-2 border-yellow-400">
              Rarity: {rock.rarity.name}
            </span>
          )}
        </div>

        <div className="mt-10">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-4 drop-shadow-sm flex items-center gap-2">
            Skills
            <span className="text-yellow-400 text-2xl">✨</span>
          </h2>

          {rock.skills && rock.skills.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {rock.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="
                  px-5 py-3 rounded-2xl bg-gradient-to-br from-green-200 to-green-300
                  border-4 border-green-400 shadow-[3px_3px_0px_#86efac]
                  text-green-800 font-bold text-lg
                  hover:-translate-y-1 hover:rotate-1 transition-all duration-200
                  flex flex-col items-start">
                  <span className="text-xl">{skill.name}</span>
                  {skill.power_level && (
                    <span className="text-sm font-semibold text-green-700 opacity-80">
                      Power: {skill.power_level}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">This rock has no special skills… yet!</p>
          )}
        </div>
        <p className="text-purple-700 font-bold mt-6">Origin story:</p>
        <p className="text-gray-700 text-lg mb-8 leading-relaxed ">
          {rock.origin_story || "This rock has a mysterious past..."}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-4xl font-extrabold text-purple-600 drop-shadow-sm">
            €{rock.price}
          </span>
          <div className="flex gap-4 items-center mt-6">

            {/* Adopt Button */}
            <button
              onClick={() => addToCart(rock)}
              className="
              px-6 py-3 bg-purple-500 text-white text-xl font-bold rounded-2xl
              border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc]
              hover:shadow-[6px_6px_0px_#a855f7] hover:-translate-y-1
              transition-all duration-200">
              Adopt Me 💖
            </button>

            <button
              onClick={() => toggleWishlist(rock)}
              className="
                px-6 py-3 bg-pink-400 text-white text-xl font-bold rounded-2xl
                border-4 border-pink-500 shadow-[4px_4px_0px_#f9a8d4]
                hover:shadow-[6px_6px_0px_#ec4899] hover:-translate-y-1
                transition-all duration-200">
              {wishlist.find((item) => item.id === rock.id)
                ? "💗 "
                : "♡"}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
