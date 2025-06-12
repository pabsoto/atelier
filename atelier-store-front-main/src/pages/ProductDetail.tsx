import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

import { ShoppingCart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"; // Ajusta según dónde tengas el hook
import { useAuth } from "@/contexts/AuthContext"; // Asumo que tienes algo así en tu proyecto

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  stock: number;
  isExclusive: boolean;
}

const Footer = () => (
  <footer className="bg-slate-800 text-slate-300 py-6 mt-12 text-center">
    © 2025 Atelier Store. Todos los derechos reservados.
  </footer>
);

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useAuth();

  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error al cargar el producto", error);
        setProduct(null);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      toast({
        title: "Debes iniciar sesión",
        description: "Para añadir productos al carrito, inicia sesión primero.",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    // Aquí iría la lógica real para añadir al carrito
    toast({
      title: "Producto añadido",
      description: `Añadiste ${quantity} x ${product?.name} al carrito.`,
    });
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-white p-4">
          <h2 className="text-3xl font-semibold mb-6">Producto no encontrado</h2>
          <button
            onClick={() => navigate("/merch")}
            className="bg-purple-600 px-6 py-3 rounded-md hover:bg-purple-700 transition"
          >
            Volver a Mercancía
          </button>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 max-w-5xl mx-auto rounded-lg shadow-lg">
        <button
          onClick={() => navigate("/merch")}
          className="mb-8 text-purple-400 underline hover:text-purple-300 transition"
        >
          &larr; Volver a Mercancía
        </button>

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2 flex justify-center items-center">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg shadow-md max-h-[400px] object-contain"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-extrabold mb-4">{product.name}</h1>

              {product.isExclusive && (
                <span className="inline-block bg-purple-700 text-purple-300 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  Exclusivo
                </span>
              )}

              <p className="text-gray-300 leading-relaxed mb-6">{product.description}</p>

              <p className="text-2xl font-bold text-purple-400 mb-4">${product.price.toFixed(2)}</p>

              <p
                className={`mb-4 font-medium ${
                  product.stock > 0 ? "text-green-400" : "text-red-500"
                }`}
              >
                {product.stock > 0 ? `Stock disponible: ${product.stock}` : "Agotado"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <label htmlFor="quantity" className="font-semibold text-lg">
                Cantidad:
              </label>
              <input
                id="quantity"
                type="number"
                min={1}
                max={product.stock}
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="w-24 text-black rounded-md px-3 py-2 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-500"
                disabled={product.stock === 0}
              />
            </div>

            <button
              onClick={handleAddToCart}
              disabled={quantity < 1 || quantity > product.stock}
              className={`mt-8 py-3 rounded-md font-semibold text-lg transition flex items-center justify-center gap-2 
                ${
                  quantity < 1 || quantity > product.stock
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
            >
              <ShoppingCart className="w-5 h-5" />
              Añadir al carrito
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductDetail;
