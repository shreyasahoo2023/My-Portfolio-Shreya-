import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Target, User, ShieldCheck } from 'lucide-react';

const ProfileCard = ({ stats, username }) => {
  if (!stats) return null;

  const displayName = stats.displayName || stats.username || username;
  const solvedText = stats.totalQuestions
    ? `${stats.totalSolved?.toLocaleString()} / ${stats.totalQuestions?.toLocaleString()}`
    : stats.totalSolved?.toLocaleString();
  const contestRating = stats.contestRating?.toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-linear-to-r from-[#ffa116]/5 to-transparent opacity-50 group-hover:opacity-100 transition-all duration-700"></div>

      <div className="flex flex-col md:flex-row items-center gap-8 relative z-10 w-full">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 5 }}
          className="relative w-32 h-32 md:w-40 md:h-40 shrink-0 rounded-full p-1.5 bg-linear-to-tr from-accent-blue via-accent-pink to-accent-gold group-hover:shadow-[0_0_40px_rgba(255,161,22,0.3)] transition-all duration-700"
        >
          <div className="w-full h-full bg-black rounded-full overflow-hidden flex items-center justify-center p-1">
            {stats.avatar ? (
              <img
                src={stats.avatar}
                alt={username}
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="w-full h-full bg-white/5 rounded-full flex items-center justify-center text-gray-500">
                <User size={64} />
              </div>
            )}
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#ffa116] p-2 rounded-xl shadow-2xl border-4 border-black">
            <ShieldCheck size={20} className="text-black" />
          </div>
        </motion.div>

        <div className="text-center md:text-left flex-1">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tighter">
            {displayName}
          </h3>
          <p className="text-accent-gold font-mono text-sm mb-6 bg-accent-gold/10 px-6 py-2 rounded-3xl border border-accent-gold/20 inline-block uppercase tracking-[0.3em]">
            @{username}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <div className="flex items-center gap-3 px-5 py-3 rounded-3xl bg-white/5 border border-white/10">
              <Target size={20} className="text-accent-blue" />
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">
                  Contest Rating
                </p>
                <p className="text-white text-lg font-black italic leading-none">
                  {contestRating || '—'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-3xl bg-white/5 border border-white/10">
              <Target size={20} className="text-accent-blue" />
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">
                  Global Ranking
                </p>
                <p className="text-white text-lg font-black italic leading-none">
                  #{stats.ranking?.toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 rounded-3xl bg-white/5 border border-white/10">
              <ShieldCheck size={20} className="text-[#ffa116]" />
              <div>
                <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest leading-none mb-1">
                  Total Solved
                </p>
                <p className="text-white text-lg font-black italic leading-none">
                  {solvedText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full md:w-auto mt-6 md:mt-0">
        <a
          href={`https://leetcode.com/u/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full md:w-auto whitespace-nowrap px-8 py-5 rounded-3xl bg-linear-to-r from-[#ffa116] via-[#ffb900] to-accent-gold text-white font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_15px_40px_rgba(255,161,22,0.3)] hover:shadow-[0_20px_50px_rgba(255,161,22,0.5)] border border-white/20"
        >
          View Full Profile <ExternalLink size={20} />
        </a>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
