import React from "react";
import { VictoryBar, VictoryChart } from "victory";



function Diagramview(props) {
    const allProjects = props.students.map(item => item.projects)
    console.log(allProjects)
    const data = [
        { quarter: "W1D1-1", earnings: 1, x: 4 },
        { quarter: "W1D1-2", earnings: 2, x: 6 },
        { quarter: "W1D1-3", earnings: 5, x: 3 },
        { quarter: "W1D1-4", earnings: 6, x: 6 },
        { quarter: "W1D1-5", earnings: 3, x: 1 }
    ];
    const data2 = [
        { quarter: "W1D1-1", earnings: 1, x: 4 },
        { quarter: "W1D1-2", earnings: 2, x: 6 },
        { quarter: "W1D1-3", earnings: 5, x: 3 },
        { quarter: "W1D1-4", earnings: 6, x: 6 },
        { quarter: "W1D1-5", earnings: 3, x: 1 }
    ];
    return (
        <VictoryChart>
            <VictoryBar
                data={data}
                // data accessor for x values
                x="quarter"
                // data accessor for y values
                y="earnings"
                data={data2}
                // data accessor for x values
                x="quarter"
                // data accessor for y values
                y="earnings"

            />
        </VictoryChart>
    )
}

export default Diagramview