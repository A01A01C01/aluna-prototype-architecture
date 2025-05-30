import { motion } from 'framer-motion';
import ArchitecturalDiagram from '@/components/ArchitecturalDiagram';
import { Network, Brain, Cpu } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="bg-navy-900 text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border-b-2 border-cyan-500/30 py-4 sm:py-6 sticky top-0 z-10 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-center space-y-4">
              <div className="relative inline-block">
                {/* Futuristic Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -right-2 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300"></div>
                  <div className="absolute -bottom-3 -left-2 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-700"></div>
                  <div className="absolute -bottom-1 -right-4 w-1 h-1 bg-pink-400 rounded-full animate-ping delay-500"></div>
                </div>
                
                {/* Holographic Grid Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent transform skew-y-1"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent transform -skew-x-1"></div>
                
                {/* Main Title */}
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-wider">
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                    A
                  </span>
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-300 bg-clip-text text-transparent animate-pulse delay-100">
                    L
                  </span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-pulse delay-200">
                    U
                  </span>
                  <span className="bg-gradient-to-r from-pink-400 via-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse delay-300">
                    N
                  </span>
                  <span className="bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse delay-400">
                    A
                  </span>
                </h1>
                
                {/* Glowing Border Effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-xl -z-10 rounded-xl animate-pulse"></div>
                
                {/* Human Brain with Neural Chip Interface - Left */}
                <div className="absolute top-1/2 -left-20 sm:-left-32 lg:-left-40 transform -translate-y-1/2 hidden sm:block">
                  <div className="relative">
                    <Brain className="w-8 h-8 sm:w-10 lg:w-12 sm:h-10 lg:h-12 text-pink-400/70 animate-pulse" />
                    <Cpu className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400 absolute -bottom-1 -right-1 animate-pulse delay-300" />
                    <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-300 rounded-full animate-ping delay-200"></div>
                    <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-blue-400 rounded-full animate-pulse delay-500"></div>
                    <div className="absolute top-4 left-6 sm:left-8 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping delay-700"></div>
                  </div>
                </div>
                
                {/* AI Neural Network with Brain Interface - Right */}
                <div className="absolute top-1/2 -right-20 sm:-right-32 lg:-right-40 transform -translate-y-1/2 hidden sm:block">
                  <div className="relative">
                    <Network className="w-8 h-8 sm:w-10 lg:w-12 sm:h-10 lg:h-12 text-purple-400/70 animate-pulse delay-300" />
                    <Brain className="w-3 h-3 sm:w-4 sm:h-4 text-pink-400 absolute -top-1 -left-1 animate-pulse delay-600" />
                    <div className="absolute top-3 -left-2 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-400"></div>
                    <div className="absolute -bottom-1 -right-1 w-0.5 h-0.5 bg-pink-400 rounded-full animate-pulse delay-700"></div>
                    <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-0.5 h-0.5 bg-cyan-300 rounded-full animate-ping delay-900"></div>
                  </div>
                </div>
                

              </div>
              
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <span className="text-sm sm:text-base lg:text-lg font-light text-cyan-100 tracking-[0.15em] sm:tracking-[0.25em] uppercase text-center">
                  Implementierungsarchitektur
                </span>
                <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-transparent to-cyan-400"></div>
              </div>
            </div>
            
            {/* Language Support Flags */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
              <span className="text-xs text-navy-400 font-medium">Polyglot-fähig:</span>
              <div className="flex items-center flex-wrap justify-center gap-1 sm:gap-2">
                <div className="flex items-center space-x-1 bg-navy-700/50 px-1.5 sm:px-2 py-1 rounded-full border border-navy-600/30">
                  <span className="text-sm sm:text-lg">🇺🇸</span>
                  <span className="text-xs text-navy-300">EN</span>
                </div>
                <div className="flex items-center space-x-1 bg-navy-700/50 px-1.5 sm:px-2 py-1 rounded-full border border-navy-600/30">
                  <span className="text-sm sm:text-lg">🇩🇪</span>
                  <span className="text-xs text-navy-300">DE</span>
                </div>
                <div className="flex items-center space-x-1 bg-navy-700/50 px-1.5 sm:px-2 py-1 rounded-full border border-navy-600/30">
                  <span className="text-sm sm:text-lg">🇫🇷</span>
                  <span className="text-xs text-navy-300">FR</span>
                </div>
                <div className="flex items-center space-x-1 bg-navy-700/50 px-1.5 sm:px-2 py-1 rounded-full border border-navy-600/30">
                  <span className="text-sm sm:text-lg">🇪🇸</span>
                  <span className="text-xs text-navy-300">ES</span>
                </div>
                <div className="flex items-center space-x-1 bg-navy-700/50 px-1.5 sm:px-2 py-1 rounded-full border border-navy-600/30">
                  <span className="text-sm sm:text-lg">🇯🇵</span>
                  <span className="text-xs text-navy-300">JP</span>
                </div>
                <div className="flex items-center space-x-1 bg-navy-700/50 px-1.5 sm:px-2 py-1 rounded-full border border-navy-600/30">
                  <span className="text-sm sm:text-lg">🇸🇦</span>
                  <span className="text-xs text-navy-300">AR</span>
                </div>
              </div>
            </div>
            
            <div className="mt-3 w-24 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </header>

      {/* Main Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8"
        >
          <ArchitecturalDiagram />
        </motion.div>

        {/* Enhanced System Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-8"
        >
          <div className="bg-gradient-to-r from-navy-800 to-navy-750 border border-navy-600 rounded-lg p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                <span className="text-lg font-bold text-cyan-400">System Metriken</span>
              </div>
              
              <div className="flex items-center space-x-2 bg-green-900/30 px-3 py-1 rounded-full border border-green-500/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Vollständig Operativ</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-navy-700/50 rounded-lg p-4 border border-navy-600/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-navy-300">KI Genauigkeit</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                </div>
                <div className="text-2xl font-bold text-green-400">95.7%</div>
                <div className="text-xs text-green-300">+2.3% heute</div>
              </div>

              <div className="bg-navy-700/50 rounded-lg p-4 border border-navy-600/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-navy-300">Antwortzeit</span>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                </div>
                <div className="text-2xl font-bold text-cyan-400">143ms</div>
                <div className="text-xs text-cyan-300">Durchschnitt</div>
              </div>

              <div className="bg-navy-700/50 rounded-lg p-4 border border-navy-600/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-navy-300">Verarbeitungsrate</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                </div>
                <div className="text-2xl font-bold text-purple-400">1.2k/s</div>
                <div className="text-xs text-purple-300">Anfragen</div>
              </div>

              <div className="bg-navy-700/50 rounded-lg p-4 border border-navy-600/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-navy-300">Systemlast</span>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                </div>
                <div className="text-2xl font-bold text-yellow-400">34%</div>
                <div className="text-xs text-yellow-300">CPU/Memory</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between text-xs text-navy-400">
              <span>Letzte Aktualisierung: {new Date().toLocaleTimeString('de-DE')}</span>
              <span>Uptime: 99.98%</span>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Dashboard;
