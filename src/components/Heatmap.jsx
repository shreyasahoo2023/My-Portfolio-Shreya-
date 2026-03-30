import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Info, Flame } from 'lucide-react';

const Heatmap = ({ calendar, stats, filter, streakInfo }) => {
  const processedData = useMemo(() => {
    if (!calendar) return null;

    const heatmap = [];
    const end = new Date();
    const start = new Date();
    
    if (filter === 'Last Year') {
      start.setFullYear(end.getFullYear() - 1);
      start.setMonth(0);
      start.setDate(1);
    } else {
      start.setDate(end.getDate() - 364);
    }

    const submissions = calendar || {};
    for (let i = 0; i < 365; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      const dStr = d.toISOString().split('T')[0];
      const count = submissions[dStr] || 0;
      let level = 0;
      if (count > 0) level = 1;
      if (count >= 3) level = 2;
      if (count >= 6) level = 3;
      if (count >= 10) level = 4;
      heatmap.push({ date: dStr, count, level, dateObj: d });
    }

    const monthLabels = [];
    let prevMonth = -1;
    heatmap.forEach((day, idx) => {
      const col = Math.floor(idx / 7);
      const m = day.dateObj.getMonth();
      if (m !== prevMonth && col < 50) {
        monthLabels.push({ name: day.dateObj.toLocaleString('default', { month: 'short' }), col });
        prevMonth = m;
      }
    });

    return { heatmap, monthLabels };
  }, [calendar, filter]);

  const getLevelColor = (level) => {
    switch(level) {
      case 4: return 'bg-[#216e39]'; // Darkest Green
      case 3: return 'bg-[#30a14e]'; 
      case 2: return 'bg-[#40c463]'; 
      case 1: return 'bg-[#9be9a8]'; // Lightest Green
      default: return 'bg-white/5';  // Empty
    }
  };

  if (!processedData) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-xl overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div className="flex flex-col">
           <div className="flex items-center gap-2 mb-1">
             <h3 className="text-white text-2xl font-black">{stats?.totalSolved || 0} submissions</h3>
             <span className="text-gray-500">in the past one year</span>
             <Info size={14} className="text-gray-600" />
           </div>
           <div className="flex items-center gap-6 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <span>Total active days: <span className="text-white">{stats?.totalActiveDays || 149}</span></span>
              <span>Max streak: <span className="text-white">{stats?.maxStreak || 54}</span></span>
           </div>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="min-w-[750px] pr-8">
          <div className="grid grid-rows-7 grid-flow-col gap-[5px] mb-6">
            {processedData.heatmap.map((day, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 52) * 0.005 }}
                whileHover={{ 
                   scale: 1.5, 
                   zIndex: 50, 
                   borderRadius: '4px',
                   boxShadow: '0 0 15px rgba(0,0,0,0.1)'
                }}
                className={`w-[14px] h-[14px] rounded-sm transition-all duration-300 ${getLevelColor(day.level)} cursor-crosshair group relative`}
              >
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 border border-gray-800 text-white text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-[100] shadow-2xl">
                  {day.count} solved on {new Date(day.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative h-6 flex items-center text-[10px] font-black text-gray-500 uppercase tracking-[0.3em]">
            {processedData.monthLabels.map((lbl, idx) => (
              <span key={idx} className="absolute inline-block w-8 text-center -translate-x-1/2" style={{ left: `${(lbl.col / 51) * 100}%` }}>
                {lbl.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10 text-gray-400">
         <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest">
            <Info size={12} /> Hover over squares to see daily activity
         </div>
         <div className="flex items-center gap-3">
            <span className="text-[10px] font-black uppercase tracking-widest mr-2">Intensity</span>
            {[0, 1, 2, 3, 4].map(l => (
              <div key={l} className={`w-3.5 h-3.5 rounded-sm ${getLevelColor(l)} transition-transform hover:scale-125 border border-black/5`}></div>
            ))}
         </div>
      </div>
    </motion.div>
  );
};

export default Heatmap;
