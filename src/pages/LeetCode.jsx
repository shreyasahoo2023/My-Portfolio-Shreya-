import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import {
  RefreshCcw,
  Code2,
  Clock,
  Flame,
  Rocket,
  CalendarDays,
} from 'lucide-react';

import Heatmap from '../components/Heatmap';
import LeetCodeStats from '../components/LeetCodeStats';
import LeetCodeChart from '../components/LeetCodeChart';
import ProfileCard from '../components/ProfileCard';
import Badges from '../components/Badges';
import {
  FALLBACK_LEETCODE_PROFILE,
  calculateStreakInfo,
  normalizeLeetCodeProfile,
} from '../utils/leetcodeProfile';

const LeetCode = () => {
  const [stats, setStats] = useState(FALLBACK_LEETCODE_PROFILE);
  const [filter, setFilter] = useState('Current');
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState('snapshot');

  const username = 'Shreya145-_';

  const fetchData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(
        `https://leetcode-stats-api.herokuapp.com/${username}`,
      );
      const data = await res.json();
      if (data?.status === 'success') {
        setStats(normalizeLeetCodeProfile(data));
        setLastUpdated(new Date());
        setDataSource('live');
      } else {
        setStats(FALLBACK_LEETCODE_PROFILE);
        setDataSource('snapshot');
      }
    } catch (err) {
      console.error('LeetCode Sync Error:', err);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 300000); // 5 mins sync
    return () => clearInterval(interval);
  }, []);

  const streakInfo = useMemo(() => {
    return calculateStreakInfo(stats?.submissionCalendar, stats);
  }, [stats]);

  return (
    <section
      id="leetcode"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-150 h-150 bg-accent-blue/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-150 h-150 bg-accent-pink/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-2.5 rounded-2xl bg-[#ffa116]/10 border border-[#ffa116]/20 flex items-center justify-center">
                <Code2 className="text-[#ffa116]" size={20} />
              </div>
              <span className="text-[#ffa116] font-black uppercase tracking-[0.4em] text-[10px]">
                Real-time Sync Active
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none mb-4"
            >
              LeetCode <br />{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#ffa116] via-[#ff6b00] to-accent-gold">
                Dashboard
              </span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-end gap-4"
          >
            <div className="flex items-center gap-6 glass px-8 py-4 rounded-3xl border-white/10 shadow-xl">
              <div className="flex flex-col">
                <span className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">
                  Last Update
                </span>
                <span className="text-white font-bold flex items-center gap-2">
                  <Clock size={14} className="text-[#ffa116]" />
                  {lastUpdated?.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
              </div>
              <div className="w-px h-8 bg-white/10"></div>
              <button
                onClick={fetchData}
                disabled={isRefreshing}
                className={`p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all ${isRefreshing ? 'animate-spin' : ''}`}
              >
                <RefreshCcw size={20} className="text-white" />
              </button>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 text-right">
              {dataSource === 'live'
                ? 'Live profile sync active'
                : 'Public profile snapshot shown until the LeetCode API responds'}
            </p>
          </motion.div>
        </div>

        {/* 1. TOP SECTION (PROFILE + LINK) */}
        <ProfileCard stats={stats} username={username} />

        {/* 2. STREAK SECTION (Above Heatmap) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-6 rounded-3xl border border-orange-500/20 shadow-[0_0_30px_rgba(249,115,22,0.1)] flex items-center gap-6"
          >
            <div className="p-4 rounded-2xl bg-orange-500/10 text-orange-500">
              <Flame size={32} />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Current Streak
              </p>
              <p className="text-3xl font-black text-white">
                {streakInfo.current}{' '}
                <span className="text-sm font-bold text-gray-500">Days</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6 rounded-3xl border border-accent-pink/20 shadow-[0_0_30px_rgba(236,72,153,0.1)] flex items-center gap-6"
          >
            <div className="p-4 rounded-2xl bg-accent-pink/10 text-accent-pink">
              <Rocket size={32} />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Max Streak
              </p>
              <p className="text-3xl font-black text-white">
                {streakInfo.max}{' '}
                <span className="text-sm font-bold text-gray-500">Days</span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6 rounded-3xl border border-accent-blue/20 shadow-[0_0_30px_rgba(59,130,246,0.1)] flex items-center gap-6"
          >
            <div className="p-4 rounded-2xl bg-accent-blue/10 text-accent-blue">
              <CalendarDays size={32} />
            </div>
            <div>
              <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-1">
                Total Active
              </p>
              <p className="text-3xl font-black text-white">
                {streakInfo.totalActive}{' '}
                <span className="text-sm font-bold text-gray-500">Days</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3. HEATMAP */}
        <div className="mb-12">
          <Heatmap
            calendar={stats?.submissionCalendar}
            stats={stats}
            filter={filter}
            onFilterChange={setFilter}
            streakInfo={streakInfo}
          />
        </div>

        {/* 4. STATS CARDS */}
        <LeetCodeStats stats={stats} streakInfo={streakInfo} />

        {/* 5. CHARTS */}
        <LeetCodeChart stats={stats} />

        {/* 6. BADGES SECTION */}
        <div className="mb-24">
          <Badges stats={stats} streakInfo={streakInfo} />
        </div>
      </div>
    </section>
  );
};

export default LeetCode;
