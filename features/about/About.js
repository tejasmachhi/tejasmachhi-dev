import Image from 'next/image';
import './About.scss';

export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about who I am and what I do</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>My Journey</h3>
              <p>
                I'm Tejas Machhi, a self-taught frontend web developer passionate about creating beautiful, 
                responsive, and user-friendly websites. I've mastered HTML, CSS, JavaScript, Bootstrap, 
                and responsive design, and I'm committed to improving my skills every day.
              </p>
            </div>
            
            <div className="about-card">
              <h3>My Passion</h3>
              <p>
                I love solving challenges with creative, innovative solutions and always stay up to date 
                with the latest trends in web development. Though I'm still in the learning phase, 
                I'm excited to bring my skills and passion to new opportunities.
              </p>
            </div>
            
            <div className="about-card">
              <h3>My Goal</h3>
              <p>
                This is just the beginning—let's connect and explore how I can contribute to your team 
                and continue growing in this exciting field of web development!
              </p>
            </div>
          </div>
          
          <div className="about-image">
            <div className="about-img-container">
              <Image 
                src="/assets/img/IMG_1541.jpeg" 
                alt="About Tejas" 
                width={400}
                height={500}
                className="about-img"
              />
              <div className="about-img-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
