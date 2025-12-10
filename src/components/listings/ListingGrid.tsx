import { NFTCard } from './NFTCard';

// Temporary mock data
const MOCK_NFTS = [
  { id: '1', title: 'Cosmic Traveler #1024', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800', price: '450', creator: { name: 'Nebula Artist', avatar: '' }, likes: 24 },
  { id: '2', title: 'Neon Genesis', image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800', price: '1,200', creator: { name: 'BitMaster', avatar: '' }, likes: 156 },
  { id: '3', title: 'Abstract Dreams', image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800', price: '85', creator: { name: 'ColorFlow', avatar: '' }, likes: 8 },
  { id: '4', title: 'Cyber Punk 2099', image: 'https://images.unsplash.com/photo-1614812513172-567d2fe96a75?auto=format&fit=crop&q=80&w=800', price: '3,500', creator: { name: 'FutureLabs', avatar: '' }, likes: 432 },
  { id: '5', title: 'Digital Soul', image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?auto=format&fit=crop&q=80&w=800', price: '210', creator: { name: 'SoulKeeper', avatar: '' }, likes: 67 },
  { id: '6', title: 'Metaverse Key', image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800', price: '890', creator: { name: 'GateKeeper', avatar: '' }, likes: 98 },
];

export function ListingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {MOCK_NFTS.map((nft) => (
        <NFTCard key={nft.id} {...nft} />
      ))}
    </div>
  );
}
