import { Link } from "react-router-dom";

export default function RockCard({ rock }) {
  return (
    <div
      className="
        relative bg-white rounded-3xl p-5 border-4 border-purple-300
        shadow-[4px_4px_0px_#c084fc] 
        hover:shadow-[6px_6px_0px_#a855f7]
        transition-all duration-300
        hover:-translate-y-2 hover:rotate-2
        cursor-pointer">
      <div
        className="
          absolute inset-0 -z-10 
          bg-gradient-to-br from-pink-200 to-purple-200 
          rounded-3xl blur-xl opacity-40"></div>
      <div
        className="
          w-full h-48 rounded-2xl overflow-hidden mb-4
          bg-gradient-to-br from-purple-100 to-pink-100
          flex items-center justify-center
          border-4 border-purple-200">
        <img
          src={rock.image_url || 'https://picsum.photos/300'}
          alt={rock.name}
          className="
            w-full h-full object-cover rounded-xl
            group-hover:scale-110 transition-transform duration-300"/>
      </div>

      <h2 className="text-3xl font-extrabold text-purple-700 mb-1 tracking-wide drop-shadow-sm">
        {rock.name}
      </h2>

      <p className="text-sm text-purple-500 mb-3 font-semibold">
        {rock.type?.name || "Unknown type"}
      </p>
      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
        {rock.origin_story || "This rock has a mysterious past..."}
      </p>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-extrabold text-purple-600 drop-shadow-sm">
          €{rock.price}
        </span>
        <Link
          to={`/rocks/${rock.id}`}
          className="
            px-4 py-2 rounded-xl bg-purple-400 text-white font-bold
            hover:bg-purple-500 transition shadow-md
            hover:shadow-lg hover:-translate-y-1">
          View
        </Link>
      </div>
    </div>
  );
}
