import StarBasicInfo from './StarBasicInfo';
import Magnitude from './Magnitude';
import Identifiers from './Identifiers';
import HRDiagramValues from './HRDiagramValues';
import ProperMotion from './ProperMotion';

interface Star extends StarBasicInfo {
  icrsRightAscensionError: number;
  icrsDeclinationError: number;
  magnitudes: Magnitude[];
  identifiers: Identifiers;
  hrDiagramValues: HRDiagramValues;
  properMotion: ProperMotion;
}

export default Star;
