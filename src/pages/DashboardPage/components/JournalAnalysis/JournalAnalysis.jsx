import { VictoryBar, VictoryChart } from "victory";
import "./JournalAnalysis.css";

export default function JournalAnalysis(){
    return <div className="journalanalysis-container">
        <h4>Journal Analysis</h4>
        <h3>Overall: Positive</h3>
        <p>Last 30 Days</p>
        <VictoryChart
        domainPadding={{ x: 20 }}
        horizontal
        // height={137}
        height={200}
    
        // theme={VictoryTheme.clean}
        >
            <VictoryBar />
        </VictoryChart>
    </div>
}