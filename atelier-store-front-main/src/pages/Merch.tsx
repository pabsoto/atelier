import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  image: string;
  stock: number;
  isExclusive: boolean;
}

const Merch = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
        console.log("Productos cargados:", response.data);
      } catch (error) {
        console.error("Error al cargar los productos", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main className="py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Toda la Mercancía</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item._id}
              className="bg-slate-800 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform"
              onClick={() => navigate(`/products/${item._id}`)}  
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
                  {item.name}
                </h3>
                <p className="text-slate-400 text-sm mb-2">Stock: {item.stock}</p>
                <p className="text-purple-300 font-bold text-lg">
                  ${item.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Merch;
