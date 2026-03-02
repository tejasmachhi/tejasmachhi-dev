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
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
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
      <div className="contact-bg-pattern"></div>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">Let's Connect</div>
          <h2 className="section-title">
            <span className="title-gradient">Get In Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? Let's collaborate and create something amazing together
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <h3>Let's Start the Conversation</h3>
              <p>I'm always excited to work on new projects and hear about new ideas.</p>
            </div>
            
            <div className="contact-methods">
              <div className="contact-method" data-aos="fade-right" data-aos-delay="100">
                <div className="method-icon">
                  <IconComponent icon="mdi:email" />
                </div>
                <div className="method-content">
                  <h4>Email</h4>
                  <p>tejasmachhi2710@gmail.com</p>
                  <span className="method-label">Primary Contact</span>
                </div>
              </div>

              <div className="contact-method" data-aos="fade-right" data-aos-delay="200">
                <div className="method-icon">
                  <IconComponent icon="mdi:phone" />
                </div>
                <div className="method-content">
                  <h4>Phone</h4>
                  <p>+91 6353331221</p>
                  <span className="method-label">Available 24/7</span>
                </div>
              </div>

              <div className="contact-method" data-aos="fade-right" data-aos-delay="300">
                <div className="method-icon">
                  <IconComponent icon="mdi:map-marker" />
                </div>
                <div className="method-content">
                  <h4>Location</h4>
                  <p> Ahemadabad, India</p>
                  <span className="method-label">Remote Available</span>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Connect on Social Media</h4>
              <div className="social-icons">
                <a href="#" className="social-link" aria-label="GitHub">
                  <IconComponent icon="mdi:github" />
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <IconComponent icon="mdi:linkedin" />
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <IconComponent icon="mdi:twitter" />
                </a>
                <a href="#" className="social-link" aria-label="Instagram">
                  <IconComponent icon="mdi:instagram" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className={`form-group ${focusedField === 'name' ? 'focused' : ''}`}>
                  <label htmlFor="name">Your Name *</label>
                  <input 
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                  />
                  <div className="input-border"></div>
                </div>

                <div className={`form-group ${focusedField === 'email' ? 'focused' : ''}`}>
                  <label htmlFor="email">Email Address *</label>
                  <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                  />
                  <div className="input-border"></div>
                </div>
              </div>

              <div className={`form-group ${focusedField === 'subject' ? 'focused' : ''}`}>
                <label htmlFor="subject">Subject *</label>
                <input 
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                />
                <div className="input-border"></div>
              </div>

              <div className={`form-group ${focusedField === 'message' ? 'focused' : ''}`}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                ></textarea>
                <div className="input-border"></div>
              </div>

              <div className="form-actions">
                <Button
                  type="submit"
                  variant="primary"
                  icon="mdi:send"
                  disabled={isSubmitting}
                  className="submit-btn"
                >
                  {isSubmitting ? 'Redirecting...' : 'Send Message'}
                </Button>
                
                <div className="form-note">
                  <IconComponent icon="mdi:whatsapp" />
                  <span>You'll be redirected to WhatsApp to send this message</span>
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <IconComponent icon="mdi:check-circle" />
                  <div>
                    <strong>Success!</strong>
                    <p>Redirected to WhatsApp successfully!</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}