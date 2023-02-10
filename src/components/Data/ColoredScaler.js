const WORST_CASE_DEFAULT_H_VALUE = 0;
const BEST_CASE_DEFAULT_H_VALUE = 120;

const ColoredScaler = ({ type, best, worst, value, bestColorH, worstColorH }) => {
  const outputValue = value;

  const prepareParamaters = () => {
    if (!value) {
      return false;
    }

    switch (type) {
      case 'char': {
        value = value.charCodeAt(0);
        best = best.charCodeAt(0);
        worst = worst.charCodeAt(0);
        break;
      }
      case 'num':
      default: {
        break;
      }
    }

    bestColorH = bestColorH !== undefined ? bestColorH : BEST_CASE_DEFAULT_H_VALUE;
    worstColorH = worstColorH !== undefined ? worstColorH : WORST_CASE_DEFAULT_H_VALUE;

    return true;
  };

  const getColor = () => {
    if (!prepareParamaters()) {
      return BEST_CASE_DEFAULT_H_VALUE;
    }

    const sign = worst > best ? 1 : -1;
    const levels = Math.abs(worst - best);

    let difference = sign * (worst - value);
    let color_change_value = ((bestColorH - worstColorH) * difference) / levels;
    let H = worstColorH + color_change_value;

    return `${H},50%,50%`;
  };

  return (
    <div style={{ color: `hsl(${getColor()})` }}>
      <b>{outputValue}</b>
    </div>
  );
};

export default ColoredScaler;
