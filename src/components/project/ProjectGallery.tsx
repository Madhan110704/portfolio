'use client';

import { useState } from 'react';
import { ProjectMedia } from '@/data/projects';
import { X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectGallery({ media }: { media: ProjectMedia }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = media.gallery && media.gallery.length > 0 
    ? media.gallery.map((item, idx) => ({ id: `gallery-${idx}`, label: item.caption || item.alt || 'GALLERY', src: item.src }))
    : [
    { id: 'schematic', label: 'SCHEMATIC', src: media.schematic },
    { id: 'pcbTop', label: 'PCB TOP', src: media.pcbTop },
    { id: 'pcbBottom', label: 'PCB BOTTOM', src: media.pcbBottom },
    { id: 'layer1', label: 'LAYER 1', src: media.layer1 },
    { id: 'rfSection', label: 'RF SECTION', src: media.rfSection },
    { id: 'renderFront', label: '3D FRONT', src: media.renderFront },
  ];

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, idx) => (
          <div
            key={item.id || idx}
            onClick={() => setSelectedImage(item.src || `placeholder-${item.label}`)}
            className="aspect-square bg-slate-900 border border-slate-800 rounded-xl overflow-hidden relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center">
              <ZoomIn className="text-white" size={32} />
            </div>
            
            {item.src ? (
              <img src={item.src} alt={item.label} className="w-full h-full object-cover relative z-10" loading="lazy" />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center z-10">
                <span className="font-mono text-[0.6rem] sm:text-xs text-cyan-500/50 tracking-widest break-words w-full">
                  [{item.label} IMAGE]
                </span>
              </div>
            )}
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-950 p-4 z-30">
              <span className="font-mono text-[0.65rem] text-slate-300 tracking-widest">{item.label}</span>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors z-50"
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedImage.startsWith('placeholder-') ? (
                <div className="text-center">
                   <span className="font-mono text-cyan-500/80 text-xl tracking-widest px-8 py-4 border border-cyan-500/30 rounded bg-slate-900/80">
                    [ACTUAL {selectedImage.replace('placeholder-', '')} IMAGE — TO BE ADDED]
                  </span>
                </div>
              ) : (
                <img src={selectedImage} alt="Gallery Preview" className="max-w-full max-h-full object-contain rounded-xl shadow-2xl" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
