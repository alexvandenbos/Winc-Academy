import React from "react";
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryGroup, VictoryLabel } from "victory";



function Diagramview(props) {
    //alle projecten
    const allUserProjects = props.students.map(item => item.projects)

    //haalt alle projectkeys op
    const allProjectkeys = allUserProjects.map(userProjects => Object.keys(userProjects))

    //checkt op unieke projectskeys d.m.v set
    let allProjectsKeysSet = new Set()
    allProjectkeys.map(keys => keys.forEach(allProjectsKeysSet.add, allProjectsKeysSet))

    let array = Array.from(allProjectsKeysSet)

    //haalt alle projecten op n.a.v. de uniek projectkeys
    // als allprojectsKeysSet een key heeft die overenkomt met die in allUserProjects log array

    let allProjectsPerProjectID = []
    array.forEach(projectID => props.students.forEach(student => allProjectsPerProjectID.push([projectID, student.projects[projectID]])))
    const allLikeGrades = allProjectsPerProjectID.filter(project => project[1] != null).map(project => [project[0], project[1][0]])
    const allDifficcultyGrades = allProjectsPerProjectID.filter(project => project[1] != null).map(project => [project[0], project[1][1]])

    let averageLikeGradePerProject = []
    array.forEach(projectID => {
        let array = allLikeGrades.filter(grade => grade[0] === projectID).map(grade => grade[1])
        let sum = array.reduce((previous, current) => current += previous)
        let average = sum / array.length
        averageLikeGradePerProject.push({ project: projectID, leuk: average })
    })

    let averageDifficcultyGradePerProject = []
    array.forEach(projectID => {
        let array = allDifficcultyGrades.filter(grade => grade[0] === projectID).map(grade => grade[1])
        let sum = array.reduce((previous, current) => current += previous)
        let average = sum / array.length
        averageDifficcultyGradePerProject.push({ project: projectID, moeilijk: average })
    })


    return (
        <div className="chart">
            <VictoryChart
                domainPadding={20}
                theme={VictoryTheme.material}
            >
                <VictoryAxis
                    style={{
                        tickLabels: { fontSize: 5, padding: 5 }
                    }}
                />

                <VictoryAxis
                    dependentAxis
                    style={{ tickLabels: { fontSize: 5 } }}
                />
                <VictoryGroup
                    offset={10}
                    // style={{ data: { width: 6 } }}
                    colorScale={["tomato", "gold"]}
                >
                    <VictoryBar
                        data={averageLikeGradePerProject}
                        // data accessor for moeilijk values
                        x="project"
                        // data accessor for y values
                        y="leuk"
                    />

                    <VictoryBar
                        data={averageDifficcultyGradePerProject}
                        // data accessor for moeilijk values
                        x="project"
                        // data accessor for y values
                        y="moeilijk"
                    />
                </VictoryGroup>
            </VictoryChart>
        </div>
    )

}

export default Diagramview