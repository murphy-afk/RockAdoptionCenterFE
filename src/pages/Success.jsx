import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Success() {
  const { id } = useParams();
  const [rock, setRock] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/rocks/${id}`).then((res) => {
      setRock(res.data.data);
    });
  }, [id]);

  if (!rock) {
    return (
      <div className="text-center py-20 text-xl text-purple-700">
        Loading your newly adopted friend…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 py-14 px-6">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl border-4 border-purple-300 shadow-[6px_6px_0px_#c084fc] text-center">

        <h1 className="text-5xl font-extrabold text-purple-700 mb-6 drop-shadow-sm">
          You Adopted {rock.name}! 💖
        </h1>

        <div className="w-full h-72 rounded-3xl overflow-hidden border-4 border-purple-200 bg-gradient-to-br from-purple-100 to-pink-100 mb-8">
          <img
            src={rock.image_url || 'https:picsum.photos/800'}
            alt={rock.name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
          {rock.name} is so excited to start a new life with you!  
          <br />
          They're already settling in and feeling loved. 🌱💗
        </p>

        <div className="flex justify-center gap-6">

          <Link
            to="/rocks"
            className="
              px-6 py-3 bg-purple-500 text-white text-xl font-bold rounded-2xl
              border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc]
              hover:shadow-[6px_6px_0px_#a855f7] hover:-translate-y-1
              transition-all duration-200">
            Back to All Rocks
          </Link>

          <Link
            to="/adoptedrocks"
            className="
              px-6 py-3 bg-pink-400 text-white text-xl font-bold rounded-2xl
              border-4 border-pink-500 shadow-[4px_4px_0px_#f9a8d4]
              hover:shadow-[6px_6px_0px_#ec4899] hover:-translate-y-1
              transition-all duration-200">
            See Adopted Rocks 💗
          </Link>

        </div>
      </div>
    </div>
  );
}
