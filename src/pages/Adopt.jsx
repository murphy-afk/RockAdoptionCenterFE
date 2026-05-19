import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

export default function AdoptRock() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [rock, setRock] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/rocks/${id}`).then((res) => {
      setRock(res.data.data);
    });
  }, [id]);

  const handleAdopt = () => {
    axios.post(`http://127.0.0.1:8000/api/rocks/${id}/adopt`).then(() => {
      navigate(`/adopted/${id}`);
    });
  };

  if (!rock) return <div className="text-center py-20 text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 py-14 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl border-4 border-purple-300 shadow-[6px_6px_0px_#c084fc]">

        <div className="w-full h-72 rounded-3xl overflow-hidden border-4 border-purple-200 bg-gradient-to-br from-purple-100 to-pink-100 mb-8">
          <img
            src={rock.image_url || 'https:picsum.photos/800'}
            alt={rock.name}
            className="w-full h-full object-cover rounded-2xl"/>
        </div>

        <h1 className="text-5xl font-extrabold text-purple-700 mb-4 drop-shadow-sm">
          Meet {rock.name} 💖
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
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
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-3 drop-shadow-sm">
            Origin Story 📖
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {rock.origin_story || "This rock has a mysterious past..."}
          </p>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-4 drop-shadow-sm flex items-center gap-2">
            Special Skills ✨
          </h2>
          {rock.skills?.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {rock.skills.map((skill) => (
                <div
                  key={skill.id}
                  className="
                    px-5 py-3 rounded-2xl bg-gradient-to-br from-green-200 to-green-300
                    border-4 border-green-400 shadow-[3px_3px_0px_#86efac]
                    text-green-800 font-bold text-lg
                    hover:-translate-y-1 hover:rotate-1 transition-all duration-200">
                  {skill.name}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 italic">This rock has no special skills… yet!</p>
          )}
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-3 drop-shadow-sm">
            Fun Facts 🌟
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
            <li>Loves sunbathing on warm windowsills</li>
            <li>Enjoys quiet evenings and soft music</li>
            <li>Has a surprisingly strong sense of direction</li>
          </ul>
        </div>
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-purple-700 mb-3 drop-shadow-sm">
            Care Tips 🌱
          </h2>
          <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed">
            <li>Give them a cozy spot to rest</li>
            <li>Occasional dusting keeps them happy</li>
            <li>Tell them they're doing great</li>
          </ul>
        </div>

        <button
          onClick={handleAdopt}
          disabled={rock.adopted}
          className={`
            px-8 py-4 text-2xl font-bold rounded-2xl border-4 transition-all duration-200
            ${rock.adopted
              ? "bg-gray-300 border-gray-400 text-gray-600 cursor-not-allowed shadow-none"
              : "bg-purple-500 text-white border-purple-300 shadow-[4px_4px_0px_#c084fc] hover:shadow-[6px_6px_0px_#a855f7] hover:-translate-y-1"
            }`}>
          {rock.adopted ? "Already Adopted!" : "Adopt This Rock 💖"}
        </button>
      </div>
    </div>
  );
}
