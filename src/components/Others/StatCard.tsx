// components/StatCard.tsx
import { Card, CardContent, Typography } from '@mui/material';
import { ReactNode } from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  percentage: string;
  icon: ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, percentage, icon, color }) => {
  return (
    <Card className="shadow-lg" style={{ borderLeft: `4px solid ${color}` }}>
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <div
            className={`rounded-full p-2 bg-opacity-10`}
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <div>
            <Typography variant="subtitle1" className="font-semibold">
              {title}
            </Typography>
            <Typography variant="h5" className="font-bold text-center">
              {value}
            </Typography>
          </div>
        </div>
        {/* <div>
          <Typography variant="body2" className="text-gray-600">
            {percentage}
          </Typography>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default StatCard;
