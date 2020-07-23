/**
 * LineChart
 **/

// import React from 'react';
//
// class LineChartTicket extends React.Component {
//     constructor() {
//         super();
//     }
//
//     render() {
//         return (
//             <>
//                 <div className="w3-row">
//                     sdfjslfjsdljfldsjfld
//                 </div>
//             </>
//         )
//     }
// }
//
// export default LineChartTicket;

import React, { Component } from 'react';
import LineChart, { parseFlatArray } from 'react-linechart';
import '../../../node_modules/react-linechart/dist/styles.css';

class LineChartTicket extends React.Component {
    constructor() {
        super();
    }

    render() {
        const gsmData = [
            {
                "Year": 1880,
                "Glob": -19,
                "NHem": -33,
                "SHem": -5
            },
            {
                "Year": 1881,
                "Glob": -10,
                "NHem": -18,
                "SHem": -2
            },
            {
                "Year": 1882,
                "Glob": -15,
                "NHem": -12,
                "SHem": -4
            }
        ];
        const gsmFlat = parseFlatArray(gsmData, "Year", ["Glob", "NHem", "SHem"]);
        return (
                <div className="LineChartTicket">
                    <LineChart
                        width={600}
                        height={400}
                        showLegends
                        legendPosition="bottom-right"
                        data={gsmFlat}
                    />
                </div>
        );
    }
}

export default LineChartTicket;