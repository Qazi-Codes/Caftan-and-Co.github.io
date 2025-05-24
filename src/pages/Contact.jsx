import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const contactInfo = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: 'Phone',
      details: '+212 645517465',
      link: 'tel:+212645517465'
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp',
      details: '+212 645517465',
      link: 'https://wa.me/212645517465'
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: 'Email',
      details: 'nt.stefanova@gmail.com',
      link: 'mailto:nt.stefanova@gmail.com'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: 'Address',
      details: 'Avenue Hasan II, Centre commercial, Ait Baha N155, Rabat, Maroc',
      link: 'https://maps.google.com/?q=Avenue+Hasan+II+Centre+commercial+Ait+Baha+N155+Rabat+Maroc'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cover bg-center" 
               style={{ backgroundImage: "url('/src/assets/gallery01.png')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-serif mb-6">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Get in touch with us for any inquiries about our collection
          </p>
        </motion.div>
      </section>

      {/* Contact Information */}
      <section className="container py-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title === 'Address' ? '_blank' : undefined}
              rel={info.title === 'Address' ? 'noopener noreferrer' : undefined}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-serif mb-2">{info.title}</h3>
                <p className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                  {info.details}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container">
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.123456789012!2d-6.8537!3d33.9857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU5JzA4LjciTiA2wrA1MScxMy4zIlc!5e0!3m2!1sen!2sma!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="container py-16">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-serif mb-8">Business Hours</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif mb-2">Weekdays</h3>
              <p className="text-gray-600">9:00 AM - 6:00 PM</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif mb-2">Weekends</h3>
              <p className="text-gray-600">10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact; 