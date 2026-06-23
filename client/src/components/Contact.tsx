
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import BookingForm from '@/components/BookingForm';

/**
 * Contact Section - AGKS Catering
 * Features: Contact form, contact info, CTA
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to submit booking');
      const data = await res.json();
      console.log('Booking successful', data);
    } catch (err) {
      console.error(err);
    }
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      eventDate: '',
      guestCount: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Create Magic
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your event? Get in touch with our team today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Have questions about our services? Our team is ready to discuss your event
                requirements and create a customized catering solution.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <Phone size={24} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Phone</h4>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <Mail size={24} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground">hello@agkscatering.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20">
                    <MapPin size={24} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Address</h4>
                  <p className="text-muted-foreground">123 Culinary Lane, Gourmet City, GC 12345</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Follow us on social media</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'LinkedIn'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                  >
                    <span className="text-xs font-semibold text-accent">{social[0]}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            {/* The BookingForm component internally handles its own fields and submit */}
            <BookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}
