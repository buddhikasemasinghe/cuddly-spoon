import React, { Component } from 'react';

import { DynamicBarChart } from 'react-dynamic-charts';
import 'react-dynamic-charts/dist/index.css'; // Don't forget to import the styles

import helpers from "./helpers";
import mocks from "./mocks";

class DynamicChart extends Component {
    render () {
      return (
        <DynamicBarChart
            barGapSize={10}
            data={helpers.generateData(30, mocks.defaultChart, {
              prefix: "Day "
            })}
            iterationTimeout={600}
            showTitle={true}
            mainWrapperStyles={{
              backgroundColor: '#fff'
            }}
            chartWrapperStyles={{
              maxWidth: '1200px'
            }}
            onRunStart={() => {
              console.log("Started!");
            }}
            onRunEnd={() => {
              console.log("Ended!");
            }}
            startRunningTimeout={2000}
          />
      )
    }
  }
export default DynamicChart;