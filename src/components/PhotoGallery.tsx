/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Eye, Compass, Camera as CameraIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_PHOTOS } from '../data';
import { GalleryPhoto } from '../types';

export default function PhotoGallery() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Categories list
  const categories = ['all', 'wildlife', 'portrait', 'landscape', 'street'];

  // Filter photos
  const filteredPhotos = activeCategory === 'all'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter(p => p.category.toLowerCase().includes(activeCategory) || p.title.toLowerCase().includes(activeCategory));

  const openLightbox = (photoId: string) => {
    const index = GALLERY_PHOTOS.findIndex((p) => p.id === photoId);
    if (index !== -1) {
      setSelectedPhotoIndex(index);
    }
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedPhotoIndex === null) return;
    let nextIndex = direction === 'next' ? selectedPhotoIndex + 1 : selectedPhotoIndex - 1;

    // Boundary looping
    if (nextIndex >= GALLERY_PHOTOS.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = GALLERY_PHOTOS.length - 1;

    setSelectedPhotoIndex(nextIndex);
  };

  const currentPhoto = selectedPhotoIndex !== null ? GALLERY_PHOTOS[selectedPhotoIndex] : null;

  return (
    <section id="photography" className="bg-studio-secondary py-24 md:py-36 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-studio-charcoal/10 pb-8 gap-4">
          <div>
            <span className="mono-label text-studio-silver">Visual Journal</span>
            <h2 className="serif-header text-4xl md:text-6xl font-bold text-studio-charcoal mt-2">
              Bespoke Photography
            </h2>
          </div>

          {/* Filtering Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 border-l border-studio-charcoal/10 pl-4 py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-mono uppercase tracking-[0.2em] cursor-pointer transition-colors duration-300 focus:outline-none ${
                  activeCategory === cat ? 'text-studio-charcoal font-bold' : 'text-studio-silver hover:text-studio-charcoal'
                }`}
                id={`gallery-cat-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-like / Asymmetrical Photography Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
          {filteredPhotos.map((photo) => {
            const isPortrait = photo.aspectRatio === 'portrait';
            const isSquare = photo.aspectRatio === 'square';

            return (
              <motion.div
                key={photo.id}
                onClick={() => openLightbox(photo.id)}
                className="break-inside-avoid relative overflow-hidden bg-studio-bg cursor-pointer group shadow-lg img-zoom-container border border-studio-charcoal/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-5%' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                id={`gallery-item-${photo.id}`}
              >
                {/* Photo Element */}
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full object-cover grayscale contrast-[1.02] group-hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle Hover Grid Mask */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-between p-6" />

                {/* Hover Meta Content - Top Corner */}
                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 text-white flex flex-col gap-1 pointer-events-none">
                  <span className="mono-label text-[8px] text-white/75">{photo.category}</span>
                  <h4 className="serif-header text-xl font-bold tracking-tight">{photo.title}</h4>
                </div>

                {/* Hover Meta Content - Bottom Corner */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0 text-white pointer-events-none flex items-center gap-2">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-white/80">
                    View Plate
                  </span>
                  <Eye className="h-4.5 w-4.5 text-white/80" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Exquisite Lightroom Lightbox Overlay */}
      <AnimatePresence>
        {currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-6 md:p-12 select-none"
            onClick={closeLightbox}
          >
            {/* Absolute Film Grain overlay on lightbox */}
            <div className="film-grain" />

            {/* Topbar: Title & Close */}
            <header
              className="flex justify-between items-center text-white border-b border-white/10 pb-6 w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-1">
                <span className="mono-label text-[8px] text-studio-silver">{currentPhoto.category}</span>
                <h3 className="serif-header text-2xl md:text-3xl font-bold tracking-tight">
                  {currentPhoto.title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-1 rounded-full text-studio-silver hover:text-white transition-colors cursor-pointer focus:outline-none"
                aria-label="Close Lightbox"
                id="lightbox-close-btn"
              >
                <X className="h-6 w-6" />
              </button>
            </header>

            {/* Middle: Left Nav, Large Image, Right Nav */}
            <div className="flex items-center justify-between gap-4 w-full h-[60%] sm:h-[70%] max-w-7xl mx-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('prev');
                }}
                className="h-12 w-12 rounded-full border border-white/10 bg-white/5 text-studio-silver hover:text-white hover:border-white/30 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer focus:outline-none shrink-0"
                aria-label="Previous Photo"
                id="lightbox-prev-btn"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <div
                className="relative h-full flex items-center justify-center overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.img
                  key={currentPhoto.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  src={currentPhoto.imageUrl}
                  alt={currentPhoto.title}
                  className="max-h-full max-w-full object-contain shadow-2xl border border-white/5"
                  referrerPolicy="no-referrer"
                />
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox('next');
                }}
                className="h-12 w-12 rounded-full border border-white/10 bg-white/5 text-studio-silver hover:text-white hover:border-white/30 hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer focus:outline-none shrink-0"
                aria-label="Next Photo"
                id="lightbox-next-btn"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom: Settings, Location Metadata */}
            <footer
              className="flex flex-col sm:flex-row justify-between items-center gap-6 text-studio-silver border-t border-white/10 pt-6 w-full max-w-7xl mx-auto text-xs font-mono"
              onClick={(e) => e.stopPropagation()}
            >
              {currentPhoto.location && (
                <div className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-studio-silver/60" />
                  <span>LOCATION: {currentPhoto.location.toUpperCase()}</span>
                </div>
              )}

              <span className="text-[10px] uppercase tracking-[0.2em] text-studio-silver/40 hidden md:inline">
                PHOTOGRAPHY ARCHIVES • PLATE {(selectedPhotoIndex! + 1).toString().padStart(2, '0')} OF {GALLERY_PHOTOS.length.toString().padStart(2, '0')}
              </span>

              {currentPhoto.cameraSettings && (
                <div className="flex items-center gap-2">
                  <CameraIcon className="h-4 w-4 text-studio-silver/60" />
                  <span>{currentPhoto.cameraSettings.toUpperCase()}</span>
                </div>
              )}
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
