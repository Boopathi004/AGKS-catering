/**
 * About Section - AGKS Catering
 * Features: Brand story, timeline, values, team highlights
 */
export default function About() {
  const milestones = [
    {
      year: '2009',
      title: 'Founded',
      description: 'AGKS Catering established with a vision to revolutionize event dining.',
    },
    {
      year: '2014',
      title: 'Expansion',
      description: 'Expanded to serve 200+ events annually with premium service standards.',
    },
    {
      year: '2019',
      title: 'Innovation',
      description: 'Introduced 3D food presentation and interactive culinary experiences.',
    },
    {
      year: '2024',
      title: 'Excellence',
      description: 'Recognized as industry leader with 98% client satisfaction rate.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/30">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About AGKS Catering
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Crafting extraordinary culinary experiences for over 15 years.
          </p>
        </div>

        {/* Brand Story */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Our Story
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Founded in 2009, AGKS Catering emerged from a simple belief: every event deserves
              more than just food—it deserves a story. What started as a small team of passionate
              chefs has evolved into a full-service catering powerhouse.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We specialize in transforming corporate events, weddings, and private gatherings
              into unforgettable culinary journeys. Our commitment to innovation, quality, and
              personalized service sets us apart in the industry.
            </p>
            <div className="flex gap-4">
              <div>
                <p className="text-2xl font-bold gradient-text">500+</p>
                <p className="text-sm text-muted-foreground">Events Delivered</p>
              </div>
              <div>
                <p className="text-2xl font-bold gradient-text">98%</p>
                <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663758215964/S2uhsScAeyFTEmP633ruT9/agks-gourmet-spread-FG7hN2tTombpqsZqKwH6Hg.webp"
              alt="AGKS Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-12 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-accent to-accent/30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="card-3d p-6">
                      <p className="text-accent font-bold text-sm mb-2">{milestone.year}</p>
                      <h4 className="text-xl font-bold text-foreground mb-2">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="flex-shrink-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent rounded-full border-4 border-background" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-3d p-8 text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-foreground mb-3">Excellence</h4>
            <p className="text-muted-foreground">
              Uncompromising quality in every dish, presentation, and interaction.
            </p>
          </div>
          <div className="card-3d p-8 text-center">
            <div className="text-4xl mb-4">💡</div>
            <h4 className="text-xl font-bold text-foreground mb-3">Innovation</h4>
            <p className="text-muted-foreground">
              Constantly pushing boundaries with creative culinary experiences.
            </p>
          </div>
          <div className="card-3d p-8 text-center">
            <div className="text-4xl mb-4">❤️</div>
            <h4 className="text-xl font-bold text-foreground mb-3">Passion</h4>
            <p className="text-muted-foreground">
              Dedicated to making every event special and memorable for our clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
