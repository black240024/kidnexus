import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { MessageCircle, X, Send, Bot, User, Sparkles, Heart, Star, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

// Store API key securely - in production, this should be in environment variables
const getOpenAIKey = () => {
  // In production, use environment variables
  return import.meta.env.VITE_OPENAI_API_KEY;
};

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello there, amazing friend! 🌟 Welcome to KIDNEXUS! I\'m your magical learning buddy. How can I help you discover something wonderful today? ✨',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);
    setIsTyping(true);

    try {
      const apiKey = getOpenAIKey();
      if (!apiKey) {
        throw new Error('OpenAI API key not configured');
      }

      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4o-mini',
          messages: [
            { 
              role: 'system', 
              content: 'You are a friendly, enthusiastic assistant for KIDNEXUS, a child-centered educational organization in Kenya. Always respond in a warm, encouraging, and child-friendly manner. Use emojis and positive language. Keep responses concise but helpful. Focus on creativity, learning, and empowerment.' 
            },
            ...messages
              .filter(m => m.sender === 'user' || m.sender === 'bot')
              .map(m => ({
                role: m.sender === 'user' ? 'user' : 'assistant',
                content: m.text,
              })),
            { role: 'user', content: userMessage.text },
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botText = response.data.choices[0].message.content.trim();

      // Simulate typing delay for more natural feel
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botText,
          sender: 'bot',
          timestamp: new Date(),
        };

        setMessages(prev => [...prev, botMessage]);
        setIsTyping(false);
      }, 1000);

    } catch (error) {
      console.error('OpenAI API error:', error);
      setTimeout(() => {
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: 'Oops! Something magical went wrong! 🪄 Please try again in a moment, and I\'ll be right here to help! ✨',
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMessage]);
        setIsTyping(false);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 180 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
          >
            <Button
              onClick={handleOpen}
              className="h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-r from-sunset-orange via-magenta-pink to-vivid-purple shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden group"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-golden-yellow via-sunset-orange to-magenta-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Floating sparkles */}
              <div className="absolute inset-0">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-golden-yellow absolute top-1 right-1 animate-pulse" />
                <Star className="h-2 w-2 sm:h-3 sm:w-3 text-magenta-pink absolute bottom-1 left-1 animate-bounce" />
              </div>
              
              <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-white relative z-10 animate-bounce" />
              
              {/* Notification pulse */}
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-magenta-pink rounded-full animate-ping"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-magenta-pink rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Mobile backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 z-40 sm:hidden"
              onClick={handleClose}
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 100 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-80 sm:w-96 h-[500px] bg-white rounded-3xl shadow-2xl border-4 border-gradient-to-r from-sunset-orange to-magenta-pink flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-sunset-orange via-magenta-pink to-vivid-purple p-3 sm:p-4 flex items-center justify-between relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0">
                  <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-golden-yellow absolute top-2 left-4 animate-pulse" />
                  <Star className="h-2 w-2 sm:h-3 sm:w-3 text-white absolute top-3 right-8 animate-bounce" />
                  <Heart className="h-2 w-2 sm:h-3 sm:w-3 text-white absolute bottom-2 left-8 animate-pulse" />
                </div>
                
                <div className="flex items-center space-x-2 sm:space-x-3 relative z-10">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-8 w-8 sm:h-10 sm:w-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Bot className="h-4 w-4 sm:h-6 sm:w-6 text-sunset-orange" />
                  </motion.div>
                  <div>
                    <h3 className="text-white font-bold text-sm sm:text-lg">KIDNEXUS Helper 🌟</h3>
                    <motion.p 
                      className="text-white/90 text-xs"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {isTyping ? 'Thinking of something magical... ✨' : 'Ready to help you learn! 🚀'}
                    </motion.p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                  className="text-white hover:bg-white/20 p-2 rounded-full transition-all duration-300"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </motion.button>
              </div>

              {/* Messages */}
              <ScrollArea className="flex-1 p-3 sm:p-4 bg-gradient-to-br from-sky-teal/10 via-cyan-blue/10 to-magenta-pink/10">
                <div className="space-y-3 sm:space-y-4">
                  <AnimatePresence>
                    {messages.map((message, index) => (
                      <motion.div
                        key={message.id}
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 relative ${
                            message.sender === 'user'
                              ? 'bg-gradient-to-r from-sunset-orange to-magenta-pink text-white ml-4'
                              : 'bg-white text-gray-800 shadow-lg mr-4 border-2 border-cyan-blue/20'
                          }`}
                        >
                          <div className="flex items-start space-x-2">
                            {message.sender === 'bot' && (
                              <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                              >
                                <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-sunset-orange mt-1 flex-shrink-0" />
                              </motion.div>
                            )}
                            {message.sender === 'user' && (
                              <User className="h-3 w-3 sm:h-4 sm:w-4 text-white mt-1 flex-shrink-0" />
                            )}
                            <span className="text-xs sm:text-sm whitespace-pre-wrap leading-relaxed">{message.text}</span>
                          </div>
                          
                          {/* Message decorations */}
                          {message.sender === 'bot' && (
                            <div className="absolute -top-1 -right-1">
                              <Sparkles className="h-2 w-2 sm:h-3 sm:w-3 text-golden-yellow animate-pulse" />
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                  
                  {/* Typing indicator */}
                  <AnimatePresence>
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex justify-start"
                      >
                        <div className="bg-white rounded-2xl px-3 py-2 sm:px-4 sm:py-3 shadow-lg border-2 border-cyan-blue/20 mr-4">
                          <div className="flex items-center space-x-2">
                            <Bot className="h-3 w-3 sm:h-4 sm:w-4 text-sunset-orange" />
                            <div className="flex space-x-1">
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-sunset-orange rounded-full"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-magenta-pink rounded-full"
                              />
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-vivid-purple rounded-full"
                              />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              {/* Contact Links */}
              <div className="px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-sunset-orange/10 to-magenta-pink/10 border-t border-cyan-blue/20">
                <div className="flex justify-center space-x-3 sm:space-x-4">
                  <motion.a
                    href="mailto:kidnexus.ke@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-cyan-blue hover:text-cyan-blue/80 text-xs sm:text-sm font-medium"
                  >
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Email Us</span>
                  </motion.a>
                </div>
              </div>

              {/* Input */}
              <div className="p-3 sm:p-4 border-t border-cyan-blue/20 bg-white">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Type your magical question... ✨"
                      className="rounded-full border-2 border-cyan-blue/30 focus:border-sunset-orange pr-10 sm:pr-12 bg-gradient-to-r from-white to-sky-teal/10 text-xs sm:text-sm"
                      disabled={isLoading}
                    />
                    <div className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2">
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-vivid-purple animate-pulse" />
                    </div>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isLoading}
                      className="rounded-full bg-gradient-to-r from-sunset-orange to-magenta-pink hover:from-sunset-orange/80 hover:to-magenta-pink/80 w-10 h-10 sm:w-12 sm:h-12 p-0 shadow-lg"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                        </motion.div>
                      ) : (
                        <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                      )}
                    </Button>
                  </motion.div>
                </div>
                
                {/* Fun suggestions */}
                <div className="mt-2 flex flex-wrap gap-1">
                  {['Tell me about KUWA! 🌍', 'What is PILIPA? 🎨', 'How can I help? 💖'].map((suggestion, index) => (
                    <motion.button
                      key={suggestion}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setInputValue(suggestion)}
                      className="text-xs bg-gradient-to-r from-vivid-purple/20 to-magenta-pink/20 text-vivid-purple px-2 py-1 sm:px-3 sm:py-1 rounded-full hover:from-vivid-purple/30 hover:to-magenta-pink/30 transition-all duration-300"
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}; 

export default ChatbotWidget;