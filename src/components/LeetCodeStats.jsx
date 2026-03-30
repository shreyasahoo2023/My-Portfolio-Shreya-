import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Trophy, TrendingUp, Zap, Award } from 'lucide-react';

const LeetCodeStats = ({ stats, streakInfo }) => {
  if (!stats) return null;

  const cards = [
    {
      label: 'Total Solved',
      value: stats.totalSolved,
      icon: <Trophy size={24} />,
      gradient: 'from-accent-gold via-[#ffb900] to-orange-500',
      shadow: 'shadow-accent-gold/20',
      sub: `Top ${((stats.ranking / 5000000) * 100).toFixed(1)}% Global`
    },
    {
      label: 'Current Streak',
      value: streakInfo?.current || 0,
      icon: <Flame size={24} />,
      gradient: 'from-orange-500 via-accent-pink to-[#ff0080]',
      shadow: 'shadow-accent-pink/20',
      sub: `Max: ${streakInfo?.max || 0} Days`
    },
    {
      label: 'Global Rank',
      value: `#${stats.ranking?.toLocaleString()}`,
      icon: <Target size={24} />,
      gradient: 'from-accent-blue via-[#00d4ff] to-cyan-400',
      shadow: 'shadow-accent-blue/20',
      sub: 'Real-time Ranking'
    },
    {
      label: 'Accepted Rate',
      value: `${stats.acceptanceRate || 0}%`,
      icon: <TrendingUp size={24} />,
      gradient: 'from-[#8e2de2] via-accent-pink to-accent-gold',
      shadow: 'shadow-purple-500/20',
      sub: 'Problem Accuracy'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          whileHover={{ y: -10, scale: 1.02 }}
          className={`relative group h-full`}
        >
          {/* Advanced Glassmorphism Card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem] blur-sm -z-10 opacity-50 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="h-full glass-card p-8 rounded-[2.5rem] border border-white/10 flex flex-col justify-between relative overflow-hidden bg-black/40 backdrop-blur-2xl transition-all duration-500 group-hover:border-white/20">
            {/* Animated Background Gradient */}
            <div className={`absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br ${card.gradient} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity duration-700`}></div>
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{card.label}</span>
              <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 text-white shadow-xl ${card.shadow} group-hover:scale-110 transition-transform duration-500`}>
                {card.icon}
              </div>
            </div>
            
            <div className="relative z-10">
              <motion.p 
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter drop-shadow-2xl"
              >
                {card.value}
              </motion.p>
              <div className="flex items-center gap-2">
                 <div className={`w-1 h-3 rounded-full bg-gradient-to-b ${card.gradient}`}></div>
                 <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{card.sub}</p>
              </div>
            </div>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${card.gradient} opacity-30 group-hover:opacity-100 transition-opacity duration-500`}></div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LeetCodeStats;
