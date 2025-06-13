import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, User, ShoppingCart, ChevronDown, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useCart } from "@/contexts/CartContext";
import CartDrawer from "./Cart/CartDrawer";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();
  const { getTotalItems } = useCart();

  const artists = [
    "JENNIE",
    "Ariana Grande", 
    "Olivia Rodrigo",
    "Doja Cat",
    "DPR IAN",
    "Pink Pantheress",
  ];

  const merchItems = [
    "Eternal Sunshine (Lp-Vinilo)",
    "To Hell With It - CD",
    "Moodswings In This Order - CD", 
    "Tyler Cole Vinyl",
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="bg-slate-800/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold text-white">ATELIER STORE</h1>
              </Link>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              {/* Menú de Artistas */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-purple-300 flex items-center gap-1">
                    Artistas
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700 min-w-[200px]">
                  {artists.map((artist) => (
                    <DropdownMenuItem 
                      key={artist}
                      className="text-white hover:bg-slate-700 cursor-pointer"
                      onClick={() => navigate(`/artists/${artist.toLowerCase().replace(/\s+/g, '-')}`)}
                    >
                      {artist}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-slate-600" />
                  <DropdownMenuItem 
                    className="text-purple-300 hover:bg-slate-700 cursor-pointer font-medium"
                    onClick={() => navigate("/artists")}
                  >
                    Ver todos los artistas
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Menú de Merch */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-purple-300 flex items-center gap-1">
                    Merch
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700 min-w-[200px]">
                  {merchItems.map((item) => (
                    <DropdownMenuItem 
                      key={item}
                      className="text-white hover:bg-slate-700 cursor-pointer"
                      onClick={() => navigate("/merch")}
                    >
                      {item}
                    </DropdownMenuItem>
                  ))}
                  <DropdownMenuSeparator className="bg-slate-600" />
                  <DropdownMenuItem 
                    className="text-purple-300 hover:bg-slate-700 cursor-pointer font-medium"
                    onClick={() => navigate("/merch")}
                  >
                    Ver todo el merch
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Menú de Usuario */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-white hover:text-purple-300">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-slate-800 border-slate-700 min-w-[200px]">
                  {isAuthenticated && user ? (
                    <>
                      <DropdownMenuItem className="text-white font-medium cursor-default">
                        {user.name}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-slate-400 text-sm cursor-default">
                        {user.email}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-slate-600" />
                      <DropdownMenuItem
                        className="text-white hover:bg-slate-700 flex items-center gap-2 cursor-pointer"
                        onClick={handleLogout}
                      >
                        <LogOut className="w-4 h-4" />
                        Cerrar Sesión
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <DropdownMenuItem
                        className="text-white hover:bg-slate-700"
                        onClick={() => navigate("/login")}
                      >
                        Iniciar Sesión
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-white hover:bg-slate-700"
                        onClick={() => navigate("/register")}
                      >
                        Registrarse
                      </DropdownMenuItem>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Ícono de carrito con contador */}
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:text-purple-300 relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Drawer del carrito */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;