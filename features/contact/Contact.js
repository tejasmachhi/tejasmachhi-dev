'use client';
import { useState } from 'react';
import IconComponent from '@/components/IconComponent';
import Button from '@/components/ui/Button/Button';
import './Contact.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `
🚀 New Portfolio Inquiry

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    // ⚠ Replace with your real WhatsApp number (no +, no spaces)
    const whatsappNumber = "916353331221";

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Open WhatsApp
    window.open(whatsappURL, "_blank");

    // Reset UI
    setTimeout(() => {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

      setTimeout(() => setSubmitStatus(''), 3000);
    }, 500);
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Let's work together to bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <IconComponent icon="mdi:email" />
              </div>
              <h3>Email</h3>
              <p>tejasmachhi@example.com</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <IconComponent icon="mdi:phone" />
              </div>
              <h3>Phone</h3>
              <p>+91 6353331221</p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <IconComponent icon="mdi:map-marker" />
              </div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input 
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input 
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <Button
                type="submit"
                variant="primary"
                icon="mdi:send"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Redirecting...' : 'Send via WhatsApp'}
              </Button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <IconComponent icon="mdi:check-circle" />
                  Redirected to WhatsApp successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}