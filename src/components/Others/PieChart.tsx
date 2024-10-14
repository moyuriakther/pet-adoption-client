import { ResponsivePie } from '@nivo/pie';
import { Card, CardContent, Typography } from '@mui/material';


interface PieChartProps {
  title: string;
  data: Array<{ id: string; label: string; value: number; color: string }>;
}
const PieChart = ( {title, data}: PieChartProps) => {

return(
  <Card className="shadow-lg">
  <CardContent>
    <Typography variant="h6" className="font-bold mb-4">
    {title}
    </Typography>
    <div style={{ height: '300px' }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 0, left: 80 }}
        innerRadius={0.5} 
        padAngle={0.7}
        cornerRadius={3}
        colors={({ data }) => data?.color} 
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#ffffff"
        tooltip={({ datum }) => (
          <div style={{ color: datum.color }}>
            {datum.label}: {datum.value} {datum.value > 1 ? 'pets' : 'pet'}
          </div>
        )}
      />
    </div>
  </CardContent>
</Card>
  )
};

export default PieChart;
