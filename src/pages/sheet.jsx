import React, { useState } from "react";
import { dsadata } from "../data/dsadata";
import { ChevronDown, ChevronUp, ExternalLink, CheckCircle } from "lucide-react";

export default function Sheet() {
  const [openTopic, setOpenTopic] = useState(null);
  const [completedProblems, setCompletedProblems] = useState({});
  const totalProblems = dsadata.reduce((sum, topic) => sum + topic.problems.length, 0);
  const totalTopics = dsadata.length;
  
  // Calculate completed count
  const completedCount = Object.values(completedProblems).filter(Boolean).length;
  const progressPercentage = (completedCount / totalProblems) * 100;

  const toggleProblemCompletion = (topicName, problemIndex) => {
    const key = `${topicName}-${problemIndex}`;
    setCompletedProblems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-4 py-4 sm:py-8">
        
        {/* New Header Section - From the image design */}
        <div className="mb-6 sm:mb-10">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6">
              <div className="w-full md:w-auto">
                <h1 className="text-xl sm:text-3xl font-bold text-white mb-2">
                  DSA Sheet - Most Important Interview Questions
                </h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-gray-300 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-xs sm:text-base">All DSA topics covered</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2 flex-wrap text-xs sm:text-base">
                    <span className="text-green-400 font-semibold">Easy: 41</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-yellow-400 font-semibold">Medium: 119</span>
                    <span className="text-gray-400">|</span>
                    <span className="text-red-400 font-semibold">Hard: 33</span>
                  </div>
                </div>
              </div>
              
              {/* Right side stats */}
              <div className="flex flex-col gap-4 w-full md:min-w-[200px] md:w-auto">
                <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-xs sm:text-sm">Progress</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl sm:text-2xl font-bold text-white">{completedCount} / {totalProblems}</span>
                    <div className="relative">
                      <div className="w-12 h-12 sm:w-16 sm:h-16">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#374151"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845
                              a 15.9155 15.9155 0 0 1 0 31.831
                              a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="3"
                            strokeDasharray={`${progressPercentage}, 100`}
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                        {progressPercentage.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Original Header (Kept but modified) */}
          <div className="mb-6 sm:mb-8">
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-1.5 h-6 sm:h-8 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              <h2 className="text-lg sm:text-2xl font-bold text-gray-100">
                Problem Categories
              </h2>
            </div>
            
            {/* Stats */}
            <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm flex-wrap">
              <div className="text-gray-300">
                <span className="font-bold text-green-400">{totalTopics}</span> Topics
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-green-400">{totalProblems}</span> Problems
              </div>
              <div className="text-gray-300">
                <span className="font-bold text-yellow-400">15+</span> Categories
              </div>
            </div>
          </div>
        </div>

        {/* Topics Accordion */}
        <div className="space-y-2">
          {dsadata.map((topicItem, index) => {
            const isOpen = openTopic === topicItem.topic;
            const totalProblemsInTopic = topicItem.problems.length;
            const easyCount = topicItem.problems.filter(p => p.level === "Easy").length;
            const mediumCount = topicItem.problems.filter(p => p.level === "Medium").length;
            const hardCount = topicItem.problems.filter(p => p.level === "Hard").length;

            // Count completed problems in this topic
            const completedInTopic = topicItem.problems.reduce((count, _, i) => {
              const key = `${topicItem.topic}-${i}`;
              return completedProblems[key] ? count + 1 : count;
            }, 0);

            return (
              <div key={topicItem.topic} className="group">
                {/* Topic Header */}
                <div
                  onClick={() => setOpenTopic(isOpen ? null : topicItem.topic)}
                  className="relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800/50 
                             hover:bg-gray-800 cursor-pointer transition-all duration-200"
                >
                  <div className="relative z-10 flex justify-between items-center p-3 sm:p-4">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-gray-700/50 border border-gray-600 flex-shrink-0">
                        <span className="text-xs sm:text-sm font-bold text-gray-300">{index + 1}</span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-sm sm:text-base font-semibold text-gray-100 truncate sm:whitespace-normal">
                          {topicItem.topic}
                        </h2>
                        <div className="flex items-center gap-1.5 sm:gap-2 mt-1 flex-wrap">
                          <span className="text-xs text-gray-400">{totalProblemsInTopic} problems</span>
                          {/* Fixed: Removed ml-20 and kept consistent spacing */}
                          {easyCount >= 0 && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">
                              {easyCount}E
                            </span>
                          )}
                          {mediumCount > 0 && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                              {mediumCount}M
                            </span>
                          )}
                          {hardCount > 0 && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/20 text-red-400 border border-red-500/30">
                              {hardCount}H
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-2">
                      {/* Checkbox progress */}
                      <div className="hidden sm:flex items-center gap-1">
                        {[...Array(10)].map((_, i) => {
                          const problemIndex = i;
                          const isCompleted = problemIndex < completedInTopic;
                          const isActive = problemIndex < totalProblemsInTopic;
                          
                          return (
                            <div
                              key={i}
                              className={`w-2 h-4 rounded-sm ${
                                isActive
                                  ? isCompleted
                                    ? 'bg-green-500'
                                    : 'bg-gray-600'
                                  : 'bg-gray-800'
                              }`}
                            />
                          );
                        })}
                        <span className="text-xs text-gray-400 ml-2">
                          {completedInTopic}/{totalProblemsInTopic}
                        </span>
                      </div>
                      
                      {/* Mobile progress */}
                      <div className="flex sm:hidden items-center">
                        <span className="text-xs text-gray-400">
                          {completedInTopic}/{totalProblemsInTopic}
                        </span>
                      </div>
                      
                      <div className="text-gray-400">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Problems Table */}
                {isOpen && (
                  <div className="mt-1 rounded-lg border border-gray-700 bg-gray-800/30 overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-700">
                            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs font-semibold text-gray-400 w-8 sm:w-12"></th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 text-left text-xs font-semibold text-gray-400">Problem</th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs font-semibold text-gray-400 w-16 sm:w-20 hidden sm:table-cell">Status</th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs font-semibold text-gray-400 w-16 sm:w-24">Difficulty</th>
                            <th className="py-2 sm:py-3 px-2 sm:px-4 text-center text-xs font-semibold text-gray-400 w-12 sm:w-16">Link</th>
                          </tr>
                        </thead>
                        <tbody>
                          {topicItem.problems.map((problem, i) => {
                            const key = `${topicItem.topic}-${i}`;
                            const isCompleted = completedProblems[key];
                            const UTM = "utm_source=coderearth&utm_medium=dsasheet";
                            const problemLink = `${problem.link}${problem.link.includes('?') ? '&' : '?'}${UTM}`;
                            
                            return (
                              <tr 
                                key={problem.name}
                                className="border-b border-gray-700/50 hover:bg-gray-800/50 transition-colors last:border-0"
                              >
                                <td className="py-2 sm:py-3 px-2 sm:px-4">
                                  <div className="flex items-center gap-2 sm:gap-3">
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        toggleProblemCompletion(topicItem.topic, i);
                                      }}
                                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded border flex items-center justify-center transition-all flex-shrink-0
                                        ${isCompleted 
                                          ? 'bg-green-500 border-green-500' 
                                          : 'bg-gray-700 border-gray-600 hover:border-green-500'}`}
                                    >
                                      {isCompleted && (
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div>
                                      )}
                                    </button>
                                    <span className="text-xs text-gray-500 font-mono hidden sm:inline">{i + 1}</span>
                                  </div>
                                </td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4">
                                  <a 
                                    href={problemLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`text-xs sm:text-sm ${isCompleted ? 'text-gray-400' : 'text-gray-200 hover:text-white'} transition-colors line-clamp-2 sm:line-clamp-none`}
                                  >
                                    {problem.name}
                                  </a>
                                </td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center hidden sm:table-cell">
                                  <span className={`text-xs ${isCompleted ? 'text-green-400' : 'text-gray-500'}`}>
                                    {isCompleted ? 'Completed' : ' Pending'}
                                  </span>
                                </td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                                  <span className={`inline-flex items-center justify-center w-full px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-xs font-medium
                                    ${problem.level === "Easy" ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                                      problem.level === "Medium" ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                                      'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                                    {problem.level.charAt(0)}
                                    <span className="hidden sm:inline">{problem.level.slice(1)}</span>
                                  </span>
                                </td>
                                <td className="py-2 sm:py-3 px-2 sm:px-4 text-center">
                                  <a 
                                    href={problemLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-8 h-7 sm:w-10 sm:h-8 rounded-md bg-gray-700/50 
                                               border border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white 
                                               hover:border-gray-500 transition-all"
                                  >
                                    <ExternalLink size={12} className="sm:hidden" />
                                    <ExternalLink size={14} className="hidden sm:block" />
                                  </a>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}