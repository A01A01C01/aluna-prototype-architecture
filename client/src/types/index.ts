export interface ProcessingModule {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'processing' | 'ready' | 'maintenance';
  accuracy?: number;
  tags: string[];
}

export interface EmotionalState {
  emotion: string;
  intensity: number;
  color: string;
}

export interface SystemStatus {
  module: string;
  status: 'active' | 'training' | 'maintenance' | 'optimal';
  indicator: 'green' | 'yellow' | 'red';
  lastUpdate: string;
  details?: string;
}

export interface QuestionGeneration {
  question: string;
  type: string;
  relevance: number;
  category: 'circular' | 'hypothetical' | 'scaling' | 'miracle';
}

export interface InterventionOption {
  name: string;
  effectiveness: number;
  description: string;
  color: string;
}

export interface RelationshipMetric {
  aspect: string;
  percentage: number;
  color: string;
}

export interface SystemMetrics {
  accuracy: number;
  responseTime: string;
  scalability: string;
}

export interface ContextData {
  context: string;
  detected: boolean;
  status: 'active' | 'pending' | 'waiting';
}

export interface PatternData {
  title: string;
  description: string;
  type: string;
}

export interface HistoryPhase {
  phase: string;
  sessions: string;
  color: string;
}

export interface MLMetric {
  label: string;
  value: number | string;
}

export interface AnalysisEngine {
  component: string;
  status: 'active' | 'processing' | 'ready';
  indicator: string;
}

export interface ResponseData {
  text: string;
  tone: string;
  orientation: string;
}

export interface FeedbackMetric {
  type: string;
  count: number;
  color: string;
}
