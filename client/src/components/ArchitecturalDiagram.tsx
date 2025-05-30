import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, Settings, ArrowLeft, Activity, ChevronDown, ChevronRight,
  MessageSquare, Mic, Brain, Cpu, Database, Network, 
  Speaker, FileText, Users, Zap, Search, Clock, Lightbulb, Target
} from 'lucide-react';

interface ComponentSection {
  id: string;
  title: string;
  icon?: React.ReactNode;
  components: {
    name: string;
    tags: string[];
    status: 'active' | 'processing' | 'ready';
  }[];
}

const ArchitecturalDiagram = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const inputLayerSections: ComponentSection[] = [
    {
      id: 'nlp',
      title: 'Natürliche Sprachverarbeitung',
      icon: <MessageSquare className="h-4 w-4 text-blue-400" />,
      components: [
        { name: 'Tokenisierung', tags: [], status: 'active' },
        { name: 'Wortartenanalyse', tags: [], status: 'active' },
        { name: 'Entitätserkennung', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'emotion',
      title: 'Emotionale Signalverarbeitung',
      icon: <Brain className="h-4 w-4 text-purple-400" />,
      components: [
        { name: 'Stimmungsanalyse', tags: [], status: 'active' },
        { name: 'Gefühlserkennung', tags: [], status: 'ready' },
        { name: 'Empathie-Modul', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'context',
      title: 'Kontextextraktion',
      icon: <Search className="h-4 w-4 text-green-400" />,
      components: [
        { name: 'Beziehungsdynamik', tags: [], status: 'active' },
        { name: 'Systemanalyse', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'pattern',
      title: 'Musteranalyse',
      icon: <Activity className="h-4 w-4 text-orange-400" />,
      components: [
        { name: 'Sequenzanalyse', tags: [], status: 'active' },
        { name: 'Zykluserkennung', tags: [], status: 'ready' },
        { name: 'Rekursion', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'history',
      title: 'Historienverarbeitung',
      icon: <Clock className="h-4 w-4 text-slate-400" />,
      components: [
        { name: 'Verlaufsanalyse', tags: [], status: 'active' },
        { name: 'Themenextraktion', tags: [], status: 'processing' },
        { name: 'Zeitlinien', tags: [], status: 'ready' }
      ]
    }
  ];

  const coreProcessingSections: ComponentSection[] = [
    {
      id: 'ml',
      title: 'Maschinelles Lernmodul',
      icon: <Cpu className="h-4 w-4 text-red-400" />,
      components: [
        { name: 'Mustererkennung', tags: [], status: 'active' },
        { name: 'Verstärkungslernen', tags: [], status: 'processing' },
        { name: 'Transferlernen', tags: [], status: 'active' },
        { name: 'Neuronale Netze', tags: [], status: 'ready' }
      ]
    },
    {
      id: 'analysis',
      title: 'Systemische Analyse-Engine',
      icon: <Network className="h-4 w-4 text-yellow-400" />,
      components: [
        { name: 'Zirkuläre Kausalität', tags: [], status: 'active' },
        { name: 'Autopoiesis-Simulation', tags: [], status: 'processing' },
        { name: 'Differenzberechnung', tags: [], status: 'ready' },
        { name: 'Strukturelle Kopplung', tags: [], status: 'active' },
        { name: 'Beobachtung 2. Ordnung', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'dialogue',
      title: 'Dialogsteuerung',
      icon: <Mic className="h-4 w-4 text-cyan-400" />,
      components: [
        { name: 'Phasenerkennung', tags: [], status: 'active' },
        { name: 'Adaptive Steuerung', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'knowledge',
      title: 'Wissensintegration',
      icon: <Database className="h-4 w-4 text-indigo-400" />,
      components: [
        { name: 'Theorieabgleich', tags: [], status: 'active' },
        { name: 'Praxistransfer', tags: [], status: 'ready' },
        { name: 'Kontextanpassung', tags: [], status: 'processing' }
      ]
    }
  ];

  const outputLayerSections: ComponentSection[] = [
    {
      id: 'questions',
      title: 'Fragengenerierung',
      icon: <Lightbulb className="h-4 w-4 text-emerald-400" />,
      components: [
        { name: 'Zirkuläre Fragen', tags: [], status: 'active' },
        { name: 'Hypothetische Fragen', tags: [], status: 'processing' },
        { name: 'Skalierungsfragen', tags: [], status: 'ready' },
        { name: 'Wunderfragen', tags: [], status: 'active' }
      ]
    },
    {
      id: 'interventions',
      title: 'Interventionsauswahl',
      icon: <Target className="h-4 w-4 text-amber-400" />,
      components: [
        { name: 'Timeline-Arbeit', tags: [], status: 'active' },
        { name: 'Genogramm', tags: [], status: 'ready' },
        { name: 'Reframing', tags: [], status: 'processing' },
        { name: 'Externalisierung', tags: [], status: 'active' }
      ]
    },
    {
      id: 'response',
      title: 'Adaptive Antwortformulierung',
      icon: <Speaker className="h-4 w-4 text-pink-400" />,
      components: [
        { name: 'Empathische Sprache', tags: [], status: 'active' },
        { name: 'Kongruenz', tags: [], status: 'processing' }
      ]
    },
    {
      id: 'feedback',
      title: 'Lernfeedback-Schleife',
      icon: <Zap className="h-4 w-4 text-teal-400" />,
      components: [
        { name: 'Rückkopplung', tags: [], status: 'active' },
        { name: 'Selbstoptimierung', tags: [], status: 'ready' }
      ]
    },
    {
      id: 'relationship',
      title: 'Beziehungsgestaltung',
      icon: <Users className="h-4 w-4 text-violet-400" />,
      components: [
        { name: 'Rapport', tags: [], status: 'active' },
        { name: 'Empathie', tags: [], status: 'processing' },
        { name: 'Wertschätzung', tags: [], status: 'ready' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'processing': return 'bg-yellow-500';
      case 'ready': return 'bg-cyan-500';
      default: return 'bg-gray-500';
    }
  };

  const renderColumn = (
    title: string, 
    icon: React.ReactNode, 
    sections: ComponentSection[], 
    bgColor: string = 'bg-navy-900'
  ) => (
    <div className="space-y-4">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          {icon}
          <h2 className="text-lg font-semibold text-cyan-400">{title}</h2>
        </div>
        <div className="w-16 h-0.5 bg-cyan-500 mx-auto"></div>
      </div>
      
      <div className="space-y-3">
        {sections.map((section) => (
          <Card key={section.id} className="bg-gradient-to-br from-navy-800 to-navy-750 border-navy-700 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <CardHeader 
              className="pb-2 cursor-pointer hover:bg-navy-700/30 transition-colors rounded-t-lg"
              onClick={() => toggleSection(section.id)}
            >
              <CardTitle className="text-sm text-cyan-400 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  {section.icon}
                  <span className="font-medium">{section.title}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="text-xs text-navy-400">{section.components.length}</div>
                  {expandedSections.includes(section.id) ? 
                    <ChevronDown className="h-4 w-4 text-cyan-400" /> : 
                    <ChevronRight className="h-4 w-4 text-navy-400" />
                  }
                </div>
              </CardTitle>
            </CardHeader>
            
            {expandedSections.includes(section.id) && (
              <CardContent className="pt-0">
                <div className="space-y-2">
                  {section.components.map((component, idx) => (
                    <div key={idx} className="flex items-center justify-between text-sm p-3 bg-navy-700/60 rounded-lg hover:bg-navy-650/60 transition-colors border border-navy-600/30">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 ${getStatusColor(component.status)} rounded-full`}></div>
                        <span className="text-white font-medium">{component.name}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        {component.tags && component.tags.length > 0 && (
                          <div className="flex space-x-1">
                            {component.tags.slice(0, 2).map((tag, tagIdx) => (
                              <span key={tagIdx} className="text-xs px-2 py-1 bg-navy-600/50 text-navy-300 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <span className="text-xs text-navy-400 capitalize">{component.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Input Layer */}
      {renderColumn(
        'Eingabeschicht', 
        <ArrowRight className="h-5 w-5 text-cyan-400" />, 
        inputLayerSections
      )}
      
      {/* Core Processing */}
      {renderColumn(
        'Kernverarbeitung', 
        <Settings className="h-5 w-5 text-cyan-400" />, 
        coreProcessingSections
      )}
      
      {/* Output Layer */}
      {renderColumn(
        'Ausgabeschicht', 
        <ArrowLeft className="h-5 w-5 text-cyan-400" />, 
        outputLayerSections
      )}
    </>
  );
};

export default ArchitecturalDiagram;