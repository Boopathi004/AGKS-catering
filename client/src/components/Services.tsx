import { ChefHat, Users, Sparkles, Clock } from 'lucide-react';

/**
 * Services Section - AGKS Catering
 * Features: 3D card design with glassmorphism, service offerings, hover animations
 */
export default function Services() {
  const services = [
    {
      icon: ChefHat,
      title: 'Bespoke Menus',
      description: 'Customized culinary experiences tailored to your event theme and guest preferences.',
    },
    {
      icon: Users,
      title: 'Full-Service Events',
      description: 'From intimate gatherings to large corporate functions, we handle every detail.',
    },
    {
      icon: Sparkles,
      title: 'Premium Presentation',
      description: 'Stunning plating and innovative food styling that impresses every guest.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Perfectly timed service ensuring hot dishes arrive fresh and ready to serve.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive catering solutions designed to elevate your event and delight your guests.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-3d p-8 group"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="mb-6 inline-block p-4 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                  <Icon size={32} className="text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect Line */}
                <div className="mt-6 h-1 w-0 bg-gradient-to-r from-accent to-accent/50 group-hover:w-12 transition-all duration-300" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to create your perfect event?
          </p>
          <button className="cta-button">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
