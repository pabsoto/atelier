
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Artists = () => {
  const artists = [
    {
      id: 1,
      name: "Ariana Grande",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      genre: "Pop",
      albums: 6
    },
    {
      id: 2,
      name: "Tyla",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      genre: "Afrobeats",
      albums: 2
    },
    {
      id: 3,
      name: "Doja Cat",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      genre: "Hip Hop/Pop",
      albums: 4
    },
    {
      id: 4,
      name: "DPR IAN",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      genre: "Alternative R&B",
      albums: 3
    },
    {
      id: 5,
      name: "Pink Pantheres",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      genre: "Electronic",
      albums: 2
    },
    {
      id: 6,
      name: "JENNIE",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      genre: "K-Pop",
      albums: 1
    },
    {
      id: 7,
      name: "Olivia Rodrigo",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
      genre: "Pop Rock",
      albums: 2
    },
    {
      id: 8,
      name: "Tyler Cole",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      genre: "R&B",
      albums: 3
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main className="py-12 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">Todos los Artistas</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-slate-800 rounded-lg overflow-hidden group cursor-pointer hover:scale-105 transition-transform">
              <img 
                src={artist.image} 
                alt={artist.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-white font-bold text-lg mb-2">{artist.name}</h3>
                <p className="text-purple-300 mb-1">{artist.genre}</p>
                <p className="text-slate-400 text-sm">{artist.albums} álbumes</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Artists;
