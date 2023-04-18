import React from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-svg-charts';

export default function Grafico() {
  // Dados do gráfico
  const data = [
    { value: 20 },
    { value: 45 },
    { value: 28 },
    { value: 80 },
    { value: 99 }
  ];
  
  return (
    <View>
      <LineChart
        style={{ height: 220 }}
        data={data}
        svg={{ stroke: 'black' }} // cor das linhas do gráfico
        contentInset={{ top: 20, bottom: 20 }} // espaçamento do gráfico em relação às bordas
      />
    </View>
  );
};