import { motion } from 'framer-motion';
import { 
  ShoppingBag, 
  BarChart3, 
  Truck, 
  Zap, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  Smartphone,
  Menu,
  Mail,
  Phone,
  MapPin,
  X,
  Package,
  TrendingUp,
  Users,
  Shield,
  Clock,
  HeadphonesIcon
} from 'lucide-react';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-mercato-600 p-2 rounded-lg">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">MercatoHub</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-sm font-medium text-gray-600 hover:text-mercato-600 transition-colors">Features</Link>
            <Link to="/solutions" className="text-sm font-medium text-gray-600 hover:text-mercato-600 transition-colors">Solutions</Link>
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-mercato-600 transition-colors">About</Link>
            <Link to="/get-started" className="bg-mercato-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-mercato-700 transition-all shadow-md hover:shadow-lg">
              Get Started
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-4 space-y-4"
        >
          <Link to="/features" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/solutions" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link to="/about" className="block text-gray-600 font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/get-started" className="block w-full bg-mercato-600 text-white py-3 rounded-xl font-semibold text-center" onClick={() => setIsOpen(false)}>Get Started</Link>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-mercato-50 border border-mercato-100 px-3 py-1 rounded-full mb-6">
              <Zap className="h-4 w-4 text-mercato-600" />
              <span className="text-xs font-bold text-mercato-700 uppercase tracking-wider">Fastest Growing Retail Platform</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Modern Retail <br />
              <span className="text-mercato-600">Built for Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Empower your business with seamless inventory management, 
              omnichannel sales, and real-time analytics designed for the modern African retailer.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={() => navigate('/get-started')}
                className="bg-mercato-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-mercato-700 transition-all shadow-xl hover:shadow-mercato-200/50 flex items-center justify-center"
              >
                Start Selling Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="mt-10 flex items-center space-x-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${i}`} alt="user" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">Joined by 2,000+ vendors this month</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-12 lg:mt-0 relative"
          >
            <div className="relative bg-gradient-to-tr from-mercato-600 to-green-400 rounded-3xl p-1 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&q=80&w=1200" 
                alt="MercatoHub Dashboard" 
                className="rounded-3xl shadow-inner w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <BarChart3 className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="font-bold text-gray-900">+124%</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">Growth in sales volume since migration</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeaturesPreview = () => {
  const list = [
    {
      title: "Omnichannel Selling",
      desc: "Sell online, in-store, and on social media with a unified dashboard.",
      icon: <Globe className="h-6 w-6" />,
      color: "bg-blue-500"
    },
    {
      title: "Smart Inventory",
      desc: "Real-time tracking and automated restock alerts for all your products.",
      icon: <CheckCircle2 className="h-6 w-6" />,
      color: "bg-mercato-500"
    },
    {
      title: "Next-Day Delivery",
      desc: "Built-in logistics network to get your products to customers faster.",
      icon: <Truck className="h-6 w-6" />,
      color: "bg-orange-500"
    },
    {
      title: "Mobile POS",
      desc: "Turn your phone into a powerful point of sale system anywhere.",
      icon: <Smartphone className="h-6 w-6" />,
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-mercato-600 font-bold uppercase tracking-widest text-sm mb-4">Why MercatoHub?</h2>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">Built for the next generation of commerce</p>
          <div className="w-20 h-1.5 bg-mercato-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {list.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 transition-all hover:shadow-xl group"
            >
              <div className={`${item.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-mercato-600 p-2 rounded-lg">
                <ShoppingBag className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">MercatoHub</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              Empowering the next generation of African retailers with scalable, 
              secure, and innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              {['Twitter', 'Instagram', 'LinkedIn'].map((app) => (
                <div key={app} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-mercato-600 cursor-pointer transition-colors text-sm font-bold">
                  {app[0]}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6">Platform</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/features" className="hover:text-mercato-400 transition-colors">Features</Link></li>
              <li><Link to="/solutions" className="hover:text-mercato-400 transition-colors">Solutions</Link></li>
              <li><Link to="/get-started" className="hover:text-mercato-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-gray-400 font-medium">
              <li><Link to="/about" className="hover:text-mercato-400 transition-colors">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-mercato-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/contact" className="hover:text-mercato-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500 font-medium">
          <p>© 2026 MercatoHub Systems. All rights reserved.</p>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System Status: Fully Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Home Page
const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturesPreview />
      
      {/* Testimonial Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-mercato-900 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 lg:grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <CheckCircle2 className="h-12 w-12 text-mercato-400 mb-8" />
                <h2 className="text-4xl font-bold text-white mb-8 leading-tight">
                  "Our infrastructure is now predictable, scalable, and far easier to manage. 
                  Sales events are no longer a risk."
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="h-14 w-14 rounded-full bg-gray-700 overflow-hidden border-2 border-mercato-500">
                  
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Fatima Adebayo</p>
                    <p className="text-mercato-400 font-medium">CTO, MercatoHub Nigeria</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 opacity-20 lg:opacity-100 flex justify-center">
                <ShoppingBag className="text-white h-[300px] w-[300px]" />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mercato-800 rounded-full blur-[100px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-800 rounded-full blur-[80px] -ml-32 -mb-32"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-8 tracking-tight">Ready to scale your business?</h2>
          <p className="text-xl text-gray-500 mb-12 font-medium">
            Join thousands of successful merchants across Nigeria who trust MercatoHub 
            to power their business growth every single day.
          </p>
          <Link to="/get-started" className="inline-block bg-mercato-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:bg-mercato-700 transition-all shadow-2xl hover:shadow-mercato-300/50">
            Create Your Free Account
          </Link>
        </div>
      </section>
    </>
  );
};

// Features Page
const FeaturesPage = () => {
  const features = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Inventory Management",
      desc: "Track stock levels in real-time across all locations. Get automated alerts when items run low and manage suppliers efficiently.",
      color: "bg-blue-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Omnichannel Commerce",
      desc: "Sell seamlessly across online stores, physical locations, and social media platforms from one unified dashboard.",
      color: "bg-purple-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Advanced Analytics",
      desc: "Make data-driven decisions with comprehensive reports on sales, customer behavior, and inventory performance.",
      color: "bg-green-500"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile POS",
      desc: "Accept payments anywhere with our mobile point-of-sale system. Works offline and syncs when connected.",
      color: "bg-orange-500"
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics Integration",
      desc: "Connect with major delivery partners for seamless order fulfillment and real-time tracking.",
      color: "bg-red-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure Payments",
      desc: "Accept all major payment methods with bank-level security and fraud protection built-in.",
      color: "bg-indigo-500"
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Powerful Features for Modern Retail</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to run and grow your retail business, all in one platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <div className={`${feature.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Solutions Page
const SolutionsPage = () => {
  const solutions = [
    {
      title: "For Small Retailers",
      desc: "Start selling online in minutes with our easy-to-use platform. No technical knowledge required.",
      features: ["Quick setup", "Affordable pricing", "24/7 support", "Mobile app included"]
    },
    {
      title: "For Growing Businesses",
      desc: "Scale your operations with advanced features and multi-location support.",
      features: ["Multi-store management", "Advanced analytics", "API access", "Priority support"]
    },
    {
      title: "For Enterprises",
      desc: "Custom solutions tailored to your specific business needs and workflows.",
      features: ["Custom integrations", "Dedicated account manager", "SLA guarantee", "White-label options"]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Solutions for Every Business Size</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're just starting out or managing multiple locations, we have the right solution for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-mercato-500 transition-all"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.desc}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <CheckCircle2 className="h-5 w-5 text-mercato-600 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page
const AboutPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About MercatoHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to empower African retailers with world-class technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Founded in 2020, MercatoHub was born from a simple observation: African retailers needed better tools to compete in the digital age. Our founders, having worked with retailers across Nigeria, Kenya, and South Africa, saw firsthand the challenges businesses faced with outdated systems and expensive solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, we serve over 2,000 businesses across the continent, processing millions of transactions monthly and helping retailers grow their revenue by an average of 124%.
            </p>
          </div>
          <div className="bg-mercato-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Values</h3>
            <div className="space-y-4">
              {[
                { icon: <Users />, title: "Customer First", desc: "Every decision starts with our customers' needs" },
                { icon: <TrendingUp />, title: "Innovation", desc: "Constantly improving and adapting to market changes" },
                { icon: <Shield />, title: "Reliability", desc: "Building systems you can depend on 24/7" }
              ].map((value, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="bg-mercato-600 p-2 rounded-lg text-white flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{value.title}</h4>
                    <p className="text-gray-600 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Get Started Page
const GetStartedPage = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    email: '',
    phone: '',
    businessType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you within 24 hours.');
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Get Started with MercatoHub</h1>
          <p className="text-xl text-gray-600">
            Fill out the form below and our team will set up your account within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Business Name *</label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercato-500 focus:border-transparent"
                placeholder="Your Business Name"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercato-500 focus:border-transparent"
                placeholder="you@business.com"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercato-500 focus:border-transparent"
                placeholder="+234 XXX XXX XXXX"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Business Type *</label>
              <select
                required
                value={formData.businessType}
                onChange={(e) => setFormData({...formData, businessType: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-mercato-500 focus:border-transparent"
              >
                <option value="">Select business type</option>
                <option value="retail">Retail Store</option>
                <option value="ecommerce">E-commerce</option>
                <option value="wholesale">Wholesale</option>
                <option value="other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full bg-mercato-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-mercato-700 transition-all shadow-lg"
            >
              Create My Account
            </button>
          </form>
        </motion.div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { icon: <Clock />, title: "Quick Setup", desc: "Get started in under 5 minutes" },
            { icon: <HeadphonesIcon />, title: "Free Support", desc: "24/7 customer support included" },
            { icon: <CheckCircle2 />, title: "No Credit Card", desc: "Try free for 14 days" }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="bg-mercato-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-mercato-600">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Simple pages
const PrivacyPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-4">Last updated: January 2026</p>
        <p className="text-gray-600 leading-relaxed">
          At MercatoHub, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information. We are committed to maintaining the trust and confidence of our users and ensuring that your data is handled with the utmost care and security.
        </p>
      </div>
    </div>
  </div>
);

const ContactPage = () => (
  <div className="pt-24 pb-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <div className="space-y-4">
            <p className="flex items-center text-gray-600">
              <Mail className="h-5 w-5 mr-3 text-mercato-600" />
              support@mercatohub.com
            </p>
            <p className="flex items-center text-gray-600">
              <Phone className="h-5 w-5 mr-3 text-mercato-600" />
              +234 800 MERCATO
            </p>
            <p className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-3 text-mercato-600" />
              Lagos, Nigeria
            </p>
          </div>
        </div>
        <div className="bg-mercato-50 p-8 rounded-2xl">
          <h3 className="text-xl font-bold mb-4">Business Hours</h3>
          <p className="text-gray-700 mb-2">Monday - Friday: 8am - 6pm WAT</p>
          <p className="text-gray-700 mb-2">Saturday: 9am - 2pm WAT</p>
          <p className="text-gray-700">Sunday: Closed</p>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
