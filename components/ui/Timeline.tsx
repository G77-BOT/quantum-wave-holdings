'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export default function Timeline({ items, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Timeline line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600 transform md:-translate-x-1/2"></div>

      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`relative flex items-center mb-12 ${
            index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
          }`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          {/* Timeline dot */}
          <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 transform md:-translate-x-1/2 z-10"></div>

          {/* Content */}
          <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
            <div className="glass-card p-6 rounded-2xl">
              <div className="flex items-center mb-3">
                {item.icon && <div className="mr-3">{item.icon}</div>}
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.year}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
