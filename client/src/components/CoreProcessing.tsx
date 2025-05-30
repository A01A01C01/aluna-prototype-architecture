import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Settings, BookOpen, Zap, Network } from 'lucide-react';
import { 
  mockMLMetrics, 
  mockAnalysisEngines, 
  mockSystemMetrics 
} from '@/lib/mockData';

const CoreProcessing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'green';
      case 'processing':
        return 'yellow';
      case 'ready':
        return 'cyan';
      default:
        return 'gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active':
        return 'Aktiv';
      case 'processing':
        return 'Verarbeitung';
      case 'ready':
        return 'Bereit';
      default:
        return 'Unbekannt';
    }
  };

  return (
    <div className="p-4 h-full">
      <div className="text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center justify-center">
            <Settings className="mr-2 h-5 w-5" />
            Kernverarbeitung
          </h2>
          <div className="w-12 h-0.5 bg-cyan-500 mx-auto"></div>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-3"
      >
        {/* Machine Learning Module */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-400">
                Maschinelles Lernmodul
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="grid grid-cols-2 gap-2 mb-2">
                {mockMLMetrics.map((metric, index) => (
                  <div key={metric.label} className="text-center p-2 bg-navy-700 rounded">
                    <div className="text-cyan-400 font-bold text-sm">{metric.value}</div>
                    <div className="text-xs text-navy-300">{metric.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-cyan-600 text-xs">Muster</Badge>
                <Badge className="bg-cyan-600 text-xs">Verstärkung</Badge>
                <Badge className="bg-cyan-600 text-xs">Transfer</Badge>
                <Badge className="bg-cyan-600 text-xs">Netze</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Systematic Analysis Engine */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400">
                Systemische Analyse-Engine
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Integration theoretischer Konzepte in KI-Entscheidungsprozesse
              </p>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockAnalysisEngines.map((engine, index) => (
                <motion.div
                  key={engine.component}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-navy-700 rounded-lg"
                >
                  <span className="text-sm">{engine.component}</span>
                  <div className="flex items-center space-x-2">
                    <div 
                      className={`w-3 h-3 bg-${getStatusColor(engine.status)}-400 rounded-full ${
                        engine.status === 'active' ? 'animate-pulse' : ''
                      }`}
                    ></div>
                    <span className={`text-xs text-${getStatusColor(engine.status)}-400`}>
                      {getStatusText(engine.status)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Dialogue Control */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400">
                Dialogsteuerung
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Intelligente Fragenauswahl basierend auf Gesprächsphase und Kontext
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-navy-700 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-white">Aktuelle Dialogphase</span>
                  <Badge className="bg-green-600 text-white">Exploration</Badge>
                </div>
                <div className="text-sm text-navy-300">
                  Optimale Fragestrategie wird berechnet...
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Phasenerkennung</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Adaptive Steuerung</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Knowledge Integration */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400">
                Wissensintegration
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Verknüpfung theoretischer Modelle mit praktischen Interventionen
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 bg-navy-700 rounded-lg cursor-pointer hover:bg-navy-600 transition-colors"
                >
                  <BookOpen className="h-6 w-6 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs text-white mt-1">Theorieabgleich</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 bg-navy-700 rounded-lg cursor-pointer hover:bg-navy-600 transition-colors"
                >
                  <Zap className="h-6 w-6 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs text-white mt-1">Praxistransfer</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 bg-navy-700 rounded-lg cursor-pointer hover:bg-navy-600 transition-colors"
                >
                  <Network className="h-6 w-6 text-cyan-400 mx-auto mb-1" />
                  <div className="text-xs text-white mt-1">Kontextanpassung</div>
                </motion.div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Theorieabgleich</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Praxistransfer</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Kontextanpassung</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Performance Metrics */}
        <motion.div variants={cardVariants}>
          <div className="grid grid-cols-3 gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-navy-800 rounded-lg p-4 border border-navy-700 text-center cursor-pointer hover:border-green-500 transition-colors"
            >
              <div className="text-2xl font-bold text-green-400 mb-1">
                {mockSystemMetrics.accuracy}%
              </div>
              <div className="text-xs text-navy-500">Erkennungsgenauigkeit</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-navy-800 rounded-lg p-4 border border-navy-700 text-center cursor-pointer hover:border-cyan-500 transition-colors"
            >
              <div className="text-2xl font-bold text-cyan-400 mb-1">
                {mockSystemMetrics.responseTime}
              </div>
              <div className="text-xs text-navy-500">Antwortlatenz</div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-navy-800 rounded-lg p-4 border border-navy-700 text-center cursor-pointer hover:border-purple-500 transition-colors"
            >
              <div className="text-2xl font-bold text-purple-400 mb-1">
                {mockSystemMetrics.scalability}
              </div>
              <div className="text-xs text-navy-500">Skalierbarkeit</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CoreProcessing;
