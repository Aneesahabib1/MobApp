import React from 'react';
import { View, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';

const BarChartComponent = () => {
  const data = {
    labels: ['Present', 'Leave', 'Sick Leave', 'On-Duty'],
    datasets: [
      {
        data: [15, 5, 8, 12],
        colors: [
          (opacity = 1) => `rgba(75, 192, 192, ${opacity})`, 
          (opacity = 1) => `rgba(255, 99, 132, ${opacity})`, 
          (opacity = 1) => `rgba(255, 205, 86, ${opacity})`, 
          (opacity = 1) => `rgba(54, 162, 235, ${opacity})`, 
        ],
      },
    ],
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>
        Attendance Status
      </Text>
      <BarChart
        data={data}
        width={300}
        height={220}
        yAxisLabel="Count"
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        style={{ marginVertical: 8, borderRadius: 16 }}
        fromZero={true} 
        showBarTops
        showValuesOnTopOfBars
        segments={4}
      />
    </View>
  );
};

export default BarChartComponent;
