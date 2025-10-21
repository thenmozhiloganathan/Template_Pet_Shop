import { useState, useEffect } from 'react';
import { Heart, ShoppingBag, Scissors, PawPrint, MapPin, Phone, Mail, Clock, Star, MessageCircle, Send, Instagram, Facebook, Twitter } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing! 🐾');
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-blue-50 to-mint-50 overflow-hidden">
      {/* Floating paw prints animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              opacity: 0.1
            }}
          >
            <PawPrint size={40} className="text-pink-400" />
          </div>
        ))}
      </div>

      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="relative">
              <PawPrint className={`w-10 h-10 transition-all duration-300 ${scrollY > 50 ? 'text-pink-500' : 'text-white drop-shadow-lg'} group-hover:rotate-12`} />
              <Heart className="w-4 h-4 text-pink-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className={`text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent ${scrollY > 50 ? '' : 'drop-shadow-lg text-white'}`}>
              Paw Paradise
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`font-medium transition-colors ${scrollY > 50 ? 'text-gray-700 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}>About</a>
            <a href="#products" className={`font-medium transition-colors ${scrollY > 50 ? 'text-gray-700 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}>Products</a>
            <a href="#services" className={`font-medium transition-colors ${scrollY > 50 ? 'text-gray-700 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}>Services</a>
            <a href="#contact" className={`font-medium transition-colors ${scrollY > 50 ? 'text-gray-700 hover:text-pink-500' : 'text-white hover:text-pink-200'}`}>Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="space-y-1.5">
              <span className={`block w-6 h-0.5 ${scrollY > 50 ? 'bg-gray-700' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 ${scrollY > 50 ? 'bg-gray-700' : 'bg-white'}`}></span>
              <span className={`block w-6 h-0.5 ${scrollY > 50 ? 'bg-gray-700' : 'bg-white'}`}></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#about" className="text-gray-700 hover:text-pink-500 font-medium" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#products" className="text-gray-700 hover:text-pink-500 font-medium" onClick={() => setIsMenuOpen(false)}>Products</a>
              <a href="#services" className="text-gray-700 hover:text-pink-500 font-medium" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#contact" className="text-gray-700 hover:text-pink-500 font-medium" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 via-purple-400/20 to-blue-400/20"></div>

        <div className="container mx-auto text-center relative z-10">
          <div className="mb-8 animate-bounce-slow">
            <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-fade-in">
            Because Every Pet<br />Deserves Paradise! 🐾
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your one-stop destination for premium pet care, delightful products, and endless love for your furry friends
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <ShoppingBag className="group-hover:rotate-12 transition-transform" />
              Shop Now
            </button>
            <button className="group px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-pink-300 hover:border-pink-500 flex items-center gap-2">
              <Scissors className="group-hover:rotate-12 transition-transform" />
              Book Grooming
            </button>
          </div>

          {/* Cute animated pets */}
          <div className="mt-16 flex justify-center gap-8 flex-wrap">
            <div className="text-6xl animate-bounce" style={{ animationDelay: '0s' }}>🐕</div>
            <div className="text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🐈</div>
            <div className="text-6xl animate-bounce" style={{ animationDelay: '0.4s' }}>🐦</div>
            <div className="text-6xl animate-bounce" style={{ animationDelay: '0.6s' }}>🐰</div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 bg-white/50 backdrop-blur-sm relative">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="mb-8">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Our Story
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            We're <span className="font-semibold text-pink-600">pet lovers first, shop owners second</span>. Every wagging tail, every purr, every chirp fills our hearts with joy. That's why we've dedicated ourselves to creating a paradise where pets and their humans can find everything they need.
          </p>

          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            From premium nutrition to gentle grooming, we've carefully curated every product and service with <span className="font-semibold text-purple-600">love, care, and trusted quality</span>. Because your pets aren't just animals—they're family.
          </p>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-500 mb-2">10k+</div>
              <div className="text-gray-600">Happy Pets</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-500 mb-2">5000+</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <ShoppingBag className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600">Premium quality for your beloved companions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🍖', title: 'Premium Pet Food', desc: 'Nutritious & delicious', color: 'from-orange-400 to-red-400' },
              { icon: '🎾', title: 'Toys & Play', desc: 'Endless fun guaranteed', color: 'from-green-400 to-teal-400' },
              { icon: '🏠', title: 'Cozy Accessories', desc: 'Comfort for every pet', color: 'from-blue-400 to-indigo-400' },
              { icon: '🦴', title: 'Treats & Snacks', desc: 'Healthy & tasty rewards', color: 'from-pink-400 to-purple-400' }
            ].map((product, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${product.color} rounded-2xl flex items-center justify-center text-4xl mb-4 mx-auto group-hover:rotate-12 transition-transform`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{product.title}</h3>
                <p className="text-gray-600 text-center mb-4">{product.desc}</p>
                <button className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                  Shop Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gradient-to-br from-pink-100/50 to-purple-100/50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Scissors className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">Professional care with a gentle touch</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: <Scissors className="w-8 h-8" />, title: 'Pet Grooming', desc: 'Spa-quality treatments for your furry friends', color: 'pink' },
              { icon: <Heart className="w-8 h-8" />, title: 'Pet Sitting', desc: 'Loving care when you\'re away', color: 'purple' },
              { icon: <PawPrint className="w-8 h-8" />, title: 'Vet Consultations', desc: 'Expert health advice & checkups', color: 'blue' }
            ].map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br from-${service.color}-400 to-${service.color}-600 rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center mb-6">{service.desc}</p>
                <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Star className="w-12 h-12 text-pink-500 mx-auto mb-4 fill-current" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Customer Love 💕
            </h2>
            <p className="text-lg text-gray-600">What pet parents are saying</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { pet: '🐕', name: 'Sarah & Max', quote: 'Max loves his new collar! The quality is amazing and the staff is so friendly.' },
              { pet: '🐈', name: 'Mike & Luna', quote: 'Luna has never been happier! The grooming service is absolutely top-notch.' },
              { pet: '🐰', name: 'Emma & Fluffy', quote: 'Best pet shop ever! Fluffy gets excited every time we visit. Thank you!' }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="text-4xl">{testimonial.pet}</div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-100/50 to-pink-100/50 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-4">
              Visit Us
            </h2>
            <p className="text-lg text-gray-600">We'd love to meet you and your pets!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Address</div>
                    <div className="text-gray-600">123 Pet Paradise Lane, Petville, PV 12345</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Phone</div>
                    <div className="text-gray-600">(555) PAW-LOVE</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Email</div>
                    <div className="text-gray-600">hello@pawparadise.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-800">Working Hours</div>
                    <div className="text-gray-600">Mon-Fri: 9am - 7pm</div>
                    <div className="text-gray-600">Sat-Sun: 10am - 6pm</div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 outline-none transition-colors resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-8 rounded-3xl overflow-hidden shadow-lg h-64 bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634994824!2d-73.98697668459395!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-pink-600 to-purple-600 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Newsletter */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Stay Pawsitive & Connected! 🐾</h3>
              <p className="mb-4 text-pink-100">Subscribe to get exclusive deals and pet care tips</p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-full text-gray-800 outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-pink-50 transition-all flex items-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Subscribe
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-pink-100">
            <p className="flex items-center justify-center gap-2 mb-2">
              Made with <Heart className="w-5 h-5 fill-current animate-pulse" /> for pets and their humans
            </p>
            <p>&copy; 2025 Paw Paradise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
