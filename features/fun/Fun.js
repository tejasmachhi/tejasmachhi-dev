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
          'A major career opportunity is coming your way',
          'Your hard work will be recognized soon',
          'A promotion or new job is in your future',
          'Your skills will be in high demand',
          'Success is just around the corner'
        ],
        money: [
          'Unexpected financial gain is coming',
          'Your investments will pay off',
          'A new source of income will appear',
          'Financial stability is approaching',
          'Money will flow to you naturally'
        ],
        love: [
          'Love is in the air for you',
          'Someone special will enter your life',
          'Your relationship will flourish',
          'Romance is coming your way',
          'Heart connections will strengthen'
        ],
        health: [
          'Great health and vitality await you',
          'Your energy levels will increase',
          'Fitness goals will be achieved',
          'Wellness and balance are coming',
          'Your body will feel revitalized'
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
