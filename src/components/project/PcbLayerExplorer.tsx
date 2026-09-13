'use client';

import { useState } from 'react';
import { ProjectMedia } from '@/data/projects';

export default function PcbLayerExplorer({ media }: { media: ProjectMedia }) {
  const isTwoLayer = !media.layer3 && !media.layer4;

  const fourLayers = [
    { id: 'L1', label: 'LAYER 1 — SIGNAL', key: 'layer1' },
    { id: 'L2', label: 'LAYER 2 — GROUND', key: 'layer2' },
    { id: 'L3', label: 'LAYER 3 — GROUND', key: 'layer3' },
    { id: 'L4', label: 'LAYER 4 — SIGNAL', key: 'layer4' },
  ] as const;

  const twoLayers = [
    { id: 'L1', label: 'LAYER 1 — TOP COPPER (F.CU)', key: 'layer1' },
    { id: 'L2', label: 'LAYER 2 — BOTTOM COPPER (B.CU)', key: 'layer2' },
  ] as const;

  const layers = isTwoLayer ? twoLayers : fourLayers;
  const [activeLayer, setActiveLayer] = useState<string>('L1');

  const currentLayer = layers.find(l => l.id === activeLayer) || layers[0];
  const currentMediaSrc = media[currentLayer.key as keyof ProjectMedia] as string | undefined;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
      {/* Tabs */}
      <div className="flex border-b border-slate-800 bg-slate-950/50">
        {layers.map((layer) => (
          <button
            key={layer.id}
            onClick={() => setActiveLayer(layer.id)}
            className={`flex-1 py-4 font-mono text-xs sm:text-sm tracking-widest transition-colors border-b-2 ${
              activeLayer === layer.id
                ? 'border-cyan-500 text-cyan-400 bg-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-300 hover:bg-slate-900/50'
            }`}
          >
            {layer.id}
          </button>
        ))}
      </div>

      {/* Viewer */}
      <div className="w-full aspect-[16/9] sm:aspect-[1.85/1] bg-slate-950 flex flex-col items-center justify-center p-3 sm:p-6 relative">
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-20 font-mono text-[0.65rem] sm:text-xs tracking-widest px-3 py-1 border border-cyan-500/30 rounded bg-slate-900/90 text-cyan-400 backdrop-blur-sm shadow-md">
          {layers.find(l => l.id === activeLayer)?.label}
        </div>
        
        {currentMediaSrc ? (
          <div className="w-full h-full flex items-center justify-center">
            <img 
              src={currentMediaSrc} 
              alt={layers.find(l => l.id === activeLayer)?.label || activeLayer} 
              className="w-full h-full object-contain relative z-10" 
            />
          </div>
        ) : (
          <span className="font-mono text-cyan-500/30 text-xs sm:text-sm tracking-widest px-6 py-3 border border-cyan-500/10 rounded bg-slate-900/50 text-center relative z-10">
            [ACTUAL {activeLayer} IMAGE — TO BE ADDED]
          </span>
        )}
      </div>
    </div>
  );
}
