import { Button } from '@/components/ui/Button';
import { ListingGrid } from '@/components/listings/ListingGrid';

export default function Home() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative pt-12 pb-20 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px] rounded-full -z-10 pointer-events-none" />
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-white">Discover & Collect</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent">
            Extraordinary NFTs
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10">
          The most premium marketplace on Cardano. Buy, sell, and discover exclusive digital assets with low fees and high speed.
        </p>
        
        <div className="flex gap-4">
          <Button size="lg" variant="primary">Explore Market</Button>
          <Button size="lg" variant="outline">Create NFT</Button>
        </div>
      </section>

       {/* Featured / Listings Section */}
       <section className="space-y-8">
        <div className="flex items-center justify-between">
           <h2 className="text-3xl font-bold text-white">Top Collections</h2>
           <Button variant="ghost">View All</Button>
        </div>
        
        <ListingGrid />
       </section>
    </div>
  );
}
