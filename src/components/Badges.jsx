import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Flame, Target, Star, Crown } from 'lucide-react';

const Badges = ({ stats, streakInfo }) => {
  if (!stats) return null;

  const badges = [
    {
      name: 'Consistency Badge',
      earned: streakInfo?.current >= 7,
      icon: <Flame className="text-orange-500" size={32} />,
      color: 'orange-500',
      description: '7+ Days Streak'
    },
    {
      name: 'Problem Solver',
      earned: stats.totalSolved >= 50,
      icon: <Award className="text-accent-pink" size={32} />,
      color: 'accent-pink',
      description: '50+ Solved'
    },
    {
      name: 'Advanced Solver',
      earned: stats.totalSolved >= 100,
      icon: <Trophy className="text-accent-gold" size={32} />,
      color: 'accent-gold',
      description: '100+ Solved'
    },
    {
      name: 'Top Rank Badge',
      earned: (stats.ranking / 5000000) <= 0.1,
      icon: <Target className="text-accent-blue" size={32} />,
      color: 'accent-blue',
      description: 'Top 10% Global'
    }
  ];

  return (
    <div className="glass-card p-8 rounded-[2rem] border border-white/10 shadow-2xl h-full">
      <h3 className="text-white text-lg font-black uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
        <Crown size={20} className="text-accent-gold" /> Achievements
      </h3>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {badges.map((badge, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.05 }}
            className={`flex flex-col items-center justify-center p-6 rounded-3xl border border-white/10 relative overflow-hidden group transition-all duration-500 ${badge.earned ? 'bg-white/5 opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'opacity-40 grayscale cursor-not-allowed'}`}
          >
            {badge.earned && (
              <div className={`absolute inset-0 bg-gradient-to-br from-${badge.color}/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            )}
            
            <div className={`mb-3 relative z-10 transition-transform duration-500 ${badge.earned ? 'group-hover:scale-125 group-hover:rotate-12' : ''}`}>
              {badge.icon}
            </div>
            
            <span className="text-[10px] text-gray-300 font-black uppercase tracking-widest text-center relative z-10 block mb-1">
              {badge.name}
            </span>
            <span className="text-[8px] text-gray-500 font-bold uppercase tracking-widest text-center relative z-10 block">
              {badge.description}
            </span>
            
            {badge.earned && (
              <motion.div
                layoutId="glow"
                className={`absolute inset-0 bg-${badge.color}/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
