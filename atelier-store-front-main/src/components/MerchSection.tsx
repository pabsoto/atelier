
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

const MerchSection = () => {
  const navigate = useNavigate();
  
  const merchItems = [
    {
      id: 1,
      title: "Eternal Sunshine (Lp-Vinilo)",
      price: "$32.97",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      title: "To Hell With It - CD",
      price: "$14.97",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    },
    {
      id: 3,
      title: "Moodswings In This Order - CD",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 4,
      title: "TYLA (Lp - Vinilo)",
      price: "$28.83",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    },
    {
      id: 5,
      title: "Planet Her - Vinyl",
      price: "$35.99",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 6,
      title: "SOUR - CD",
      price: "$16.99",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    },
    {
      id: 7,
      title: "Tyler Cole Vinyl",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&h=200&fit=crop"
    },
    {
      id: 8,
      title: "SOLO - Single CD",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-white">Merch</h2>
        <Button 
          variant="ghost" 
          className="text-purple-300 hover:text-white flex items-center gap-2"
          onClick={() => navigate('/merch')}
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
          {merchItems.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="group cursor-pointer" onClick={() => navigate(`/merch/${item.id}`)}>
                <div className="bg-slate-800 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-white font-medium mb-2 line-clamp-2 text-sm">{item.title}</h3>
                    <p className="text-purple-300 font-bold">{item.price}</p>
                  </div>
                </div>
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

export default MerchSection;
