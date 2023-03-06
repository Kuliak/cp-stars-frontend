import React from 'react';

const WORST_CASE_DEFAULT_H_VALUE: number = 0;
const BEST_CASE_DEFAULT_H_VALUE: number = 120;

interface ColoredScalerProps {
  type: string;
  best: string | number;
  worst: string | number;
  value: string | number | undefined;
  bestColor?: number;
  worstColor?: number;
}

const convertToOrd = (value: number | string): number => {
  return typeof value === 'string' ? value.charCodeAt(0) : value;
};

const ColoredScaler = (props: ColoredScalerProps) => {
  const outputValue = props.value;

  const getColor = () => {
    if (!props.value) {
      return BEST_CASE_DEFAULT_H_VALUE;
    }

    let value = convertToOrd(props.value);
    let best = convertToOrd(props.best);
    let worst = convertToOrd(props.worst);
    let bestColor = props.bestColor !== undefined ? props.bestColor : BEST_CASE_DEFAULT_H_VALUE;
    let worstColor = props.worstColor !== undefined ? props.worstColor : WORST_CASE_DEFAULT_H_VALUE;

    const sign = props.worst > props.best ? 1 : -1;
    const levels = Math.abs(worst - best);

    let difference = sign * (worst - value);
    let color_change_value = ((bestColor - worstColor) * difference) / levels;
    let H = worstColor + color_change_value;

    return `${H},50%,50%`;
  };

  return (
    <div style={{ color: `hsl(${getColor()})` }}>
      <b>{outputValue}</b>
    </div>
  );
};

export default ColoredScaler;
