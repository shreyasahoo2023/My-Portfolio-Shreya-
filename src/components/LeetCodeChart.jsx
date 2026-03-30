import React from 'react';
import { motion } from 'framer-motion';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip,
  AreaChart,
  Area
} from 'recharts';
import { Activity, PieChart as PieIcon, TrendingUp } from 'lucide-react';

const LeetCodeChart = ({ stats }) => {
  if (!stats) return null;

  const pieData = [
    { name: 'Easy', value: stats.easySolved, color: '#00b8a3' },
    { name: 'Medium', value: stats.mediumSolved, color: '#ffc01e' },
    { name: 'Hard', value: stats.hardSolved, color: '#ff375f' }
  ];

  // Mock data for problems solved over time (Professional visual)
  const barData = [
    { name: 'Jan', solved: 12 },
    { name: 'Feb', solved: 18 },
    { name: 'Mar', solved: 25 },
    { name: 'Apr', solved: 32 },
    { name: 'May', solved: 28 },
    { name: 'Jun', solved: 45 },
    { name: 'Jul', solved: 38 },
    { name: 'Aug', solved: 52 },
    { name: 'Sep', solved: 48 },
    { name: 'Oct', solved: 65 },
    { name: 'Nov', solved: 55 },
    { name: 'Dec', solved: 72 },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      
      {/* Pie Chart: Distribution */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 rounded-[2.5rem] border border-white/10"
      >
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <PieIcon size={16} className="text-accent-pink" /> Problem Distribution
           </h3>
           <div className="flex gap-4">
              {pieData.map((d, i) => (
                <div key={i} className="flex items-center gap-1.5">
                   <div className="w-2 h-2 rounded-full" style={{ backgroundColor: d.color }}></div>
                   <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{d.name}</span>
                </div>
              ))}
           </div>
        </div>
        
        <div className="h-64 w-full">
           <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                 <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={8}
                    dataKey="value"
                    stroke="none"
                 >
                    {pieData.map((entry, index) => (
                       <Cell 
                          key={`cell-${index}`} 
                          fill={entry.color} 
                          style={{ filter: `drop-shadow(0px 0px 8px ${entry.color}40)` }} 
                       />
                    ))}
                 </Pie>
                 <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(5,5,5,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '10px' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                 />
              </PieChart>
           </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-8">
           {pieData.map((d, i) => (
             <div key={i} className="text-center">
                <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">{d.name}</p>
                <p className="text-xl font-bold text-white">{d.value}</p>
             </div>
           ))}
        </div>
      </motion.div>

      {/* Bar Chart: Yearly Growth */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-card p-8 rounded-[2.5rem] border border-white/10"
      >
        <div className="flex items-center justify-between mb-8">
           <h3 className="text-white text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <TrendingUp size={16} className="text-accent-blue" /> Yearly Growth Velocity
           </h3>
           <div className="px-3 py-1 bg-white/5 rounded-full border border-white/10">
              <span className="text-[10px] text-[#ffa116] font-black uppercase tracking-widest">+240% Progress</span>
           </div>
        </div>

        <div className="h-64 w-full">
           <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                 <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                       <stop offset="0%" stopColor="#ffa116" stopOpacity={0.8}/>
                       <stop offset="100%" stopColor="#ffa116" stopOpacity={0.2}/>
                    </linearGradient>
                 </defs>
                 <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#4b5563', fontSize: 10, fontWeight: 700 }}
                 />
                 <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                    contentStyle={{ backgroundColor: 'rgba(5,5,5,0.95)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', fontSize: '10px' }}
                 />
                 <Bar 
                    dataKey="solved" 
                    fill="url(#barGradient)" 
                    radius={[6, 6, 0, 0]}
                    animationDuration={2000}
                 />
              </BarChart>
           </ResponsiveContainer>
        </div>
        
        <div className="mt-8 flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
           <span>Growth Curve 2025</span>
           <span className="text-white">Active Pursuit</span>
        </div>
      </motion.div>

    </div>
  );
};

export default LeetCodeChart;
