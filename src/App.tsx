import { useState } from 'react';
import { Building2, Phone, Mail, MapPin, Home, Building, Wrench, Hammer, Palette, CheckCircle } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: '', phone: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-blue-900 text-white shadow-lg z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Building2 size={32} className="text-blue-400" />
            <span className="text-2xl font-bold">JB Construction</span>
          </div>
          <div className="flex gap-8 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-300 transition">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-blue-300 transition">Services</button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-blue-300 transition">Projects</button>
            <button onClick={() => scrollToSection('why-choose')} className="hover:text-blue-300 transition">Why Us</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-blue-300 transition">Contact</button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-32 px-6 bg-gradient-to-b from-blue-900 to-blue-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-4">JB Construction</h1>
          <p className="text-2xl text-blue-200 mb-8">Building Trust, Delivering Quality</p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            With over 15 years of expertise in the construction industry, JB Construction has established itself as a trusted partner for residential and commercial projects across India. Our dedicated team combines innovation, quality craftsmanship, and customer-centric approach to transform every vision into reality. We're committed to excellence in every project we undertake, from initial planning through final delivery.
          </p>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
              <Home className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Residential Construction</h3>
              <p className="text-gray-600">Building dream homes with quality materials and expert craftsmanship</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
              <Building className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Commercial Construction</h3>
              <p className="text-gray-600">Professional office and retail spaces designed for business growth</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
              <Wrench className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Renovation & Remodeling</h3>
              <p className="text-gray-600">Transforming existing structures into modern, functional spaces</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
              <Hammer className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Civil Works</h3>
              <p className="text-gray-600">Infrastructure projects and civil engineering solutions</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
              <Palette className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Interior & Exterior Work</h3>
              <p className="text-gray-600">Complete finishing with premium materials and design aesthetics</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border-t-4 border-blue-600">
              <Building2 className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold text-blue-900 mb-3">Project Management</h3>
              <p className="text-gray-600">End-to-end project oversight ensuring timely and quality delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-56 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Building2 size={80} className="text-blue-300 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Luxury Villa Complex</h3>
                <p className="text-gray-600 mb-2">Premium residential project with 12 luxury villas featuring modern amenities, landscaped gardens, and world-class infrastructure in Bangalore.</p>
                <p className="text-sm text-blue-600 font-semibold">Completed 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-56 bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <Building2 size={80} className="text-blue-300 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Corporate Office Building</h3>
                <p className="text-gray-600 mb-2">5-story commercial complex with state-of-the-art facilities, modern architecture, and efficient office spaces for a leading IT company in Hyderabad.</p>
                <p className="text-sm text-blue-600 font-semibold">Completed 2023</p>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
              <div className="h-56 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Building2 size={80} className="text-blue-300 opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Heritage Restoration</h3>
                <p className="text-gray-600 mb-2">Careful renovation of a 100-year-old heritage structure preserving its architectural integrity while adding modern utilities in Chennai.</p>
                <p className="text-sm text-blue-600 font-semibold">Completed 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose" className="py-20 px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <CheckCircle className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Experienced Team</h3>
                <p className="text-gray-700">Our skilled professionals bring decades of combined experience and expertise to every project</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Quality Materials</h3>
                <p className="text-gray-700">We use only premium materials from trusted suppliers ensuring durability and excellence</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">On-Time Delivery</h3>
                <p className="text-gray-700">Committed to meeting deadlines without compromising on quality of work</p>
              </div>
            </div>
            <div className="flex gap-4">
              <CheckCircle className="text-blue-600 flex-shrink-0" size={32} />
              <div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">Affordable Pricing</h3>
                <p className="text-gray-700">Transparent pricing with no hidden costs, delivering value for your investment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-blue-900 mb-8">Contact Information</h3>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <Phone className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <Mail className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Email</h4>
                    <p className="text-gray-600">info@jbconstruction.com</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-100 p-4 rounded-lg">
                    <MapPin className="text-blue-600" size={32} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Location</h4>
                    <p className="text-gray-600">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleFormSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg">
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Your Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-blue-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
                {formSubmitted && (
                  <div className="bg-green-100 text-green-700 p-3 rounded-lg text-center font-semibold">
                    Thank you! We'll contact you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-blue-900 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="border-b border-blue-800 pb-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Building2 size={32} className="text-blue-400" />
              <span className="text-2xl font-bold">JB Construction</span>
            </div>
            <p className="text-blue-300">Building Trust, Delivering Quality</p>
          </div>
          <div className="text-center text-blue-300">
            <p>© 2026 JB Construction. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
