'use client';

import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Avatar } from '@/components/ui/Avatar';
import { Share2, Heart, Eye, Clock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Mock data based on ID
const MOCK_DATA = {
    title: 'Cosmic Traveler #1024',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    price: '450',
    description: 'A unique digital asset traveling through the cosmos. This NFT grants you exclusive access to the Nebula DAO and future airdrops.',
    creator: { name: 'Nebula Artist', avatar: '', address: 'addr1...xyz' },
    owner: { name: 'Collector_One', avatar: '', address: 'addr1...abc' },
    attributes: [
        { trait_type: 'Background', value: 'Deep Space' },
        { trait_type: 'Suit', value: 'Neon MK-IV' },
        { trait_type: 'Helmet', value: 'Glass Visor' },
        { trait_type: 'Accessory', value: 'Plasma Rifle' },
    ],
    history: [
        { event: 'Listed', price: '450', from: 'Collector_One', date: '2 hours ago' },
        { event: 'Transfer', price: '-', from: 'Nebula Artist', to: 'Collector_One', date: '2 days ago' },
    ]
};

export default function NFTDetailPage() {
    // In a real app, use params.id to fetch data
    const params = useParams();
    const nft = MOCK_DATA;

    return (
        <div className="space-y-8 pb-20 fade-in">
             <div className="mb-6">
                <Link href="/" className="inline-flex items-center text-slate-400 hover:text-white transition-colors gap-2 text-sm font-medium">
                    <ArrowLeft size={16} />
                    Back to Marketplace
                </Link>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left Column: Image */}
                <div className="space-y-6">
                    <div className="aspect-square rounded-2xl overflow-hidden glass-panel p-2 shadow-[0_0_50px_-20px_var(--primary-glow)]">
                         <img 
                            src={nft.image} 
                            alt={nft.title} 
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                    
                    <Card className="space-y-4">
                        <div className="flex items-center gap-2 font-semibold text-lg border-b border-white/10 pb-4">
                           <Clock size={20} className="text-primary" />
                           <span>Sale ends February 14, 2025 at 5:00pm</span>
                        </div>
                        <div className="space-y-1">
                            <span className="text-slate-400 text-sm">Current price</span>
                            <div className="flex items-end gap-2">
                                <span className="text-4xl font-bold text-white">{nft.price} ADA</span>
                                <span className="text-slate-500 mb-1">($215.50)</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-2">
                            {/* Mock logic: If current user is owner (hardcoded for now as false, but let's toggle for demo) */}
                            {/* For demo purposes, we'll just show Buy Now. In a real app, strict checks apply. */}
                            <Button size="lg" className="w-full shadow-lg shadow-primary/20">Buy Now</Button>
                            <Button size="lg" variant="outline" className="w-full">Make Offer</Button>
                        </div>
                        
                        {/* Owner Controls (Mock) */}
                        <div className="pt-4 border-t border-white/10 mt-4">
                            <p className="text-xs text-slate-500 mb-2">Owner Controls (Demo)</p>
                            <div className="grid grid-cols-2 gap-4">
                                <Button size="sm" variant="secondary" className="w-full">Update Price</Button>
                                <Button size="sm" variant="outline" className="w-full text-red-400 hover:text-red-300 hover:border-red-400/50">Delist</Button>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Right Column: Details */}
                <div className="space-y-8">
                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-primary font-medium tracking-wide text-sm">NEBULA COLLECTION</span>
                            <div className="flex gap-2">
                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                                    <Share2 size={20} />
                                </button>
                                <button className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 hover:text-white">
                                    <Heart size={20} />
                                </button>
                            </div>
                        </div>
                        <h1 className="text-4xl font-bold text-white mb-6">{nft.title}</h1>
                        
                        <div className="flex items-center gap-8 mb-8">
                             <div className="flex items-center gap-3">
                                <Avatar fallback="NA" size="sm" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-400">Creator</span>
                                    <span className="text-sm font-medium text-white">{nft.creator.name}</span>
                                </div>
                             </div>
                             <div className="flex items-center gap-3">
                                <Avatar fallback="O1" size="sm" />
                                <div className="flex flex-col">
                                    <span className="text-xs text-slate-400">Owner</span>
                                    <span className="text-sm font-medium text-white">{nft.owner.name}</span>
                                </div>
                             </div>
                        </div>
                    </div>

                    <div className="glass-panel rounded-xl overflow-hidden">
                         <div className="p-4 border-b border-white/10 font-semibold flex items-center gap-2 bg-white/5">
                            <Eye size={18} />
                            Description
                         </div>
                         <div className="p-6 text-slate-300 leading-relaxed">
                            {nft.description}
                         </div>
                    </div>

                    <div className="glass-panel rounded-xl overflow-hidden">
                         <div className="p-4 border-b border-white/10 font-semibold flex items-center gap-2 bg-white/5">
                            Traits
                         </div>
                         <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                            {nft.attributes.map((attr, i) => (
                                <div key={i} className="bg-white/5 rounded-lg p-3 border border-white/5 text-center transition-colors hover:bg-white/10 hover:border-primary/30">
                                    <span className="block text-xs text-primary uppercase tracking-wider mb-1">{attr.trait_type}</span>
                                    <span className="block font-medium text-white">{attr.value}</span>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
             </div>
        </div>
    );
}
