import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  Lock, 
  CreditCard, 
  ArrowRight, 
  CheckCircle2, 
  Globe2, 
  Smartphone,
  Menu,
  X,
  Layers,
  BarChart4,
  Cpu,
  RefreshCcw,
  Mail,
  Phone,
  MapPin,
  TrendingUp,
  Users,
  Building2,
  Code2,
  Wallet,
  LineChart
} from 'lucide-react';
import { useState, useRef } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  );

  return (
    <motion.nav 
      style={{ backgroundColor }}
      className="fixed w-full z-50 backdrop-blur-lg border-b border-blue-100/20"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="bg-blue-600 p-3 rounded-2xl shadow-lg"
            >
              <ShieldCheck className="h-8 w-8 text-white" />
            </motion.div>
            <div>
              <span className="text-3xl font-black text-gray-900 tracking-tighter">KoraWire</span>
              <p className="text-xs text-blue-600 font-bold uppercase tracking-widest">Systems</p>
            </div>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-12">
            <Link to="/features" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/solutions" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/about" className="text-sm font-bold text-gray-700 hover:text-blue-600 transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
            </Link>
            <Link to="/get-started" className="bg-blue-600 text-white px-8 py-3.5 rounded-full text-sm font-black hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105">
              Open Account →
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-900 p-2">
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-6"
        >
          <Link to="/features" className="block text-gray-700 font-bold text-lg" onClick={() => setIsOpen(false)}>Features</Link>
          <Link to="/solutions" className="block text-gray-700 font-bold text-lg" onClick={() => setIsOpen(false)}>Solutions</Link>
          <Link to="/about" className="block text-gray-700 font-bold text-lg" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/get-started" className="block w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-center text-lg shadow-xl" onClick={() => setIsOpen(false)}>Open Account</Link>
        </motion.div>
      )}
    </motion.nav>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-blue-50">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating orbs */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [0, 30, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-32">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm border border-blue-200 px-6 py-3 rounded-full mb-10 shadow-lg"
          >
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-600"></span>
            </div>
            <span className="text-sm font-black uppercase tracking-[0.2em] text-blue-900">Powering Africa's Payment Future</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl lg:text-8xl font-black text-gray-900 leading-[1.05] mb-8"
          >
            Payment Infrastructure
            <br />
            <span className="text-blue-600">
              Built for Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Process millions of transactions with <span className="font-bold text-blue-600">99.99% uptime</span>. 
            PCI-DSS compliant infrastructure trusted by Kenya's leading financial institutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button 
              onClick={() => navigate('/get-started')}
              className="group bg-blue-600 text-white px-12 py-6 rounded-2xl font-black text-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center space-x-3 hover:scale-105"
            >
              <span>Start Integration</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <Link 
              to="/features"
              className="group bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-xl border-2 border-blue-600 hover:bg-blue-50 transition-all flex items-center space-x-3"
            >
              <span>View Documentation</span>
              <Code2 className="h-6 w-6" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 flex items-center justify-center space-x-12 text-sm"
          >
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-bold text-gray-700">500+ Institutions</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-bold text-gray-700">$2B+ Processed</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
              <span className="font-bold text-gray-700">40+ Countries</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatsSection = () => {
  const stats = [
    { value: "99.99%", label: "Uptime SLA", icon: <Zap className="h-8 w-8" /> },
    { value: "<200ms", label: "Avg Response", icon: <TrendingUp className="h-8 w-8" /> },
    { value: "10K+", label: "TPS Capacity", icon: <BarChart4 className="h-8 w-8" /> },
    { value: "24/7", label: "Support", icon: <Users className="h-8 w-8" /> }
  ];

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-4">Enterprise-Grade Performance</h2>
          <p className="text-xl text-blue-200 font-semibold">Numbers that matter to your business</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 text-center hover:bg-white/20 transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500/20 rounded-2xl mb-6 text-blue-300 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-blue-200 font-bold uppercase tracking-widest text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  const features = [
    {
      icon: <Cpu className="h-10 w-10" />,
      title: "Distributed Architecture",
      desc: "Multi-region deployment across GCP and AWS for maximum reliability and low latency.",
      color: "bg-blue-500"
    },
    {
      icon: <Lock className="h-10 w-10" />,
      title: "Bank-Level Security",
      desc: "PCI-DSS Level 1 certified with end-to-end encryption and tokenization.",
      color: "bg-blue-700"
    },
    {
      icon: <Globe2 className="h-10 w-10" />,
      title: "Multi-Currency Support",
      desc: "Accept and disburse in 40+ currencies with real-time FX conversion.",
      color: "bg-blue-400"
    },
    {
      icon: <Layers className="h-10 w-10" />,
      title: "Unified API",
      desc: "One integration for cards, mobile money, bank transfers, and wallets.",
      color: "bg-blue-600"
    },
    {
      icon: <RefreshCcw className="h-10 w-10" />,
      title: "Auto Reconciliation",
      desc: "Real-time settlement matching and automated ledger management.",
      color: "bg-blue-800"
    },
    {
      icon: <BarChart4 className="h-10 w-10" />,
      title: "Advanced Analytics",
      desc: "Deep insights into transaction flows, success rates, and customer behavior.",
      color: "bg-blue-950"
    }
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-black uppercase tracking-[0.3em] text-sm">Platform Features</span>
            <h2 className="text-6xl font-black text-gray-900 mt-4 mb-6">Built for Modern Finance</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to accept, process, and manage payments at scale
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-blue-50 border-2 border-gray-100 rounded-3xl p-10 hover:border-blue-300 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <div className={`inline-flex items-center justify-center w-20 h-20 ${feature.color} rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed font-semibold">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 bg-blue-950 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            Ready to Transform Your Payment Infrastructure?
          </h2>
          <p className="text-2xl text-blue-200 mb-12 font-semibold max-w-3xl mx-auto">
            Join 500+ financial institutions processing billions in transactions every month.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/get-started"
              className="bg-white text-blue-900 px-14 py-7 rounded-2xl font-black text-2xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center space-x-3"
            >
              <span>Open Account</span>
              <ArrowRight className="h-7 w-7" />
            </Link>
            <Link 
              to="/contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-14 py-7 rounded-2xl font-black text-2xl hover:bg-white/20 transition-all inline-flex items-center space-x-3"
            >
              <span>Talk to Sales</span>
              <Phone className="h-7 w-7" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-blue-600 p-3 rounded-2xl">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <div>
                <span className="text-3xl font-black tracking-tighter">KoraWire</span>
                <p className="text-xs text-blue-400 font-bold uppercase tracking-widest">Systems</p>
              </div>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 text-lg leading-relaxed font-semibold">
              Enterprise payment infrastructure for Africa's digital economy.
            </p>
            <div className="flex space-x-4">
              {['T', 'L', 'G'].map((letter) => (
                <div key={letter} className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 cursor-pointer transition-all font-black text-lg">
                  {letter}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Product</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">Payment Gateway</Link></li>
              <li><Link to="/features" className="hover:text-blue-400 transition-colors">API Platform</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">Compliance</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Solutions</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">For Merchants</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">For Developers</Link></li>
              <li><Link to="/solutions" className="hover:text-blue-400 transition-colors">For Enterprises</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-gray-400 font-bold">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest">© 2026 KoraWire Systems Kenya</p>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400 text-sm font-bold">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Subpages
const FeaturesPage = () => {
  const items = [
    { icon: <Cpu />, title: "Transaction Engine", desc: "Distributed processing engine handling millions of operations with zero room for error." },
    { icon: <Layers />, title: "Unified API", desc: "Single integration for cards, mobile money, bank transfers across multiple regions." },
    { icon: <BarChart4 />, title: "Real-time Analytics", desc: "Deep visibility into payment flows, success rates, and customer behavior." },
    { icon: <ShieldCheck />, title: "Fraud Detection", desc: "ML-powered fraud prevention protecting your business and customers." },
    { icon: <RefreshCcw />, title: "Auto Reconciliation", desc: "Automated ledger matching saving hundreds of man-hours monthly." },
    { icon: <CreditCard />, title: "Virtual Cards", desc: "Issue local and international virtual cards for customers or corporate use." }
  ];

  return (
    <div className="pt-32 pb-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl lg:text-7xl font-black text-gray-900 mb-6">Platform Features</h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">Enterprise-grade tools for businesses that can't afford downtime</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl hover:border-blue-300 transition-all">
              <div className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 font-semibold leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const SolutionsPage = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-6xl font-black text-gray-900 mb-6">Tailored Solutions</h1>
          <p className="text-2xl text-gray-600">For every stage of your fintech journey</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-blue-600 p-14 rounded-[3rem] shadow-2xl text-white">
            <Building2 className="h-16 w-16 mb-8" />
            <h3 className="text-4xl font-black mb-6">For Merchants</h3>
            <p className="text-blue-100 mb-8 font-semibold text-lg">Accept payments with pre-built checkout that converts and stays secure.</p>
            <ul className="space-y-4">
              {["No-code payment links", "Subscription billing", "Local payment methods", "Mobile SDKs"].map((f, i) => (
                <li key={i} className="flex items-center font-bold text-lg">
                  <CheckCircle2 className="text-blue-200 mr-4 h-6 w-6" /> {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-900 p-14 rounded-[3rem] shadow-2xl text-white">
            <Code2 className="h-16 w-16 mb-8 text-blue-400" />
            <h3 className="text-4xl font-black mb-6">For Developers</h3>
            <p className="text-gray-300 mb-8 font-semibold text-lg">Build with clean, powerful APIs and comprehensive documentation.</p>
            <ul className="space-y-4">
              {["Sandbox environment", "RESTful APIs", "Webhooks", "SDKs (Go, Python, JS)"].map((f, i) => (
                <li key={i} className="flex items-center font-bold text-lg">
                  <CheckCircle2 className="text-blue-400 mr-4 h-6 w-6" /> {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-7xl font-black text-gray-900 mb-12">Our Mission</h1>
      <p className="text-3xl text-gray-600 leading-relaxed mb-16 font-semibold">
        KoraWire Systems was founded in Nairobi to remove friction from financial transactions across Africa.
      </p>
      <div className="grid md:grid-cols-2 gap-16">
        <div className="bg-blue-50 p-10 rounded-3xl">
          <h3 className="text-3xl font-black text-blue-900 mb-6">Reliability First</h3>
          <p className="text-gray-700 font-bold leading-relaxed text-lg">
            99.99% uptime backed by geographically redundant infrastructure monitored 24/7.
          </p>
        </div>
        <div className="bg-indigo-50 p-10 rounded-3xl">
          <h3 className="text-3xl font-black text-indigo-900 mb-6">Compliance Driven</h3>
          <p className="text-gray-700 font-bold leading-relaxed text-lg">
            Working with regulators to ensure your business stays compliant with evolving fintech laws.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const GetStartedPage = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Welcome to KoraWire! Our team will contact you for KYB verification.");
  };

  return (
    <div className="pt-32 pb-24 bg-blue-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-14 shadow-2xl border-2 border-blue-100">
          <h2 className="text-5xl font-black text-gray-900 mb-10">Open Merchant Account</h2>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-700 mb-3">Country</label>
                <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 font-bold focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Kenya</option>
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>South Africa</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-gray-700 mb-3">Monthly Volume</label>
                <select className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 font-bold focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option>Below $10k</option>
                  <option>$10k - $100k</option>
                  <option>Above $100k</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-700 mb-3">Full Name</label>
              <input required type="text" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 font-bold focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-black uppercase tracking-widest text-gray-700 mb-3">Work Email</label>
              <input required type="email" className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl px-6 py-4 font-bold focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@company.com" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h1 className="text-6xl font-black text-gray-900 mb-12">Get in Touch</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-blue-50 p-10 rounded-3xl">
          <Mail className="h-12 w-12 text-blue-600 mx-auto mb-6" />
          <h3 className="text-2xl font-black text-gray-900 mb-3">Email Us</h3>
          <p className="text-lg font-bold text-gray-700">hello@paynest.systems</p>
        </div>
        <div className="bg-indigo-50 p-10 rounded-3xl">
          <MapPin className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
          <h3 className="text-2xl font-black text-gray-900 mb-3">Visit Us</h3>
          <p className="text-lg font-bold text-gray-700">Westlands, Nairobi, Kenya</p>
        </div>
      </div>
    </div>
  </div>
);

const PrivacyPage = () => (
  <div className="pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-6">
      <h1 className="text-6xl font-black text-gray-900 mb-8">Privacy Policy</h1>
      <p className="text-gray-600 text-lg font-semibold">Last updated: February 2026</p>
      <p className="text-gray-700 text-lg leading-relaxed mt-8">
        PayNest Systems is committed to protecting your privacy and ensuring the security of your data.
      </p>
    </div>
  </div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <StatsSection />
            <FeaturesGrid />
            <CTASection />
          </>
        } />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/get-started" element={<GetStartedPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
