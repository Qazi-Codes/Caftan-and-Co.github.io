import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center bg-cover bg-center" 
               style={{ backgroundImage: "url('/src/assets/welcome.png')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Preserving Moroccan heritage through contemporary fashion
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section className="container py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="section-title">About Caftan & Co</h2>
          <p className="text-lg text-gray-600 mb-8">
            Founded with a passion for Moroccan culture and fashion, Caftan & Co brings the timeless elegance of traditional Moroccan garments to the modern world. Our journey began with a simple mission: to preserve the rich heritage of Moroccan craftsmanship while making it accessible to contemporary fashion enthusiasts.
          </p>
          <p className="text-lg text-gray-600">
            Each piece in our collection is carefully crafted by skilled artisans who have inherited centuries of traditional techniques. We combine these time-honored methods with modern design sensibilities to create garments that are both authentic and contemporary.
          </p>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="bg-secondary/10 py-16">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Heritage',
                description: 'We honor and preserve traditional Moroccan craftsmanship while adapting it for modern times.'
              },
              {
                title: 'Quality',
                description: 'Every piece is crafted with the finest materials and meticulous attention to detail.'
              },
              {
                title: 'Innovation',
                description: 'We continuously explore new ways to blend tradition with contemporary fashion.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card p-8 text-center"
              >
                <h3 className="text-2xl font-serif mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container py-16">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Designer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet Nadia Talimsani, the passionate lead designer behind Caftan & Co, dedicated to bringing Moroccan fashion to the world.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {[
            {
              name: 'Nadia Talimsani',
              role: 'Lead Designer',
              image: '/src/assets/chef.png'
            }
          ].map((member, index) => (
            <motion.div
              key={member.name}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About; 