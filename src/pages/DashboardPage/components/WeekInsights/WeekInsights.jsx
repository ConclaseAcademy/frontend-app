import { Link } from "react-router";
import { VictoryChart, VictoryLine } from "victory";
import "./WeekInsights.css";
import BalloonSrc from "../../assets/dashlightbulb.svg";

const series = [
  {
    name: "Canada",
    data: [
      3.9670002, 5.2650003, 6.201,
      7.8010006, 9.694, 11.214001,
      11.973001, 12.250001, 12.816001,
      13.413001, 13.626961, 14.30356,
      15.295461,
    ],
  },
];

export default function WeekInsights(){
    return <div className="weekinsights-container">
        <div className="weekinsights-header">
            <h3>This Week's Insight</h3>
            <Link 

              style={{
                textDecoration:'underline',
                fontWeight: "400",
                fontSize:"14px",
                color: "#0557FB"
                }}>
              View Details
            </Link>
        </div>
        <VictoryChart
        // theme={VictoryTheme.clean}
        // style={{height:'174px !important'}}
        // style={{hei}}
        height={201}
        // height={173}
        >
        <VictoryLine
            data={series[0].data.map(
            (d, i) => ({
                x: i + 2010,
                y: d,
            }),
            )}
        />
        </VictoryChart>
        <div className="weekinsights-info">
            <img src={BalloonSrc} />
            <p>You feel more calm on days with journaling</p>
        </div>
    </div>
}