import React from 'react';
import {
  VictoryChart,
  VictoryLegend,
  VictoryLine,
  VictoryTooltip,
  VictoryZoomContainer,
} from 'victory';
import { LightCurveMeasurement } from '../../../libs/cpstars/openapi';

interface SpectrumProps {
  data: LightCurveMeasurement[];
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const LightCurve = (props: SpectrumProps) => {
  return (
    <>
      <VictoryChart containerComponent={<VictoryZoomContainer zoomDimension={'x'} />}>
        <VictoryLegend
          x={50}
          y={25}
          orientation="horizontal"
          gutter={20}
          data={[
            { name: 'Normalized SAP_FLUX', symbol: { fill: '#000000' } },
            { name: 'Normalized SAP_BKG', symbol: { fill: '#8B0000' } },
          ]}
          style={{ labels: { fontSize: 9 } }}
        />
        <VictoryLine
          domain={{ y: [0.8, 1.2] }}
          style={{
            data: {
              strokeWidth: 1.1,
            },
          }}
          labelComponent={<VictoryTooltip />}
          data={props.data.map((measurement) => {
            return {
              x: measurement.time,
              y: measurement.value,
              label: `Normalized SAP_FLUX: ${measurement.value}\n
                Normalized SAP_BKG: ${measurement.error}
                `,
            };
          })}
        />
        <VictoryLine
          domain={{ y: [0.8, 1.2] }}
          style={{
            data: {
              stroke: '#8B0000',
              strokeWidth: 0.5,
            },
          }}
          labelComponent={<VictoryTooltip></VictoryTooltip>}
          data={props.data.map((measurement) => {
            return {
              x: measurement.time,
              y:
                measurement.error && measurement.value
                  ? measurement.value + measurement.error
                  : measurement.value,
              label: `Normalized SAP_FLUX: ${measurement.value}\n
                Normalized SAP_BKG: ${measurement.error}
                `,
            };
          })}
        />
        <VictoryLine
          domain={{ y: [0.8, 1.2] }}
          style={{
            data: {
              stroke: '#8B0000',
              strokeWidth: 0.5,
            },
          }}
          labelComponent={<VictoryTooltip />}
          data={props.data.map((measurement) => {
            return {
              x: measurement.time,
              y:
                measurement.error && measurement.value
                  ? measurement.value - measurement.error
                  : measurement.value,
              label: `Normalized SAP_FLUX: ${measurement.value}\n
                Normalized SAP_BKG: ${measurement.error}
                `,
            };
          })}
        />
      </VictoryChart>
    </>
  );
};

export default LightCurve;
