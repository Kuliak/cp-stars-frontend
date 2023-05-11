import React from 'react';
import { createContainer, VictoryAxis, VictoryChart, VictoryLabel, VictoryLine } from 'victory';
import { LightCurveMeasurement } from '../../../libs/cpstars/openapi';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');

  // @ts-ignore
  return (
    <div
      className="graph"
      style={{ margin: 'auto' }}>
      <VictoryChart
        containerComponent={
          <VictoryZoomVoronoiContainer
            // @ts-ignore
            constraintToVisibleArea
            // @ts-ignore
            style={{
              data: { stroke: '#c43a31', strokeWidth: 2 },
              labels: { fontSize: 50 },
            }}
            // @ts-ignore
            zoomDimension={'x'}
            // @ts-ignore
            labels={({ datum }) => `${datum.y}`}
          />
        }>
        <VictoryAxis
          label={t('star_details.light_curve.flux')}
          axisLabelComponent={<VictoryLabel dy={-13} />}
          dependentAxis // Use dependentAxis to set the y-axis to be vertical.
        />
        <VictoryAxis
          label={t('star_details.light_curve.time')}
          axisLabelComponent={<VictoryLabel dy={5} />}
          offsetX={50} // Adjust this value to change the x-axis position horizontally.
          offsetY={50}
        />
        <VictoryLine
          style={{
            data: {
              strokeWidth: 1.1,
            },
          }}
          data={props.data.map((measurement) => {
            return {
              x: measurement.time,
              y: measurement.value,
            };
          })}
        />
      </VictoryChart>
    </div>
  );
};

export default LightCurve;
