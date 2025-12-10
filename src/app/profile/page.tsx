'use client';

import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { ListingGrid } from '@/components/listings/ListingGrid';
import { Settings, Share2, Wallet } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="pb-20">
      {/* Banner */}
      <div className="h-64 md:h-80 w-full relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 via-primary/20 to-amber-500/20" />
        <img 
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2000" 
          alt="Cover" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button size="sm" variant="secondary">Change Cover</Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6 mb-8">
            <div className="flex items-end gap-6">
                <Avatar 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
                    fallback="CO" 
                    size="xl" 
                    className="border-4 border-slate-900 shadow-xl"
                />
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-white">Collector_One</h1>
                    <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                        <Wallet size={14} />
                        <span>addr1q9...4f7a</span>
                    </div>
                </div>
            </div>

            <div className="flex gap-3 mb-2">
                <Button variant="outline" size="sm">
                    <Settings size={18} />
                </Button>
                <Button variant="outline" size="sm">
                    <Share2 size={18} />
                </Button>
            </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
                { label: 'Total Value', value: '45.2k ADA' },
                { label: 'Items Owned', value: '34' },
                { label: 'Created', value: '12' },
                { label: 'Activity', value: '+15%' },
            ].map((stat, i) => (
                <div key={i} className="glass-panel p-4 rounded-xl text-center hover:bg-white/5 transition-colors">
                    <span className="block text-slate-400 text-xs uppercase tracking-wider mb-1">{stat.label}</span>
                    <span className="block text-xl font-bold text-white">{stat.value}</span>
                </div>
            ))}
        </div>

        {/* Tabs & Content */}
        <div className="space-y-8">
             <div className="border-b border-white/10 flex gap-8">
                <button className="pb-4 border-b-2 border-primary text-primary font-medium">Owned</button>
                <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-white transition-colors">Created</button>
                <button className="pb-4 border-b-2 border-transparent text-slate-400 hover:text-white transition-colors">Activity</button>
             </div>
             
             <ListingGrid />
        </div>
      </div>
    </div>
  );
}
