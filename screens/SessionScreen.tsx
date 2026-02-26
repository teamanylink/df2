import React, { useState } from 'react';
import { Icon } from '../components/Icon';
import { Screen } from '../types';

interface SessionScreenProps {
  navigate: (screen: Screen) => void;
}

export const SessionScreen: React.FC<SessionScreenProps> = ({ navigate }) => {
  const [filledWord, setFilledWord] = useState<string | null>(null);

  const handleWordClick = (word: string) => {
    setFilledWord(word);
  };

  const handleIgnite = () => {
    if (filledWord === 'power') {
      alert("Correct! 🔥");
      navigate(Screen.DASHBOARD);
    } else if (filledWord) {
      alert("Try again!");
      setFilledWord(null);
    } else {
        alert("Select a word to fill the blank!");
    }
  };

  return (
    <div className="relative flex h-full w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden font-display antialiased">
      {/* Ambient Glow */}
      <div className="absolute top-[-20%] left-[-20%] w-[150%] h-[50%] bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Header */}
      <div className="relative z-10 flex flex-col px-6 pt-12 pb-2 shrink-0">
        <div className="flex items-center justify-between mb-6">
            <div className="w-10"></div>
            <div className="flex items-center gap-2">
                <h2 className="text-white text-lg font-bold tracking-tight">Daily Fire</h2>
                <Icon name="local_fire_department" className="text-primary text-xl" fill={true} />
            </div>
            <div className="flex w-10 items-center justify-end">
                <button 
                  onClick={() => navigate(Screen.DASHBOARD)}
                  className="flex items-center justify-center rounded-full w-10 h-10 bg-white/5 hover:bg-white/10 transition-colors text-white"
                >
                    <Icon name="close" className="text-2xl" />
                </button>
            </div>
        </div>
        
        {/* Progress */}
        <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between text-xs font-medium text-white/60 uppercase tracking-wider">
                <span>Session Progress</span>
                <span>3/5</span>
            </div>
            <div className="h-1.5 w-full rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-orange-400 shadow-[0_0_10px_rgba(244,140,37,0.5)]" style={{ width: '60%' }}></div>
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col items-center relative z-10 hide-scrollbar">
        <div className="inline-flex h-8 items-center justify-center gap-x-2 rounded-full bg-white/5 border border-white/10 pl-3 pr-4 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <p className="text-white/90 text-xs font-bold uppercase tracking-wide">Series: Main Character Energy</p>
        </div>

        <h3 className="text-white/50 tracking-widest text-sm font-bold uppercase mb-6">2 Timothy 1:7</h3>

        <div className="w-full text-center">
            <h2 className="text-white text-[28px] leading-[1.6] font-medium">
                For God gave us a spirit not of <span className="inline-flex items-center align-middle mx-1 relative">
                    <div className="w-24 h-10 flex items-center justify-center rounded-full bg-white/10 border-2 border-transparent text-white font-bold cursor-pointer">
                        fear
                    </div>
                    <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#221910]"></span>
                    </span>
                </span>, but of <span className="inline-flex items-center align-middle mx-1 relative">
                    <div 
                        className={`w-28 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                            filledWord 
                            ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(244,140,37,0.3)]' 
                            : 'bg-primary/10 border-primary text-primary animate-pulse shadow-[0_0_15px_rgba(244,140,37,0.3)]'
                        } font-bold`}
                    >
                        {filledWord || '???'}
                    </div>
                </span> and love and self-control.
            </h2>
        </div>

        <div className="mt-8 opacity-60">
            <p className="text-white/40 text-sm italic text-center">Tap the glowing pill to fill the missing word.</p>
        </div>
      </div>

      {/* Footer Area */}
      <div className="relative z-20 mt-auto w-full">
        {/* Word Bank */}
        <div className="px-6 pb-6 pt-2">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                {['timidity', 'power', 'strength', 'anger'].map((word) => (
                    <button 
                        key={word}
                        onClick={() => handleWordClick(word)}
                        className={`px-5 py-2.5 rounded-full border text-white font-medium text-sm active:scale-95 transition-all ${
                            filledWord === word 
                            ? 'bg-primary border-primary' 
                            : 'bg-white/5 border-white/10 hover:bg-white/10'
                        }`}
                    >
                        {word}
                    </button>
                ))}
            </div>
            <button 
                onClick={handleIgnite}
                className="w-full h-14 bg-primary hover:bg-orange-500 active:bg-orange-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-orange-900/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98]"
            >
                <span>Ignite</span>
                <Icon name="arrow_forward" className="text-2xl" />
            </button>
        </div>

        {/* Reflection Peek */}
        <div className="w-full bg-[#2c2219] rounded-t-[32px] pt-1 pb-8 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/5 relative overflow-hidden group cursor-pointer hover:bg-[#362a20] transition-colors">
            <div className="w-full flex justify-center py-3">
                <div className="w-12 h-1.5 rounded-full bg-white/20 group-hover:bg-white/30 transition-colors"></div>
            </div>
            <div className="px-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-primary">
                        <Icon name="psychology" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-primary font-bold uppercase tracking-wider">Reflection</span>
                        <span className="text-white text-sm font-medium">How does this verse apply to your anxiety?</span>
                    </div>
                </div>
                <Icon name="expand_less" className="text-white/40" />
            </div>
        </div>
      </div>

    </div>
  );
};