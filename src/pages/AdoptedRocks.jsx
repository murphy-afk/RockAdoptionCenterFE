import { useEffect, useState } from "react";
import axios from "axios";

export default function AdoptedRocks() {
  const [rocks, setRocks] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/rocks/adopted")
      .then((response) => setRocks(response.data.data));
  }, []);


  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-200 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-10 text-center">
          Our Happy Adopted Rocks 💗
        </h1>
        {rocks.length === 0 ? (
          <p className="text-center text-purple-600 text-xl">
            No rocks have been adopted yet…
            <br />
            Be the first to give one a loving home!
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {rocks.map((rock) => (
              <div
                key={rock.id}
                className="bg-white rounded-3xl p-5 border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc]">
                <img
                  src={rock.image_url
                    ? `http://127.0.0.1:8000/storage/${rock.image_url}`
                    : 'https://picsum.photos/300'
                  }
                  alt={rock.name}
                  className="w-full h-48 object-cover rounded-xl
                  group-hover:scale-110 transition-transform duration-300"/>
                <h2 className="text-3xl font-bold text-purple-700">{rock.name}</h2>
                <p className="text-purple-600 mt-2">
                  Living their best life 💖
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
