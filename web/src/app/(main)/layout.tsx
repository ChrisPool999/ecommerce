import "@styles/globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { NavBar } from "@/components/Navigation/NavBar"
import { SlidingMenu } from "@/components/Navigation/SlidingMenu"
import { MenuProvider }  from "@/context/MenuContext"
import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <AuthProvider>
            <CartProvider>
              <MenuProvider menuId="nav-sliding-menu">
                <NavBar></NavBar>
                <SlidingMenu></SlidingMenu>
                  {children}
              </MenuProvider>
            </CartProvider>
          </AuthProvider>
        </AppRouterCacheProvider>
        </body>
    </html>
  );
}