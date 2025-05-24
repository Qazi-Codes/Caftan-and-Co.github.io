import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import Modal from '../components/Modal';
import MagnifiedImage from '../components/MagnifiedImage';
import { images } from '../constants';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const categories = [
    { id: 'all', name: 'All Collections' },
    { id: 'caftan', name: 'Caftan' },
    { id: 'djellaba', name: 'Djellaba' },
    { id: 'gandoura', name: 'Gandoura' },
    { id: 'accessories', name: 'Accessories' }
  ];

  const priceRanges = [
    { label: 'All Prices', min: 0, max: Infinity },
    { label: 'Under 3,500 MAD', min: 3000, max: 3500 },
    { label: '3,500 - 4,500 MAD', min: 3500, max: 4500 },
    { label: '4,500 - 5,500 MAD', min: 4500, max: 5500 },
    { label: 'Over 5,500 MAD', min: 5500, max: 6000 }
  ];

  const products = [
    // Caftans
    {
      id: 1,
      name: 'Royal Emerald Caftan',
      category: 'caftan',
      price: '5,500 MAD',
      image: images.c1,
      description: 'Elegant royal caftan with intricate embroidery',
      details: 'Handcrafted in Fes, this emerald green caftan features traditional Moroccan embroidery with gold thread. Perfect for special occasions and celebrations.'
    },
    {
      id: 2,
      name: 'Sapphire Silk Caftan',
      category: 'caftan',
      price: '4,500 MAD',
      image: images.c2,
      description: 'Luxurious silk caftan with modern design',
      details: 'Crafted from premium silk, this sapphire blue caftan combines traditional patterns with contemporary styling. Ideal for formal events.'
    },
    {
      id: 3,
      name: 'Golden Thread Caftan',
      category: 'caftan',
      price: '5,800 MAD',
      image: images.c3,
      description: 'Opulent caftan with golden threadwork',
      details: 'A masterpiece of Moroccan craftsmanship, featuring intricate golden thread embroidery on rich fabric. Perfect for royal celebrations.'
    },
    {
      id: 4,
      name: 'Floral Dream Caftan',
      category: 'caftan',
      price: '3,500 MAD',
      image: images.c4,
      description: 'Delicate floral pattern caftan',
      details: 'Light and airy design with beautiful floral motifs, perfect for spring celebrations and garden parties.'
    },
    {
      id: 5,
      name: 'Crystal Evening Caftan',
      category: 'caftan',
      price: '4,800 MAD',
      image: images.c5,
      description: 'Sparkling evening caftan with crystal details',
      details: 'Elegant evening wear featuring crystal embellishments and flowing silhouette. Perfect for formal gatherings.'
    },
    {
      id: 6,
      name: 'Desert Rose Caftan',
      category: 'caftan',
      price: '3,800 MAD',
      image: images.c6,
      description: 'Warm-toned caftan inspired by desert roses',
      details: 'Inspired by the beauty of desert roses, this caftan features warm tones and intricate patterns.'
    },
    {
      id: 7,
      name: 'Ocean Breeze Caftan',
      category: 'caftan',
      price: '4,200 MAD',
      image: images.c7,
      description: 'Cool blue caftan with wave-like patterns',
      details: 'Refreshing design inspired by ocean waves, perfect for summer celebrations.'
    },
    {
      id: 8,
      name: 'Royal Purple Caftan',
      category: 'caftan',
      price: '5,200 MAD',
      image: images.c8,
      description: 'Regal purple caftan with gold accents',
      details: 'A majestic design featuring rich purple fabric and gold embellishments.'
    },
    {
      id: 9,
      name: 'Spring Garden Caftan',
      category: 'caftan',
      price: '3,200 MAD',
      image: images.c9,
      description: 'Vibrant spring-inspired caftan',
      details: 'Celebrate spring with this colorful design featuring garden-inspired patterns.'
    },
    {
      id: 10,
      name: 'Moonlight Caftan',
      category: 'caftan',
      price: '4,600 MAD',
      image: images.c10,
      description: 'Elegant silver-toned evening caftan',
      details: 'Inspired by moonlight, this caftan features shimmering silver details.'
    },
    {
      id: 11,
      name: 'Sunset Glow Caftan',
      category: 'caftan',
      price: '4,300 MAD',
      image: images.c11,
      description: 'Warm sunset-colored caftan',
      details: 'Captures the beauty of Moroccan sunsets with warm, glowing colors.'
    },
    {
      id: 12,
      name: 'Royal Gold Caftan',
      category: 'caftan',
      price: '5,600 MAD',
      image: images.c12,
      description: 'Luxurious gold-embellished caftan',
      details: 'A royal design featuring gold embroidery and luxurious fabric.'
    },
    {
      id: 13,
      name: 'Desert Night Caftan',
      category: 'caftan',
      price: '3,900 MAD',
      image: images.c13,
      description: 'Deep blue caftan inspired by desert nights',
      details: 'Inspired by the starry desert nights, featuring deep blue tones.'
    },
    {
      id: 14,
      name: 'Morning Dew Caftan',
      category: 'caftan',
      price: '3,400 MAD',
      image: images.c14,
      description: 'Fresh and light morning-inspired caftan',
      details: 'Light and refreshing design perfect for morning celebrations.'
    },
    {
      id: 15,
      name: 'Royal Ruby Caftan',
      category: 'caftan',
      price: '5,300 MAD',
      image: images.c15,
      description: 'Rich red caftan with royal details',
      details: 'A stunning ruby-red design with royal embellishments.'
    },
    {
      id: 16,
      name: 'Desert Wind Caftan',
      category: 'caftan',
      price: '3,700 MAD',
      image: images.c16,
      description: 'Flowing design inspired by desert winds',
      details: 'Features flowing patterns inspired by desert winds.'
    },
    {
      id: 17,
      name: 'Royal Sapphire Caftan',
      category: 'caftan',
      price: '5,400 MAD',
      image: images.c17,
      description: 'Deep blue royal caftan',
      details: 'A majestic sapphire design with royal details.'
    },
    {
      id: 18,
      name: 'Desert Flower Caftan',
      category: 'caftan',
      price: '3,600 MAD',
      image: images.c18,
      description: 'Floral-inspired desert caftan',
      details: 'Features desert flower patterns and warm tones.'
    },
    {
      id: 19,
      name: 'Royal Pearl Caftan',
      category: 'caftan',
      price: '4,900 MAD',
      image: images.c19,
      description: 'Pearl-embellished royal caftan',
      details: 'Elegant design with pearl embellishments.'
    },
    {
      id: 20,
      name: 'Desert Sun Caftan',
      category: 'caftan',
      price: '4,100 MAD',
      image: images.c20,
      description: 'Warm desert-inspired caftan',
      details: 'Features warm desert-inspired patterns.'
    },
    {
      id: 21,
      name: 'Royal Diamond Caftan',
      category: 'caftan',
      price: '5,700 MAD',
      image: images.c21,
      description: 'Sparkling diamond-inspired caftan',
      details: 'Features sparkling details inspired by diamonds.'
    },
    {
      id: 22,
      name: 'Desert Moon Caftan',
      category: 'caftan',
      price: '4,400 MAD',
      image: images.c22,
      description: 'Moonlight-inspired desert caftan',
      details: 'Features patterns inspired by moonlight on desert sands.'
    },
    {
      id: 23,
      name: 'Royal Topaz Caftan',
      category: 'caftan',
      price: '5,100 MAD',
      image: images.c23,
      description: 'Golden topaz-inspired caftan',
      details: 'Features golden topaz-inspired patterns.'
    },
    {
      id: 24,
      name: 'Desert Star Caftan',
      category: 'caftan',
      price: '3,800 MAD',
      image: images.c24,
      description: 'Star-patterned desert caftan',
      details: 'Features star patterns inspired by desert nights.'
    },
    {
      id: 25,
      name: 'Royal Amethyst Caftan',
      category: 'caftan',
      price: '5,200 MAD',
      image: images.c25,
      description: 'Purple amethyst-inspired caftan',
      details: 'Features rich purple patterns inspired by amethyst.'
    },
    {
      id: 26,
      name: 'Desert Dawn Caftan',
      category: 'caftan',
      price: '3,500 MAD',
      image: images.c26,
      description: 'Dawn-inspired desert caftan',
      details: 'Features patterns inspired by desert dawn.'
    },
    {
      id: 27,
      name: 'Royal Garnet Caftan',
      category: 'caftan',
      price: '4,700 MAD',
      image: images.c27,
      description: 'Deep red garnet-inspired caftan',
      details: 'Features rich red patterns inspired by garnet.'
    },
    {
      id: 28,
      name: 'Desert Mirage Caftan',
      category: 'caftan',
      price: '4,200 MAD',
      image: images.c28,
      description: 'Mirage-inspired desert caftan',
      details: 'Features patterns inspired by desert mirages.'
    },
    {
      id: 29,
      name: 'Royal Opal Caftan',
      category: 'caftan',
      price: '5,900 MAD',
      image: images.c29,
      description: 'Opalescent royal caftan',
      details: 'Features shimmering patterns inspired by opal.'
    },

    // Gandoura Collection
    {
      id: 30,
      name: 'Classic White Gandoura',
      category: 'gandoura',
      price: '3,200 MAD',
      image: images.g1,
      description: 'Traditional white gandoura with elegant embroidery',
      details: 'A timeless white gandoura featuring delicate embroidery patterns. Perfect for daily wear and special occasions.'
    },
    {
      id: 31,
      name: 'Royal Blue Gandoura',
      category: 'gandoura',
      price: '3,500 MAD',
      image: images.g2,
      description: 'Rich blue gandoura with gold accents',
      details: 'A stunning blue gandoura adorned with gold thread embroidery. Ideal for formal gatherings.'
    },
    {
      id: 32,
      name: 'Emerald Green Gandoura',
      category: 'gandoura',
      price: '3,800 MAD',
      image: images.g3,
      description: 'Vibrant green gandoura with intricate patterns',
      details: 'A beautiful emerald green gandoura featuring traditional Moroccan patterns.'
    },
    {
      id: 33,
      name: 'Desert Rose Gandoura',
      category: 'gandoura',
      price: '3,400 MAD',
      image: images.g4,
      description: 'Warm-toned gandoura with floral motifs',
      details: 'A warm-toned gandoura inspired by desert roses, perfect for everyday elegance.'
    },
    {
      id: 34,
      name: 'Golden Thread Gandoura',
      category: 'gandoura',
      price: '4,200 MAD',
      image: images.g5,
      description: 'Luxurious gandoura with golden embroidery',
      details: 'An exquisite gandoura featuring intricate golden thread work and premium fabric.'
    },
    {
      id: 35,
      name: 'Royal Purple Gandoura',
      category: 'gandoura',
      price: '3,900 MAD',
      image: images.g6,
      description: 'Regal purple gandoura with silver details',
      details: 'A majestic purple gandoura with silver embellishments and traditional patterns.'
    },
    {
      id: 36,
      name: 'Sapphire Blue Gandoura',
      category: 'gandoura',
      price: '4,000 MAD',
      image: images.g7,
      description: 'Deep blue gandoura with crystal accents',
      details: 'A sophisticated sapphire blue gandoura featuring crystal embellishments.'
    },

    // Djellaba Collection
    {
      id: 37,
      name: 'Classic Black Djellaba',
      category: 'djellaba',
      price: '3,300 MAD',
      image: images.d1,
      description: 'Traditional black djellaba with elegant details',
      details: 'A timeless black djellaba perfect for daily wear and special occasions.'
    },
    {
      id: 38,
      name: 'Royal Blue Djellaba',
      category: 'djellaba',
      price: '3,600 MAD',
      image: images.d2,
      description: 'Rich blue djellaba with gold embroidery',
      details: 'A stunning blue djellaba adorned with gold thread work.'
    },
    {
      id: 39,
      name: 'Emerald Green Djellaba',
      category: 'djellaba',
      price: '3,800 MAD',
      image: images.d3,
      description: 'Vibrant green djellaba with traditional patterns',
      details: 'A beautiful emerald green djellaba featuring classic Moroccan designs.'
    },
    {
      id: 40,
      name: 'Desert Sand Djellaba',
      category: 'djellaba',
      price: '3,400 MAD',
      image: images.d4,
      description: 'Warm-toned djellaba with intricate embroidery',
      details: 'A warm-toned djellaba inspired by desert sands, perfect for everyday wear.'
    },
    {
      id: 41,
      name: 'Golden Thread Djellaba',
      category: 'djellaba',
      price: '4,200 MAD',
      image: images.d5,
      description: 'Luxurious djellaba with golden details',
      details: 'An exquisite djellaba featuring intricate golden thread work.'
    },
    {
      id: 42,
      name: 'Royal Purple Djellaba',
      category: 'djellaba',
      price: '3,900 MAD',
      image: images.d6,
      description: 'Regal purple djellaba with silver accents',
      details: 'A majestic purple djellaba with silver embellishments.'
    },
    {
      id: 43,
      name: 'Sapphire Blue Djellaba',
      category: 'djellaba',
      price: '4,000 MAD',
      image: images.d7,
      description: 'Deep blue djellaba with crystal details',
      details: 'A sophisticated sapphire blue djellaba featuring crystal embellishments.'
    },
    {
      id: 44,
      name: 'Desert Rose Djellaba',
      category: 'djellaba',
      price: '3,700 MAD',
      image: images.d8,
      description: 'Warm-toned djellaba with floral patterns',
      details: 'A beautiful djellaba inspired by desert roses.'
    },
    {
      id: 45,
      name: 'Royal Gold Djellaba',
      category: 'djellaba',
      price: '4,500 MAD',
      image: images.d9,
      description: 'Luxurious gold-embellished djellaba',
      details: 'A royal design featuring gold embroidery and premium fabric.'
    },
    {
      id: 46,
      name: 'Emerald Evening Djellaba',
      category: 'djellaba',
      price: '4,100 MAD',
      image: images.d10,
      description: 'Elegant emerald djellaba for evening wear',
      details: 'A sophisticated emerald djellaba perfect for evening events.'
    },
    {
      id: 47,
      name: 'Desert Night Djellaba',
      category: 'djellaba',
      price: '3,800 MAD',
      image: images.d11,
      description: 'Deep blue djellaba inspired by desert nights',
      details: 'A stunning design inspired by starry desert nights.'
    },
    {
      id: 48,
      name: 'Royal Sapphire Djellaba',
      category: 'djellaba',
      price: '4,300 MAD',
      image: images.d12,
      description: 'Majestic sapphire djellaba with royal details',
      details: 'A royal design featuring sapphire blue fabric and gold embellishments.'
    },
    {
      id: 49,
      name: 'Desert Dawn Djellaba',
      category: 'djellaba',
      price: '3,600 MAD',
      image: images.d13,
      description: 'Warm-toned djellaba inspired by desert dawn',
      details: 'A beautiful design featuring warm desert-inspired patterns.'
    },

    // Accessories Collection
    {
      id: 50,
      name: 'Traditional Moroccan Belt',
      category: 'accessories',
      price: '1,200 MAD',
      image: images.ac1,
      description: 'Handcrafted leather belt with traditional patterns',
      details: 'A beautiful leather belt featuring traditional Moroccan embroidery and patterns.'
    },
    {
      id: 51,
      name: 'Gold Embroidered Scarf',
      category: 'accessories',
      price: '1,500 MAD',
      image: images.ac2,
      description: 'Luxurious scarf with gold thread work',
      details: 'An elegant scarf adorned with gold thread embroidery.'
    },
    {
      id: 52,
      name: 'Silver Jewelry Set',
      category: 'accessories',
      price: '2,800 MAD',
      image: images.ac3,
      description: 'Traditional silver jewelry set',
      details: 'A complete set of traditional Moroccan silver jewelry.'
    },
    {
      id: 53,
      name: 'Embroidered Handbag',
      category: 'accessories',
      price: '1,800 MAD',
      image: images.ac4,
      description: 'Handcrafted bag with traditional embroidery',
      details: 'A beautiful handbag featuring traditional Moroccan embroidery.'
    },
    {
      id: 54,
      name: 'Gold Thread Headpiece',
      category: 'accessories',
      price: '2,200 MAD',
      image: images.ac5,
      description: 'Elegant headpiece with gold details',
      details: 'A stunning headpiece adorned with gold thread work.'
    },
    {
      id: 55,
      name: 'Traditional Footwear',
      category: 'accessories',
      price: '1,600 MAD',
      image: images.ac6,
      description: 'Handcrafted traditional Moroccan shoes',
      details: 'Beautifully crafted traditional Moroccan footwear.'
    },
    {
      id: 56,
      name: 'Silver Belt Buckle',
      category: 'accessories',
      price: '1,400 MAD',
      image: images.ac7,
      description: 'Intricately designed silver buckle',
      details: 'A handcrafted silver belt buckle with traditional patterns.'
    },
    {
      id: 57,
      name: 'Gold Embroidered Clutch',
      category: 'accessories',
      price: '2,000 MAD',
      image: images.ac8,
      description: 'Elegant clutch with gold embroidery',
      details: 'A sophisticated clutch featuring gold thread embroidery.'
    },
    {
      id: 58,
      name: 'Traditional Necklace',
      category: 'accessories',
      price: '1,900 MAD',
      image: images.ac9,
      description: 'Handcrafted traditional necklace',
      details: 'A beautiful traditional Moroccan necklace.'
    },
    {
      id: 59,
      name: 'Embroidered Shawl',
      category: 'accessories',
      price: '1,700 MAD',
      image: images.ac10,
      description: 'Traditional shawl with intricate embroidery',
      details: 'A luxurious shawl featuring traditional Moroccan embroidery.'
    }
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseInt(a.price.replace(/[^0-9]/g, ''));
    const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
    return sortOrder === 'asc' ? priceA - priceB : priceB - priceA;
  });

  const [selectedPriceRange, setSelectedPriceRange] = useState(priceRanges[0]);

  const filteredAndSortedProducts = sortedProducts.filter(product => {
    const price = parseInt(product.price.replace(/[^0-9]/g, ''));
    return price >= selectedPriceRange.min && price <= selectedPriceRange.max;
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center"
               style={{ backgroundImage: `url(${images.design})` }}>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Collection</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover our exquisite range of traditional Moroccan garments
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="container py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-secondary/20 text-primary hover:bg-secondary/30'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Price Range and Sort Options */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">Price Range:</span>
            <select
              value={selectedPriceRange.label}
              onChange={(e) => {
                const range = priceRanges.find(r => r.label === e.target.value);
                setSelectedPriceRange(range);
              }}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {priceRanges.map((range) => (
                <option key={range.label} value={range.label}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/20 text-primary hover:bg-secondary/30 transition-colors"
          >
            {sortOrder === 'asc' ? (
              <>
                <FaSortAmountUp />
                <span>Price: Low to High</span>
              </>
            ) : (
              <>
                <FaSortAmountDown />
                <span>Price: High to Low</span>
              </>
            )}
          </button>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-80 overflow-hidden">
                <MagnifiedImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="btn-primary"
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-primary font-medium">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Details Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <MagnifiedImage
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full h-full rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif mb-4">{selectedProduct.name}</h2>
              <p className="text-2xl text-primary font-medium mb-4">{selectedProduct.price}</p>
              <p className="text-gray-600 mb-6">{selectedProduct.details}</p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Origin</h3>
                  <p className="text-gray-600">Handcrafted in Morocco by skilled artisans</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Materials</h3>
                  <p className="text-gray-600">Premium fabrics with traditional embroidery</p>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Care Instructions</h3>
                  <p className="text-gray-600">Dry clean only. Store in a cool, dry place.</p>
                </div>
              </div>
              <button className="btn-primary mt-6 w-full">
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Features Section */}
      <section className="bg-secondary/10 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Handcrafted',
                description: 'Each piece is meticulously crafted by skilled artisans'
              },
              {
                title: 'Premium Materials',
                description: 'We use only the finest fabrics and materials'
              },
              {
                title: 'Custom Sizing',
                description: 'Available in custom sizes for the perfect fit'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <h3 className="text-2xl font-serif mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Collection; 