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
            barHeight={30}
            data={helpers.generateData(30, mocks.defaultChart, {
              prefix: "Day "
            })}
            labelStyles={{
                fontSize: '15px'
            }}
            iterationTimeout={600}
            showTitle={true}
            mainWrapperStyles={{
              backgroundColor: '#fff'
            }}
            chartWrapperStyles={{
              maxWidth: '1200px',
              padding: '40px 20px'
            }}
            onRunStart={() => {
              console.log("Started!");
            }}
            onRunEnd={() => {
              console.log("Ended!");
            }}
            startRunningTimeout={2000}
            iterationTitleStyles={{
                color: '#fff',
                fontSize: '20px',
                backgroundColor: '#999',
                borderRadius: '50em',
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '440px',
                padding: '10px 20px'
              }}
          />
      )
    }
  }
export default DynamicChart;