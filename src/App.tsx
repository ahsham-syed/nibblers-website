import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Phone, 
  ShoppingBag, 
  ArrowRight, 
  Menu as MenuIcon, 
  X, 
  Star, 
  MapPin, 
  Clock, 
  UtensilsCrossed, 
  MessageCircle,
  Heart,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
}

// --- Data ---
const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Smokey Chicken Wrap',
    description: 'Char-grilled chicken with signature smoky sauce and fresh greens.',
    price: 'Rs. 450',
    image: 'https://images.unsplash.com/photo-1626700051175-656fc7cacedc?auto=format&fit=crop&q=80&w=800',
    tag: 'Best Seller'
  },
  {
    id: '2',
    name: 'Zingero Wrap',
    description: 'Crispy fried chicken with spicy mayo and crunchy lettuce.',
    price: 'Rs. 420',
    image: 'https://images.unsplash.com/photo-1599307767316-776533da941c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Grilled Burger',
    description: 'Juicy smashed beef patty with melted cheese and caramelized onions.',
    price: 'Rs. 550',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Cheesy Chilli Bites',
    description: 'Crispy breaded bites stuffed with melting cheese and jalapenos.',
    price: 'Rs. 350',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800',
    tag: 'Must Try'
  },
  {
    id: '5',
    name: 'Tacos',
    description: 'Soft shell tacos with spicy chicken filling and fresh salsa.',
    price: 'Rs. 480',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with liquid cheese, nuggets, and sauces.',
    price: 'Rs. 380',
    image: 'https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&q=80&w=800'
  }
];

