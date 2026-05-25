import React, { useState, useEffect } from 'react';
import logo from './assets/images/logo.jpeg';
// Add these three new imports:
import frontPageImg from './assets/images/front_page.jpeg';
import autocadImg from './assets/images/1_autocad.jpeg';
import truckImg from './assets/images/truck_photo.jpeg';
import officeImg from './assets/images/aboutus.jpeg'
import { 
  Building2, Briefcase, Construction, Mail, Phone, MapPin, 
  ArrowRight, Menu, X, CheckCircle, FileText, Hammer, 
  HardHat, Users, Clock, Monitor, Cloud, Compass,
  ChevronDown, ShieldCheck, Target, Truck
} from 'lucide-react';

// ==========================================
// 20 PROJECTS DATA (Images Removed as Requested)
// ==========================================
const projectsData = [
  { 
    name: 'Industrial Road Development', 
    type: 'Civil Execution',
    location: 'Mehsana GIDC',
    desc: 'A comprehensive road construction project executed within the highly trafficked Mehsana GIDC area. Managed the entire lifecycle from digital AutoCAD planning to the final coat of asphalt. Supplied over 1,500 tons of our premium Crushed Pakur Stone.'
  },
  { 
    name: 'Maruti Ancillary Factory BIM', 
    type: 'Technical Drafting & BIM',
    location: 'Becharaji Industrial Zone',
    desc: 'Working closely with primary contractors for a major automobile ancillary unit, our technical division utilized Revit to perform advanced clash detection on structural steel frameworks and underground utility layouts.'
  },
  { 
    name: 'State Highway Surface Strengthening', 
    type: 'Civil Execution',
    location: 'SH-41 (Mehsana-Unjha)',
    desc: 'Commissioned to execute a major surfacing project on State Highway 41. Required the deployment of industrial-grade Natural Bitumen (VG-30) to withstand the intense summer heat of Gujarat and heavy commercial traffic.'
  },
  { 
    name: 'Heritage Residential Township', 
    type: 'Drafting & Planning',
    location: 'Visnagar',
    desc: 'Tasked with the complete pre-construction civil drafting for a new 15-acre residential township. Created highly detailed 2D civil plans, precise grading plans, and cross-sections for internal road networks and sewage lines.'
  },
  { 
    name: 'Heavy-Duty RCC Storage Foundation', 
    type: 'Structural Work',
    location: 'Modhera Road',
    desc: 'Involved laying a perfectly leveled, high-strength RCC foundation for a large-scale agricultural storage facility. Provided comprehensive site supervision for tying high-tensile Mild Steel Bright Bars.'
  },
  { 
    name: 'Bulk Material Logistics & Supply', 
    type: 'Material Supply',
    location: 'Kheralu-Vadnagar Corridor',
    desc: 'Acting as the primary material partner for a regional infrastructure upgrade, we supplied thousands of tons of Crushed Pakur Stone, River Sand, and Cement Clinkers with zero delays over six months.'
  },
  {
    name: 'Spice Market APMC Godown',
    type: 'Civil Contracting',
    location: 'Unjha',
    desc: 'Constructed the civil foundation and plinth framework for a massive new godown at the Unjha APMC. Handled complex earthworks, soil compaction, and RCC pedestal casting.'
  },
  {
    name: 'Cotton Mill Structural Extension',
    type: 'Civil Contracting',
    location: 'Kadi Industrial Area',
    desc: 'Executed a sensitive structural extension for a fully operational cotton mill. Managed to excavate and pour high-grade concrete while isolating the dust from the mill\'s sensitive spinning machinery.'
  },
  {
    name: 'Municipal Water Treatment',
    type: 'Infrastructure',
    location: 'Chanasma',
    desc: 'Partnered with local authorities to execute the civil concrete works for a new municipal water treatment plant. Required perfectly watertight RCC retaining walls and precisely sloped clarification tanks.'
  },
  {
    name: 'Commercial Complex 3D Modeling',
    type: 'Drafting & BIM',
    location: 'Vijapur',
    desc: 'Provided specialized remote technical support for a 4-story commercial shopping complex. Translated raw architectural sketches into highly detailed Revit 3D models including structural grids and HVAC pathways.'
  },
  {
    name: 'Rural Road Connectivity Network',
    type: 'Civil Execution',
    location: 'Mansa District',
    desc: 'Layed down 12 kilometers of bituminous roads connecting three rural villages to the main state highway. Handled clearing the subgrade, laying WBM layers, and applying the final seal coat.'
  },
  {
    name: 'School Earthquake-Resistant RCC',
    type: 'Structural Work',
    location: 'Gozaria',
    desc: 'Executed the civil construction of a two-story primary school, strictly adhering to Zone IV seismic safety standards. Utilized heavy-duty TMT bars for earthquake-resistant columns and beams.'
  },
  {
    name: 'Bypass Highway Bridge Approaches',
    type: 'Infrastructure',
    location: 'Mehsana Bypass',
    desc: 'Constructed the earthwork and asphalt approach ramps for a new minor bridge. Required precise grading using motor graders guided by total station surveying equipment.'
  },
  {
    name: 'Remote Drafting & Compliance',
    type: 'Drafting & Planning',
    location: 'Radhanpur',
    desc: 'Handled a complete documentation package for a commercial development remotely. Compiled grading plans and elevation drawings via cloud workspace, ensuring full municipal code compliance.'
  },
  {
    name: 'High-Rise Residential Civil Support',
    type: 'Civil Contracting',
    location: 'Patan City',
    desc: 'Provided dedicated civil execution and labor supply for a 10-story residential apartment. Managed basement excavation and the shuttering/reinforcement work for the massive raft foundation.'
  },
  {
    name: 'Precision Industrial Flooring (VDF)',
    type: 'Civil Execution',
    location: 'Becharaji Zone',
    desc: 'Executed Vacuum Dewatered Flooring for a heavy manufacturing unit. Delivered a perfectly level, high-abrasion-resistant zero-dust floor designed to support heavy industrial forklift traffic.'
  },
  {
    name: 'Toll Plaza Rigid Pavement',
    type: 'Infrastructure',
    location: 'Unjha Highway',
    desc: 'Constructed the rigid pavement (concrete road) and administrative building foundations for a new toll plaza. Managed continuous batching of Pavement Quality Concrete to prevent thermal cracking.'
  },
  {
    name: 'University Campus Structural BIM',
    type: 'Drafting & BIM',
    location: 'Patan',
    desc: 'Engaged as drafting consultants for a university campus expansion. Translated geotechnical data into technical drawings and detailed Revit models for three new faculty buildings.'
  },
  {
    name: 'Multi-Specialty Hospital Foundation',
    type: 'Structural Work',
    location: 'Visnagar',
    desc: 'Handled complex foundation and basement retaining walls for a multi-specialty hospital. Required deep excavation in a crowded urban area with precise strutting and high-strength concrete pours.'
  },
  {
    name: 'Underground Drainage Network',
    type: 'Infrastructure',
    location: 'Mehsana City Limits',
    desc: 'Laid deep underground RCC drainage pipes and storm water drains. Created highly detailed utility layouts to avoid clashing with existing power lines before our execution team trenched and laid the heavy-duty pipes.'
  }
];

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [formData, setFormData] = useState({ name: '', email: '', service: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Header Scroll & Modal Lock
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    if (selectedProject) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const subject = encodeURIComponent(`New Inquiry from ${formData.name} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nService Requested: ${formData.service}\n\nProject Details:\n${formData.details}`
    );
    window.location.href = `mailto:director.jbconstruction@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: '', email: '', service: '', details: '' });
    }, 1000);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Projects', id: 'projects' },
    { name: 'FAQs', id: 'faqs' },
    { name: 'Contact Us', id: 'contact' },
  ];

  // Custom Keyframes for Ken Burns Animation
  const customStyles = `
    @keyframes kenburns {
      0% { transform: scale(1) translate(0, 0); }
      50% { transform: scale(1.08) translate(-1%, -1%); }
      100% { transform: scale(1) translate(0, 0); }
    }
    .animate-kenburns {
      animation: kenburns 20s ease-in-out infinite alternate;
    }
  `;

  // ==========================================
  // PAGE COMPONENTS
  // ==========================================

  const renderHome = () => (
    <div className="animate-in fade-in duration-500 bg-slate-50">
      <style>{customStyles}</style>
      
      {/* SINGLE-IMAGE HERO SECTION WITH ANIMATION */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-blue-950">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
  src={frontPageImg} 
  className="w-full h-full object-cover mix-blend-overlay opacity-50 animate-kenburns"
  alt="J.B. Construction Active Site" 
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/80 to-transparent z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mt-16 w-full">
          <div className="max-w-3xl">
            <span className="inline-block bg-stone-500 text-white text-xs font-black tracking-[0.2em] px-4 py-1.5 rounded-full mb-6 uppercase shadow-lg shadow-stone-900/30">
              Registered GSTIN: 24BBCPP4390Q1Z3 • Est. 2017
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8">
              Building Gujarat's Future with <span className="text-stone-400">Precision.</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed font-medium max-w-2xl">
              Premier Civil Contracting, Bulk Material Supply, and Advanced Digital Drafting (AutoCAD/Revit) based in Mehsana, Gujarat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => setCurrentPage('services')} className="bg-white text-blue-950 hover:bg-stone-500 hover:text-white px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-xl shadow-black/20">
                Explore Our Services <ArrowRight className="h-5 w-5" />
              </button>
              <button onClick={() => setCurrentPage('contact')} className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
                Request an Estimate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-white py-12 border-b relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Years Established', val: '8+', icon: Clock },
              { label: 'Projects Done', val: '35+', icon: CheckCircle },
              { label: 'Active Sites', val: '4', icon: HardHat },
              { label: 'Expert Engineers', val: '7', icon: Users },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left flex flex-col md:flex-row items-center gap-4 group">
                <stat.icon className="h-10 w-10 text-stone-500 group-hover:text-blue-900 transition-colors duration-300" />
                <div>
                  <div className="text-3xl font-black text-blue-950">{stat.val}</div>
                  <div className="text-sm font-bold text-stone-500 uppercase tracking-tighter">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPREHENSIVE OVERVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-stone-500 font-black uppercase tracking-[0.3em] mb-4">Welcome to J.B. Construction</h2>
            <h3 className="text-3xl md:text-5xl font-black text-blue-950 mb-6">A Legacy of Strong Foundations.</h3>
            <p className="text-slate-600 text-lg">We are a completely integrated civil contracting firm. Unlike traditional contractors, we bridge the gap between heavy, on-site physical execution and highly precise digital planning (BIM/CAD), ensuring that every project is delivered safely, on time, and completely free of municipal compliance issues.</p>
          </div>

          {/* NEW VISUAL FEATURE SECTION START */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={truckImg} 
                alt="Heavy Site Execution" 
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent flex items-end p-8 md:p-10">
                <div>
                  <span className="text-stone-400 font-black tracking-widest uppercase text-sm mb-2 block">Physical Execution</span>
                  <h3 className="text-white text-2xl md:text-3xl font-black">Heavy Site Operations</h3>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
              <img 
                src={autocadImg} 
                alt="Digital BIM Planning" 
                className="w-full h-72 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/40 to-transparent flex items-end p-8 md:p-10">
                <div>
                  <span className="text-stone-400 font-black tracking-widest uppercase text-sm mb-2 block">Pre-Construction</span>
                  <h3 className="text-white text-2xl md:text-3xl font-black">Digital BIM & CAD Planning</h3>
                </div>
              </div>
            </div>
          </div>
          {/* NEW VISUAL FEATURE SECTION END */}

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { title: 'Civil Drafting', desc: 'AutoCAD 2D plans & Revit 3D BIM coordination.', icon: Monitor },
              { title: 'Site Execution', desc: 'Roads, heavy RCC foundations, and earthworks.', icon: Construction },
              { title: 'Material Supply', desc: 'Bulk delivery of stone, bitumen, and steel.', icon: Truck },
              { title: 'Surveying', desc: 'Accurate topographical maps & layout plotting.', icon: Compass }
            ].map((srv, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-md text-center border-t-4 border-blue-900 hover:-translate-y-2 transition-transform cursor-pointer" onClick={() => setCurrentPage('services')}>
                <srv.icon className="h-10 w-10 text-stone-500 mx-auto mb-4" />
                <h4 className="font-bold text-blue-950 mb-2 text-lg">{srv.title}</h4>
                <p className="text-sm text-slate-500">{srv.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-950 text-white rounded-3xl p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-2xl">
            <div className="max-w-2xl">
              <h4 className="text-3xl font-black mb-4">Ready to start your next infrastructure project?</h4>
              <p className="text-blue-100 text-lg">Partner with Mehsana's most trusted name in civil contracting. From the first blueprint sketch to the final concrete pour.</p>
            </div>
            <button onClick={() => setCurrentPage('contact')} className="bg-stone-500 hover:bg-stone-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all whitespace-nowrap shadow-lg">
              Contact Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div 
      className="animate-in fade-in duration-500 pt-32 pb-24 min-h-screen relative bg-cover bg-center bg-fixed" 
      style={{ backgroundImage: `url(${officeImg})`}}
    >
      {/* ADDED: A subtle light overlay so your dark blue text remains highly readable over the image */}
      <div className="absolute inset-0 bg-slate-100/70 z-0 pointer-events-none" />

      {/* Added relative z-10 so the content sits above the overlay */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Intro Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-black text-blue-950 mb-4 flex items-center justify-center gap-4">
              <Building2 className="h-10 w-10 text-stone-500" /> About J.B. Construction
            </h2>
            <h3 className="text-xl md:text-2xl text-stone-700 leading-tight font-bold">
              Bridging the Gap Between Field Operations and Digital Engineering.
            </h3>
          </div>
          
          {/* CHANGED: Solid bg-white to frosted glass (bg-white/70 backdrop-blur-md) */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/50">
            <p className="text-lg text-slate-800 mb-6 leading-relaxed font-medium">
              Established in 2017 with its office in Mehsana, Gujarat (GSTIN: 24BBCPP4390Q1Z3), J.B. Construction is a premier proprietorship civil contracting firm. Led by experienced Civil Engineer Jairambhai B. Prajapati, we specialize in delivering end-to-end civil construction solutions.
            </p>
            {/* Made the inner quote box slightly transparent too */}
            <p className="text-lg text-slate-800 leading-relaxed border-l-4 border-stone-500 pl-6 bg-white/40 p-6 rounded-r-xl font-medium">
              We understand that successful physical construction relies heavily on precise pre-construction planning. Therefore, we integrate practical site execution with sophisticated Building Information Modeling (BIM) and digital design capabilities to streamline project coordination and ensure strict compliance with municipal codes.
            </p>
          </div>
        </div>

        {/* Vision, Mission, Quality Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {/* CHANGED: Applied glass effect to all three boxes */}
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/50 border-t-4 border-t-blue-900 hover:bg-white/90 transition-all duration-300">
            <Target className="h-12 w-12 text-stone-500 mb-6" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Our Vision</h4>
            <p className="text-slate-700 font-medium leading-relaxed">To be the most trusted and technologically advanced civil contracting partner in Gujarat, recognized for bridging traditional hard work with modern engineering precision.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/50 border-t-4 border-t-stone-500 hover:bg-white/90 transition-all duration-300">
            <Compass className="h-12 w-12 text-blue-900 mb-6" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Our Mission</h4>
            <p className="text-slate-700 font-medium leading-relaxed">To deliver every infrastructure project safely, on time, and within budget, by utilizing premium materials, skilled labor, and highly accurate digital drafting technologies.</p>
          </div>
          <div className="bg-white/70 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/50 border-t-4 border-t-blue-900 hover:bg-white/90 transition-all duration-300">
            <ShieldCheck className="h-12 w-12 text-stone-500 mb-6" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Quality Policy</h4>
            <p className="text-slate-700 font-medium leading-relaxed">We maintain a 100% commitment to QA/QC compliance. From rigorous material testing to digital clash detection in Revit, quality is embedded in every phase of our workflow.</p>
          </div>
        </div>

        {/* Technology and Remote Work Section */}
        {/* CHANGED: Converted solid blue to semi-transparent blue glass */}
        <div className="bg-blue-950/80 backdrop-blur-md border border-blue-800/50 text-white p-12 md:p-16 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
            <Cloud className="h-96 w-96" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-3xl font-black mb-6 flex items-center gap-3">
              <Monitor className="text-stone-400 h-8 w-8" /> Modern Work Culture & Technology
            </h3>
            <p className="text-lg text-blue-100 mb-6 leading-relaxed">
              At J.B. Construction, we believe in evolving with the industry. We operate a highly digitized backend system to ensure seamless project management. By utilizing platforms like Google Workspace and maintaining advanced cloud-based filing systems, we securely manage our CAD templates, BIM files, and project documentation.
            </p>
            <p className="text-lg text-blue-100 leading-relaxed">
              This digital-first approach not only facilitates routine QA/QC checks and weekly progress reporting but also allows us to implement a flexible, modern work environment. Our robust cloud infrastructure enables seamless collaboration between our hands-on site managers at the office and our specialized technical drafting teams working remotely.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderServices = () => (
    <div className="animate-in fade-in duration-500 pt-32 pb-24 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-stone-500 font-black uppercase tracking-[0.3em] mb-4">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">Core Civil Engineering Solutions.</h3>
          <p className="text-slate-600 text-lg">We combine practical site execution with modern drafting technologies to support efficient planning, accurate layouts, and streamlined project coordination.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          
          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow border-l-8 border-blue-900 group">
            <Monitor className="h-12 w-12 text-stone-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Advanced Civil Drafting & BIM Support</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">Our dedicated in-house technical drafting division utilizes industry-leading software—specifically AutoCAD and Revit—to provide high-accuracy digital deliverables for various construction phases. We specialize in creating detailed 2D civil plans, 3D models, grading plans, and utility layouts. By managing Building Information Models (BIM), we perform vital virtual design coordination and clash detections prior to construction, ensuring total compliance with municipal codes.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow border-l-8 border-stone-500 group">
            <Construction className="h-12 w-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Civil Contracting & Execution</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">We undertake comprehensive works contracts across residential, commercial, and industrial sectors. Our execution teams handle heavy earthworks, robust road infrastructure development, and complex structural RCC foundations. With a strong focus on on-site safety and quality control, we manage all physical construction phases from the initial groundbreaking to the final structural handover, ensuring alignment with approved engineering drawing sets.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow border-l-8 border-blue-900 group">
            <Truck className="h-12 w-12 text-stone-500 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Bulk Construction Material Supply</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">A structure is only as strong as its materials. We are a reliable supplier of premium, bulk construction materials for large-scale infrastructure projects. Our supply chain includes high-grade Crushed Pakur Stone, Natural Bitumen (VG-30), high-tensile Mild Steel Bright Bars, and Cement Clinkers. We utilize digital tracking to ensure zero-delay logistics to our active construction sites across Gujarat.</p>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-shadow border-l-8 border-stone-500 group">
            <Compass className="h-12 w-12 text-blue-900 mb-6 group-hover:scale-110 transition-transform" />
            <h4 className="text-2xl font-black text-blue-950 mb-4">Surveying & Topographical Layouts</h4>
            <p className="text-slate-600 mb-6 leading-relaxed">Accurate construction begins with accurate land data. We conduct detailed site surveys using Total Station equipment to capture precise topographical data. This raw geotechnical data is then translated by our drafting team into exact site maps and conceptual sketches, ensuring that all subsequent earthworks, drainage slopes, and foundation placements are perfectly aligned with the natural terrain.</p>
          </div>

        </div>
      </div>
    </div>
  );

  const renderProjects = () => (
    <div className="animate-in fade-in duration-500 pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-stone-500 font-black uppercase tracking-[0.3em] mb-4">Our Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-950 mb-6">Completed Projects in Gujarat.</h3>
          <p className="text-slate-600 text-lg">Demonstrating our capability across execution, material supply, and digital drafting within a 50km radius of Mehsana.</p>
        </div>
        
        {/* Project Cards - Redesigned without images */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsData.map((proj, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 border-t-4 border-blue-900 cursor-pointer flex flex-col h-full" 
              onClick={() => setSelectedProject(proj)}
            >
              <div className="flex justify-between items-start mb-6">
                <span className="bg-slate-100 text-stone-600 text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full">{proj.type}</span>
                <ArrowRight className="h-5 w-5 text-slate-300 group-hover:text-blue-900 transition-colors" />
              </div>
              <h4 className="text-blue-950 text-xl font-bold mb-4 leading-tight">{proj.name}</h4>
              <div className="mt-auto flex items-center gap-2 text-stone-500 text-sm font-medium pt-4 border-t border-slate-100">
                <MapPin className="h-4 w-4" /> {proj.location}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFaqs = () => {
    const faqs = [
      {
        q: "What is the standard timeline for executing a commercial RCC foundation project?",
        a: "Timelines vary based on the scale of the foundation and soil conditions. However, a standard commercial RCC foundation in our operating region typically takes between 4 to 8 weeks, factoring in excavation, rebar tying, concrete pouring, and essential curing times."
      },
      {
        q: "Can J.B. Construction provide both materials and physical execution for road construction?",
        a: "Absolutely. We are a fully integrated firm. We handle the entire road construction lifecycle, supplying premium materials like Crushed Pakur Stone and Natural Bitumen directly to the site while managing the labor and heavy machinery for execution."
      },
      {
        q: "Which specific geographical areas in Gujarat do you serve?",
        a: "We are based in Mehsana and actively take on civil contracting and technical projects within a 40-50 km radius. This includes major industrial and residential zones like Unjha, Becharaji, Visnagar, Patan, Kadi, and Modhera."
      },
      {
        q: "How do you handle quality control for bulk construction materials?",
        a: "Quality is paramount. We source all aggregates, cement, and steel from certified vendors. Before delivery, materials are checked for density, tensile strength, and grading to ensure they meet municipal and structural engineer specifications."
      },
      {
        q: "Do you provide 2D drafting and 3D modeling as a standalone service?",
        a: "Yes. Even if you have another contractor handling the physical build, you can hire our technical division to generate highly accurate AutoCAD layouts, grading plans, and Revit 3D models for your project."
      },
      {
        q: "What types of projects require BIM and virtual clash detection?",
        a: "BIM (Building Information Modeling) is highly recommended for complex structures like multi-story commercial buildings, hospitals, and industrial factories where structural steel framing, HVAC, and underground plumbing networks must intersect perfectly without errors."
      },
      {
        q: "Are your site engineers and labor force compliant with safety regulations?",
        a: "Yes, site safety is a core priority. Our labor force is equipped with proper PPE, and our site engineers enforce strict safety protocols, especially during deep excavations, heavy lifting operations, and rigid pavement construction."
      },
      {
        q: "Can you assist with municipal building approvals in the Mehsana district?",
        a: "While we are not the approving authority, our drafting team creates detailed engineering drawing sets that strictly adhere to local municipal building codes, making the approval and compliance process highly seamless for our clients."
      },
      {
        q: "What makes Vacuum Dewatered Flooring (VDF) suitable for industrial use?",
        a: "VDF, or Tremix flooring, involves removing excess water from concrete immediately after pouring. This results in a highly dense, abrasion-resistant, and dust-free floor that can withstand the heavy impact of industrial machinery and forklifts without cracking."
      },
      {
        q: "How do we request a cost estimate for an upcoming infrastructure project?",
        a: "You can visit our 'Contact Us' page and fill out the detailed inquiry form. Please include the service required and a brief description of the project scope. One of our lead engineers will review the details and get back to you with an initial consultation and estimate."
      }
    ];

    return (
      <div className="animate-in fade-in duration-500 pt-32 pb-24 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-stone-500 font-black uppercase tracking-[0.3em] mb-4">Knowledge Base</h2>
            <h3 className="text-4xl md:text-5xl font-black text-blue-950">Frequently Asked Questions.</h3>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center focus:outline-none"
                >
                  <span className="font-bold text-lg text-blue-950">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-stone-500 transition-transform duration-300 shrink-0 ml-4 ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-8 overflow-hidden transition-all duration-300 bg-slate-50 ${activeFaq === i ? 'max-h-96 py-6' : 'max-h-0 py-0'}`}>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderContact = () => (
    <div className="animate-in fade-in duration-500 pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-stone-500 font-black uppercase tracking-[0.3em] mb-4">Contact Us</h2>
          <h3 className="text-4xl md:text-5xl font-black text-blue-950">Let's Build Together.</h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Business Hours Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-lg border-t-4 border-blue-900">
              <h4 className="text-xl font-black text-blue-950 mb-6 flex items-center gap-2"><Clock className="text-stone-500"/> Business Hours</h4>
              <ul className="space-y-3 text-slate-600 font-medium text-sm">
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Monday</span> <span>9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Tuesday</span> <span>9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Wednesday</span> <span>9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Thursday</span> <span>9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Friday</span> <span>9:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between items-center border-b border-slate-100 pb-2"><span>Saturday</span> <span>9:00 AM – 1:00 PM</span></li>
                <li className="flex justify-between items-center text-stone-500 font-bold"><span>Sunday</span> <span>Closed</span></li>
              </ul>
              <p className="text-xs text-slate-400 mt-4 italic">*Hours might differ during holidays such as Eid al-Adha.</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-3xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center animate-in zoom-in duration-500 py-20">
                <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="text-green-600 h-12 w-12" />
                </div>
                <h4 className="text-blue-950 text-3xl font-black mb-4">Opening Email Client...</h4>
                <p className="text-slate-500 text-lg font-medium">Your email client has been opened to message <br/> <span className="text-blue-900 font-bold">director.jbconstruction@gmail.com</span></p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-stone-400 font-black text-sm uppercase tracking-widest hover:text-blue-900 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Full Name</label>
                    <input 
                      required type="text" placeholder="John Doe" 
                      value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium border border-slate-200" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Email Address</label>
                    <input 
                      required type="email" placeholder="john@company.com" 
                      value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium border border-slate-200" 
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Service Required</label>
                  <select 
                    required value={formData.service} onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium border border-slate-200 appearance-none"
                  >
                    <option value="" disabled>Select a Service...</option>
                    <option value="Civil Contracting">Civil Contracting & Execution</option>
                    <option value="Technical Drafting / BIM">Technical Drafting, AutoCAD & BIM</option>
                    <option value="Material Supply">Material Supply (Stone, Bitumen, etc.)</option>
                    <option value="Surveying">Surveying & Layouts</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2 uppercase tracking-wide">Project Details</label>
                  <textarea 
                    required rows={5} placeholder="Tell us about your project requirements..." 
                    value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all font-medium resize-none border border-slate-200"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" disabled={isSubmitting}
                  className={`w-full bg-blue-900 hover:bg-blue-950 text-white font-black py-5 rounded-xl text-lg transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <>SEND INQUIRY <ArrowRight className="h-6 w-6"/></>}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col selection:bg-stone-200 selection:text-blue-900">
      
      {/* HEADER NAVIGATION */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled || currentPage !== 'home' ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-5'
      }`}>
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
          
         <div className="flex items-center gap-6 cursor-pointer group">
  {/* Logo */}
  <div className="rounded-xl overflow-hidden group-hover:scale-105 transition-all duration-300">
    <img
      src={logo}
      alt="J.B. Construction Logo"
      className="h-12 w-12 object-cover rounded-xl"
    />
  </div>

  {/* Text */}
  <span
    className={`text-2xl font-black tracking-tight transition-colors duration-300 ${
      scrolled || currentPage !== 'home'
        ? 'text-blue-950'
        : 'text-white'
    }`}
  >
    J.B. <span className="text-stone-400">CONSTRUCTION</span>
  </span>
</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setCurrentPage(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${
                  currentPage === link.id ? 'text-stone-500' : 
                  (scrolled || currentPage !== 'home' ? 'text-blue-950 hover:text-stone-500' : 'text-white/90 hover:text-white')
                }`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage('contact')}
              className="bg-blue-900 hover:bg-stone-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-blue-900/20"
            >
              GET QUOTE
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="text-blue-950" /> : <Menu className={scrolled || currentPage !== 'home' ? 'text-blue-950' : 'text-white'} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t md:hidden animate-in slide-in-from-top duration-300">
            <div className="p-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button 
                  key={link.id} 
                  onClick={() => setCurrentPage(link.id)} 
                  className={`text-left text-lg font-bold border-b pb-2 ${currentPage === link.id ? 'text-stone-500' : 'text-blue-950'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* DYNAMIC PAGE CONTENT RENDERING */}
      <main className="flex-grow">
        {currentPage === 'home' && renderHome()}
        {currentPage === 'about' && renderAbout()}
        {currentPage === 'services' && renderServices()}
        {currentPage === 'projects' && renderProjects()}
        {currentPage === 'faqs' && renderFaqs()}
        {currentPage === 'contact' && renderContact()}
      </main>

      {/* PROJECT DETAILS MODAL - Redesigned without images */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-blue-950/80 backdrop-blur-md" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
            
            {/* Modal Header without image */}
            <div className="bg-blue-950 p-8 pt-12 relative shrink-0 text-white">
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <span className="bg-stone-500 text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-4 inline-block">
                {selectedProject.type}
              </span>
              <h3 className="text-3xl font-black mt-2 leading-tight">{selectedProject.name}</h3>
              <div className="flex items-center gap-1 text-blue-200 text-sm mt-4 font-medium">
                <MapPin className="h-4 w-4" /> {selectedProject.location}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8 sm:p-10 overflow-y-auto bg-white">
              <h4 className="text-lg font-bold text-blue-950 mb-4 flex items-center gap-2">
                <FileText className="text-stone-500" /> Project Description
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {selectedProject.desc}
              </p>
              <button 
                onClick={() => { setSelectedProject(null); setCurrentPage('contact'); }}
                className="w-full sm:w-auto bg-stone-500 hover:bg-blue-900 text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg"
              >
                Inquire About Similar Projects
              </button>
            </div>
          </div>
        </div>
      )}

      {/* UNIVERSAL FOOTER */}
      <footer className="bg-[#111827] text-white pt-20 pb-12 mt-auto border-t-[12px] border-blue-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12 mb-16">
            
            {/* Column 1: Info */}
            <div className="lg:col-span-1">
              {/* Logo in footer */}
              <img src="/logo.png" alt="J.B. Construction Logo" className="h-16 w-auto object-contain mb-6 bg-white/10 p-2 rounded-lg" onError={(e) => {
                e.target.style.display = 'none'; // Hides broken image
              }}/>
              <div className="mb-6">
                 <span className="text-2xl font-black tracking-tighter text-white">J.B. <span className="text-stone-400">CONSTRUCTION</span></span>
              </div>
              <p className="text-slate-400 mb-6 font-medium text-sm leading-relaxed">
                Premier civil contractors bridging practical site execution with modern AutoCAD & Revit drafting technologies in Gujarat.
              </p>
              <div className="text-sm font-bold text-stone-400">GSTIN: 24BBCPP4390Q1Z3</div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
              <ul className="space-y-3 text-slate-400 text-sm font-medium">
                <li><button onClick={() => setCurrentPage('home')} className="hover:text-stone-400 transition-colors">Home</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-stone-400 transition-colors">About Us</button></li>
                <li><button onClick={() => setCurrentPage('services')} className="hover:text-stone-400 transition-colors">Services</button></li>
                <li><button onClick={() => setCurrentPage('projects')} className="hover:text-stone-400 transition-colors">Project Portfolio</button></li>
                <li><button onClick={() => setCurrentPage('faqs')} className="hover:text-stone-400 transition-colors">FAQs</button></li>
                <li><button onClick={() => setCurrentPage('contact')} className="hover:text-stone-400 transition-colors">Contact Us</button></li>
              </ul>
            </div>

            {/* Column 3: Contact Details WITH SMALL GOOGLE MAP */}
            <div className="lg:col-span-1 flex flex-col h-full">
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Contact Office</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-medium mb-6">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-stone-400 shrink-0" />
                  <span>First Floor, F-11, Maruti Enclave, Bypass Highway, Panchot, Mehsana, Gujarat 384205, India</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-stone-400 shrink-0" />
                  <span>+91 82004 99104</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-stone-400 shrink-0" />
                  <span>director.jbconstruction@gmail.com</span>
                </li>
              </ul>
              
            {/* Clickable Google Map */}
<a
  href="https://maps.google.com/?q=J.B.Construction+Mehsana"
  target="_blank"
  rel="noreferrer"
  className="w-full h-32 mt-auto rounded-xl overflow-hidden shadow-lg relative block"
>
  <iframe
    title="J B Construction Location"
    src="https://maps.google.com/maps?q=23%C2%B036'42.3%22N%2072%C2%B020'25.9%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    className="pointer-events-none"
  ></iframe>
</a>
            </div>

            {/* Column 4: Hours */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Operating Hours</h4>
              <ul className="space-y-2 text-slate-400 text-sm font-medium">
                <li className="flex justify-between border-b border-white/10 pb-2 mb-2"><span>Mon - Fri</span> <span>9 AM – 5 PM</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2 mb-2"><span>Saturday</span> <span>9 AM – 1 PM</span></li>
                <li className="flex justify-between text-stone-400 font-bold"><span>Sunday</span> <span>Closed</span></li>
              </ul>
            </div>

          </div>
          
          {/* Footer Legal Strip (Director Name Removed) */}
          <div className="border-t border-white/10 pt-8 text-center text-slate-500 text-xs font-bold uppercase tracking-wide">
            <p>© {new Date().getFullYear()} J.B. Construction. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

