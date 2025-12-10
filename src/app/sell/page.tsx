'use client';

import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Upload, X, Plus } from 'lucide-react';

export default function SellPage() {
  return (
    <div className="max-w-3xl mx-auto pb-20 fade-in">
        <h1 className="text-3xl font-bold text-white mb-2">Create New NFT</h1>
        <p className="text-slate-400 mb-8">Mint and list your asset on the Marketplace.</p>

        <div className="space-y-8">
            {/* Upload Section */}
            <div className="space-y-4">
                <label className="text-sm font-medium text-slate-300">File Upload</label>
                <div className="border-2 border-dashed border-white/20 rounded-2xl h-64 flex flex-col items-center justify-center bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform text-primary">
                        <Upload size={32} />
                    </div>
                    <p className="text-sm text-slate-300 font-medium">Drag and drop or click to upload</p>
                    <p className="text-xs text-slate-500 mt-2">PNG, JPG, GIF, WEBP up to 50MB</p>
                </div>
            </div>
            
            <Card className="space-y-6">
                <Input label="Item Name" placeholder="e.g. Cosmic Traveler #1" />
                
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Description</label>
                    <textarea 
                        className="flex w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-32 resize-none"
                        placeholder="Provide a detailed description of your item"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Price (ADA)" placeholder="0.00" type="number" />
                    <Input label="Royalties (%)" placeholder="5" type="number" />
                </div>
            </Card>

            <div className="space-y-4">
                 <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-300">Attributes</label>
                    <Button size="sm" variant="ghost" className="gap-2">
                        <Plus size={16} /> Add Trait
                    </Button>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="Type (e.g. Background)" />
                    <Input placeholder="Value (e.g. Blue)" />
                     <div className="flex items-center justify-center">
                        <Button variant="ghost" size="sm" className="text-red-400 hover:text-red-300">
                            <X size={18} />
                        </Button>
                     </div>
                 </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex justify-end gap-4">
                <Button variant="ghost">Cancel</Button>
                <Button size="lg" className="shadow-[0_0_30px_-10px_var(--primary-glow)]">Create NFT</Button>
            </div>
        </div>
    </div>
  );
}
