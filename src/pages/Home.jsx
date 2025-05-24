import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Home = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      id: 1,
      name: 'Royal Caftan',
      category: 'caftan',
      price: '1,200 MAD',
      image: '/src/assets/caftan/c (1).jpeg',
      description: 'Elegant royal caftan with intricate embroidery'
    },
    {
      id: 2,
      name: 'Modern Djellaba',
      category: 'djellaba',
      price: '800 MAD',
      image: '/src/assets/djellaba/d (1).jpeg',
      description: 'Contemporary djellaba with traditional patterns'
    },
    {
      id: 3,
      name: 'Summer Gandoura',
      category: 'gandoura',
      price: '600 MAD',
      image: '/src/assets/gandoura/g (1).jpeg',
      description: 'Light and comfortable summer gandoura'
    },
    {
      id: 4,
      name: 'Silver Belt',
      category: 'accessories',
      price: '400 MAD',
      image: '/src/assets/accesories/ac (1).jpeg',
      description: 'Handcrafted silver belt with traditional motifs'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-cover bg-center" 
               style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/src/assets/sign.mp4" type="video/mp4" />
        </video>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">Caftan & Co</h1>
          <p className="text-xl md:text-2xl mb-8">Discover the Elegance of Moroccan Fashion</p>
          <Link to="/collection" className="btn-primary">
            Explore Collection
          </Link>
        </motion.div>
      </section>

      {/* Featured Collections */}
      <section className="container py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Collections</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our exquisite collection of traditional Moroccan garments, crafted with passion and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="btn-primary">
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
        </div>
      </section>

      {/* Latest Arrivals */}
      <section className="bg-secondary/10 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Latest Arrivals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be the first to discover our newest additions to the collection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { id: 1, image: '/src/assets/caftan/c (2).jpeg', name: 'New Design 1' },
              { id: 2, image: '/src/assets/djellaba/d (2).jpeg', name: 'New Design 2' },
              { id: 3, image: '/src/assets/gandoura/g (2).jpeg', name: 'New Design 3' },
              { id: 4, image: '/src/assets/accesories/ac (2).jpeg', name: 'New Design 4' }
            ].map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: item.id * 0.1 }}
                className="card"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg mb-2">{item.name}</h3>
                  <p className="text-primary font-medium">View Details</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 