import { Building2, Home, Briefcase, Construction, Mail, Phone, MapPin, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <Building2 className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-blue-900">JB Construction</span>
            </div>

            <div className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 font-medium transition-colors">
                Contact
              </button>
            </div>

            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 font-medium text-left">
                  Home
                </button>
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-500 font-medium text-left">
                  Services
                </button>
                <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-orange-500 font-medium text-left">
                  Projects
                </button>
                <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-500 font-medium text-left">
                  Contact
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      <section id="home" className="pt-20 min-h-screen flex items-center relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80"
            alt="Modern construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Building Tomorrow's India, Today.
            </h1>
            <p className="text-xl sm:text-2xl text-gray-100 mb-8 leading-relaxed">
              Premier construction and infrastructure development across India. Delivering quality, safety, and excellence.
            </p>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              View Our Projects
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to meet India's growing infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Home className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Residential Construction</h3>
              <p className="text-gray-600 leading-relaxed">
                Luxury apartments and townships built with modern amenities and sustainable practices for comfortable living.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Commercial Spaces</h3>
              <p className="text-gray-600 leading-relaxed">
                IT Parks and modern office buildings designed to boost productivity with state-of-the-art infrastructure.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="bg-orange-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Construction className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Infrastructure Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Roads, bridges, and public works that connect communities and drive economic growth across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Landmark developments that showcase our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80"
                  alt="Skyline Residency"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Skyline Residency Phase II</h3>
                <p className="text-gray-600">Mumbai, Maharashtra</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                  alt="TechHub Commercial Complex"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">TechHub Commercial Complex</h3>
                <p className="text-gray-600">Bengaluru, Karnataka</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&q=80"
                  alt="Expressway Overbridge"
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent"></div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-blue-900 mb-2">Expressway Overbridge Project</h3>
                <p className="text-gray-600">Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="h-10 w-10 text-orange-500" />
                <span className="text-3xl font-bold">JB Construction</span>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg mb-6">
                With over 15 years of trusted experience in the Indian construction sector, JB Construction turns visions into concrete reality.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:info@jbconstruction.in" className="text-gray-300 hover:text-orange-500 transition-colors">
                      info@jbconstruction.in
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+919876543210" className="text-gray-300 hover:text-orange-500 transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-gray-300">
                      4th Floor, JB Tower<br />
                      SG Highway<br />
                      Ahmedabad, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-gray-400">
            <p>&copy; 2026 JB Construction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
