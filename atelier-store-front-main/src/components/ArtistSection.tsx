
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ArtistSection = () => {
  const navigate = useNavigate();
  
  const artists = [
    {
      id: 1,
      name: "Ariana Grande",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Tyla",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Doja Cat",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      name: "DPR IAN",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      name: "Pink Pantheres",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      name: "JENNIE",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    },
    {
      id: 7,
      name: "Olivia Rodrigo",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 8,
      name: "Tyler Cole",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Artistas</h2>
        <Button 
          variant="ghost" 
          className="text-purple-300 hover:text-white flex items-center gap-2"
          onClick={() => navigate('/artists')}
        >
          ver más
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {artists.map((artist) => (
            <CarouselItem key={artist.id} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
              <div className="text-center group cursor-pointer">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-3 group-hover:scale-105 transition-transform mx-auto">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-white font-medium text-sm">{artist.name}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
        <CarouselNext className="bg-slate-800 border-slate-600 text-white hover:bg-slate-700" />
      </Carousel>
    </section>
  );
};

export default ArtistSection;
