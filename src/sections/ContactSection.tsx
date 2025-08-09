"use client";
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    try {
      if (!form.current) return;

      await emailjs.sendForm(
        'service_wsmd52r', // Replace with your EmailJS service ID
        'template_ykiu3qc', // Replace with your EmailJS template ID
        form.current,
        'ELImwzjfwArH-upxJ' // Replace with your EmailJS public key
      );
      
      // Form submitted successfully
      setFormStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus('error');
    }
  };
  
  return (
  <section id="contact" className="min-h-[50vh] flex items-center justify-center text-white px-4 md:px-8">
    <div className="max-w-xl w-full text-center">
      <h2 className="text-3xl font-bold mb-8 mt-4">Contact</h2>
      <motion.form
        ref={form}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 mb-6"
        onSubmit={handleSubmit}
      >
        <input type="text" name="name" placeholder="Name" className="p-3 rounded bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-white focus:outline-none focus:ring-2 focus:ring-slate-500" required disabled={formStatus === 'submitting'} />
        <input type="email" name="email" placeholder="Email" className="p-3 rounded bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-white focus:outline-none focus:ring-2 focus:ring-slate-500" required disabled={formStatus === 'submitting'} />
        <textarea name="message" placeholder="Message" className="p-3 rounded bg-slate-800/50 backdrop-blur-sm border border-slate-600/30 text-white focus:outline-none focus:ring-2 focus:ring-slate-500" rows={4} required disabled={formStatus === 'submitting'} />
        
        {formStatus === 'success' && (
          <div className="bg-green-900/50 border border-green-500 text-green-100 p-3 rounded flex items-center gap-2">
            <FiCheckCircle /> Message sent successfully! I'll get back to you soon.
          </div>
        )}
        
        {formStatus === 'error' && (
          <div className="bg-red-900/50 border border-red-500 text-red-100 p-3 rounded flex items-center gap-2">
            <FiAlertCircle /> Failed to send message. Please try again later.
          </div>
        )}
        
        <button 
          type="submit" 
          className="bg-gradient-to-r from-slate-600 to-slate-700 text-white py-2 rounded font-semibold hover:scale-105 transition-transform flex justify-center items-center"
          disabled={formStatus === 'submitting'}
        >
          {formStatus === 'submitting' ? 'Sending...' : 'Send'}
        </button>
      </motion.form>
      <div className="mb-2 text-slate-300">thadisetty.saiteja@gmail.com</div>
    </div>
  </section>
  );
};

export default ContactSection;
