import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaPhone } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaXTwitter } from 'react-icons/fa6';
import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { contactInfo } from '../constants/index'; // Ensure this file exists and exports an object

const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState('');
  const [messageType, setMessageType] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    setMessageStatus('');
    setMessageType('');

    const fromName = form.current.from_name.value;
    const fromEmail = form.current.from_email.value;
    const message = form.current.message.value;

    if (!fromName || !fromEmail || !message) {
      setMessageStatus('Please fill in all the fields.');
      setMessageType('error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromEmail)) {
      setMessageStatus('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setMessageStatus('Sending...');

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID; // Use process.env for React
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userId = process.env.REACT_APP_EMAILJS_USER_ID;

      emailjs.sendForm(serviceId, templateId, form.current, userId)
        .then(() => {
          setMessageStatus('Message sent successfully! I will get back to you soon.');
          setMessageType('success');
        })
        .catch((error) => {
          setMessageStatus(`Failed to send message: ${error.text || error.message}`);
          setMessageType('error');
        });
    } catch (error) {
      setMessageStatus(`Unexpected error: ${error.message}`);
      setMessageType('error');
    }
  };

  useEffect(() => {
    if (messageStatus) {
      const timer = setTimeout(() => {
        setMessageStatus('');
        setMessageType('');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [messageStatus]);

  return (
    <motion.div
      id="contact"
      className="py-16 lg:section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto">
        <motion.h1
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1.5 }}
          className="my-20 font-bold text-center text-4xl"
        >
          Get in Touch
        </motion.h1>

        <div className="flex flex-col lg:flex-row">
          <motion.div
            className="flex-1 flex justify-start items-center flex-col"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 100, damping: 25 }}
          >
            <div>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
              <div className="flex space-x-6 mt-8 items-center">
                <a
                  href={contactInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-gray-600 transition-all duration-300"
                >
                  <div className="border-4 border-white rounded-full">
                    <FaGithub size={30} className="text-gray-800 hover:text-white transition-colors duration-300" />
                  </div>
                </a>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-300 transition-all duration-300"
                >
                  <TiSocialLinkedinCircular size={50} />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-all duration-300"
                >
                  <FaEnvelope size={35} />
                </a>
                <a
                  href={`tel:${contactInfo.phoneNumber}`}
                  className="text-white hover:text-green-300 transition-all duration-300"
                >
                  <FaPhone size={35} />
                </a>
              </div>
            </div>
          </motion.div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-y-6 pb-24 p-6 items-start rounded-xl w-full mx-auto transition-all duration-300"
            style={{
              boxShadow: '0px 4px 15px 0px rgba(255, 255, 255, 0.5)',
              background: 'transparent',
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                '0px 4px 15px 0px rgba(11, 76, 125, 0.8), 0px 4px 15px 0px rgba(106, 27, 110, 0.8)')
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = '0px 4px 15px 0px rgba(255, 255, 255, 0.5)')
            }
          >
            <input
              name="from_name"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-500 focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
            />
            <input
              name="from_email"
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-gray-500 focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
            />
            <textarea
              name="message"
              className="bg-transparent border-b py-3 outline-none w-full min-h-[150px] placeholder:text-gray-500 focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
            ></textarea>

            {messageStatus && (
              <div
                className={`w-full py-3 px-6 mt-4 text-center ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}
              >
                {messageStatus}
              </div>
            )}

            <button
              type="submit"
              className="cursor-pointer px-6 py-2 text-white font-medium rounded-3xl border-2 border-white transition-all duration-300 bg-transparent hover:bg-gradient-to-r hover:from-[#0B4C7D] hover:to-[#6A1B6E] hover:text-white"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
