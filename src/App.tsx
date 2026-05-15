import { 
  Building2, Briefcase, Construction, Mail, Phone, MapPin, 
  ArrowRight, Menu, X, CheckCircle, FileText, Hammer, 
  HardHat, Award, Users, Clock, ExternalLink 
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- PROJECTS DATA ---
const projectsData = [
  { 
    name: 'Industrial Road Development', 
    type: 'Mehsana GIDC',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    desc: 'A comprehensive road construction project where we managed the entire lifecycle from digital planning to the final coat of asphalt. Utilizing AutoCAD for precise grading, we supplied 1,500+ tons of our premium Pakur Stone to create a high-density foundation capable of supporting 24/7 heavy industrial traffic.'
  },
  { 
    name: 'Highway Surface Strengthening', 
    type: 'SH-41 (Mehsana-Unjha)',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    desc: 'Focusing on durability and safety, our team executed a major surfacing project on State Highway 41. We provided industrial-grade Natural Bitumen (VG-30) and specialized Labour Work to ensure a seamless, heat-resistant finish designed to withstand the intense Gujarat climate.'
  },
  { 
    name: 'Heavy-Duty Foundation Work', 
    type: 'Modhera Road',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    desc: 'This structural project highlighted our commitment to technical accuracy. We provided high-tensile Mild Steel Bright Bars and expert site supervision to pour a perfectly leveled RCC foundation for a large-scale storage facility, ensuring a structure that is built to last.'
  },
  { 
    name: 'Bulk Material Logistics', 
    type: 'Kheralu-Visnagar',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    desc: 'A large-scale logistics project where J B Construction served as the primary material partner. We maintained a consistent, zero-delay supply chain of Crushed Pakur Stone and Cement Clinkers, keeping the regional infrastructure timeline on track despite challenging weather conditions.'
  },
  { 
    name: 'Precision Industrial Flooring', 
    type: 'Becharaji Zone',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    desc: 'Specialized "House Satisfaction Work" for a manufacturing unit requiring high-tolerance flooring. By combining our high-grade raw materials with skilled manual finishing, we delivered a dust-free, high-impact resistant floor that meets the strict standards of modern industrial operations.'
  },
  { 
    name: 'Township Infrastructure', 
    type: 'Ahmedabad Highway',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    desc: 'A residential infrastructure project focused on quality and aesthetics. Our team handled the AutoCAD layout and internal bitumen road work, providing a clean and professional finish that transformed the local township\'s accessibility and overall value.'
  },
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // --- NEW STATES FOR PROJECTS MODAL ---
  const [selectedProject, setSelectedProject] = useState(null);

  // --- NEW STATES FOR FORM ---
  const [formData, setFormData] = useState({ name: '', email: '', service: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- FORM HANDLER ---
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare mailto link formatting
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Requested: ${formData.service}\n\nProject Details:\n${formData.details}`
    );

    // Open user's email client
    window.location.href = `mailto:director@jbconstruction.com?subject=${subject}&body=${body}`;

    // Show success UI briefly
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 5 seconds to allow new messages
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', service: '', details: '' });
    }, 1000);
  };
  
  // Handle header background change on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    // Prevent scrolling when modal is open
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-orange-100 selection:text-orange-600">
      
      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-orange-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <span className={`text-2xl font-black tracking-tighter transition-colors ${
              scrolled ? 'text-slate-900' : 'text-white'
            }`}>
              JB<span className="text-orange-500 underline decoration-2 underline-offset-4">CONSTRUCTION</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors ${
                  scrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 shadow-lg shadow-orange-500/20"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-slate-900" /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t md:hidden animate-in slide-in-from-top duration-300">
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left text-lg font-bold text-slate-800 border-b pb-2">
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom" 
            alt="Hero" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block bg-orange-500 text-white text-xs font-black tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 uppercase">
              Established 2017
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8">
              Building the <span className="text-orange-500">Future</span> of Gujarat.
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 leading-relaxed font-medium">
              Precision road construction, premium material supply, and technical engineering services tailored for large-scale infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => scrollToSection('projects')} className="bg-white text-slate-900 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                View Our Work <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => scrollToSection('services')} className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Our Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Experience', val: '7+', icon: Clock },
              { label: 'Projects Done', val: '150+', icon: CheckCircle },
              { label: 'Active Sites', val: '12', icon: HardHat },
              { label: 'Expert Engineers', val: '25+', icon: Users },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                <stat.icon className="h-10 w-10 text-orange-500 opacity-50" />
                <div>
                  <div className="text-3xl font-black text-slate-900">{stat.val}</div>
                  <div className="text-sm font-bold text-slate-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80" 
                className="rounded-3xl shadow-2xl relative z-10" 
                alt="About Us" 
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-orange-500 rounded-3xl -z-0 hidden md:block" />
            </div>
            <div>
              <h2 className="text-sm font-black text-orange-500 uppercase tracking-[0.3em] mb-4">Who We Are</h2>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
                Pioneering Civil Engineering Excellence in Mehsana.
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                J B Construction is more than just a contracting firm. Since 2017, we have been a cornerstone of infrastructure development in Gujarat, providing a seamless bridge between technical design and physical execution.
              </p>
              <div className="space-y-4">
                {['GST Registered & Compliant', 'Advanced AutoCAD/Revit Capability', 'Direct Material Supply Chain'].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 font-bold text-slate-800">
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-orange-500 font-black uppercase tracking-[0.3em] mb-4">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-black">Comprehensive Solutions for Infrastructure.</h3>
            </div>
            <p className="text-slate-400 max-w-sm mb-2">We integrate material logistics with expert labor and high-end technical drafting.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Material Supply', icon: Construction, list: ['Pakur Stone', 'Natural Bitumen', 'Cement Clinkers', 'Mild Steel'] },
              { title: 'Site Execution', icon: Hammer, list: ['Road Construction', 'RCC Foundation', 'Earthwork', 'Site Management'] },
              { title: 'BIM & Drafting', icon: FileText, list: ['2D Civil Drawings', '3D Modeling', 'BIM Coordination', 'Quantity Survey'] },
            ].map((service, i) => (
              <div key={i} className="group bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white hover:text-slate-900 transition-all duration-500">
                <service.icon className="h-12 w-12 text-orange-500 mb-8 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-black mb-6">{service.title}</h4>
                <ul className="space-y-3">
                  {service.list.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 opacity-70 group-hover:opacity-100 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GRID WITH MODAL FUNCTIONALITY */}
      <section id="projects" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-orange-500 font-black uppercase tracking-[0.3em] mb-4">Portfolio</h2>
            <h3 className="text-4xl md:text-5xl font-black text-slate-900">Legacy in the Making.</h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((proj, i) => (
              <div key={i} className="group relative overflow-hidden rounded-3xl h-80 bg-slate-200 cursor-pointer shadow-md" onClick={() => setSelectedProject(proj)}>
                <img 
                  src={proj.image} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90" 
                  alt={proj.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90 transition-opacity duration-300" />
                
                {/* Default Text */}
                <div className="absolute bottom-0 left-0 p-8 w-full transition-transform duration-300 group-hover:-translate-y-4">
                  <span className="text-orange-500 text-xs font-black uppercase tracking-widest">{proj.type}</span>
                  <h4 className="text-white text-xl font-bold mt-1">{proj.name}</h4>
                </div>

                {/* Hover Overlay Button */}
                <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <span className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Details <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT DETAILS MODAL */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black text-white p-2 rounded-full transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="h-64 sm:h-80 w-full relative">
              <img src={selectedProject.image} alt={selectedProject.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-orange-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">{selectedProject.type}</span>
                <h3 className="text-3xl font-black text-white mt-3">{selectedProject.name}</h3>
              </div>
            </div>
            <div className="p-8 sm:p-10">
              <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText className="text-orange-500" /> Project Description
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {selectedProject.desc}
              </p>
              <button 
                onClick={() => { setSelectedProject(null); scrollToSection('contact'); }}
                className="w-full sm:w-auto bg-slate-900 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold transition-colors"
              >
                Inquire About Similar Projects
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONTACT / FOOTER SECTION */}
      <footer id="contact" className="bg-slate-900 text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left Column: Info & Map */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-orange-500 p-2 rounded-lg">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <span className="text-3xl font-black tracking-tighter">JB<span className="text-orange-500">CONSTRUCTION</span></span>
              </div>
              <p className="text-slate-400 text-lg mb-10 max-w-md italic">
                "Quality is not an act, it is a habit. We build with integrity and technical precision."
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl"><Mail className="text-orange-500" /></div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Email Us</div>
                    <div className="text-lg font-medium">director@jbconstruction.com</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl"><Phone className="text-orange-500" /></div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Call Us</div>
                    <div className="text-lg font-medium">+91 82004 99104</div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-white/5 p-3 rounded-xl"><MapPin className="text-orange-500" /></div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase">Head Office</div>
                    <div className="text-slate-300"> FIRST FLOOR, F-11, MARUTI ENCLAVE, BYPASS HIGHWAY, PANCHOT, MEHSANA, GUJARAT – 384205</div>
                  </div>
                </div>
              </div>

              {/* INTEGRATED GOOGLE MAP (Matches coordinates from user image) */}
              <div className="w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-white/10 relative group">
                <iframe 
                  title="J B Construction Location"
                  src="https://maps.google.com/maps?q=23%C2%B036'42.3%22N%2072%C2%B020'25.9%22E&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="red hover:grayscale-0 transition-all duration-500"
                ></iframe>
                <a 
                  href="https://maps.google.com/?q=J.B.Construction+Mehsana"
                  target="_blank" 
                  rel="noreferrer"
                  className="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2 transition-colors"
                >
                  Get Directions <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-white p-10 rounded-3xl min-h-[500px] flex flex-col justify-center transition-all duration-500 shadow-2xl">
              {isSubmitted ? (
                // SUCCESS STATE
                <div className="text-center animate-in zoom-in duration-500">
                  <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="text-green-600 h-10 w-10" />
                  </div>
                  <h4 className="text-slate-900 text-3xl font-black mb-2">Opening Email...</h4>
                  <p className="text-slate-500 font-bold">Your default email client has been opened to message <br/> <span className="text-orange-500">director@jbconstruction.com</span>.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-8 text-slate-400 font-black text-sm uppercase tracking-widest hover:text-orange-500 transition-colors"
                  >
                    Go Back
                  </button>
                </div>
              ) : (
                // FORM STATE
                <>
                  <h4 className="text-slate-900 text-3xl font-black mb-2">Let's Build Together.</h4>
                  <p className="text-slate-500 mb-8 font-medium">Fill out the form to instantly draft an email to our director.</p>
                  
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input 
                        required
                        type="text" 
                        placeholder="Your Full Name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium border-transparent border-2 focus:border-orange-500" 
                      />
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium border-transparent border-2 focus:border-orange-500" 
                      />
                    </div>
                    
                    {/* NEW SERVICE SELECTION DROPDOWN */}
                    <div className="relative">
                      <select 
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium appearance-none border-transparent border-2 focus:border-orange-500"
                      >
                        <option value="" disabled>Select a Service Needed...</option>
                        <option value="Material Supply">Material Supply (Pakur Stone, Bitumen, etc.)</option>
                        <option value="Road Construction">Road Construction & Pavement</option>
                        <option value="RCC Foundation Work">RCC Foundation & Earthwork</option>
                        <option value="Technical Drafting / BIM">Technical Drafting & BIM Support</option>
                        <option value="General Inquiry">General Civil Contract Inquiry</option>
                      </select>
                    </div>

                    <textarea 
                      required
                      rows={4} 
                      placeholder="Project Details / Message" 
                      value={formData.details}
                      onChange={(e) => setFormData({...formData, details: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-100 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all font-medium resize-none border-transparent border-2 focus:border-orange-500"
                    ></textarea>
                    
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-orange-500/20 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? (
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>SEND DIRECT EMAIL <ArrowRight className="h-5 w-5"/></>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-bold">
            <p>© 2026 J B CONSTRUCTION. ALL RIGHTS RESERVED.</p>
            <p>GSTIN: 24BBCPP4390Q1Z3</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;