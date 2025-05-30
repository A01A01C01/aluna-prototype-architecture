import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { 
  mockEmotionalStates, 
  mockContextData, 
  mockPatternData, 
  mockHistoryPhases 
} from '@/lib/mockData';

const InputLayer = () => {
  const [inputText, setInputText] = useState('Ich fühle mich heute sehr gestresst wegen der Arbeit.');

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

  return (
    <div className="p-4 h-full">
      <div className="text-center mb-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-xl font-semibold text-cyan-400 mb-2 flex items-center justify-center">
            <ArrowRight className="mr-2 h-5 w-5" />
            Eingabeschicht
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
        {/* Natural Language Processing */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-400">
                Natürliche Sprachverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="bg-navy-700 rounded p-2 mb-2">
                <Textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-navy-400 border-none resize-none focus:outline-none text-xs"
                  rows={2}
                  placeholder="Eingabetext..."
                />
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-cyan-600 text-xs">Tokenisierung</Badge>
                <Badge className="bg-cyan-600 text-xs">Wortarten</Badge>
                <Badge className="bg-cyan-600 text-xs">Entitäten</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Emotional Signal Processing */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-400">
                Emotionale Signalverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-1 mb-2">
                {mockEmotionalStates.slice(0, 2).map((state, index) => (
                  <div key={state.emotion} className="flex justify-between items-center text-xs">
                    <span>{state.emotion}</span>
                    <span className={`text-${state.color}-400`}>{state.intensity}%</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-cyan-600 text-xs">Stimmung</Badge>
                <Badge className="bg-cyan-600 text-xs">Gefühl</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Context Extraction */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-400">
                Kontextextraktion
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-1 mb-2">
                {mockContextData.slice(0, 2).map((context, index) => (
                  <div key={context.context} className="flex items-center justify-between text-xs">
                    <span>{context.context}</span>
                    {context.detected ? (
                      <CheckCircle className="h-3 w-3 text-green-400" />
                    ) : (
                      <Clock className="h-3 w-3 text-yellow-400" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-cyan-600 text-xs">Beziehung</Badge>
                <Badge className="bg-cyan-600 text-xs">System</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Pattern Analysis */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-400">
                Musteranalyse
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="p-2 bg-navy-700 rounded mb-2">
                <div className="text-xs text-white">{mockPatternData.title}</div>
                <div className="text-xs text-cyan-400">{mockPatternData.type}</div>
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-cyan-600 text-xs">Sequenz</Badge>
                <Badge className="bg-cyan-600 text-xs">Zyklus</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* History Processing */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm text-cyan-400">
                Historienverarbeitung
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-1 mb-2">
                {mockHistoryPhases.slice(0, 2).map((phase, index) => (
                  <div key={phase.phase} className="flex items-center space-x-2 text-xs">
                    <div className={`w-2 h-2 bg-${phase.color}-400 rounded-full`}></div>
                    <span className="truncate">{phase.sessions}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1">
                <Badge className="bg-cyan-600 text-xs">Verlauf</Badge>
                <Badge className="bg-cyan-600 text-xs">Themen</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default InputLayer;
