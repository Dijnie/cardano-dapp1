import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import { Heart } from 'lucide-react';

interface NFTCardProps {
  id: string;
  title: string;
  image: string;
  price: string;
  creator: {
    name: string;
    avatar: string;
  };
  likes?: number;
}

export function NFTCard({ id, title, image, price, creator, likes = 0 }: NFTCardProps) {
  return (
    <Card className="p-0 overflow-hidden group cursor-pointer border-white/5" hoverEffect={true}>
        <div className="relative aspect-square overflow-hidden bg-slate-900">
            <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-full bg-black/40 backdrop-blur-md text-white hover:bg-white/20 transition-colors">
                    <Heart size={18} />
                </button>
            </div>
            
            {/* Hover Overlay with Action */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
               <Link href={`/nft/${id}`}>
                 <Button variant="primary" size="sm" className="translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Details
                 </Button>
               </Link>
            </div>
        </div>

        <div className="p-5 space-y-4">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-semibold text-lg text-white group-hover:text-primary transition-colors">{title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                        <Avatar src={creator.avatar} fallback={creator.name[0]} size="sm" className="w-5 h-5" />
                        <span className="text-xs text-slate-400">{creator.name}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex flex-col">
                    <span className="text-xs text-slate-500">Price</span>
                    <span className="font-bold text-secondary">{price} ADA</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 text-xs">
                    <Heart size={12} className="fill-slate-500" />
                    <span>{likes}</span>
                </div>
            </div>
        </div>
    </Card>
  );
}
