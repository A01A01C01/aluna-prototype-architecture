import { 
  ProcessingModule, 
  EmotionalState, 
  SystemStatus, 
  QuestionGeneration,
  InterventionOption,
  RelationshipMetric,
  SystemMetrics,
  ContextData,
  PatternData,
  HistoryPhase,
  MLMetric,
  AnalysisEngine,
  ResponseData,
  FeedbackMetric
} from '@/types';

export const mockEmotionalStates: EmotionalState[] = [
  { emotion: 'Stress', intensity: 85, color: 'red' },
  { emotion: 'Angst', intensity: 62, color: 'orange' },
  { emotion: 'Hoffnung', intensity: 33, color: 'green' },
];

export const mockContextData: ContextData[] = [
  { context: 'Arbeitskontext', detected: true, status: 'active' },
  { context: 'Zeitlicher Druck', detected: true, status: 'active' },
  { context: 'Soziales Umfeld', detected: false, status: 'pending' },
];

export const mockPatternData: PatternData = {
  title: 'Stressmuster erkannt',
  description: 'Arbeitszeit → Überlastung → Emotionale Reaktion',
  type: 'Wiederkehrend'
};

export const mockHistoryPhases: HistoryPhase[] = [
  { phase: 'Sitzung 1-5: Vertrauensaufbau', sessions: '1-5', color: 'cyan' },
  { phase: 'Sitzung 6-10: Problemexploration', sessions: '6-10', color: 'green' },
  { phase: 'Aktuelle Phase: Intervention', sessions: 'Aktuell', color: 'yellow' },
];

export const mockMLMetrics: MLMetric[] = [
  { label: 'Trainingsdaten', value: 2847 },
  { label: 'Genauigkeit', value: '94.2%' },
];

export const mockAnalysisEngines: AnalysisEngine[] = [
  { component: 'Zirkuläre Kausalität', status: 'active', indicator: 'green' },
  { component: 'Autopoiesis-Simulation', status: 'active', indicator: 'green' },
  { component: 'Differenzberechnung', status: 'processing', indicator: 'yellow' },
  { component: 'Strukturelle Kopplung', status: 'ready', indicator: 'cyan' },
  { component: 'Beobachtung 2. Ordnung', status: 'active', indicator: 'green' },
];

export const mockQuestionGeneration: QuestionGeneration = {
  question: 'Was würde sich für Sie ändern, wenn der Stress bei der Arbeit weniger werden würde?',
  type: 'Zirkulär',
  relevance: 8.7,
  category: 'circular'
};

export const mockInterventionOptions: InterventionOption[] = [
  { name: 'Timeline-Arbeit', effectiveness: 92, description: 'Zeitbasierte Intervention', color: 'green' },
  { name: 'Genogramm', effectiveness: 67, description: 'Familienstruktur-Analyse', color: 'yellow' },
  { name: 'Reframing', effectiveness: 78, description: 'Perspektivenwechsel', color: 'cyan' },
  { name: 'Externalisierung', effectiveness: 54, description: 'Problem-Externalisierung', color: 'purple' },
];

export const mockResponseData: ResponseData = {
  text: 'Ich höre, dass die Arbeitssituation sehr belastend für Sie ist. Lassen Sie uns gemeinsam erkunden, welche Veränderungsmöglichkeiten es geben könnte.',
  tone: 'Empathisch',
  orientation: 'Lösungsorientiert'
};

export const mockFeedbackMetrics: FeedbackMetric[] = [
  { type: 'Positive Rückmeldungen', count: 847, color: 'green' },
  { type: 'Verbesserungsvorschläge', count: 23, color: 'yellow' },
  { type: 'Modell-Updates', count: 12, color: 'cyan' },
];

export const mockRelationshipMetrics: RelationshipMetric[] = [
  { aspect: 'Vertrauen', percentage: 87, color: 'green' },
  { aspect: 'Rapport', percentage: 79, color: 'cyan' },
  { aspect: 'Empathie', percentage: 91, color: 'purple' },
  { aspect: 'Wertschätzung', percentage: 94, color: 'yellow' },
];

export const mockSystemMetrics: SystemMetrics = {
  accuracy: 95,
  responseTime: '<200ms',
  scalability: '∞'
};

export const mockSystemStatus: SystemStatus[] = [
  { module: 'NLP Engine', status: 'active', indicator: 'green', lastUpdate: 'vor 2s', details: 'Aktiv' },
  { module: 'ML-Modell', status: 'training', indicator: 'green', lastUpdate: 'Fortschritt: 87%', details: 'Training' },
  { module: 'Dialogsystem', status: 'maintenance', indicator: 'yellow', lastUpdate: 'Nächste Prüfung: 15min', details: 'Wartung' },
  { module: 'Feedback-Loop', status: 'optimal', indicator: 'green', lastUpdate: 'vor 1s', details: 'Optimal' },
];

export const mockProcessingModules: ProcessingModule[] = [
  {
    id: 'nlp',
    name: 'Natürliche Sprachverarbeitung',
    description: 'Semantische und syntaktische Analyse menschlicher Kommunikation',
    status: 'active',
    tags: ['Tokenisierung', 'Wortartenanalyse', 'Entitätserkennung']
  },
  {
    id: 'emotion',
    name: 'Emotionale Signalverarbeitung',
    description: 'Kontextsensitive Erkennung und Interpretation emotionaler Zustände',
    status: 'processing',
    tags: ['Stimmungsanalyse', 'Gefühlserkennung', 'Empathie-Modul']
  },
  {
    id: 'context',
    name: 'Kontextextraktion',
    description: 'Erfassung von Beziehungsebene und systemischem Kommunikationskontext',
    status: 'active',
    tags: ['Beziehungsdynamik', 'Systemanalyse']
  },
  {
    id: 'pattern',
    name: 'Musteranalyse',
    description: 'Erkennung wiederkehrender Kommunikationsmuster und Verhaltensweisen',
    status: 'ready',
    tags: ['Sequenzanalyse', 'Zykluserkennung', 'Rekursion']
  },
  {
    id: 'history',
    name: 'Historienverarbeitung',
    description: 'Analyse des Gesprächsverlaufs und biografischer Informationen',
    status: 'active',
    tags: ['Verlaufsanalyse', 'Themenextraktion', 'Zeitlinien']
  }
];
