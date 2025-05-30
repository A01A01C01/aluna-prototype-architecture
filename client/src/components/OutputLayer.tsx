import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, MessageSquare, Target, Heart, RefreshCw, Users } from 'lucide-react';
import { 
  mockQuestionGeneration, 
  mockInterventionOptions, 
  mockResponseData, 
  mockFeedbackMetrics,
  mockRelationshipMetrics 
} from '@/lib/mockData';

const OutputLayer = () => {
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

  const getEffectivenessColor = (percentage: number) => {
    if (percentage >= 80) return 'green';
    if (percentage >= 60) return 'yellow';
    if (percentage >= 40) return 'cyan';
    return 'purple';
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-cyan-400 mb-2 flex items-center justify-center">
            <ArrowLeft className="mr-3 h-6 w-6" />
            Ausgabeschicht
          </h2>
          <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {/* Question Generation */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400 flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                Fragengenerierung
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Kontextangepasste Formulierung systemischer Fragen
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-navy-700 rounded-lg">
                <div className="text-sm font-medium text-cyan-400 mb-2">Generierte Frage:</div>
                <div className="text-sm italic text-white leading-relaxed">"{mockQuestionGeneration.question}"</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-3 bg-navy-700 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg">{mockQuestionGeneration.type}</div>
                  <div className="text-xs text-navy-300 mt-1">Fragentyp</div>
                </div>
                <div className="text-center p-3 bg-navy-700 rounded-lg">
                  <div className="text-green-400 font-bold text-lg">{mockQuestionGeneration.relevance}/10</div>
                  <div className="text-xs text-navy-300 mt-1">Relevanz</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Zirkuläre Fragen</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Hypothetische Fragen</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Skalierungsfragen</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Wunderfragen</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Intervention Selection */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400 flex items-center">
                <Target className="mr-2 h-5 w-5" />
                Interventionsauswahl
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Bedarfsgerechte Auswahl systemischer Interventionsmethoden
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {mockInterventionOptions.map((intervention, index) => (
                  <motion.div
                    key={intervention.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-navy-700 rounded-lg"
                  >
                    <span className="text-sm">{intervention.name}</span>
                    <div className="flex items-center space-x-2">
                      <Progress 
                        value={intervention.effectiveness} 
                        className="w-16" 
                      />
                      <span className={`text-xs text-${getEffectivenessColor(intervention.effectiveness)}-400`}>
                        {intervention.effectiveness}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Timeline-Arbeit</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Genogramm</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Reframing</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Externalisierung</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Adaptive Response Formulation */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400 flex items-center">
                <Heart className="mr-2 h-5 w-5" />
                Adaptive Antwortformulierung
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Personalisierte Kommunikation mit emotionaler Intelligenz
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-navy-700 rounded-lg">
                <div className="text-sm font-medium text-cyan-400 mb-2">Empfohlene Antwort:</div>
                <div className="text-sm italic text-white leading-relaxed">"{mockResponseData.text}"</div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-center p-3 bg-navy-700 rounded-lg">
                  <div className="text-green-400 font-bold text-lg">{mockResponseData.tone}</div>
                  <div className="text-xs text-navy-300 mt-1">Tonalität</div>
                </div>
                <div className="text-center p-3 bg-navy-700 rounded-lg">
                  <div className="text-cyan-400 font-bold text-lg">{mockResponseData.orientation}</div>
                  <div className="text-xs text-navy-300 mt-1">Ausrichtung</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Empathische Sprache</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Kongruenz</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Learning Feedback Loop */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400 flex items-center">
                <RefreshCw className="mr-2 h-5 w-5" />
                Lernfeedback-Schleife
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Kontinuierliche Verbesserung durch Nutzerinteraktion
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {mockFeedbackMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-navy-700 rounded-lg"
                  >
                    <span className="text-sm">{metric.type}</span>
                    <span className={`text-${metric.color}-400 font-semibold`}>
                      {metric.count}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Rückkopplung</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Selbstoptimierung</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Relationship Design */}
        <motion.div variants={cardVariants}>
          <Card className="bg-navy-800 border-navy-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
            <CardHeader>
              <CardTitle className="text-lg text-cyan-400 flex items-center">
                <Users className="mr-2 h-5 w-5" />
                Beziehungsgestaltung
              </CardTitle>
              <p className="text-navy-500 text-sm">
                Aufbau und Pflege einer vertrauensvollen therapeutischen Allianz
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {mockRelationshipMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.aspect}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-sm">{metric.aspect}</span>
                    <div className="flex items-center space-x-2">
                      <Progress value={metric.percentage} className="w-20" />
                      <span className={`text-xs text-${metric.color}-400`}>
                        {metric.percentage}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Rapport</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Empathie</Badge>
                <Badge className="bg-cyan-600 hover:bg-cyan-500">Wertschätzung</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default OutputLayer;
