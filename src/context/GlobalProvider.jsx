import { CartProvider } from "./CartContext"
import { WishlistProvider } from "./WishlistContext"

export default function GlobalProvider({ children }) {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  )
}
