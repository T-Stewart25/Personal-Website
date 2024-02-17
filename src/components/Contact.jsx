import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com'; // Changed import to use emailjs-com
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  
    // Define the form data object with the recipient email address
    const formData = {
      ...form,
      to_email: 'Thomaslstewart1@gmail.com' // Add the recipient email address
    };
  
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log(result.text);
        setLoading(false);
        // Optionally reset the form after successful submission
        setForm({
          name: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => {
        console.log(error.text);
        setLoading(false);
      });
  }
  

  return (
    <div className='xl:mt-12 x:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)} // Fixed typo in variants
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input type='text' name="name" value={form.name} onChange={handleChange} placeholder="What's your name" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input type='email' name="email" value={form.email} onChange={handleChange} placeholder="What's your email" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' /> {/* Changed input type to email */}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message here" rows="5" className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium' /> {/* Changed to textarea */}
          </label>
          <button type="submit" className="bg-primary text-white py-4 px-8 rounded-lg font-medium" disabled={loading}>{loading ? 'Sending...' : 'Send Message'}</button>
        </form>

      </motion.div>
    </div>
  );
}

export default SectionWrapper(Contact, "contact");
