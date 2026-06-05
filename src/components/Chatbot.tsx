'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, X, Send, Loader } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const API_KEY = 'AQ.Ab8RN6JRrzfcZunh-NE8W6HTE7FruLYWKuuOq5yscIF6AHQTwA';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `You are the helpful AI Assistant for Health Root NGO, a youth-centered organization in Rwanda. 
Our slogan/motto is: "Healthy Young People Build a Healthy Community".
Our mission is to empower youth and build healthier communities through education, awareness, and active community participation.

Key Information about Health Root NGO:
- Location: Kigali, Rwanda
- Contact Phone: +250 780 676 289
- Email Address: info@healthrootngo.org

Our Vision:
"To build a healthier, educated, responsible, and empowered community where young people actively contribute to positive health and social development."

Our Mission & Goals:
- Promote health education and awareness.
- Support youth empowerment and leadership.
- Encourage disease prevention and healthy living.
- Improve community participation in health activities.

Our Core Values:
- Integrity (honesty, responsibility, transparency)
- Respect (respect for all people regardless of age, gender, or background)
- Teamwork (collaboration creates stronger communities)
- Innovation (creative and new ideas for solving community health problems)
- Community Service (committed to helping communities improve wellbeing)
- Equality (everyone deserves access to health info and support)

Our Core Programs:
1. Health Awareness: Campaigns on personal hygiene, nutrition, reproductive health, and disease prevention in schools and communities.
2. Youth Training: Empowering young people with leadership, public speaking, and community engagement skills.
3. Environmental Protection: Organizing community clean-ups and tree planting activities to promote sanitation and conservation.

Our Projects:
- School Health Outreach (Ongoing): Educating students in Kigali schools on personal hygiene and mental wellness.
- Community Sanitation Day (Ongoing): Monthly cleaning activities in local communities to promote a healthy living environment.
- Youth Mentorship Program (Ongoing): A 6-month training program for young leaders in community health development.
- Drug Abuse Prevention (Ongoing): Awareness campaigns targeting youth to prevent substance abuse.
- Tree Planting Initiative (Completed): Greenery restoration and climate awareness.
- Nutrition Workshop (Completed): Teaching families about balanced diets and sustainable food sources.

Our Leadership Team:
1. Asante Serge - President & Founder (Visionary leader empowering youth and building healthier communities)
2. Habumugisha Elie - Executive Director (Strategic leader directing operations and community impact)
3. Ntwali Samuel - Vice President (Coordinates stakeholder partnerships and community program success)
4. Irasubiza Manzi Hubert - Executive Secretary (Manages administrative operations and logistical planning)
5. Harerimana Zidane - Treasurer (Manages financial planning, budgeting, and resource accountability)
6. Jean Paul Mugisha - Chief Inspector (Oversees activity standards and compliance)
7. Nzeyimana Prince - Influencer (Promotes youth engagement and raises awareness for health campaigns)

Developer & Creator Attribution:
- If anyone asks who designed, developed, or created you, you must state: "This bot was designed and developed by Neoscratch Software Company for Health Root Org to help people ask questions and find details about the organization."

Always respond in a professional, warm, welcoming, and informative tone. Keep answers clear and concise. If you don't know the answer, politely guide the user to contact us via our phone (+250 780 676 289) or email (info@healthrootngo.org).`;

const renderMessageText = (text: string) => {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => {
    if (i % 2 === 1) {
      return <strong key={i}>{part}</strong>;
    }
    return part;
  });
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your Health Root Assistant. How can I help you learn about our organization today?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      // Build conversation history for the API
      const contents = messages.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }));
      contents.push({ role: 'user', parts: [{ text: userMessage }] });

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: contents,
            systemInstruction: {
              parts: [{ text: SYSTEM_INSTRUCTION }]
            }
          })
        }
      );

      if (!response.ok) {
        const errText = await response.text();
        console.error('API response error body:', errText);
        throw new Error(`API request failed: ${response.status} - ${errText}`);
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that. Please try again.";
      
      setMessages(prev => [...prev, { role: 'model', text: botResponse }]);
    } catch (error) {
      console.error('Chatbot error:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am having trouble connecting to my brain right now. Please check your internet connection and try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '25px', right: '25px', zIndex: 9999 }}>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '30px',
          backgroundColor: '#2f89fc',
          border: 'none',
          boxShadow: '0 8px 24px rgba(47, 137, 252, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          cursor: 'pointer',
          outline: 'none'
        }}
      >
        {isOpen ? <X size={28} /> : <HelpCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '75px',
              right: '0',
              width: '350px',
              height: '480px',
              backgroundColor: '#fff',
              borderRadius: '20px',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              border: '1px solid #f0f0f0'
            }}
          >
            {/* Header */}
            <div
              style={{
                backgroundColor: '#2f89fc',
                color: '#fff',
                padding: '15px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <div style={{ position: 'relative', width: '40px', height: '40px' }}>
                <Image
                  src="/logo.png"
                  alt="Health Root NGO Logo"
                  width={40}
                  height={40}
                  style={{ borderRadius: '50%', objectFit: 'contain', backgroundColor: '#fff', padding: '2px' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: '#4cd964',
                    border: '2px solid #2f89fc'
                  }}
                />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 'bold' }}>Health Root Bot</h4>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>Online • Ask anything about us</p>
              </div>
            </div>

            {/* Message Area */}
            <div
              style={{
                flex: 1,
                padding: '15px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                backgroundColor: '#f8f9fa'
              }}
            >
              {messages.map((msg, index) => (
                <div
                  key={index}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%',
                    backgroundColor: msg.role === 'user' ? '#2f89fc' : '#fff',
                    color: msg.role === 'user' ? '#fff' : '#333',
                    padding: '10px 14px',
                    borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
                    fontSize: '14px',
                    lineHeight: '1.4',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                    whiteSpace: 'pre-line'
                  }}
                >
                  {renderMessageText(msg.text)}
                </div>
              ))}
              {loading && (
                <div
                  style={{
                    alignSelf: 'flex-start',
                    backgroundColor: '#fff',
                    padding: '10px 14px',
                    borderRadius: '18px 18px 18px 2px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Loader size={16} className="animate-spin text-primary" style={{ animation: 'spin 1s linear infinite' }} />
                  <span style={{ fontSize: '13px', color: '#999' }}>Typing...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleSend}
              style={{
                padding: '12px 15px',
                borderTop: '1px solid #eee',
                display: 'flex',
                gap: '10px',
                alignItems: 'center',
                backgroundColor: '#fff'
              }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Health Root..."
                style={{
                  flex: 1,
                  border: '1px solid #e2e8f0',
                  borderRadius: '24px',
                  padding: '8px 16px',
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s'
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || loading}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '18px',
                  backgroundColor: input.trim() && !loading ? '#2f89fc' : '#cbd5e1',
                  color: '#fff',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: input.trim() && !loading ? 'pointer' : 'default',
                  transition: 'background-color 0.2s'
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <style jsx global>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
