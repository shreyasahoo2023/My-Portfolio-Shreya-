import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Flame, Target, Star, Crown } from 'lucide-react';

const Badges = ({ stats, streakInfo }) => {
  if (!stats) return null;

  const colorToneMap = {
    'orange-500': '#f97316',
    'accent-pink': '#ec4899',
    'accent-gold': '#f59e0b',
    'accent-blue': '#3b82f6',
  };

  const badges = [
    {
      name: 'Consistency Badge',
      earned: streakInfo?.current >= 7,
      icon: <Flame className="text-orange-500" size={32} />,
      color: 'orange-500',
      description: '7+ Days Streak',
    },
    {
      name: 'Problem Solver',
      earned: stats.totalSolved >= 50,
      icon: <Award className="text-accent-pink" size={32} />,
      color: 'accent-pink',
      description: '50+ Solved',
    },
    {
      name: 'Advanced Solver',
      earned: stats.totalSolved >= 100,
      icon: <Trophy className="text-accent-gold" size={32} />,
      color: 'accent-gold',
      description: '100+ Solved',
    },
    {
      name: 'Top Rank Badge',
      earned: Number(stats.ranking) > 0 && Number(stats.ranking) <= 500000,
      icon: <Target className="text-accent-blue" size={32} />,
      color: 'accent-blue',
      description: 'Top 10% Global',
    },
  ];

  return (
    <div className="glass-card p-8 rounded-4xl border border-white/10 shadow-2xl h-full">
      <div className="mb-8 flex flex-col gap-2">
        <h3 className="text-white text-lg font-black uppercase tracking-[0.2em] flex items-center gap-3">
          <Crown size={20} className="text-accent-gold" /> Achievements
        </h3>
        <p className="text-gray-500 text-sm">
          Most recent badge:{' '}
          <span className="text-white">
            {stats.recentBadge || 'Unavailable'}
          </span>
        </p>
      </div>

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
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(135deg, ${colorToneMap[badge.color] || '#ffffff'}22, transparent)`,
                }}
              ></div>
            )}

            <div
              className={`mb-3 relative z-10 transition-transform duration-500 ${badge.earned ? 'group-hover:scale-125 group-hover:rotate-12' : ''}`}
            >
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
                className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  backgroundColor: `${colorToneMap[badge.color] || '#ffffff'}14`,
                }}
              ></motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Badges;
