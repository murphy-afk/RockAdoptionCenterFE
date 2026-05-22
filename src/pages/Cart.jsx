// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";

// export default function Cart() {
//   const { cart: cartItems, removeFromCart, clearCart } = useCart();

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-200 py-14 px-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-5xl font-extrabold text-purple-700 mb-10 drop-shadow-sm text-center">
//           Your Cart
//         </h1>

//         {cartItems.length === 0 ? (
//           <div className="text-center text-purple-600 text-xl font-semibold">
//             Your cart is empty… for now!  
//             <br />
//             <Link
//               to="/rocks"
//               className="inline-block mt-6 px-6 py-3 bg-purple-500 text-white rounded-2xl border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc] hover:-translate-y-1 transition">
//               Browse Rocks
//             </Link>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="bg-white p-5 rounded-3xl border-4 border-purple-300 shadow-[4px_4px_0px_#c084fc] flex gap-6">
//                 <img
//                   src={item.image_url || 'https://picsum.photos/300'}
//                   alt={item.name}
//                   className="w-32 h-32 rounded-2xl object-cover border-4 border-purple-200"/>
//                 <div className="flex-1">
//                   <h2 className="text-3xl font-bold text-purple-700">{item.name}</h2>
//                   <p className="text-purple-600 font-semibold">€{item.price}</p>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="
//                   px-4 py-2 bg-red-400 text-white font-bold rounded-xl
//                   border-4 border-red-500 shadow-[3px_3px_0px_#f87171]
//                   hover:shadow-[5px_5px_0px_#ef4444] hover:-translate-y-1
//                   transition-all duration-200" >
//                   Remove
//                 </button>
//               </div>
//             ))}
//             <div className="flex flex-col gap-4">
//               <button className="w-full px-8 py-4 bg-green-400 text-white text-2xl font-bold rounded-2xl border-4 border-green-500 shadow-[4px_4px_0px_#86efac] hover:-translate-y-1 transition">
//                 Checkout
//               </button>
//               <button
//                 onClick={clearCart}
//                 className="w-full px-8 py-4 bg-red-500 text-white text-2xl font-bold rounded-2xl border-4 border-red-600 shadow-[4px_4px_0px_#be123c] hover:-translate-y-1 transition">
//                 Clear Cart
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
