import React, { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  TimeScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Chart,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import zoomPlugin from 'chartjs-plugin-zoom';
import 'chartjs-chart-error-bars';
import { VictoryChart, VictoryZoomContainer, VictoryLine, VictoryErrorBar } from 'victory';
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
  // Chart.register(BarWithErrorBarsController, BarWithErrorBar, LinearScale, CategoryScale);

  const canvasRef = useRef(null);

  return (
    <>
      <VictoryChart containerComponent={<VictoryZoomContainer />}>
        <VictoryLine
          data={props.data.map((measurement) => {
            return { x: measurement.time, y: measurement.value };
          })}></VictoryLine>
        <VictoryErrorBar
          data={props.data.map((measurement) => {
            return { x: measurement.time, y: measurement.value, errorY: measurement.error };
          })}
        />
      </VictoryChart>
    </>
  );
};

export default LightCurve;
