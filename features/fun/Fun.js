"use client";
import { useState } from 'react';
import IconComponent from '@/components/IconComponent';
import Button from '@/components/ui/Button/Button';
import './Fun.scss';

export default function Fun() {
  const [name, setName] = useState('');
  const [birthYear, setBirthYear] = useState('');
  const [mood, setMood] = useState('');
  const [prediction, setPrediction] = useState(null);
  const [isPredicting, setIsPredicting] = useState(false);

  const moods = [
    { emoji: '😊', label: 'Happy', value: 'happy' },
    { emoji: '😐', label: 'Neutral', value: 'neutral' },
    { emoji: '😢', label: 'Sad', value: 'sad' },
    { emoji: '😡', label: 'Angry', value: 'angry' },
    { emoji: '😎', label: 'Confident', value: 'confident' },
    { emoji: '🤔', label: 'Confused', value: 'confused' }
  ];

  const generatePrediction = () => {
    if (!name.trim() || !birthYear || !mood) {
      alert('Please fill in all fields');
      return;
    }

    setIsPredicting(true);

    // Simulate AI processing
    setTimeout(() => {
 const predictions = {
  career: [
    "A major career opportunity will soon appear that could completely change your professional path.",
    "Your hard work and dedication will finally be noticed by the right people.",
    "A promotion or exciting new job role is closer than you think.",
    "Your unique skills will soon be in high demand in your field.",
    "Success is just around the corner if you keep moving forward.",
    "A powerful connection or mentor may guide you toward a better career path.",
    "An unexpected project will showcase your true potential.",
    "Your creativity and ideas will bring recognition at work.",
    "A bold career decision will lead to long-term success.",
    "A new learning opportunity will help you grow faster than before."
  ],

  money: [
    "An unexpected financial opportunity may bring extra income into your life.",
    "Your smart decisions and patience will soon pay off financially.",
    "A new source of income could appear through creativity or side work.",
    "Financial stability is approaching as your efforts start showing results.",
    "Money will begin to flow more naturally when you follow the right path.",
    "A profitable idea might turn into something bigger than expected.",
    "Someone may offer a partnership that improves your financial future.",
    "Your budgeting habits will soon help you save more than before.",
    "A small investment could grow into a meaningful return.",
    "Financial growth will come when you trust your instincts."
  ],

  love: [
    "Love is slowly entering your life in a beautiful and unexpected way.",
    "Someone special may soon cross your path and change your perspective on relationships.",
    "Your current relationship will grow stronger with deeper understanding.",
    "Romance and emotional connection are getting closer to you.",
    "Your heart will open to new experiences and meaningful bonds.",
    "A conversation with someone important could strengthen your relationship.",
    "A surprising moment will make you realize how valued you truly are.",
    "Your kindness will attract positive energy in your love life.",
    "A new friendship might slowly turn into something deeper.",
    "Emotional balance will bring harmony to your relationships."
  ],

  health: [
    "Your body and mind will soon feel stronger and more balanced.",
    "Energy and motivation will increase as you focus more on your wellbeing.",
    "Small lifestyle changes will bring big improvements to your health.",
    "Your fitness goals will start becoming easier to achieve.",
    "Mental clarity and inner peace are approaching.",
    "A healthy routine will help you feel refreshed every day.",
    "Your dedication to self-care will bring positive results.",
    "You will discover new motivation to stay active and healthy.",
    "Rest and balance will improve your overall vitality.",
    "A positive mindset will support both your physical and mental health."
  ]
};

      const colors = ['Red', 'Blue', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Black', 'White', 'Gold'];
      const numbers = Array.from({ length: 20 }, (_, i) => i + 1);

      const getRandomItem = (array) => array[Math.floor(Math.random() * array.length)];

      const newPrediction = {
        name: name.trim(),
        career: getRandomItem(predictions.career),
        careerStars: Math.floor(Math.random() * 3) + 3, // 3-5 stars
        money: getRandomItem(predictions.money),
        moneyStars: Math.floor(Math.random() * 3) + 3,
        love: getRandomItem(predictions.love),
        loveStars: Math.floor(Math.random() * 3) + 3,
        health: getRandomItem(predictions.health),
        healthStars: Math.floor(Math.random() * 3) + 3,
        luckyColor: getRandomItem(colors),
        luckyNumber: getRandomItem(numbers),
        age: new Date().getFullYear() - parseInt(birthYear),
        mood: moods.find(m => m.value === mood)?.emoji || mood,
        timestamp: new Date().toLocaleString()
      };

      setPrediction(newPrediction);
      setIsPredicting(false);
    }, 2000); // 2 second "AI processing" delay
  };

  const renderStars = (count) => {
    return '⭐'.repeat(count) + '☆'.repeat(5 - count);
  };

  const resetPrediction = () => {
    setPrediction(null);
    setName('');
    setBirthYear('');
    setMood('');
  };
  
  return (
    <div className="fun">
      {/* Hero Section */}
      <section className="fun-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">
                <IconComponent icon="mdi:sparkles" />
                <span>AI-Powered Future Insights</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-gradient">AI Future Predictor</span>
              </h1>
              
              <p className="hero-description">
                Discover what the future holds with our advanced AI prediction system. 
                Get personalized insights about your career, money, love, and health.
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <IconComponent icon="mdi:brain" />
                  <span>Advanced AI Technology</span>
                </div>
                <div className="feature-item">
                  <IconComponent icon="mdi:star" />
                  <span>Personalized Predictions</span>
                </div>
                <div className="feature-item">
                  <IconComponent icon="mdi:shield-check" />
                  <span>Privacy First</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Predictor Section */}
      <section className="predictor-section">
        <div className="disclaimer">
          <div className="disclaimer-content">
            <IconComponent icon="mdi:information" className="disclaimer-icon" />
            <div className="disclaimer-text">
              <h3>For Entertainment Purposes Only</h3>
              <p>
                This AI Future Predictor is a fun interactive feature designed for entertainment. 
                The predictions are randomly generated and should not be taken seriously. 
                While positive thinking can be beneficial, please don't make important life decisions 
                based on these results. Have fun and enjoy the experience!
              </p>
              <div className="disclaimer-note">
                <IconComponent icon="mdi:heart" />
                <span>Remember: Your future is what you make of it!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="ai-future-predictor">
          <div className="predictor-header">
            <h2 className="predictor-title">
              <IconComponent icon="mdi:brain" className="title-icon" />
              Start Your Prediction Journey
            </h2>
            <p className="predictor-subtitle">
              Fill in your details below to receive your personalized AI prediction
            </p>
          </div>

          {!prediction ? (
            <div className="predictor-form">
              <div className="form-group">
                <label className="form-label">
                  <IconComponent icon="mdi:account" />
                  Your Name
                </label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={50}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <IconComponent icon="mdi:calendar" />
                  Birth Year
                </label>
                <input
                  type="number"
                  className="form-input"
                  placeholder="e.g., 1995"
                  value={birthYear}
                  onChange={(e) => setBirthYear(e.target.value)}
                  min="1950"
                  max={new Date().getFullYear() - 13}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <IconComponent icon="mdi:emoticon" />
                  Current Mood
                </label>
                <div className="mood-selector">
                  {moods.map((moodOption) => (
                    <button
                      key={moodOption.value}
                      className={`mood-btn ${mood === moodOption.value ? 'active' : ''}`}
                      onClick={() => setMood(moodOption.value)}
                      type="button"
                    >
                      <span className="mood-emoji">{moodOption.emoji}</span>
                      <span className="mood-label">{moodOption.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                variant="primary"
                onClick={generatePrediction}
                disabled={isPredicting}
                className="predict-btn"
              >
                {isPredicting ? (
                  <>
                    <IconComponent icon="mdi:loading" className="spin-icon" />
                    AI is analyzing your future...
                  </>
                ) : (
                  <>
                    <IconComponent icon="mdi:crystal-ball" />
                    Predict My Future
                  </>
                )}
              </Button>
            </div>
          ) : (
            <div className="prediction-result">
              <div className="result-header">
                <h2 className="result-title">
                  <IconComponent icon="mdi:star" className="star-icon" />
                  Your AI Prediction
                </h2>
                <p className="result-subtitle">
                  {prediction.name}, age {prediction.age} • {prediction.mood} • {prediction.timestamp}
                </p>
              </div>

              <div className="prediction-cards">
                <div className="prediction-card career">
                  <div className="card-header">
                    <IconComponent icon="mdi:briefcase" className="card-icon" />
                    <h3>Career</h3>
                    <div className="stars">{renderStars(prediction.careerStars)}</div>
                  </div>
                  <p className="card-text">{prediction.career}</p>
                </div>

                <div className="prediction-card money">
                  <div className="card-header">
                    <IconComponent icon="mdi:cash" className="card-icon" />
                    <h3>Money</h3>
                    <div className="stars">{renderStars(prediction.moneyStars)}</div>
                  </div>
                  <p className="card-text">{prediction.money}</p>
                </div>

                <div className="prediction-card love">
                  <div className="card-header">
                    <IconComponent icon="mdi:heart" className="card-icon" />
                    <h3>Love</h3>
                    <div className="stars">{renderStars(prediction.loveStars)}</div>
                  </div>
                  <p className="card-text">{prediction.love}</p>
                </div>

                <div className="prediction-card health">
                  <div className="card-header">
                    <IconComponent icon="mdi:heart-pulse" className="card-icon" />
                    <h3>Health</h3>
                    <div className="stars">{renderStars(prediction.healthStars)}</div>
                  </div>
                  <p className="card-text">{prediction.health}</p>
                </div>
              </div>

              <div className="lucky-items">
                <div className="lucky-item">
                  <IconComponent icon="mdi:palette" className="lucky-icon" />
                  <div className="lucky-content">
                    <h4>Lucky Color</h4>
                    <div className="color-display" style={{ backgroundColor: prediction.luckyColor.toLowerCase() }}>
                      {prediction.luckyColor}
                    </div>
                  </div>
                </div>

                <div className="lucky-item">
                  <IconComponent icon="mdi:numeric" className="lucky-icon" />
                  <div className="lucky-content">
                    <h4>Lucky Number</h4>
                    <div className="number-display">{prediction.luckyNumber}</div>
                  </div>
                </div>
              </div>

              <div className="result-actions">
                <Button variant="primary" onClick={resetPrediction} className="new-prediction-btn">
                  <IconComponent icon="mdi:refresh" />
                  Get New Prediction
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
