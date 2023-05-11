import React, { useState } from 'react';
import {
  createContainer,
  VictoryAxis,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTooltip,
  VictoryZoomContainer,
} from 'victory';
import { SpectrumMeasurement } from '../../../libs/cpstars/openapi';
import { useTranslation } from 'react-i18next';
import SpectralGradient from './SpectralGradient';

interface SpectrumProps {
  data: SpectrumMeasurement[];
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

const Spectrum = (props: SpectrumProps) => {
  const { t } = useTranslation();

  const [lowerBound, setLowerBound] = useState<number>(3800);
  const [upperBound, setUpperBound] = useState<number>(7800);

  const setBounds = (lower: number, upper: number) => {
    setLowerBound(lower);
    setUpperBound(upper);
  };

  const VictoryZoomVoronoiContainer = createContainer('zoom', 'voronoi');

  return (
    <>
      <SpectralGradient
        lower={lowerBound}
        upper={upperBound}
      />
      <div
        className="graph"
        style={{ margin: 'auto' }}>
        <VictoryChart
          containerComponent={
            <VictoryZoomVoronoiContainer
              // @ts-ignore
              zoomDimension={'x'}
              // @ts-ignore
              onZoomDomainChange={(domain, zoomProps) => {
                setBounds(domain.x[0] as number, domain.x[1] as number);
              }}
              // @ts-ignore
              labels={({ datum }) => `${datum.y}`}
            />
          }>
          <VictoryAxis
            label={t('star_details.spectrum.flux')}
            axisLabelComponent={<VictoryLabel dy={-12} />}
            dependentAxis // Use dependentAxis to set the y-axis to be vertical.
          />
          <VictoryAxis
            label={t('star_details.spectrum.wavelength')}
            axisLabelComponent={<VictoryLabel dy={5} />}
            offsetX={50} // Adjust this value to change the x-axis position horizontally.
            offsetY={50}
          />
          <VictoryLine
            domain={{ x: [3800, 7800], y: [-0.4, 1.0] }}
            style={{
              data: {
                strokeWidth: 1.1,
              },
            }}
            labelComponent={<VictoryTooltip />}
            data={props.data.map((measurement) => {
              return {
                x: measurement.wavelength,
                y: measurement.flux,
              };
            })}
          />
        </VictoryChart>
      </div>
    </>
  );
};

export default Spectrum;
