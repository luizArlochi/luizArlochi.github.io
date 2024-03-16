import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { validateForm } from '../utils/validateForm';
import { displayErrorAlert } from '../utils/errorHandle';

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
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const { name, email, message } = form;
    const errors = validateForm(name, email, message);

    // Display error messages if any field is invalid
    if (Object.keys(errors).length > 0) {
      displayErrorAlert('Please fill in all required fields.');
      return;
    }

    setLoading(true);

    try {
      // Send email
      const response = await emailjs.send(
        'service_vbnlzuf', // Service ID
        'template_5fzuqmh', // Template ID
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        'Mvvu5zxrkvoIVhXS1' // User ID from emailJS
      );

      console.log('Email successfully sent!', response);

      // Reset form fields
      setForm({
        name: '',
        email: '',
        message: '',
      });

      setLoading(false);

      // Show success message to the user
      alert('Thank you! Your message has been sent successfully.');
    } catch (error) {
      console.error('Failed to send email', error);
      setLoading(false);

      // Display error message to the user
      displayErrorAlert('Oops! Failed to send email. Please try again later.');
    }
  };


  return (
    <div className="
      xl:mt-12
      xl:flex-row
      flex-col-reverse
      flex
      gap-5
      overflow-hidden
      "
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-indigo-950 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h3 className={styles.sectionHeadText}>
          Contact.
        </h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Name
              <span className="text-red-500">*</span>
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="
                bg-tertiary
                p-6
                py-4
                placeholder:text-secondary
                text-white rounded-lg
                outilined-none
                border-none
                font-medium
                "
                required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Email
              <span className="text-red-500">*</span>
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="
                bg-tertiary
                p-6
                py-4
                placeholder:text-secondary
                text-white rounded-lg
                outilined-none
                border-none
                font-medium
                "
                required
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">
              Your Message
              <span className="text-red-500">*</span>
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say?"
              className="
                bg-tertiary
                p-6
                py-4
                placeholder:text-secondary
                text-white rounded-lg
                outilined-none
                border-none
                font-medium
                "
                required
            />
          </label>

          <button
            type="submit"
            className="
              bg-tertiary
              py-3
              px-8
              outline-none
              w-fit
              text-white
              font-bold
              shadow-md
              shadow-primary
              rounded-xl
              hover:shadow-lg
              "
              onClick={(e)=>handleSubmit(e, form.name, form.email, form.message)}
          >
            {loading ? "Sending..." : "Send"}

          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact");