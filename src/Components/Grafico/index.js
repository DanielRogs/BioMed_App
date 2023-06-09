import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryLegend, VictoryTheme, VictoryLine, VictoryLabel, VictoryAxis } from "victory-native";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 }
];

export default class App extends React.Component {
  render() {
    return (
      <View>
        <VictoryChart
          theme={VictoryTheme.grayscale}>
          <VictoryAxis
            // Estilize os ticks do eixo X
            tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}
            tickFormat={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"]}
            style={{
              ticks: { stroke: "white", size: 5 },
              tickLabels: { fontSize: 10, padding: 2, stroke: 'white' },
              axisLabel: { fontSize: 12, padding: 30 },
              axis: { stroke: "white", strokeWidth: 2 }
            }}
            axisLabelComponent={<VictoryLabel dy={20} />}
          />
          <VictoryAxis
            // Estilize os ticks do eixo Y
            dependentAxis
            tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
            tickFormat={["0","2", "4", "6", "8", "10", "12", "14", "16"]}
            style={{
              ticks: { stroke: "white", size: 5 },
              tickLabels: { fontSize: 10, padding: 5, stroke: 'white' },
              axisLabel: { fontSize: 12, padding: 30 },
              axis: { stroke: "white", strokeWidth: 2, size: 60 }
            }}
            axisLabelComponent={<VictoryLabel dy={-20} />}
          />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#00FFC2", strokeWidth: 2},
            }}
            data={[
              { x: 0, y: 4 },
              { x: 1, y: 2 },
              { x: 2, y: 4 },
              { x: 3, y: 12 },
              { x: 4, y: 5 },
              { x: 5, y: 7 },
              { x: 6, y: 6 },
              { x: 7, y: 11 },
              { x: 8, y: 10 },
              { x: 9, y: 9 },
              { x: 10, y: 9 },
              { x: 11, y: 7 },
              { x: 12, y: 8 },
              { x: 13, y: 12 },
              { x: 14, y: 14 },
            ]}
          />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#000000", strokeWidth: 2},
            }}
            data={[
              { x: 0, y: 15 },
              { x: 1, y: 10 },
              { x: 2, y: 8 },
              { x: 3, y: 6 },
              { x: 4, y: 5 },
              { x: 5, y: 10 },
              { x: 6, y: 9 },
              { x: 7, y: 5 },
              { x: 8, y: 8 },
              { x: 9, y: 12 },
              { x: 10, y: 10 },
              { x: 11, y: 7 },
              { x: 12, y: 6 },
              { x: 13, y: 8 },
              { x: 14, y: 4 },
            ]}
          />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#ffff00", strokeWidth: 2},
            }}
            data={[
              { x: 0, y: 8 },
              { x: 1, y: 9 },
              { x: 2, y: 15 },
              { x: 3, y: 14 },
              { x: 4, y: 12 },
              { x: 5, y: 2 },
              { x: 6, y: 2 },
              { x: 7, y: 3 },
              { x: 8, y: 5 },
              { x: 9, y: 5 },
              { x: 10, y: 7 },
              { x: 11, y: 10 },
              { x: 12, y: 11 },
              { x: 13, y: 7 },
              { x: 14, y: 12 },
            ]}
          />
          <VictoryLine
            interpolation="natural"
            style={{
              data: { stroke: "#ff0000", strokeWidth: 2},
            }}
            data={[
              { x: 0, y: 2 },
              { x: 1, y: 4 },
              { x: 2, y: 7 },
              { x: 3, y: 1 },
              { x: 4, y: 5 },
              { x: 5, y: 7 },
              { x: 6, y: 3 },
              { x: 7, y: 12 },
              { x: 8, y: 10 },
              { x: 9, y: 6 },
              { x: 10, y: 4 },
              { x: 11, y: 7 },
              { x: 12, y: 8 },
              { x: 13, y: 9 },
              { x: 14, y: 9 },
            ]}
          />
          <VictoryLegend
            x={20}
            y={280}
            orientation="horizontal"
            gutter={35}
            data={[
              { name: "Consultas", symbol: { fill: "#00FFC2" } },
              { name: "Quimioterapias", symbol: { fill: "#000000" } },
              { name: "Radioterapias", symbol: { fill: "#ffff00" } },
              { name: "Sangue", symbol: { fill: "#ff0000" } }
            ]}
            style={{
              labels: { fill: "white", fontSize: 9 }
            }}
          />
        </VictoryChart>
      </View>
    );
  }
}