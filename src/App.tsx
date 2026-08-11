import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { BookingModal } from './components/BookingModal';
import { LightboxModal } from './components/LightboxModal';
import { HeroSection } from './sections/HeroSection';
import { ManifestoSection } from './sections/ManifestoSection';
import { GallerySection } from './sections/GallerySection';
import { ServicesSection } from './sections/ServicesSection';
import { CutsClubSection } from './sections/CutsClubSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { AboutSection } from './sections/AboutSection';
import { InstagramSection } from './sections/InstagramSection';
import { LocationSection } from './sections/LocationSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { Footer } from './sections/Footer';
import { GalleryItem } from './data/cutsData';

export function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedBookingService, setSelectedBookingService] = useState<string | undefined>();
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  const handleOpenBooking = (serviceName?: string) => {
    setSelectedBookingService(serviceName);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedBookingService(undefined);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-[#C9A227] selection:text-[#050505] relative">
      {/* Custom Cursor Desktop */}
      <CustomCursor />

      {/* Elegant Minimalist Preloader */}
      {!isLoaded && <Preloader onComplete={() => setIsLoaded(true)} />}

      {/* Main Single Page Experience */}
      <div className={`transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar onOpenBooking={handleOpenBooking} />

        <main>
          <HeroSection onOpenBooking={() => handleOpenBooking()} />
          <ManifestoSection />
          <GallerySection onSelectItem={(item) => setSelectedGalleryItem(item)} />
          <ServicesSection onOpenBooking={handleOpenBooking} />
          <CutsClubSection />
          <ExperienceSection />
          <AboutSection />
          <InstagramSection />
          <LocationSection />
          <FinalCTASection onOpenBooking={() => handleOpenBooking()} />
        </main>

        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Booking WhatsApp Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialServiceId={selectedBookingService}
        />

        {/* Gallery 360 Lightbox Modal */}
        <LightboxModal
          item={selectedGalleryItem}
          onClose={() => setSelectedGalleryItem(null)}
          onBookCut={handleOpenBooking}
        />
      </div>
    </div>
  );
}

export default App;
