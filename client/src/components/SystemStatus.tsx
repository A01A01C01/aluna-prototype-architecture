import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity } from 'lucide-react';
import { mockSystemStatus } from '@/lib/mockData';

const SystemStatus = () => {
  const [statusData, setStatusData] = useState(mockSystemStatus);

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setStatusData(prevStatus => 
        prevStatus.map(status => ({
          ...status,
          lastUpdate: status.module === 'NLP Engine' ? 'vor 2s' : 
                     status.module === 'Feedback-Loop' ? 'vor 1s' : status.lastUpdate
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getIndicatorColor = (indicator: string) => {
    switch (indicator) {
      case 'green':
        return 'bg-green-500';
      case 'yellow':
        return 'bg-yellow-500';
      case 'red':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'optimal':
        return 'bg-green-600';
      case 'training':
        return 'bg-blue-600';
      case 'maintenance':
        return 'bg-yellow-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="h-full"
    >
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center space-x-2">
          <Activity className="h-4 w-4 text-cyan-400" />
          <span className="text-sm font-medium text-cyan-400">System Status</span>
        </div>
        
        <div className="flex items-center space-x-4">
          {statusData.slice(0, 4).map((status, index) => (
            <div key={status.module} className="flex items-center space-x-2">
              <div className={`w-2 h-2 ${getIndicatorColor(status.indicator)} rounded-full ${
                status.indicator === 'green' ? 'animate-pulse' : ''
              }`}></div>
              <span className="text-xs text-white">{status.module}</span>
              <Badge className={`${getStatusBadgeColor(status.status)} text-white text-xs`}>
                {status.details}
              </Badge>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-green-400 text-xs font-medium">
            System aktiv
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemStatus;
