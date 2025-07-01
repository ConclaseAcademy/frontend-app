import { VictoryLabel, VictoryPie } from "victory";

export default function WeeklyProgressCard(){
    return <svg viewBox="0 0 400 400">
  <VictoryPie
    standalone={false}
    width={400}
    height={400}
    data={[
      { x: "Cats", y: 30 },
      { x: "Dogs", y: 35 },
      { x: "Birds", y: 25 },
      { x: "Rabbits", y: 10 },
    ]}
    innerRadius={68}
    labelRadius={100}
    // theme={VictoryTheme.clean}
  />
  <VictoryLabel

    textAnchor="middle"
    style={{ fontSize: 20 }}
    x={200}
    y={200}
    text="Pets"
  />
</svg>
}