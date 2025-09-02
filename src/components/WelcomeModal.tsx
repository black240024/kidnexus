
import React, { useState, useEffect } from 'react';
import { X, Sparkles, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface WelcomeModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const WelcomeModal = ({ isVisible, onClose }: WelcomeModalProps) => {
  console.log('WelcomeModal render - isVisible:', isVisible);
  
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full mx-4 relative overflow-hidden animate-scale-in">
        {/* Animated background elements with child playing theme */}
        <div className="absolute top-4 left-4 animate-bounce">
          <Sparkles className="h-6 w-6 text-yellow-400" />
        </div>
        <div className="absolute top-4 right-4 animate-pulse">
          <Heart className="h-6 w-6 text-pink-400" />
        </div>
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <span className="text-2xl animate-bounce">🎨</span>
        </div>
        <div className="absolute bottom-4 left-6 animate-bounce">
          <span className="text-2xl">⚽</span>
        </div>
        <div className="absolute bottom-4 right-6 animate-pulse">
          <span className="text-2xl">🎮</span>
        </div>
        <div className="absolute bottom-8 left-1/3 animate-pulse">
          <span className="text-xl">🧸</span>
        </div>
        <div className="absolute top-12 right-8 animate-bounce">
          <span className="text-xl">📚</span>
        </div>
        <div className="absolute bottom-12 right-1/4 animate-bounce">
          <span className="text-xl">🌈</span>
        </div>

        <div className="text-center relative z-10">
          {/* Child playing animation - central focus */}
          <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce relative overflow-hidden">
            <div className="absolute inset-0 animate-spin opacity-30">
              <div className="w-full h-full rounded-full border-4 border-dashed border-white"></div>
            </div>
            <div className="relative z-10 animate-pulse">
              <span className="text-4xl">👶</span>
            </div>
          </div>
          
          {/* Floating child activity icons around the central animation */}
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-y-4 animate-pulse">
            <span className="text-lg">🎪</span>
          </div>
          <div className="absolute top-20 left-8 animate-bounce">
            <span className="text-sm">🎭</span>
          </div>
          <div className="absolute top-20 right-8 animate-pulse">
            <span className="text-sm">🎨</span>
          </div>
          
          <h2 className="text-3xl font-bold text-gray-800 mb-4 animate-fade-in">
            Welcome to KIDNEXUS!
          </h2>
          
          <p className="text-lg text-gray-600 mb-6 animate-fade-in">
            Nurturing Creative Thinkers and Social Innovators
          </p>
          
          <p className="text-gray-500 mb-8 animate-fade-in">
            Discover our innovative programs designed to empower children through creative learning and social innovation.
          </p>
          
          {/* Interactive play elements */}
          <div className="flex justify-center space-x-4 mb-6">
            <div className="animate-bounce">
              <span className="text-2xl">🎵</span>
            </div>
            <div className="animate-pulse">
              <span className="text-2xl">🎨</span>
            </div>
            <div className="animate-bounce">
              <span className="text-2xl">🎪</span>
            </div>
            <div className="animate-pulse">
              <span className="text-2xl">🎭</span>
            </div>
          </div>
          
          <Button
            onClick={onClose}
            className="bg-gradient-to-r from-orange-500 to-teal-500 hover:from-orange-600 hover:to-teal-600 text-white px-8 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 animate-fade-in"
          >
            Let's Play & Learn! 🎉
          </Button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-20"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default WelcomeModal;
