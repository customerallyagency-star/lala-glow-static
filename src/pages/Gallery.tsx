import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filters = [
    { id: "all", label: "All" },
    { id: "lashes", label: "Lashes" },
    { id: "brows", label: "Brows" },
    { id: "facials", label: "Facials" },
    { id: "nails", label: "Nails" }
  ];

  const galleryImages = [
    { id: 1, category: "lashes", title: "Volume Lash Extensions", description: "Dramatic volume lashes for special occasions", image: "/placeholder.svg" },
    { id: 2, category: "lashes", title: "Classic Lash Set", description: "Natural enhancement for everyday elegance", image: "/placeholder.svg" },
    { id: 3, category: "brows", title: "Brow Lamination Results", description: "Fuller, more defined brows that last", image: "/placeholder.svg" },
    { id: 4, category: "brows", title: "Brow Shaping & Tint", description: "Perfect arch with custom color matching", image: "/placeholder.svg" },
    { id: 5, category: "facials", title: "Glowing Skin Results", description: "Radiant complexion after signature facial", image: "/placeholder.svg" },
    { id: 6, category: "facials", title: "Anti-Aging Treatment", description: "Visible improvement in skin texture", image: "/placeholder.svg" },
    { id: 7, category: "nails", title: "Gel Manicure Art", description: "Beautiful nail art with long-lasting gel", image: "/placeholder.svg" },
    { id: 8, category: "nails", title: "Classic French Tips", description: "Timeless elegance with perfect application", image: "/placeholder.svg" },
    { id: 9, category: "lashes", title: "Hybrid Lash Design", description: "Perfect blend of natural and volume", image: "/placeholder.svg" },
    { id: 10, category: "brows", title: "Brow Transformation", description: "Complete brow makeover before & after", image: "/placeholder.svg" },
    { id: 11, category: "facials", title: "Acne Treatment Results", description: "Clear, healthy skin transformation", image: "/placeholder.svg" },
    { id: 12, category: "nails", title: "Luxury Pedicure", description: "Perfect toes for summer confidence", image: "/placeholder.svg" }
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % filteredImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  return (
    <div className="min-h-screen pt-8">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-accent">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
            Our Beautiful Work
          </h1>
          <p className="text-lg text-muted-foreground font-inter max-w-3xl mx-auto">
            Explore our portfolio of stunning transformations. Each image tells a story 
            of confidence, beauty, and the artistry of our skilled technicians.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background sticky top-0 z-40 border-b border-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <Button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                variant={filter === filterOption.id ? "default" : "outline"}
                className={`font-inter font-semibold ${
                  filter === filterOption.id 
                    ? "bg-gradient-primary hover:opacity-90" 
                    : "hover:bg-accent"
                }`}
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className="group cursor-pointer relative overflow-hidden rounded-lg bg-accent aspect-square"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <Badge className="mb-2 bg-primary text-primary-foreground capitalize">
                      {image.category}
                    </Badge>
                    <h3 className="font-playfair font-semibold text-lg mb-1">
                      {image.title}
                    </h3>
                    <p className="font-inter text-sm opacity-90">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground font-inter">
                No images found for this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <img
              src={filteredImages[currentImageIndex]?.image}
              alt={filteredImages[currentImageIndex]?.title}
              className="max-w-full max-h-full object-contain rounded-lg"
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
              <Badge className="mb-2 bg-primary text-primary-foreground capitalize">
                {filteredImages[currentImageIndex]?.category}
              </Badge>
              <h3 className="font-playfair font-semibold text-xl mb-1">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <p className="font-inter opacity-90">
                {filteredImages[currentImageIndex]?.description}
              </p>
              <div className="mt-2 text-sm opacity-70">
                {currentImageIndex + 1} of {filteredImages.length}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
            Ready for Your Transformation?
          </h2>
          <p className="text-lg text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Join our gallery of beautiful clients. Book your appointment today and 
            experience the artistry of LALA Beauty Secret Studio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:opacity-90 font-inter font-semibold"
            >
              <a href="/booking">Book Your Service</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="font-inter font-semibold"
            >
              <a href="/services">Explore Services</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;