const REVIEWS = [
  {
    name: 'Ahmed Khan',
    rating: 5,
    comment: 'The Smokey Chicken Wrap is absolutely legendary! Best fast food in DHA.',
    platform: 'Google'
  },
  {
    name: 'Sara Siddiqui',
    rating: 5,
    comment: 'Love the vibe and the founder story is so inspiring. The burgers are juicy!',
    platform: 'Instagram'
  },
  {
    name: 'Zainab Ali',
    rating: 4.5,
    comment: 'Consistent quality and great service. Cheesy Chilli Bites are a winner.',
    platform: 'Foodpanda'
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-xl flex items-center justify-center text-white font-bold text-xl">N</div>
            <span className="text-2xl font-bold tracking-tight text-brand-blue">Nibblers</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm font-medium hover:text-brand-orange transition-colors">Menu</a>
            <a href="#story" className="text-sm font-medium hover:text-brand-orange transition-colors">Our Story</a>
            <a href="#gallery" className="text-sm font-medium hover:text-brand-orange transition-colors">Gallery</a>
            <a href="#reserve" className="px-5 py-2.5 bg-brand-orange text-white rounded-full text-sm font-semibold hover:bg-orange-600 transition-all transform hover:scale-105">Book Table</a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
            {isOpen ? <X className="text-brand-blue" /> : <MenuIcon className="text-brand-blue" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 p-4 space-y-4"
          >
            <a href="#menu" onClick={() => setIsOpen(false)} className="block text-lg font-medium px-4 py-2">Menu</a>
            <a href="#story" onClick={() => setIsOpen(false)} className="block text-lg font-medium px-4 py-2">Our Story</a>
            <a href="#gallery" onClick={() => setIsOpen(false)} className="block text-lg font-medium px-4 py-2">Gallery</a>
            <a href="#reserve" onClick={() => setIsOpen(false)} className="block w-full text-center bg-brand-orange text-white py-3 rounded-xl font-bold">Book Table</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-brand-pink/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 text-brand-orange rounded-full text-xs font-bold uppercase tracking-wider mb-6">
              <Star className="w-3 h-3 fill-current" />
              Top Rated Fast Food in DHA
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-brand-blue leading-[0.9] mb-6">
              Nibblers <br />
              <span className="text-brand-orange italic font-serif">Big</span> Flavours. <br />
              Real Hustle.
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-md leading-relaxed">
              Authentic street-style wraps and burgers crafted with passion by a student chef. Every bite tells a story of hard work and culinary excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="px-8 py-4 bg-brand-blue text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-blue-700 transition-all group">
                Order Now <ShoppingBag className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform" />
              </a>
              <a href="#menu" className="px-8 py-4 bg-white border-2 border-slate-200 text-brand-blue rounded-2xl font-bold hover:border-brand-blue transition-all">
                View Menu
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-blue/20 transform rotate-2">
              <img 
                src="https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&q=80&w=1200" 
                alt="Signature Burger" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Floating Tag */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ repeat: Infinity, duration: 3 }}
               className="absolute -top-6 -right-6 z-20 bg-brand-pink text-white p-6 rounded-full font-black text-center shadow-lg transform -rotate-12"
            >
              ONLY <br /> Rs.450
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-blue rounded-[3rem] overflow-hidden p-8 md:p-16 text-white relative">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <UtensilsCrossed size={300} />
          </div>
          
          <div className="max-w-3xl relative z-10">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-pink mb-4">Founder Story</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-8">From University Labs to the Kitchen Grill.</h3>
            <p className="text-xl text-blue-100 mb-6 leading-relaxed">
              Nibblers started in a small kitchen by a young student chef with a simple dream: to pay for his studies through food. What began as a experiment with sauces and spices has grown into DHA's favorite fast-food brand.
            </p>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed italic">
              "We don't just sell food; we sell the result of 16-hour shifts, missed holidays, and pure consistency. It's the real hustle behind the big flavors."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-pink">
                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=200" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-lg">Chef & Founder</p>
                <p className="text-blue-200 text-sm">Nibblers DHA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Menu = () => {
  return (
    <section id="menu" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-brand-orange mb-2">Our Menu</h2>
            <h3 className="text-4xl md:text-6xl font-black text-brand-blue">Signature Craveables</h3>
          </div>
          <div className="hidden md:block">
            <button className="flex items-center gap-2 font-bold text-brand-blue hover:text-brand-orange transition-colors">
              Full Digital Menu <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-slate-100"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                {item.tag && (
                  <div className="absolute top-4 left-4 bg-brand-pink text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {item.tag}
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-brand-pink transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-brand-blue">{item.name}</h4>
                  <span className="text-brand-orange font-black">{item.price}</span>
                </div>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex gap-2">
                  <button className="flex-1 bg-brand-blue/5 text-brand-blue py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all">
                    Detail <ChevronRight className="w-4 h-4" />
                  </button>
                  <button className="bg-brand-orange p-3 rounded-xl text-white hover:bg-orange-600 transition-all">
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BestSellers = () => {
  return (
    <section className="py-24 bg-brand-pink overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-6xl font-black text-white mb-8">
               People's <br /> Ultimate <br /> Favorites.
             </h2>
             <div className="space-y-6">
                {[
                  { name: 'Smokey Chicken Wrap', count: '10k+ Sold' },
                  { name: 'Cheesy Chilli Bites', count: '8k+ Sold' }
                ].map((fav, i) => (
                  <div key={i} className="flex items-center justify-between p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">{fav.name}</span>
                    <span className="px-4 py-1 bg-white text-brand-pink rounded-full text-sm font-bold">{fav.count}</span>
                  </div>
                ))}
             </div>
           </div>
           
           <div className="relative">
             <div className="w-[120%] aspect-square bg-white rounded-full absolute -right-1/4 top-1/2 -translate-y-1/2 -z-10 blur-3xl opacity-20" />
             <div className="perspective-1000">
               <motion.div 
                 animate={{ rotateY: [0, 360] }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="relative z-10"
               >
                 <img src="https://images.unsplash.com/photo-1610393790034-738961788961?auto=format&fit=crop&q=80&w=800" alt="Food" className="rounded-3xl shadow-2xl" />
               </motion.div>
             </div>
           </div>
         </div>
      </div>
    </section>
  );
};

const OrderSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-6 gap-4">
          {[...Array(24)].map((_, i) => <ShoppingBag key={i} size={48} className="text-brand-blue" />)}
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-brand-blue mb-8">Hungry yet? <br /> Order right now.</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <a 
            href="https://wa.me/923232733894" 
            className="group p-8 bg-green-500 rounded-3xl text-white flex flex-col items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-green-200"
          >
            <MessageCircle size={40} />
            <span className="font-bold text-lg">WhatsApp</span>
          </a>
          <a 
            href="tel:03232733894" 
            className="group p-8 bg-brand-blue rounded-3xl text-white flex flex-col items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-blue-200"
          >
            <Phone size={40} />
            <span className="font-bold text-lg">Call Now</span>
          </a>
          <div 
            className="group p-8 bg-pink-500 rounded-3xl text-white flex flex-col items-center gap-4 hover:scale-105 transition-all shadow-xl shadow-pink-200 cursor-pointer"
          >
            <ShoppingBag size={40} />
            <span className="font-bold text-lg">Foodpanda</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&q=80&w=800',
    'https://images.unsplash.com/photo-1534422298391-e4f8c170db76?auto=format&fit=crop&q=80&w=800'
  ];

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center font-black text-4xl text-brand-blue mb-16 underline decoration-brand-orange underline-offset-8">Insta-Worthy Goodness</h2>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-zoom-in"
            >
              <img src={src} alt="Food Gallery" className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1 text-yellow-500 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="fill-current" />)}
          </div>
          <h2 className="text-5xl font-black text-brand-blue">4.9 Rated by Fans</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-3xl border border-slate-100 italic relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-white font-bold">"</div>
              <p className="text-slate-600 mb-6 font-medium leading-relaxed">"{review.comment}"</p>
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-blue">{review.name}</span>
                <span className="text-xs bg-white px-2 py-1 rounded-md text-slate-400 font-bold uppercase">{review.platform}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactLocation = () => {
  return (
    <section className="py-24 bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-12">Visit the Hustle Pod</h2>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">DHA Karachi</h4>
                  <p className="text-blue-200">Phase 6, Near Main Ittehad commercial, Karachi, Pakistan.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Open Hours</h4>
                  <p className="text-blue-200">Mon - Sun: 7:00 PM - 2:00 AM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Instagram className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Instagram</h4>
                  <p className="text-blue-200">@nibblers.pk</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="https://instagram.com/nibblers.pk" className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <Instagram size={24} />
              </a>
              <a href="tel:03232733894" className="w-12 h-12 bg-white text-brand-blue rounded-full flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
                <Phone size={24} />
              </a>
            </div>
          </div>

          <div id="reserve" className="bg-white rounded-[3rem] p-8 md:p-12 text-slate-900 overflow-hidden shadow-2xl">
             <h3 className="text-3xl font-black mb-6 text-brand-blue">Reserve a Table</h3>
             <p className="text-slate-500 mb-8">Planning to visit with friends? Let us know so we can prep your spot!</p>
             <form className="space-y-4">
               <input type="text" placeholder="Full Name" className="w-full px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 ring-brand-orange/50 transition-all" />
               <input type="tel" placeholder="Phone Number" className="w-full px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 ring-brand-orange/50 transition-all" />
               <div className="grid grid-cols-2 gap-4">
                  <input type="date" className="px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 ring-brand-orange/50 transition-all" />
                  <input type="time" className="px-6 py-4 bg-slate-100 rounded-2xl outline-none focus:ring-2 ring-brand-orange/50 transition-all" />
               </div>
               <button className="w-full bg-brand-orange py-5 rounded-2xl text-white font-bold text-lg hover:bg-orange-600 transition-all shadow-lg shadow-orange-200">
                 Request Spot
               </button>
             </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 bg-brand-orange rounded-lg flex items-center justify-center text-white font-bold">N</div>
          <span className="text-xl font-bold tracking-tight text-brand-blue">Nibblers</span>
        </div>
        <p className="text-slate-500 mb-2">© 2026 Nibblers. DHA Karachi, Pakistan.</p>
        <p className="text-slate-400 text-sm font-medium">Built with passion & real hustle. 03232733894</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <BestSellers />
      <OrderSection />
      <Gallery />
      <Reviews />
      <ContactLocation />
      <Footer />
    </div>
  );
}
