import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">Caftan & Co</h3>
            <p className="text-gray-300">
              Discover the elegance of Moroccan fashion with our exquisite collection of traditional garments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="text-gray-300 hover:text-accent transition-colors">
                  Collection
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/collection#caftan" className="text-gray-300 hover:text-accent transition-colors">
                  Caftan
                </Link>
              </li>
              <li>
                <Link to="/collection#djellaba" className="text-gray-300 hover:text-accent transition-colors">
                  Djellaba
                </Link>
              </li>
              <li>
                <Link to="/collection#gandoura" className="text-gray-300 hover:text-accent transition-colors">
                  Gandoura
                </Link>
              </li>
              <li>
                <Link to="/collection#accessories" className="text-gray-300 hover:text-accent transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-bold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-accent"
                required
              />
              <button
                type="submit"
                className="w-full bg-accent text-primary font-medium py-2 rounded hover:bg-accent-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Caftan & Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 