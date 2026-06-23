import { useState } from 'react';
import { X } from 'lucide-react';

/**
 * Gallery Section - AGKS Catering
 * Features: Parallax image grid, lightbox modal, hover animations
 */
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      id: 1,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-gourmet-spread-FG7hN2tTombpqsZqKwH6Hg.webp',
      title: 'Premium Gourmet Spread',
      category: 'Corporate Events',
    },
    {
      id: 2,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-hero-3d-edWV7H7Re2DLXLAxeJxv7S.webp',
      title: 'Executive Dinner',
      category: 'Fine Dining',
    },
    {
      id: 3,
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-3d-cube-food-XTGbTGfS64GjtezDZWAAa9.webp',
      title: 'Culinary Showcase',
      category: 'Presentations',
    },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of beautifully executed events and culinary creations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer h-80"
              onClick={() => setSelectedImage(item.image)}
              style={{
                animation: `fade-in-up 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="cta-button">
            View Full Portfolio
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery Item"
              className="w-full h-auto rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-background/80 hover:bg-background rounded-lg transition-colors"
            >
              <X size={24} className="text-foreground" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
