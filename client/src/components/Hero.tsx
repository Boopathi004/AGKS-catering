import { ArrowRight } from 'lucide-react';

/**
 * Hero Section - AGKS Catering
 * Features: Full-screen hero with 3D food imagery, gradient overlay, CTA buttons
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-hero-3d-edWV7H7Re2DLXLAxeJxv7S.webp"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Elevate Your
            <span className="gradient-text block">Event</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Where culinary artistry meets flawless execution. Transform your corporate events
            into unforgettable gastronomic experiences with AGKS Catering.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="cta-button flex items-center justify-center gap-2 group">
              Craft Your Experience
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-3 rounded-lg font-semibold border-2 border-accent text-accent hover:bg-accent/10 transition-all duration-200">
              View Our Work
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border/30">
            <div>
              <p className="text-3xl font-bold gradient-text">500+</p>
              <p className="text-sm text-muted-foreground mt-1">Events Catered</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">98%</p>
              <p className="text-sm text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text">15+</p>
              <p className="text-sm text-muted-foreground mt-1">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
