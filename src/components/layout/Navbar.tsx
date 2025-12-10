import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Search, Wallet } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-4 left-4 right-4 z-50 glass-panel rounded-2xl px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          NFT Market
        </Link>
        
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-white transition-colors">Marketplace</Link>
          <Link href="/sell" className="hover:text-white transition-colors">Sell</Link>
          <Link href="/profile" className="hover:text-white transition-colors">Profile</Link>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative group hidden sm:block">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500 group-focus-within:text-primary transition-colors">
            <Search size={18} />
          </div>
          <input 
            type="text" 
            placeholder="Search collections..." 
            className="h-10 w-64 rounded-full bg-white/5 border border-white/10 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
          />
        </div>

        <Button size="sm" variant="primary" className="gap-2">
          <Wallet size={16} />
          <span>Connect Wallet</span>
        </Button>
      </div>
    </nav>
  );
}
