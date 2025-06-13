import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";  // sin BrowserRouter aquí
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import Checkout from "@/pages/Checkout";


// Lazy loaded pages
const Index = lazy(() => import("@/pages/Index"));
const Login = lazy(() => import("@/pages/Login"));
const Register = lazy(() => import("@/pages/Register"));
const Artists = lazy(() => import("@/pages/Artists"));
const Merch = lazy(() => import("@/pages/Merch"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// Query client configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Suspense fallback={<div className="text-white p-8 text-center">Cargando...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/merch" element={<Merch />} />
                <Route path="/products/:id" element={<ProductDetail />} />
                <Route path="*" element={<NotFound />} />
                <Route path="/checkout" element={<Checkout />} />

              </Routes>
            </Suspense>
            <ShadcnToaster />
            <SonnerToaster />
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
