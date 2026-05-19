import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200 relative overflow-hidden">

      {/* Floating blobs */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-5xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-6xl font-extrabold text-purple-700 drop-shadow-lg mb-6">
          Welcome to the Pet Rock Adoption Center
        </h1>

        <p className="text-lg text-purple-700 font-medium mb-10">
          Cute, quirky, and full of personality — find the perfect rock friend today.
        </p>

        <Link
          to="/rocks"
          className="
            inline-block px-8 py-4 bg-purple-500 text-white text-xl font-bold rounded-2xl
            border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc]
            hover:shadow-[6px_6px_0px_#a855f7] hover:-translate-y-1 transition-all
          "
        >
          Browse Rocks ✨
        </Link>
      </div>
    </div>
  );
}
