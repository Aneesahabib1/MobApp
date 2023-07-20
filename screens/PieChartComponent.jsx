import React from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const data = [
  {
    name: 'Completed',
    value: 45,
    color: '#1f77b4',
  },
  {
    name: 'In Progress',
    value: 30,
    color: '#ff7f0e',
  },
  {
    name: 'On Hold',
    value: 15,
    color: '#2ca02c',
  },
  {
    name: 'Overdue',
    value: 10,
    color: '#d62728',
  },
];

const chartConfig = {
  backgroundColor: '#f4f5ff',
  backgroundGradientFrom: '#f4f5ff',
  backgroundGradientTo: '#f4f5ff',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
};

const PieChartComponent = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10,   Color:'white' }}>
        Task Status
      </Text>
      <PieChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        accessor="value"
        backgroundColor="transparent"
        paddingLeft="15"
        center={[10, 10]}
        absolute
      />
    </View>
  );
};

export default PieChartComponent;
