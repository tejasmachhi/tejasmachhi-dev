"use client";
import { useState, useEffect, useRef } from 'react';
import IconComponent from '@/components/IconComponent';
import Button from '@/components/ui/Button/Button';
import './Fun.scss';

export default function Fun() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'bot', text: 'Hi there! 👋 I am your AI Life Coach.' },
    { id: 2, sender: 'bot', text: 'I am here to give you practical advice and a fresh perspective.' },
    { id: 3, sender: 'bot', text: 'To give you the best advice, how old are you?' }
  ]);
  const [currentStep, setCurrentStep] = useState('age'); // 'age', 'challenge', 'situation', 'processing', 'done'
  const [age, setAge] = useState('');
  const [challenge, setChallenge] = useState('');
  const [situation, setSituation] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const chatMessagesRef = useRef(null);

  const scrollToBottom = () => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const challenges = [
    { emoji: '🎯', label: 'Career Confusion', value: 'career' },
    { emoji: '💔', label: 'Relationship Issues', value: 'relationship' },
    { emoji: '📚', label: 'Study Pressure', value: 'studies' },
    { emoji: '😰', label: 'Anxiety/Stress', value: 'anxiety' },
    { emoji: '💰', label: 'Money Problems', value: 'money' },
    { emoji: '🤔', label: 'Life Direction', value: 'direction' }
  ];

  const handleSend = async () => {
    if (isTyping || currentStep === 'processing') return;

    if (currentStep === 'age') {
      if (!inputValue.trim() || isNaN(inputValue) || parseInt(inputValue) < 10 || parseInt(inputValue) > 100) return;
      const userAge = inputValue.trim();
      setAge(userAge);
      setInputValue('');
      setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userAge }]);
      
      setCurrentStep('challenge');
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: 'Got it. What kind of challenge are you facing right now?' }]);
      }, 1000);
    } else if (currentStep === 'situation') {
      if (!inputValue.trim()) return;
      const userSituation = inputValue.trim();
      setSituation(userSituation);
      setInputValue('');
      setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: userSituation }]);
      
      setCurrentStep('processing');
      generateAdvice(age, challenge, userSituation);
    }
  };

  const handleChallengeSelect = (selectedChallenge) => {
    const challengeObj = challenges.find(c => c.value === selectedChallenge);
    setChallenge(selectedChallenge);
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: `${challengeObj.emoji} ${challengeObj.label}` }]);
    
    setCurrentStep('situation');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now() + 1, sender: 'bot', text: "Thanks. Could you tell me a little bit more about what's going on?" }]);
    }, 1000);
  };

  const generateAdvice = async (finalAge, finalChallenge, finalSituation) => {
    setIsTyping(true);
    
    try {
      const response = await fetch('/api/life-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          situation: finalSituation,
          age: finalAge,
          challenge: finalChallenge
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get advice');
      }

      setIsTyping(false);
      
      const botMessages = [
        { text: data.advice.acknowledgement },
        { text: data.advice.perspective },
        { text: data.advice.actions, isActions: true },
        { text: data.advice.reflection, isReflection: true },
        { text: `Your Strength: ${data.advice.strength}` },
        { text: `Remember: ${data.advice.encouragement}` },
      ];

      for (let i = 0; i < botMessages.length; i++) {
        setIsTyping(true);
        // Randomize delay a bit to feel more real, longer delay for longer texts
        const delay = Math.max(800, Math.min(2000, botMessages[i].text.length * 15));
        await new Promise(r => setTimeout(r, delay));
        setIsTyping(false);
        setMessages(prev => [...prev, { id: Date.now() + i, sender: 'bot', ...botMessages[i] }]);
      }
      
      setCurrentStep('done');
    } catch (error) {
      console.error('Error generating advice:', error);
      setIsTyping(false);
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', text: 'Sorry, I ran into an issue while thinking. Could you try reloading the page?' }]);
      setCurrentStep('done');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages([
      { id: 1, sender: 'bot', text: 'Hi there! 👋 I am your AI Life Coach.' },
      { id: 2, sender: 'bot', text: 'I am here to give you practical advice and a fresh perspective.' },
      { id: 3, sender: 'bot', text: 'To give you the best advice, how old are you?' }
    ]);
    setCurrentStep('age');
    setAge('');
    setChallenge('');
    setSituation('');
    setInputValue('');
  };

  const renderMessageText = (msg) => {
    if (msg.isActions && Array.isArray(msg.text)) {
      return (
        <div className="bot-actions">
          <p className="actions-title">Here are some action steps:</p>
          <ul className="action-list">
            {msg.text.map((action, idx) => (
              <li key={idx}><IconComponent icon="mdi:check-circle" /> <span>{action}</span></li>
            ))}
          </ul>
        </div>
      );
    }
    if (msg.isReflection) {
      return (
        <div className="bot-reflection">
          <p className="reflection-title">Something to think about:</p>
          <p className="reflection-text">"{msg.text}"</p>
        </div>
      );
    }
    return msg.text;
  };

  return (
    <div className="fun">
      {/* Hero Section */}
      <section className="fun-hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-left">
              <div className="hero-badge">
                <IconComponent icon="mdi:heart-pulse" />
                <span>Life Coaching</span>
              </div>
              
              <h1 className="hero-title">
                <span className="title-gradient">AI Life Coach</span>
              </h1>
              
              <p className="hero-description">
                Get personalized life coaching advice for clarity, confidence, and direction. 
                Practical guidance designed for Indian youth.
              </p>
              
              <div className="hero-features">
                <div className="feature-item">
                  <IconComponent icon="mdi:brain" />
                  <span>Practical Advice</span>
                </div>
                <div className="feature-item">
                  <IconComponent icon="mdi:account-heart" />
                  <span>Personal Support</span>
                </div>
                <div className="feature-item">
                  <IconComponent icon="mdi:shield-check" />
                  <span>Private & Secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Predictor Section as a Chat UI */}
      <section className="predictor-section">
        <div className="disclaimer">
          <div className="disclaimer-content">
            <IconComponent icon="mdi:information" className="disclaimer-icon" />
            <div className="disclaimer-text">
              <h3>Your Personal Growth Journey</h3>
              <p>
                This AI Life Coach provides practical guidance and perspective. 
                The advice is meant to support your thinking process - you make your own decisions.
                For serious issues, please consult qualified professionals.
              </p>
              <div className="disclaimer-note">
                <IconComponent icon="mdi:heart" />
                <span>You've got this!</span>
              </div>
            </div>
          </div>
        </div>

        <div className="chat-container">
          <div className="chat-header">
            <div className="avatar">
              <IconComponent icon="mdi:robot-outline" />
            </div>
            <div className="info">
              <h2>AI Life Coach</h2>
              <p>Online &bull; Ready to help</p>
            </div>
          </div>

          <div className="chat-messages" ref={chatMessagesRef}>
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                {renderMessageText(msg)}
              </div>
            ))}
            
            {currentStep === 'challenge' && !isTyping && (
              <div className="challenge-options-container">
                <div className="challenge-options">
                  {challenges.map((c) => (
                    <button key={c.value} onClick={() => handleChallengeSelect(c.value)}>
                      {c.emoji} {c.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
          </div>

          {currentStep !== 'challenge' && currentStep !== 'done' && (
            <div className="chat-input-area">
              <div className="input-wrapper">
                {currentStep === 'age' ? (
                  <input
                    type="number"
                    placeholder="Enter your age..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    disabled={isTyping}
                    min="15"
                    max="100"
                  />
                ) : (
                  <textarea
                    placeholder="Type your situation..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                      }
                    }}
                    disabled={isTyping || currentStep === 'processing'}
                    rows={2}
                  />
                )}
                <button 
                  onClick={handleSend} 
                  disabled={!inputValue.trim() || isTyping || currentStep === 'processing'}
                >
                  <IconComponent icon="mdi:send" />
                </button>
              </div>
            </div>
          )}

          {currentStep === 'done' && (
            <div className="chat-input-area reset-area">
              <Button variant="primary" onClick={resetChat} className="reset-btn">
                <IconComponent icon="mdi:refresh" />
                Start a New Session
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
