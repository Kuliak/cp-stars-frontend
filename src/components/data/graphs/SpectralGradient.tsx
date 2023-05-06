import React from 'react';
import { nmToRGB, RGBToHSL } from '../../../services/ColorUtils';

interface SpectralGradientProps {
  lower: number;
  upper: number;
}

const SpectralGradient = (props: SpectralGradientProps) => {
  const prepareBackgroundStops = (lower: number, upper: number) => {
    // @ts-ignore
    const currentSpectrumInterval: number = Math.round((upper - lower) / 10);

    const numberOfStops: number = 11;
    const wavelengthStep: number = Math.round(currentSpectrumInterval / (numberOfStops - 1));
    const hslStops: number[][] = [];

    let showBlackLeft: boolean = false;
    let showBlackRight: boolean = false;

    // @ts-ignore
    let currentStop: number = Math.round(lower / 10);
    let stopIndex = 0;

    let offsetStart: number = 0;
    let offsetEnd: number = 100;

    let stops: string = '';
    while (stopIndex < numberOfStops) {
      if (currentStop <= 380) {
        currentStop = 380;
        offsetStart = 1;
        showBlackLeft = true;
      }

      if (currentStop >= 780) {
        currentStop = 780;
        offsetEnd = 99;
        showBlackRight = true;
      }

      let rgbValues: number[] = nmToRGB(currentStop);
      hslStops.push(RGBToHSL(rgbValues[0], rgbValues[1], rgbValues[2]));

      currentStop += wavelengthStep;
      stopIndex++;
    }

    if (showBlackLeft) {
      stops += 'black 0%, ';
    }

    const offsetStep = (offsetEnd - offsetStart) / (numberOfStops - 1);

    // push first official stop
    stops += `hsl(${hslStops[0][0]}, 100%, ${hslStops[0][2]}%) ${offsetStart}%, `;

    // push all stops in between
    stopIndex = 1;
    let currentOffset = offsetStart + offsetStep;
    while (stopIndex < numberOfStops - 1) {
      stops += `hsl(${hslStops[stopIndex][0]}, 100%, ${hslStops[stopIndex][2]}%) ${currentOffset}%, `;

      currentOffset += offsetStep;
      stopIndex++;
    }

    // push last official stop
    stops += `hsl(${hslStops[numberOfStops - 1][0]}, 100%, ${
      hslStops[numberOfStops - 1][2]
    }%) ${offsetEnd}%`;

    if (showBlackRight) {
      stops += ', black 100%';
    }

    return stops;
  };

  return (
    <div
      className="spectral-line"
      style={{
        margin: 'auto',
        background: `linear-gradient(to right, ${prepareBackgroundStops(
          props.lower,
          props.upper
        )})`,
      }}
    />
  );
};

export default SpectralGradient;
