import { useEffect, useState } from "react";
import RockCard from "../components/RockCard"
import axios from 'axios'

export default function AllRocks() {

  const [rocks, setRocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/rocks")
      .then((res) => {
        setRocks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);


  if (loading) return <div className="text-center py-20 text-xl">Loading rocks...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-purple-700 mb-12 text-center drop-shadow-lg">
          Adopt a Pet Rock
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {rocks.map((rock) => (
            <RockCard key={rock.id} rock={rock} />
          ))}
        </div>
      </div>
    </div>

  );
}



